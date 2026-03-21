"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RetailerCard } from "@/components/RetailerCard";
import type { Retailer } from "@/lib/types";
import type { LatLng } from "@/lib/geo";
import { getNearestStoreDistanceKm, getNearestStores } from "@/lib/stores";
import { NearMeFilter } from "@/components/NearMeFilter";
import { getCategoryLabel } from "@/lib/site";
import { AdPlacements } from "@/components/AdPlacements";

type FoldersMidAdVariant = "top" | "between";

function getOrCreateVariant(key: string): FoldersMidAdVariant {
	const existing = window.localStorage.getItem(key);
	if (existing === "top" || existing === "between") return existing;

	const v: FoldersMidAdVariant = Math.random() < 0.5 ? "top" : "between";
	window.localStorage.setItem(key, v);
	return v;
}

export function FoldersClient({ retailers }: { retailers: Retailer[] }) {
	const [userLocation, setUserLocation] = useState<{
		label: string;
		location: LatLng;
	} | null>(null);

	const onLocationChange = useCallback(
		(v: { label: string; location: LatLng } | null) => {
			setUserLocation(v);
		},
		[],
	);

	const [midVariant, setMidVariant] = useState<FoldersMidAdVariant | null>(
		null,
	);

	useEffect(() => {
		setMidVariant(getOrCreateVariant("sp_ads_ab_folders_mid"));
	}, []);

	const retailersSorted = useMemo(() => {
		if (!userLocation) return retailers;

		const loc = userLocation.location;
		return [...retailers].sort((a, b) => {
			const da = getNearestStoreDistanceKm(a.slug, loc);
			const db = getNearestStoreDistanceKm(b.slug, loc);

			const aHas = da !== null;
			const bHas = db !== null;
			if (aHas && !bHas) return -1;
			if (!aHas && bHas) return 1;
			if (!aHas && !bHas) return a.name.localeCompare(b.name);
			return (da ?? 0) - (db ?? 0);
		});
	}, [retailers, userLocation]);

	const groups = useMemo(() => {
		const byCat = new Map<string, Retailer[]>();
		for (const r of retailersSorted) {
			const k = r.category;
			byCat.set(k, [...(byCat.get(k) ?? []), r]);
		}
		return Array.from(byCat.entries()).sort((a, b) => a[0].localeCompare(b[0]));
	}, [retailersSorted]);

	const nearest = useMemo(() => {
		if (!userLocation) return [];
		return getNearestStores(userLocation.location, 6);
	}, [userLocation]);

	return (
		<>
			<NearMeFilter onChange={onLocationChange} />

			{midVariant === "top" ? <AdPlacements position="mid" /> : null}

			{userLocation && nearest.length > 0 ? (
				<section className="mb-10">
					<h2 className="text-xl font-bold text-gray-900 mb-4">
						Winkels bij jou in de buurt
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{nearest.map((s: (typeof nearest)[number]) => (
							<div
								key={s.id}
								className="bg-white border border-gray-200 rounded-xl p-4"
							>
								<div className="font-semibold text-gray-900">{s.name}</div>
								<div className="text-sm text-gray-600">
									{s.postalCode ? `${s.postalCode} ` : ""}
									{s.city}
								</div>
								<div className="text-sm text-gray-600">
									{Math.round(s.distanceKm * 10) / 10} km
								</div>
							</div>
						))}
					</div>
				</section>
			) : null}

			{groups.map(([category, items], i) => (
				<div key={category}>
					<h2 className="text-xl font-bold text-gray-900 mb-4">
						{getCategoryLabel(category)}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						{items.map((retailer: Retailer) => (
							<div key={retailer.slug}>
								<RetailerCard retailer={retailer} />
							</div>
						))}
					</div>
				</div>
			))}

			{midVariant === "between" ? <AdPlacements position="mid" /> : null}
		</>
	);
}
