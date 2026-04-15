import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

export const MAX_RETRIES = 2; // total attempts = 1 + MAX_RETRIES
export const RETRY_DELAY_MS = 5_000;
export const STALE_THRESHOLD_HOURS = 168; // 7 days

// Base repo is the canonical fallback source for shared retailers
export const BASE_REPO_NAME = "Superpromobelgiebram";
export const SHARED_SLUGS = new Set([
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

export type Status =
	| "fresh"
	| "retry_success"
	| "fallback_local"
	| "fallback_repo"
	| "stale"
	| "missing";

export interface ScraperResult {
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

export function sleep(ms: number): Promise<void> {
	return new Promise((r) => setTimeout(r, ms));
}

export function getDataFilePath(dataDir: string, slug: string): string {
	return path.join(dataDir, `${slug}.json`);
}

export function checkLocalData(
	dataDir: string,
	slug: string,
): {
	valid: boolean;
	ageHours: number | null;
} {
	const filePath = getDataFilePath(dataDir, slug);
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

export function tryFallbackFromBaseRepo(
	dataDir: string,
	slug: string,
): boolean {
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

		if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
		fs.writeFileSync(getDataFilePath(dataDir, slug), raw, "utf-8");
		return true;
	} catch {
		return false;
	}
}

export function formatAge(hours: number | null): string {
	if (hours === null) return "unknown age";
	if (hours < 1) return `${Math.round(hours * 60)}m`;
	if (hours < 24) return `${Math.round(hours)}h`;
	return `${Math.round(hours / 24)}d`;
}

export function checkFolderExpiry(
	dataDir: string,
	slug: string,
): {
	expired: boolean;
	latestValidUntil: string | null;
} {
	const filePath = getDataFilePath(dataDir, slug);
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

export function stripOfflineEmbeds(dataDir: string, slug: string): boolean {
	const filePath = getDataFilePath(dataDir, slug);
	if (!fs.existsSync(filePath)) return false;

	try {
		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		if (!Array.isArray(data.folders)) return false;

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
				folder.embedUrl = "";
				modified = true;
			}
			if (folder.pdfUrl && /publitas\.com|folderz\.be/i.test(folder.pdfUrl)) {
				folder.pdfUrl = "";
				modified = true;
			}
		}

		if (modified) {
			fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		}

		return modified;
	} catch {
		return false;
	}
}
