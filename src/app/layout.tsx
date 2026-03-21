import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, createWebsiteJsonLd } from "@/components/JsonLd";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsGate } from "@/components/AnalyticsGate";
import { AdSenseGate } from "@/components/AdSenseGate";
import { AdPlacements } from "@/components/AdPlacements";
import {
	getDefaultMetaDescription,
	getSiteBaseUrl,
	getSiteTitle,
} from "@/lib/site";

export const metadata: Metadata = {
	title: {
		default: `${getSiteTitle()} - Alle folders en promoties`,
		template: `%s | ${getSiteTitle()}`,
	},
	description: getDefaultMetaDescription(),
	metadataBase: new URL(getSiteBaseUrl()),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "nl_BE",
		siteName: getSiteTitle(),
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="nl-BE" suppressHydrationWarning>
			<body className="min-h-screen flex flex-col">
				<JsonLd data={createWebsiteJsonLd()} />
				<Header />
				<AdPlacements position="top" />
				<main className="flex-1">{children}</main>
				<Footer />
				<CookieConsent />
				<AnalyticsGate />
				<AdSenseGate />
			</body>
		</html>
	);
}
