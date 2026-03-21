import {
	getDefaultMetaDescription,
	getSiteBaseUrl,
	getSiteTitle,
} from "@/lib/site";

interface JsonLdProps {
	data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export function createWebsiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: getSiteTitle(),
		url: getSiteBaseUrl(),
		description: getDefaultMetaDescription(),
		inLanguage: "nl-BE",
	};
}

export function createRetailerFolderJsonLd(
	retailerName: string,
	slug: string,
	validFrom?: string,
	validUntil?: string,
) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: `${retailerName} folder deze week`,
		url: `${getSiteBaseUrl()}/folders/${slug}`,
		description: `Bekijk de actuele ${retailerName} folder en ontdek de beste promoties van deze week in België.`,
		inLanguage: "nl-BE",
		...(validFrom && validUntil
			? {
					temporalCoverage: `${validFrom}/${validUntil}`,
				}
			: {}),
		isPartOf: {
			"@type": "WebSite",
			name: getSiteTitle(),
			url: getSiteBaseUrl(),
		},
	};
}

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function createFAQJsonLd(
	questions: { question: string; answer: string }[],
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map((q) => ({
			"@type": "Question",
			name: q.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: q.answer,
			},
		})),
	};
}
