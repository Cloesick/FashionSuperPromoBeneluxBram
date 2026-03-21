import { retailers } from "@/lib/retailers";
import { RetailerCard } from "@/components/RetailerCard";
import { Facebook, TrendingDown, Bell, Zap } from "lucide-react";
import Link from "next/link";
import { getSiteConfig, getSiteTitle } from "@/lib/site";
import { AdPlacements } from "@/components/AdPlacements";

export default function HomePage() {
	const site = getSiteConfig();
	return (
		<>
			{/* Hero */}
			<section className="bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
				<div className="max-w-6xl mx-auto px-4 py-20 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
						Fashion folders en promoties
						<br />
						<span className="text-amber-400">
							voor kleding, schoenen en sport
						</span>
					</h1>
					<p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
						Ontdek elke week de nieuwste folders en acties van fashion winkels,
						sportwinkels en schoenenzaken.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/folders"
							className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-lg transition"
						>
							<Zap className="w-5 h-5" />
							Bekijk alle folders
						</Link>
						{site.facebookGroupUrl ? (
							<a
								href={site.facebookGroupUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition"
							>
								<Facebook className="w-5 h-5" />
								Facebook Groep
							</a>
						) : null}
					</div>
				</div>
			</section>

			{/* USPs */}
			<section className="max-w-6xl mx-auto px-4 -mt-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
						<div className="bg-blue-50 p-3 rounded-lg">
							<TrendingDown className="w-6 h-6 text-blue-700" />
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-1">Slim besparen</h3>
							<p className="text-sm text-gray-600">
								Vergelijk fashion promoties en vind kortingen op kleding en
								schoenen.
							</p>
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
						<div className="bg-blue-50 p-3 rounded-lg">
							<Bell className="w-6 h-6 text-blue-700" />
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-1">
								Altijd up-to-date
							</h3>
							<p className="text-sm text-gray-600">
								Elke week automatisch de nieuwste fashion folders, direct
								beschikbaar.
							</p>
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
						<div className="bg-blue-50 p-3 rounded-lg">
							<Zap className="w-6 h-6 text-blue-700" />
						</div>
						<div>
							<h3 className="font-bold text-gray-900 mb-1">Snel gevonden</h3>
							<p className="text-sm text-gray-600">
								Vind acties op mode, sneakers en sportkleding zonder lang te
								zoeken.
							</p>
						</div>
					</div>
				</div>
			</section>

			<AdPlacements position="mid" />

			{/* Retailer cards */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<h2 className="text-2xl font-bold text-gray-900 mb-2">
					Populaire winkels
				</h2>
				<p className="text-gray-600 mb-8">
					Bekijk de actuele folders van populaire winkels in België.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{retailers.map((retailer) => (
						<RetailerCard key={retailer.slug} retailer={retailer} />
					))}
				</div>
			</section>

			{/* CTA Facebook */}
			<section className="bg-blue-50 border-y border-blue-100">
				<div className="max-w-4xl mx-auto px-4 py-16 text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-3">
						Mis geen enkele promotie
					</h2>
					<p className="text-gray-600 mb-6 max-w-xl mx-auto">
						Word lid van onze Facebook-groep en ontvang dagelijks de beste
						aanbiedingen. Onze community selecteert de topdeals zodat jij niet
						de volledige folder hoeft door te bladeren.
					</p>
					{site.facebookGroupUrl ? (
						<a
							href={site.facebookGroupUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition"
						>
							<Facebook className="w-5 h-5" />
							Word lid van de groep
						</a>
					) : null}
				</div>
			</section>

			<AdPlacements position="bottom" />

			{/* SEO text */}
			<section className="max-w-4xl mx-auto px-4 py-16">
				<h2 className="text-xl font-bold text-gray-900 mb-4">
					Over {getSiteTitle()}
				</h2>
				<div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-3">
					<p>
						{getSiteTitle()} verzamelt dagelijks de actuele fashion folders,
						reclamefolders en magazines van verschillende winkels in België en
						Nederland. Zo blijf je op de hoogte van kortingen en promoties op
						kleding, schoenen, accessoires en sportartikelen.
					</p>
					<p>
						Je kunt hier snel vergelijken tussen fashion retailers en
						sportwinkels. We updaten onze folders elke week zodat je altijd de
						meest recente acties en promoties vindt.
					</p>
				</div>
			</section>
		</>
	);
}
