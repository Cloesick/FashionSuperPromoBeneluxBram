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

export const allowedSlugs = new Set(
	[...retailers, ...nlBorderRetailers].map((r) => r.slug),
);

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

export const scrapers: BaseScraper[] = allScrapers.filter((s) =>
	allowedSlugs.has(s.retailerSlug),
);
