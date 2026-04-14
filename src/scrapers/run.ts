import fs from "node:fs";
import path from "node:path";
import { allowedSlugs, scrapers } from "./scrapers";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const MAX_RETRIES = 2; // total attempts = 1 + MAX_RETRIES
const RETRY_DELAY_MS = 5_000;
const STALE_THRESHOLD_HOURS = 168; // 7 days
const DATA_DIR = path.resolve(process.cwd(), "data", "folders");

// Base repo is the canonical fallback source for shared retailers
const BASE_REPO_NAME = "Superpromobelgiebram";
const SHARED_SLUGS = new Set([
	"albert-heijn",
	"lidl",
	"delhaize",
	"colruyt",
	"aldi",
	"action",
]);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Status =
	| "fresh"
	| "retry_success"
	| "fallback_local"
	| "fallback_repo"
	| "stale"
	| "missing";

interface ScraperResult {
	slug: string;
	name: string;
	status: Status;
	attempts: number;
	error?: string;
	dataAge?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sleep(ms: number): Promise<void> {
	return new Promise((r) => setTimeout(r, ms));
}

function listAllowed(): string {
	return Array.from(allowedSlugs).sort().join(", ");
}

function listImplemented(): string {
	return scrapers
		.map((s) => s.retailerSlug)
		.sort()
		.join(", ");
}

function getDataFilePath(slug: string): string {
	return path.join(DATA_DIR, `${slug}.json`);
}

function checkLocalData(slug: string): {
	valid: boolean;
	ageHours: number | null;
} {
	const filePath = getDataFilePath(slug);
	if (!fs.existsSync(filePath)) return { valid: false, ageHours: null };

	try {
		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		if (!Array.isArray(data.folders)) return { valid: false, ageHours: null };

		const scrapedAt = data.scrapedAt ? new Date(data.scrapedAt) : null;
		const ageHours = scrapedAt
			? (Date.now() - scrapedAt.getTime()) / 3_600_000
			: null;

		return { valid: true, ageHours };
	} catch {
		return { valid: false, ageHours: null };
	}
}

function tryFallbackFromBaseRepo(slug: string): boolean {
	if (!SHARED_SLUGS.has(slug)) return false;

	// Don't fall back to ourselves
	if (path.basename(process.cwd()) === BASE_REPO_NAME) return false;

	const baseDataDir = path.resolve(
		process.cwd(),
		"..",
		BASE_REPO_NAME,
		"data",
		"folders",
	);
	const sourceFile = path.join(baseDataDir, `${slug}.json`);
	if (!fs.existsSync(sourceFile)) return false;

	try {
		const raw = fs.readFileSync(sourceFile, "utf-8");
		const data = JSON.parse(raw);
		if (!Array.isArray(data.folders) || data.folders.length === 0) return false;

		if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
		fs.writeFileSync(getDataFilePath(slug), raw, "utf-8");
		return true;
	} catch {
		return false;
	}
}

function formatAge(hours: number | null): string {
	if (hours === null) return "unknown age";
	if (hours < 1) return `${Math.round(hours * 60)}m`;
	if (hours < 24) return `${Math.round(hours)}h`;
	return `${Math.round(hours / 24)}d`;
}

function checkFolderExpiry(slug: string): {
	expired: boolean;
	latestValidUntil: string | null;
} {
	const filePath = getDataFilePath(slug);
	if (!fs.existsSync(filePath))
		return { expired: false, latestValidUntil: null };

	try {
		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		if (!Array.isArray(data.folders) || data.folders.length === 0)
			return { expired: false, latestValidUntil: null };

		const latest = data.folders[0];
		const vu = latest.validUntil;
		if (!vu) return { expired: false, latestValidUntil: null };

		const until = new Date(vu + "T23:59:59");
		return { expired: until < new Date(), latestValidUntil: vu };
	} catch {
		return { expired: false, latestValidUntil: null };
	}
}

function stripOfflineEmbeds(slug: string): void {
	const filePath = getDataFilePath(slug);
	if (!fs.existsSync(filePath)) return;

	try {
		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		if (!Array.isArray(data.folders)) return;

		let modified = false;
		const now = new Date();

		for (const folder of data.folders) {
			if (!folder.validUntil) continue;
			try {
				const until = new Date(folder.validUntil + "T23:59:59");
				if (until >= now) continue;
			} catch {
				continue;
			}

			if (
				folder.embedUrl &&
				/publitas\.com|folderz\.be/i.test(folder.embedUrl)
			) {
				console.log(
					`  [${slug}] Stripping offline embed from expired folder: ${folder.embedUrl}`,
				);
				folder.embedUrl = "";
				modified = true;
			}
			if (folder.pdfUrl && /publitas\.com|folderz\.be/i.test(folder.pdfUrl)) {
				console.log(
					`  [${slug}] Stripping offline PDF from expired folder: ${folder.pdfUrl}`,
				);
				folder.pdfUrl = "";
				modified = true;
			}
		}

		if (modified) {
			fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		}
	} catch {
		// ignore
	}
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
	const target = process.argv[2];

	if (!target && scrapers.length === 0) {
		console.log(
			"No scrapers implemented for the current vertical retailer list yet.",
		);
		console.log(`Allowed retailers: ${listAllowed()}`);
		process.exit(0);
	}

	if (target && !allowedSlugs.has(target)) {
		console.error(`Unknown retailer for this vertical: ${target}`);
		console.log(`Allowed retailers: ${listAllowed()}`);
		process.exit(1);
	}

	const toRun = target
		? scrapers.filter((s) => s.retailerSlug === target)
		: scrapers;

	if (toRun.length === 0) {
		console.error(`No scraper implemented for retailer: ${target}`);
		console.log(`Implemented scrapers: ${listImplemented()}`);
		process.exit(1);
	}

	console.log(
		`Running ${toRun.length} scraper(s) (max ${MAX_RETRIES + 1} attempts each)...\n`,
	);

	const results: ScraperResult[] = [];

	for (const scraper of toRun) {
		const slug = scraper.retailerSlug;
		const name = scraper.retailerName;
		let lastError: string | undefined;
		let succeeded = false;
		let attempts = 0;

		const expiry = checkFolderExpiry(slug);
		const maxRetries = expiry.expired ? MAX_RETRIES + 1 : MAX_RETRIES;
		if (expiry.expired) {
			console.log(
				`  [${slug}] \u26a0 Folder expired (validUntil: ${expiry.latestValidUntil}) \u2014 using extra retries`,
			);
		}

		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			attempts = attempt + 1;

			if (attempt > 0) {
				console.log(
					`  [${slug}] Retry ${attempt}/${MAX_RETRIES} after ${RETRY_DELAY_MS / 1000}s...`,
				);
				await sleep(RETRY_DELAY_MS);
			}

			try {
				await scraper.run();
				succeeded = true;
				break;
			} catch (error) {
				lastError = error instanceof Error ? error.message : String(error);
				console.error(`  [${slug}] Attempt ${attempts} failed: ${lastError}`);
			}
		}

		if (succeeded) {
			stripOfflineEmbeds(slug);

			results.push({
				slug,
				name,
				status: attempts > 1 ? "retry_success" : "fresh",
				attempts,
			});
			console.log("");
			continue;
		}

		// All retries exhausted — try fallbacks
		console.log(
			`  [${slug}] All ${attempts} attempts failed. Checking fallbacks...`,
		);

		stripOfflineEmbeds(slug);

		// Fallback 1: existing local data
		const local = checkLocalData(slug);
		if (local.valid) {
			const isStale =
				local.ageHours !== null && local.ageHours > STALE_THRESHOLD_HOURS;
			results.push({
				slug,
				name,
				status: isStale ? "stale" : "fallback_local",
				attempts,
				error: lastError,
				dataAge: formatAge(local.ageHours),
			});
			console.log(
				`  [${slug}] Using existing local data (age: ${formatAge(local.ageHours)})${isStale ? " ⚠ STALE" : ""}`,
			);
			console.log("");
			continue;
		}

		// Fallback 2: copy from base SuperPromo repo (shared retailers only)
		if (tryFallbackFromBaseRepo(slug)) {
			const copied = checkLocalData(slug);
			results.push({
				slug,
				name,
				status: "fallback_repo",
				attempts,
				error: lastError,
				dataAge: formatAge(copied.ageHours),
			});
			console.log(
				`  [${slug}] Copied fallback from ${BASE_REPO_NAME} (age: ${formatAge(copied.ageHours)})`,
			);
			console.log("");
			continue;
		}

		// No data at all
		results.push({
			slug,
			name,
			status: "missing",
			attempts,
			error: lastError,
		});
		console.error(`  [${slug}] ✗ NO DATA AVAILABLE — all fallbacks exhausted`);
		console.log("");
	}

