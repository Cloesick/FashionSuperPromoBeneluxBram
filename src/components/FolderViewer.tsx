"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Maximize2 } from "lucide-react";
import { Folder, Retailer } from "@/lib/types";

interface FolderViewerProps {
	folder: Folder;
	retailer: Retailer;
}

export function FolderViewer({ folder, retailer }: FolderViewerProps) {
	const hasEmbed = !!folder.embedUrl;
	const hasPdf = !!folder.pdfUrl;
	const hasPages = folder.pages.length > 0;

	// Detect expired folders — Publitas embeds go offline after validUntil
	const isExpired = (() => {
		try {
			const until = new Date(folder.validUntil + "T23:59:59");
			return until < new Date();
		} catch {
			return false;
		}
	})();

	const embedHost = (() => {
		if (!folder.embedUrl) return null;
		try {
			return new URL(folder.embedUrl).hostname;
		} catch {
			return null;
		}
	})();

	// Block embeds that are known to reject iframes or are offline (expired)
	const isEmbedBlocked =
		!!embedHost &&
		(retailer.slug === "delhaize" ||
			embedHost === "ah.be" ||
			embedHost.endsWith(".ah.be") ||
			embedHost === "folder.aldi.be" ||
			embedHost.endsWith(".folder.aldi.be") ||
			embedHost === "view.publitas.com" ||
			embedHost.endsWith(".publitas.com") ||
			(isExpired && /publitas\.com|folderz\.be/i.test(folder.embedUrl!)));

	// Detect stale data — warn users when scraped data is old
	const [dataAgeHours, setDataAgeHours] = useState<number | null>(null);
	const isStale = dataAgeHours !== null && dataAgeHours > 72; // > 3 days

	const [isIOS, setIsIOS] = useState(false);

	const [trackingEnabled, setTrackingEnabled] = useState(false);
	const sentRef = useRef<Set<string>>(new Set());

	const pathname = usePathname();
	const [currentPage, setCurrentPage] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const mode: "embed" | "pages" = hasPages ? "pages" : "embed";

	useEffect(() => {
		if (mode !== "pages") return;
		if (!pathname) return;
		const match = pathname.match(/\/folders\/[^/]+\/p\/(\d+)$/);
		if (!match) {
			setCurrentPage(0);
			return;
		}
		const n = Number.parseInt(match[1] ?? "1", 10);
		if (!Number.isFinite(n) || n < 1) {
			setCurrentPage(0);
			return;
		}
		const idx = Math.max(0, Math.min(folder.pages.length - 1, n - 1));
		setCurrentPage(idx);
	}, [pathname, mode, folder.pages.length]);

	useEffect(() => {
		try {
			const age =
				(Date.now() - new Date(folder.scrapedAt).getTime()) / 3_600_000;
			setDataAgeHours(age);
		} catch {
			setDataAgeHours(null);
		}
	}, [folder.scrapedAt]);

	useEffect(() => {
		const hasConsent = () => {
			if (typeof document === "undefined") return false;
			return document.cookie
				.split(";")
				.map((c) => c.trim())
				.some(
					(c) =>
						c === "sp_cookie_consent=accepted" ||
						c.startsWith("sp_cookie_consent=accepted"),
				);
		};

		const update = () => setTrackingEnabled(hasConsent());
		update();

		window.addEventListener("sp_consent_changed", update);
		window.addEventListener("storage", update);
		return () => {
			window.removeEventListener("sp_consent_changed", update);
			window.removeEventListener("storage", update);
		};
	}, []);

	useEffect(() => {
		if (!trackingEnabled) return;
		if (typeof window === "undefined") return;

		const send = (event: string, key: string) => {
			if (sentRef.current.has(key)) return;
			sentRef.current.add(key);

			void fetch("/api/engagement", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					event,
					retailer: retailer.slug,
					path: window.location.pathname,
				}),
				keepalive: true,
			}).catch(() => {
				return;
			});
		};

		send("folder_view", "folder_view");

		const t = window.setTimeout(() => {
			send("folder_engaged_15s", "folder_engaged_15s");
		}, 15000);

		const onScroll = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - window.innerHeight;
			if (max <= 0) return;
			const pct = (window.scrollY / max) * 100;
			if (pct >= 50) send("folder_scroll_50", "folder_scroll_50");
			if (pct >= 90) send("folder_scroll_90", "folder_scroll_90");
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();

		return () => {
			window.clearTimeout(t);
			window.removeEventListener("scroll", onScroll);
		};
	}, [trackingEnabled, retailer.slug]);

	useEffect(() => {
		if (!trackingEnabled) return;
		if (mode !== "pages") return;
		if (typeof window === "undefined") return;

		const key = `folder_page_turn:${currentPage}`;
		if (sentRef.current.has(key)) return;
		sentRef.current.add(key);

		void fetch("/api/engagement", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				event: "folder_page_turn",
				retailer: retailer.slug,
				path: window.location.pathname,
			}),
			keepalive: true,
		}).catch(() => {
			return;
		});
	}, [trackingEnabled, mode, currentPage, retailer.slug]);

	useEffect(() => {
		const ua = navigator.userAgent;
		const detectedIOS = /iP(hone|od|ad)/.test(ua);
		setIsIOS(detectedIOS);
	}, []);

	const validFrom = new Date(folder.validFrom).toLocaleDateString("nl-BE", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const validUntil = new Date(folder.validUntil).toLocaleDateString("nl-BE", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div>
			{/* Folder info */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
				<h2 className="text-lg font-semibold text-gray-900">{folder.title}</h2>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2 text-sm text-gray-500">
						<Calendar className="w-4 h-4" />
						<span>
							{validFrom} - {validUntil}
						</span>
					</div>
				</div>
			</div>

			{isStale && !isExpired && (
				<div className="flex items-center gap-2 mb-4 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
					<Calendar className="w-4 h-4 shrink-0" />
					<span>
						Laatst bijgewerkt{" "}
						{dataAgeHours !== null && dataAgeHours >= 24
							? `${Math.round(dataAgeHours / 24)} dagen geleden`
							: "meer dan 3 dagen geleden"}
						.{" "}
						{retailer.website && (
							<a
								href={retailer.website}
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium underline hover:text-blue-800"
							>
								Bekijk {retailer.name} voor de nieuwste aanbiedingen
							</a>
						)}
					</span>
				</div>
			)}

			{/* Primary: Embedded folder viewer (iframe) */}
			{mode === "embed" && hasEmbed && !isEmbedBlocked ? (
				<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
					<div
						className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-white" : ""}`}
					>
						{isIOS && !hasPdf && !hasPages && !isFullscreen && (
							<div className="sm:hidden px-6 py-4 border-b border-gray-100 bg-gray-50">
								<p className="text-sm text-gray-600 mb-3">
									Op iPhone wordt de online folder soms geblokkeerd in deze
									pagina.
								</p>
								<a
									href={folder.embedUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition"
								>
									Open in nieuw tabblad
								</a>
							</div>
						)}
						{isFullscreen && (
							<button
								onClick={() => setIsFullscreen(false)}
								style={{
									top: "calc(env(safe-area-inset-top) + 1rem)",
									right: "calc(env(safe-area-inset-right) + 1rem)",
								}}
								className="absolute z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 shadow-lg transition"
							>
								Sluiten
							</button>
						)}
						<iframe
							src={folder.embedUrl}
							title={`${retailer.name} folder`}
							className={`w-full border-0 ${
								isFullscreen ? "h-full" : "h-[70dvh] sm:h-[750px] lg:h-[900px]"
							}`}
							allow="fullscreen"
							loading="lazy"
							sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
						/>
					</div>
					{!isFullscreen && (
						<div className="flex items-center justify-end px-6 py-3 border-t border-gray-100">
							<button
								onClick={() => setIsFullscreen(true)}
								className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition"
							>
								<Maximize2 className="w-4 h-4" />
								Volledig scherm
							</button>
						</div>
					)}
				</div>
			) : mode === "pages" && hasPages ? (
				/* Fallback: Image page viewer */
				<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
					<div className="relative aspect-3/4 bg-gray-50">
						<Image
							src={folder.pages[currentPage].imageUrl}
							alt={`${retailer.name} folder pagina ${currentPage + 1}`}
							fill
							className="object-contain"
							priority={currentPage === 0}
						/>
					</div>

					<div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
						{currentPage > 0 ? (
							<Link
								href={`/folders/${retailer.slug}/p/${currentPage}`}
								className="text-sm font-medium text-gray-700 hover:text-blue-700 transition"
							>
								Vorige
							</Link>
						) : (
							<span className="text-sm font-medium text-gray-300">Vorige</span>
						)}
						<span className="text-sm text-gray-500">
							Pagina {currentPage + 1} van {folder.pages.length}
						</span>
						{currentPage < folder.pages.length - 1 ? (
							<Link
								href={`/folders/${retailer.slug}/p/${currentPage + 2}`}
								className="text-sm font-medium text-gray-700 hover:text-blue-700 transition"
							>
								Volgende
							</Link>
						) : (
							<span className="text-sm font-medium text-gray-300">
								Volgende
							</span>
						)}
					</div>
				</div>
			) : isExpired ? (
				<div className="bg-amber-50 border border-amber-200 rounded-xl p-8 sm:p-12 text-center">
					<p className="text-amber-800 font-medium mb-2">
						Deze folder is verlopen
					</p>
					<p className="text-amber-700 text-sm mb-4">
						De nieuwe {retailer.name} folder wordt binnenkort verwacht.
					</p>
					{retailer.website && (
						<a
							href={retailer.website}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition"
						>
							Bekijk de website van {retailer.name}
						</a>
					)}
				</div>
			) : (
				<div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center">
					<p className="text-gray-500">
						De folderpagina&apos;s worden binnenkort geladen.
					</p>
				</div>
			)}

			{/* Page thumbnails (only for image mode) */}
			{mode === "pages" && folder.pages.length > 1 && (
				<div className="mt-4 flex gap-2 overflow-x-auto pb-2">
					{folder.pages.map((page, i) => (
						<button
							key={page.pageNumber}
							onClick={() => {
								window.location.href =
									i === 0
										? `/folders/${retailer.slug}`
										: `/folders/${retailer.slug}/p/${i + 1}`;
							}}
							className={`shrink-0 w-16 h-22 rounded-md overflow-hidden border-2 transition ${
								i === currentPage
									? "border-blue-600 shadow-sm"
									: "border-gray-200 hover:border-gray-300"
							}`}
						>
							<Image
								src={page.imageUrl}
								alt={`Pagina ${i + 1}`}
								width={64}
								height={88}
								className="object-cover w-full h-full"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
