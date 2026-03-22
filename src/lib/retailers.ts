import { Retailer } from "./types";

export const retailersBe: Retailer[] = [
	{
		slug: "hm",
		name: "H&M",
		logo: "/retailers/placeholder.svg",
		color: "#E11D48",
		website: "https://www2.hm.com/nl_be",
		description:
			"Bekijk H&M promoties en acties op dames-, heren- en kinderkleding.",
		category: "mode",
		seo: {
			folderDay: "doorlopend",
			folderDayDetail:
				"H&M heeft doorlopend aanbiedingen en tijdelijke acties. Bekijk de nieuwste deals.",
			storeCount: "winkels in België en Nederland",
			pricePositioning: "Mode met regelmatige acties en seizoenskortingen.",
			loyalty: "H&M Member",
			openingHours: "Openingstijden verschillen per vestiging.",
			uniqueSellingPoint: "Grote collectie en regelmatige kortingen.",
		},
	},
	{
		slug: "c-and-a",
		name: "C&A",
		logo: "/retailers/placeholder.svg",
		color: "#1D4ED8",
		website: "https://www.c-and-a.com",
		description: "Ontdek C&A promoties op mode voor het hele gezin.",
		category: "mode",
		seo: {
			folderDay: "doorlopend",
			folderDayDetail:
				"C&A heeft doorlopend acties en seizoenspromoties. Bekijk de actuele aanbiedingen.",
			storeCount: "winkels in België en Nederland",
			pricePositioning: "Betaalbare mode met regelmatige kortingen.",
			loyalty: "Account / nieuwsbrief",
			openingHours: "Openingstijden verschillen per winkel.",
			uniqueSellingPoint: "Gezinsmode met promos en korting.",
		},
	},
	{
		slug: "zeeman",
		name: "Zeeman",
		logo: "/retailers/placeholder.svg",
		color: "#2563EB",
		website: "https://www.zeeman.com",
		description: "Bekijk Zeeman acties op basics, kinder- en herenmode.",
		category: "mode",
		seo: {
			folderDay: "wekelijks",
			folderDayDetail:
				"Zeeman publiceert regelmatig nieuwe acties. Bekijk de aanbiedingen van deze week.",
			storeCount: "winkels in België en Nederland",
			pricePositioning: "Budget mode met scherpe aanbiedingen.",
			loyalty: "Geen klassieke klantenkaart",
			openingHours: "Openingstijden verschillen per vestiging.",
			uniqueSellingPoint: "Zeer scherpe prijzen op basics.",
		},
	},
	{
		slug: "decathlon",
		name: "Decathlon",
		logo: "/retailers/placeholder.svg",
		color: "#2563EB",
		website: "https://www.decathlon.be",
		description:
			"Ontdek Decathlon promoties op sportkleding, schoenen en sportartikelen.",
		category: "sport",
		seo: {
			folderDay: "doorlopend",
			folderDayDetail:
				"Decathlon heeft doorlopend promoties en tijdelijke deals. Bekijk de acties van deze week.",
			storeCount: "winkels in België en Nederland",
			pricePositioning: "Sportartikelen met sterke prijs-kwaliteit en acties.",
			loyalty: "Account / nieuwsbrief",
			openingHours: "Openingstijden verschillen per vestiging.",
			uniqueSellingPoint:
				"Grote keuze sportartikelen met regelmatige promoties.",
		},
	},
	{
		slug: "jd-sports",
		name: "JD Sports",
		logo: "/retailers/placeholder.svg",
		color: "#111827",
		website: "https://www.jdsports.be",
		description:
			"Bekijk JD Sports acties op sneakers, sportkleding en streetwear.",
		category: "sport",
		seo: {
			folderDay: "doorlopend",
			folderDayDetail:
				"JD Sports heeft doorlopend aanbiedingen en tijdelijke acties. Bekijk de nieuwste deals.",
			storeCount: "winkels in België en Nederland",
			pricePositioning: "Sneakers en sportkleding met regelmatige promoties.",
			loyalty: "Account / nieuwsbrief",
			openingHours: "Openingstijden verschillen per vestiging.",
			uniqueSellingPoint: "Sterk aanbod sneakers en sportmerken.",
		},
	},
];

export const nlBorderRetailers: Retailer[] = [];

export const retailers: Retailer[] = retailersBe;

export function getRetailerBySlug(slug: string): Retailer | undefined {
	return (
		retailersBe.find((r) => r.slug === slug) ??
		nlBorderRetailers.find((r) => r.slug === slug)
	);
}

export function getRetailersByCategory(
	category: Retailer["category"],
): Retailer[] {
	return retailers.filter((r) => r.category === category);
}
