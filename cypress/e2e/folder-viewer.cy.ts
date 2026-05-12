/**
 * Folder viewer rendering & navigation tests
 *
 * Verifies that folder content renders correctly per content source,
 * navigation controls work, and fullscreen toggle functions.
 */

const viewerRetailers = [
	{ slug: "hm", name: "H&M" },
	{ slug: "zalando", name: "Zalando" },
];

const BLOCKED_EMBED_HOSTS = [
	"publitas.com",
	"folderz.be",
	"folders.cz",
	"online-folders.nl",
];

function isEmbedBlocked(url: string): boolean {
	try {
		const host = new URL(url).hostname;
		return BLOCKED_EMBED_HOSTS.some((h) => host.includes(h));
	} catch {
		return false;
	}
}

// ---------------------------------------------------------------------------
// 1. Per-retailer viewer rendering
// ---------------------------------------------------------------------------

describe("Folder viewer rendering", () => {
	viewerRetailers.forEach(({ slug, name }) => {
		describe(`${name} folder viewer`, () => {
			let folderData: unknown;

			before(() => {
				cy.readFile(`data/folders/${slug}.json`).then((data) => {
					folderData = data;
				});
			});

			beforeEach(() => {
				cy.visit(`/folders/${slug}`);
			});

			it("renders the folder title or empty state", () => {
				const d = folderData as { folders?: { title?: string }[] };
				if (d?.folders && d.folders.length > 0 && d.folders[0].title) {
					cy.contains(d.folders[0].title).should("be.visible");
				} else {
					cy.contains(/geen folder beschikbaar|binnenkort/i).should(
						"be.visible",
					);
				}
			});

			it("displays validity dates when folder exists", () => {
				const d = folderData as { folders?: unknown[] };
				if (d?.folders && d.folders.length > 0) {
					cy.get("svg").should("exist");
				}
			});

			it("renders the correct viewer type based on content source", () => {
				const d = folderData as {
					folders?: {
						embedUrl?: string;
						pdfUrl?: string;
						pages?: { pageNumber: number; imageUrl: string }[];
					}[];
				};
				if (!d?.folders || d.folders.length === 0) return;

				const folder = d.folders[0];

				if (folder.pages && folder.pages.length > 0) {
					cy.get("img[alt*='folder']").should("exist");
				} else if (
					folder.embedUrl &&
					folder.embedUrl.startsWith("http") &&
					!isEmbedBlocked(folder.embedUrl)
				) {
					cy.get("iframe")
						.should("exist")
						.and("have.attr", "src")
						.and("include", "http");
					cy.contains("Volledig scherm").should("be.visible");
				} else {
					cy.contains(/geen folder beschikbaar|binnenkort|geblokkeerd/i).should(
						"be.visible",
					);
				}
			});
		});
	});
});

// ---------------------------------------------------------------------------
// 2. Embed viewer interactions (first retailer with non-blocked embed and no pages)
// ---------------------------------------------------------------------------

describe("Embed viewer interactions", () => {
	let embedSlug: string | null = null;

	before(() => {
		const slugs = viewerRetailers.map((r) => r.slug);

		cy.wrap(slugs).each((slug: string) => {
			if (embedSlug) return;
			cy.readFile(`data/folders/${slug}.json`).then((data: unknown) => {
				const d = data as {
					folders?: {
						embedUrl?: string;
						pages?: unknown[];
					}[];
				};
				const folder = d?.folders?.[0];
				if (
					folder?.embedUrl &&
					folder.embedUrl.startsWith("http") &&
					!isEmbedBlocked(folder.embedUrl) &&
					(!folder.pages || folder.pages.length === 0)
				) {
					embedSlug = slug;
				}
			});
		});
	});

	beforeEach(function () {
		if (!embedSlug) this.skip();
		cy.visit(`/folders/${embedSlug}`);
	});

	it("shows fullscreen button", () => {
		cy.contains("Volledig scherm").should("be.visible");
	});

	it("toggles fullscreen mode on click", () => {
		cy.contains("Volledig scherm").click();
		cy.contains("Sluiten").should("be.visible");
		cy.get("iframe").parent().should("have.class", "fixed");

		cy.contains("Sluiten").click();
		cy.contains("Volledig scherm").should("be.visible");
	});

	it("iframe has correct security attributes", () => {
		cy.get("iframe").then(($iframe) => {
			const el = $iframe[0];
			const sandbox = el.getAttribute("sandbox") ?? "";
			expect(sandbox).to.include("allow-scripts");
			expect(sandbox).to.include("allow-same-origin");
			expect(el.getAttribute("loading")).to.equal("lazy");
		});
	});
});

// ---------------------------------------------------------------------------
// 3. Image page viewer navigation (tested on retailers with screenshot pages)
// ---------------------------------------------------------------------------

describe("Image page viewer navigation", () => {
	let pageSlug: string | null = null;
	let pageCount = 0;

	before(() => {
		const slugs = viewerRetailers.map((r) => r.slug);

		cy.wrap(slugs).each((slug: string) => {
			if (pageSlug) return;
			cy.readFile(`data/folders/${slug}.json`).then((data: unknown) => {
				const d = data as {
					folders?: {
						embedUrl?: string;
						pdfUrl?: string;
						pages?: string[];
					}[];
				};
				const folder = d?.folders?.find(
					(f) => !f.embedUrl && !f.pdfUrl && f.pages && f.pages.length > 0,
				);
				if (folder) {
					pageSlug = slug;
					pageCount = folder.pages?.length ?? 0;
				}
			});
		});
	});

	beforeEach(function () {
		if (!pageSlug) this.skip();
		cy.visit(`/folders/${pageSlug}`);
	});

	it("shows the first page by default", () => {
		cy.contains("Pagina 1 van").should("be.visible");
	});

	it("shows previous/next navigation buttons", () => {
		cy.contains("Vorige").should("exist");
		cy.contains("Volgende").should("exist");
	});

	it("previous button is disabled on first page", () => {
		cy.contains("Vorige").should("match", "span");
	});

	it("navigates to next page when multiple pages exist", function () {
		if (pageCount <= 1) this.skip();
		cy.contains("Volgende").click();
		cy.contains("Pagina 2 van").should("be.visible");
	});
});
