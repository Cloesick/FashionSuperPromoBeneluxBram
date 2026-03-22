import { AlbertHeijnScraper } from "./albert-heijn";
import { LidlScraper } from "./lidl";
import { DelhaizeScraper } from "./delhaize";
import { ColruytScraper } from "./colruyt";
import { AldiScraper } from "./aldi";
import { ActionScraper } from "./action";
import { HmScraper } from "./hm";
import { ZalandoScraper } from "./zalando";
import { BaseScraper } from "./base";
import { nlBorderRetailers, retailers } from "../lib/retailers";

const allScrapers: BaseScraper[] = [
	new AlbertHeijnScraper(),
	new LidlScraper(),
	new DelhaizeScraper(),
	new ColruytScraper(),
	new AldiScraper(),
	new ActionScraper(),
	new HmScraper(),
	new ZalandoScraper(),
];

const allowedSlugs = new Set(
	[...retailers, ...nlBorderRetailers].map((r) => r.slug),
);

const scrapers: BaseScraper[] = allScrapers.filter((s) =>
	allowedSlugs.has(s.retailerSlug),
);

function listAllowed() {
	return Array.from(allowedSlugs).sort().join(", ");
}

function listImplemented() {
	return scrapers
		.map((s) => s.retailerSlug)
		.sort()
		.join(", ");
}

async function main() {
	const target = process.argv[2];

	if (!target && scrapers.length === 0) {
		console.log(
			"No scrapers are implemented for the current vertical retailer list yet.",
		);
		console.log(
			`Allowed retailers (from src/lib/retailers.ts): ${listAllowed()}`,
		);
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

	console.log(`Running ${toRun.length} scraper(s)...\n`);

	const results: { name: string; success: boolean; error?: string }[] = [];

	for (const scraper of toRun) {
		try {
			await scraper.run();
			results.push({ name: scraper.retailerName, success: true });
		} catch (error) {
			results.push({
				name: scraper.retailerName,
				success: false,
				error: error instanceof Error ? error.message : String(error),
			});
		}
		console.log("");
	}

	console.log("=== Scrape Summary ===");
	for (const r of results) {
		const status = r.success ? "✓" : "✗";
		const detail = r.error ? ` (${r.error})` : "";
		console.log(`  ${status} ${r.name}${detail}`);
	}

	const failures = results.filter((r) => !r.success);
	if (failures.length > 0) {
		process.exit(1);
	}
}

main();
