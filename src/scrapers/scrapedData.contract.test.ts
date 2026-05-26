import { describe, expect, it } from "vitest";
import type { ScrapedData } from "../lib/types";

function validateScrapedDataContract(data: ScrapedData) {
	expect(typeof data.retailer).toBe("string");
	expect(Array.isArray(data.folders)).toBe(true);
	expect(Array.isArray(data.deals)).toBe(true);
	expect(typeof data.scrapedAt).toBe("string");

	for (const folder of data.folders) {
		expect(folder.retailerSlug).toBe(data.retailer);
		expect(typeof folder.title).toBe("string");
		expect(typeof folder.contentSource).toBe("string");
		expect(Array.isArray(folder.pages)).toBe(true);
		expect(folder.pageCount).toBe(folder.pages.length);

		if (folder.pages.length > 0) {
			expect(folder.thumbnailUrl).toBeTruthy();
			for (let i = 0; i < folder.pages.length; i++) {
				expect(folder.pages[i].pageNumber).toBe(i + 1);
				expect(typeof folder.pages[i].imageUrl).toBe("string");
				expect(folder.pages[i].imageUrl.length).toBeGreaterThan(0);
			}
		}
	}
}

describe("scraper output contract", () => {
	it("enforces invariants for screenshot-rendered folder", () => {
		const data: ScrapedData = {
			retailer: "test",
			folders: [
				{
					id: "test-2026-w14-folder",
					retailerSlug: "test",
					title: "Test folder",
					validFrom: "2026-03-30",
					validUntil: "2026-04-05",
					pageCount: 2,
					thumbnailUrl: "/screenshots/p1.webp",
					pages: [
						{ pageNumber: 1, imageUrl: "/screenshots/p1.webp", deals: [] },
						{ pageNumber: 2, imageUrl: "/screenshots/p2.webp", deals: [] },
					],
					contentSource: "screenshot",
					scrapedAt: new Date().toISOString(),
				},
			],
			deals: [],
			scrapedAt: new Date().toISOString(),
			sourceUrls: ["https://example.com"],
			methods: ["screenshot"],
		};

		validateScrapedDataContract(data);
	});
});