	// --- Summary ---
	printSummary(results);
}

function printSummary(results: ScraperResult[]) {
	const icons: Record<Status, string> = {
		fresh: "✓",
		retry_success: "✓ (retry)",
		fallback_local: "⟲ local",
		fallback_repo: "⟲ repo",
		stale: "⚠ stale",
		missing: "✗ MISSING",
	};

	console.log("=== Scrape Summary ===");
	for (const r of results) {
		const age = r.dataAge ? ` [${r.dataAge} old]` : "";
		const err = r.error ? ` — ${r.error}` : "";
		console.log(`  ${icons[r.status]} ${r.name}${age}${err}`);
	}

	const fresh = results.filter(
		(r) => r.status === "fresh" || r.status === "retry_success",
	);
	const fallbacks = results.filter(
		(r) => r.status === "fallback_local" || r.status === "fallback_repo",
	);
	const stale = results.filter((r) => r.status === "stale");
	const missing = results.filter((r) => r.status === "missing");

	console.log("");
	console.log(
		`  Fresh: ${fresh.length} | Fallback: ${fallbacks.length} | Stale: ${stale.length} | Missing: ${missing.length}`,
	);

	if (missing.length > 0) {
		console.error(`\n${missing.length} retailer(s) have NO data at all!`);
		process.exit(1);
	}

	if (stale.length > 0) {
		console.warn(
			`\n⚠ ${stale.length} retailer(s) have stale data (>${STALE_THRESHOLD_HOURS}h). Consider investigating.`,
		);
	}
}

main();
