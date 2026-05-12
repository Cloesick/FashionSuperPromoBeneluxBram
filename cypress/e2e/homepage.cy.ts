describe("Homepage", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("renders the hero section with correct heading", () => {
		cy.get("h1").should("contain.text", "Fashion folders en promoties");
		cy.get("h1").should("contain.text", "voor kleding, schoenen en sport");
	});

	it("displays the CTA buttons", () => {
		cy.contains("a", "Bekijk alle folders")
			.should("have.attr", "href")
			.and("match", /\/folders$/);

		// Facebook Groep link only renders when facebookGroupUrl is configured
		cy.get("body").then(($body) => {
			if ($body.text().includes("Facebook Groep")) {
				cy.contains("a", "Facebook Groep")
					.should("have.attr", "href")
					.and("include", "facebook.com");
			}
		});
	});

	it("displays all retailer cards", () => {
		const retailers = ["H&M", "Zalando"];

		retailers.forEach((name) => {
			cy.contains(name).should("be.visible");
		});
	});

	it("has working navigation links to retailer folder pages", () => {
		cy.contains("a", "Bekijk alle folders").click();
		cy.url().should("include", "/folders");
	});

	it("renders the USP section", () => {
		cy.contains("Slim besparen").should("be.visible");
		cy.contains("Altijd up-to-date").should("be.visible");
		cy.contains("Snel gevonden").should("be.visible");
	});

	it("renders the Facebook CTA section", () => {
		cy.contains("Mis geen enkele promotie").should("be.visible");
		cy.get("body").then(($body) => {
			if ($body.text().includes("Word lid van de groep")) {
				cy.contains("a", "Word lid van de groep").should(
					"have.attr",
					"target",
					"_blank",
				);
			}
		});
	});

	it("renders SEO text section", () => {
		cy.contains(/Over .+/).should("be.visible");
	});
});
