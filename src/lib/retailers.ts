import { Retailer } from "./types";

export const retailersBe: Retailer[] = [
	{
		slug: "hm",
		name: "H&M",
		logo: "/retailers/hm.webp",
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
		slug: "zalando",
		name: "Zalando",
		logo: "/retailers/zalando.webp",
		color: "#111827",
		website: "https://www.zalando.be",
		description: "Bekijk Zalando promoties op mode, schoenen en accessoires.",
		category: "mode",
		seo: {
			folderDay: "doorlopend",
			folderDayDetail:
				"Zalando heeft doorlopend acties en tijdelijke promoties. Bekijk de nieuwste deals.",
			storeCount: "online",
			pricePositioning: "Grote keuze merken met regelmatige promoties.",
			loyalty: "Account",
			openingHours: "Online",
			uniqueSellingPoint: "Groot aanbod merken met snelle levering en returns.",
		},
	},
];

export const nlBorderRetailers: Retailer[] = [];

export const retailers: Retailer[] = retailersBe;

export function getNlBorderRetailerBySlug(slug: string): Retailer | undefined {
	return nlBorderRetailers.find((r) => r.slug === slug);
}

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
