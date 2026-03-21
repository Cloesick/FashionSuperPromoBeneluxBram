export type RetailVertical =
	| "diy"
	| "supermarket"
	| "electronics"
	| "beauty"
	| "fashion"
	| "home-garden"
	| "general";

export type SiteConfig = {
	name: string;
	regionLabel?: string;
	domain: string;
	vertical: RetailVertical;
	facebookGroupUrl?: string;
};

function env(name: string): string | undefined {
	return typeof process !== "undefined" ? process.env[name] : undefined;
}

export function getSiteConfig(): SiteConfig {
	const verticalRaw = (
		env("NEXT_PUBLIC_RETAIL_VERTICAL") ?? "general"
	).toLowerCase();
	const vertical: RetailVertical =
		verticalRaw === "diy"
			? "diy"
			: verticalRaw === "supermarket"
				? "supermarket"
				: verticalRaw === "electronics"
					? "electronics"
					: verticalRaw === "beauty"
						? "beauty"
						: verticalRaw === "fashion"
							? "fashion"
							: verticalRaw === "home-garden"
								? "home-garden"
								: "general";

	const name = env("NEXT_PUBLIC_SITE_NAME") ?? "FashionPromo";
	const regionLabel = env("NEXT_PUBLIC_SITE_REGION") ?? "Benelux";
	const domain = env("NEXT_PUBLIC_SITE_DOMAIN") ?? "fashionpromo.local";
	const facebookGroupUrl = env("NEXT_PUBLIC_FACEBOOK_GROUP_URL");

	return {
		name,
		regionLabel,
		domain,
		vertical,
		facebookGroupUrl,
	};
}

export function getSiteTitle(): string {
	const c = getSiteConfig();
	return c.regionLabel ? `${c.name} ${c.regionLabel}` : c.name;
}

export function getSiteBaseUrl(): string {
	const c = getSiteConfig();
	return `https://${c.domain}`;
}

export function getDefaultMetaDescription(): string {
	const c = getSiteConfig();
	if (c.vertical === "diy") {
		return "Bekijk dagelijks de nieuwste folders en promoties van doe-het-zelfzaken en andere winkels in België.";
	}
	if (c.vertical === "supermarket") {
		return "Bespaar elke dag op je boodschappen. Bekijk dagelijks de nieuwste folders van je favoriete winkels in België.";
	}
	if (c.vertical === "electronics") {
		return "Bekijk dagelijks de nieuwste folders en promoties van elektronicazaken in België en Nederland.";
	}
	if (c.vertical === "beauty") {
		return "Bekijk dagelijks de nieuwste folders en promoties van drogisterijen, parfumerieën en beautywinkels in België en Nederland.";
	}
	if (c.vertical === "fashion") {
		return "Bekijk dagelijks de nieuwste folders en promoties van modewinkels en sportwinkels in België en Nederland.";
	}
	if (c.vertical === "home-garden") {
		return "Bekijk dagelijks de nieuwste folders en promoties van woonwinkels, tuincentra en interieurzaken in België en Nederland.";
	}
	return "Bekijk dagelijks de nieuwste folders en promoties van je favoriete winkels in België.";
}

export function getCategoryLabel(category: string): string {
	const labels: Record<string, string> = {
		supermarkt: "Supermarkten",
		discounter: "Discounters",
		warenhuis: "Warenhuizen",
		electronica: "Elektronicazaken",
		"doe-het-zelf": "Doe-het-zelf",
		drogist: "Drogisterijen",
		mode: "Mode",
		schoenen: "Schoenen",
		ondergoed: "Ondergoed",
		kinderen: "Kinderkleding",
		sport: "Sport",
		"vrije-tijd": "Vrije tijd",
	};

	return labels[category] ?? category;
}
