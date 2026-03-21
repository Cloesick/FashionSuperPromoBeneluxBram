import { Metadata } from "next";
import { retailers } from "@/lib/retailers";
import {
	JsonLd,
	createBreadcrumbJsonLd,
	createFAQJsonLd,
} from "@/components/JsonLd";
import { AdPlacements } from "@/components/AdPlacements";
import { FoldersClient } from "./FoldersClient";
import { getSiteBaseUrl, getSiteTitle } from "@/lib/site";

export const metadata: Metadata = {
	title: "Alle Folders",
	description:
		"Bekijk alle actuele reclamefolders en promoties van winkels in België en Nederland. Elke week bijgewerkt.",
	alternates: {
		canonical: "/folders",
	},
};

export default function FoldersPage() {
	const faqItems = [
		{
			question: "Hoe vaak worden de folders bijgewerkt?",
			answer:
				"Folders en promoties worden doorlopend bijgewerkt. Veel winkels publiceren wekelijks nieuwe acties. Wij updaten de pagina zodra er nieuwe folders beschikbaar zijn.",
		},
		{
			question: "Zijn alle folders gratis te bekijken?",
			answer:
				"Ja, alle folders zijn gratis te bekijken. Je hebt geen account of registratie nodig.",
		},
		{
			question: `Welke winkels staan op ${getSiteTitle()}?`,
			answer:
				"We verzamelen folders en promoties van zo veel mogelijk winkels, ketens en discounters. Het aanbod groeit continu.",
		},
		{
			question: "Kan ik de folder ook op mijn smartphone bekijken?",
			answer:
				"Ja, onze website is volledig responsive. Je kunt alle folders comfortabel bekijken op je smartphone, tablet of computer. Gebruik de volledig scherm-knop voor de beste ervaring op mobiel.",
		},
	];

	return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			<JsonLd
				data={createBreadcrumbJsonLd([
					{ name: "Home", url: getSiteBaseUrl() },
					{ name: "Folders", url: `${getSiteBaseUrl()}/folders` },
				])}
			/>
			<JsonLd data={createFAQJsonLd(faqItems)} />
			<nav className="text-sm text-gray-500 mb-6">
				<a href="/" className="hover:text-blue-700">
					Home
				</a>
				<span className="mx-2">›</span>
				<span className="text-gray-900">Folders</span>
			</nav>

			<h1 className="text-3xl font-bold text-gray-900 mb-2">
				Alle folders van deze week
			</h1>
			<p className="text-gray-600 mb-10">
				Bekijk de actuele reclamefolders van je favoriete winkels in België.
				Elke week bijgewerkt.
			</p>

			<FoldersClient retailers={retailers} />

			<AdPlacements position="bottom" />

			{/* SEO content */}
			<section className="mt-8 mb-12">
				<h2 className="text-xl font-bold text-gray-900 mb-4">
					Reclamefolders online bekijken
				</h2>
				<div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-3">
					<p>
						Op {getSiteTitle()} vind je de nieuwste reclamefolders en promoties
						van winkels en ketens in België en Nederland. Zo vergelijk je acties
						snel op één plek.
					</p>
					<p>
						Veel winkels hebben een vaste dag waarop een nieuwe folder
						verschijnt. Door regelmatig langs te komen mis je geen enkele
						aanbieding.
					</p>
				</div>
			</section>

			{/* FAQ */}
			<section>
				<h2 className="text-xl font-bold text-gray-900 mb-6">
					Veelgestelde vragen over folders
				</h2>
				<div className="space-y-4">
					{faqItems.map((item, i) => (
						<details
							key={i}
							className="bg-white border border-gray-200 rounded-lg"
						>
							<summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-blue-700">
								{item.question}
							</summary>
							<p className="px-6 pb-4 text-gray-600 text-sm">{item.answer}</p>
						</details>
					))}
				</div>
			</section>
		</div>
	);
}
