describe("SEO", () => {
	it("homepage has correct meta tags", () => {
		cy.visit("/");

		cy.title().should("match", /folders en promoties/i);

		cy.get('meta[name="description"]')
			.should("have.attr", "content")
			.and("match", /folders|promoties/i);

		cy.get('meta[property="og:type"]').should(
			"have.attr",
			"content",
			"website",
		);

		cy.get('meta[property="og:locale"]').should(
			"have.attr",
			"content",
			"nl_BE",
		);
	});

	it("homepage has JSON-LD structured data", () => {
		cy.visit("/");

		cy.get('script[type="application/ld+json"]')
			.should("exist")
			.first()
			.then(($script) => {
				const json = JSON.parse($script.text());
				expect(json["@type"]).to.equal("WebSite");
				expect(json.name).to.be.a("string").and.have.length.greaterThan(0);
				expect(json.inLanguage).to.equal("nl-BE");
			});
	});

	it("retailer page has FAQ JSON-LD", () => {
		cy.visit("/folders/hm");

		cy.get('script[type="application/ld+json"]').then(($scripts) => {
			const jsons = [...$scripts].map((s) => JSON.parse(s.textContent || ""));
			const faqSchema = jsons.find((j) => j["@type"] === "FAQPage");

			expect(faqSchema).to.exist;
			expect(faqSchema.mainEntity).to.have.length.at.least(3);
			expect(faqSchema.mainEntity[0]["@type"]).to.equal("Question");
		});
	});

	it("retailer page has correct title", () => {
		cy.visit("/folders/hm");
		cy.title().should("include", "H&M folder deze week");
	});

	it("html lang attribute is nl-BE", () => {
		cy.visit("/");
		cy.get("html").should("have.attr", "lang", "nl-BE");
	});

	it("sitemap is accessible", () => {
		cy.request("/sitemap.xml").then((response) => {
			expect(response.status).to.equal(200);
			expect(response.headers["content-type"]).to.include("xml");
			expect(response.body).to.match(/https?:\/\//);
		});
	});

	it("robots.txt is accessible", () => {
		cy.request("/robots.txt").then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body).to.include("sitemap");
		});
	});
});
