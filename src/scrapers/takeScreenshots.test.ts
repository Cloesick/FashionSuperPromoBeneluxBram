import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BaseScraper, type ScrapeContext } from "./base";

class TestScraper extends BaseScraper {
	config = {
		slug: "test",
		name: "Test",
		folderUrls: ["https://example.com"],
	};

	public async takeScreenshotsPublic(ctx: ScrapeContext) {
		return this.takeScreenshots(ctx);
	}
}

describe("BaseScraper.takeScreenshots", () => {
	const realDateNow = Date.now;

	beforeEach(() => {
		vi.spyOn(Date, "now").mockReturnValue(
			new Date("2026-04-04T12:00:00.000Z").valueOf(),
		);
	});

	afterEach(() => {
		Date.now = realDateNow;
		vi.restoreAllMocks();
	});

	function makeCtx(page: any): ScrapeContext {
		return {
			page,
			browser: {} as any,
			interceptedUrls: {
				pdfs: [],
				publitas: [],
				ipaper: [],
				yumpu: [],
				issuu: [],
				apiJson: [],
				images: [],
			},
			sourceUrls: [],
			methods: [],
		};
	}

	it("returns a single screenshot page by default", async () => {
		const screenshot = vi.fn(async () => undefined);
		const page = {
			screenshot,
			evaluate: vi.fn(async () => ""),
			url: vi.fn(() => "https://example.com"),
		} as any;

		const scraper = new TestScraper();
		const result = await scraper.takeScreenshotsPublic(makeCtx(page));

		expect(result.pages).toHaveLength(1);
		expect(result.pages[0].pageNumber).toBe(1);
		expect(typeof result.pages[0].imagePath).toBe("string");
		expect(screenshot).toHaveBeenCalledTimes(1);
	});

	it("throws when the publication is offline", async () => {
		const page = {
			screenshot: vi.fn(async () => undefined),
			evaluate: vi.fn(async () => "Deze publicatie is offline"),
			url: vi.fn(() => "https://example.com"),
		} as any;

		const scraper = new TestScraper();
		await expect(scraper.takeScreenshotsPublic(makeCtx(page))).rejects.toThrow(
			"Publication is offline",
		);
	});
});
