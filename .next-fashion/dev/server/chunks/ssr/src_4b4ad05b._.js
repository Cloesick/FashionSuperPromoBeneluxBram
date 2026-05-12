module.exports = [
"[project]/src/components/RetailerCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RetailerCard",
    ()=>RetailerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
;
;
;
;
function RetailerCard({ retailer, folderCount }) {
    const isSvgLogo = retailer.logo.toLowerCase().endsWith(".svg");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/folders/${retailer.slug}`,
        className: "group block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 w-full",
                style: {
                    backgroundColor: retailer.color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RetailerCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            isSvgLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: retailer.logo,
                                alt: `${retailer.name} logo`,
                                width: 48,
                                height: 48,
                                className: "w-12 h-12 rounded-lg object-cover",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RetailerCard.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: retailer.logo,
                                alt: `${retailer.name} logo`,
                                width: 48,
                                height: 48,
                                className: "w-12 h-12 rounded-lg object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RetailerCard.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-900 group-hover:text-blue-700 transition",
                                        children: retailer.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetailerCard.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: retailer.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetailerCard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RetailerCard.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RetailerCard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 leading-relaxed mb-4",
                        children: retailer.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetailerCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 text-sm font-medium text-blue-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetailerCard.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    "Bekijk folder"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RetailerCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            folderCount !== undefined && folderCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full",
                                children: [
                                    folderCount,
                                    " ",
                                    folderCount === 1 ? "folder" : "folders"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RetailerCard.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RetailerCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RetailerCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RetailerCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/geo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "haversineDistanceKm",
    ()=>haversineDistanceKm,
    "toRadians",
    ()=>toRadians
]);
function toRadians(deg) {
    return deg * Math.PI / 180;
}
function haversineDistanceKm(a, b) {
    const R = 6371;
    const dLat = toRadians(b.lat - a.lat);
    const dLng = toRadians(b.lng - a.lng);
    const lat1 = toRadians(a.lat);
    const lat2 = toRadians(b.lat);
    const sinDLat = Math.sin(dLat / 2);
    const sinDLng = Math.sin(dLng / 2);
    const x = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * (sinDLng * sinDLng);
    const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    return R * c;
}
}),
"[project]/src/lib/stores.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNearestStoreDistanceKm",
    ()=>getNearestStoreDistanceKm,
    "getNearestStores",
    ()=>getNearestStores,
    "stores",
    ()=>stores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/geo.ts [app-ssr] (ecmascript)");
;
const stores = [
    {
        id: "ah-antwerpen",
        retailerSlug: "albert-heijn",
        name: "Albert Heijn Antwerpen",
        city: "Antwerpen",
        postalCode: "2000",
        location: {
            lat: 51.2194,
            lng: 4.4025
        }
    },
    {
        id: "lidl-brussel",
        retailerSlug: "lidl",
        name: "Lidl Brussel",
        city: "Brussel",
        postalCode: "1000",
        location: {
            lat: 50.8503,
            lng: 4.3517
        }
    },
    {
        id: "delhaize-gent",
        retailerSlug: "delhaize",
        name: "Delhaize Gent",
        city: "Gent",
        postalCode: "9000",
        location: {
            lat: 51.0543,
            lng: 3.7174
        }
    },
    {
        id: "colruyt-luik",
        retailerSlug: "colruyt",
        name: "Colruyt Luik",
        city: "Luik",
        postalCode: "4000",
        location: {
            lat: 50.6326,
            lng: 5.5797
        }
    },
    {
        id: "aldi-leuven",
        retailerSlug: "aldi",
        name: "ALDI Leuven",
        city: "Leuven",
        postalCode: "3000",
        location: {
            lat: 50.8798,
            lng: 4.7005
        }
    },
    {
        id: "action-hasselt",
        retailerSlug: "action",
        name: "Action Hasselt",
        city: "Hasselt",
        postalCode: "3500",
        location: {
            lat: 50.9307,
            lng: 5.3325
        }
    }
];
function getNearestStoreDistanceKm(retailerSlug, user) {
    const candidates = stores.filter((s)=>s.retailerSlug === retailerSlug);
    if (candidates.length === 0) return null;
    let best = Infinity;
    for (const s of candidates){
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["haversineDistanceKm"])(user, s.location);
        if (d < best) best = d;
    }
    return Number.isFinite(best) ? best : null;
}
function getNearestStores(user, limit) {
    const withDistance = stores.map((s)=>({
            ...s,
            distanceKm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["haversineDistanceKm"])(user, s.location)
        })).sort((a, b)=>a.distanceKm - b.distanceKm);
    return withDistance.slice(0, Math.max(0, limit));
}
}),
"[project]/src/components/NearMeFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NearMeFilter",
    ()=>NearMeFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
"use client";
;
;
;
const LOCATION_KEY = "sp_user_location";
function loadStoredLocation() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function saveStoredLocation(v) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const CITY_PRESETS = [
    {
        label: "Antwerpen",
        value: "antwerpen",
        location: {
            lat: 51.2194,
            lng: 4.4025
        }
    },
    {
        label: "Brussel",
        value: "brussel",
        location: {
            lat: 50.8503,
            lng: 4.3517
        }
    },
    {
        label: "Gent",
        value: "gent",
        location: {
            lat: 51.0543,
            lng: 3.7174
        }
    },
    {
        label: "Leuven",
        value: "leuven",
        location: {
            lat: 50.8798,
            lng: 4.7005
        }
    },
    {
        label: "Hasselt",
        value: "hasselt",
        location: {
            lat: 50.9307,
            lng: 5.3325
        }
    },
    {
        label: "Luik",
        value: "luik",
        location: {
            lat: 50.6326,
            lng: 5.5797
        }
    }
];
function NearMeFilter({ onChange }) {
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeLabel, setActiveLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = loadStoredLocation();
        if (!stored) return;
        setActiveLabel(stored.label);
        onChange({
            label: stored.label,
            location: stored.location
        });
        if (stored.mode === "city") {
            const preset = CITY_PRESETS.find((c)=>c.label === stored.label);
            if (preset) setSelectedCity(preset.value);
        }
    }, [
        onChange
    ]);
    const cityOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>CITY_PRESETS, []);
    const useMyLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setStatus("");
        if (typeof navigator === "undefined" || !navigator.geolocation) {
            setStatus("Geolocatie is niet beschikbaar in deze browser.");
            return;
        }
        setStatus("Locatie ophalen...");
        navigator.geolocation.getCurrentPosition((pos)=>{
            const loc = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            const label = "Mijn locatie";
            setActiveLabel(label);
            saveStoredLocation({
                mode: "geo",
                label,
                location: loc
            });
            onChange({
                label,
                location: loc
            });
            setStatus("");
        }, ()=>{
            setStatus("Locatie ophalen mislukt. Kies een stad als alternatief.");
        }, {
            enableHighAccuracy: false,
            timeout: 8000,
            maximumAge: 1000 * 60 * 30
        });
    }, [
        onChange
    ]);
    const applyCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setSelectedCity(value);
        const preset = CITY_PRESETS.find((c)=>c.value === value);
        if (!preset) {
            setActiveLabel("");
            saveStoredLocation(null);
            onChange(null);
            return;
        }
        setActiveLabel(preset.label);
        saveStoredLocation({
            mode: "city",
            label: preset.label,
            location: preset.location
        });
        onChange({
            label: preset.label,
            location: preset.location
        });
        setStatus("");
    }, [
        onChange
    ]);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedCity("");
        setActiveLabel("");
        setStatus("");
        saveStoredLocation(null);
        onChange(null);
    }, [
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-xl p-4 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center gap-3 md:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm font-medium text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-4 h-4 text-blue-700"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NearMeFilter.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            activeLabel ? `Dichtbij: ${activeLabel}` : "Dichtbij"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NearMeFilter.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-3 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: useMyLocation,
                                className: "bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-lg transition text-sm",
                                children: "Gebruik mijn locatie"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NearMeFilter.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCity,
                                onChange: (e)=>applyCity(e.target.value),
                                className: "flex-1 bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-lg text-sm",
                                "aria-label": "Kies een stad",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Kies een stad…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NearMeFilter.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    cityOptions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.value,
                                            children: c.label
                                        }, c.value, false, {
                                            fileName: "[project]/src/components/NearMeFilter.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NearMeFilter.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clear,
                                className: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition text-sm",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NearMeFilter.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NearMeFilter.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NearMeFilter.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mt-3",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/NearMeFilter.tsx",
                lineNumber: 162,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NearMeFilter.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/folders/FoldersClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FoldersClient",
    ()=>FoldersClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetailerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RetailerCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NearMeFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NearMeFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdPlacements.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function getOrCreateVariant(key) {
    const existing = window.localStorage.getItem(key);
    if (existing === "top" || existing === "between") return existing;
    const v = Math.random() < 0.5 ? "top" : "between";
    window.localStorage.setItem(key, v);
    return v;
}
function FoldersClient({ retailers }) {
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const onLocationChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((v)=>{
        setUserLocation(v);
    }, []);
    const [midVariant, setMidVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMidVariant(getOrCreateVariant("sp_ads_ab_folders_mid"));
    }, []);
    const retailersSorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!userLocation) return retailers;
        const loc = userLocation.location;
        return [
            ...retailers
        ].sort((a, b)=>{
            const da = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNearestStoreDistanceKm"])(a.slug, loc);
            const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNearestStoreDistanceKm"])(b.slug, loc);
            const aHas = da !== null;
            const bHas = db !== null;
            if (aHas && !bHas) return -1;
            if (!aHas && bHas) return 1;
            if (!aHas && !bHas) return a.name.localeCompare(b.name);
            return (da ?? 0) - (db ?? 0);
        });
    }, [
        retailers,
        userLocation
    ]);
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byCat = new Map();
        for (const r of retailersSorted){
            const k = r.category;
            byCat.set(k, [
                ...byCat.get(k) ?? [],
                r
            ]);
        }
        return Array.from(byCat.entries()).sort((a, b)=>a[0].localeCompare(b[0]));
    }, [
        retailersSorted
    ]);
    const nearest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!userLocation) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNearestStores"])(userLocation.location, 6);
    }, [
        userLocation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NearMeFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NearMeFilter"], {
                onChange: onLocationChange
            }, void 0, false, {
                fileName: "[project]/src/app/folders/FoldersClient.tsx",
                lineNumber: 77,
                columnNumber: 4
            }, this),
            midVariant === "top" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdPlacements"], {
                position: "mid"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/FoldersClient.tsx",
                lineNumber: 79,
                columnNumber: 28
            }, this) : null,
            userLocation && nearest.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-4",
                        children: "Winkels bij jou in de buurt"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                        lineNumber: 83,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: nearest.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-200 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-gray-900",
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                        lineNumber: 92,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            s.postalCode ? `${s.postalCode} ` : "",
                                            s.city
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                        lineNumber: 93,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            Math.round(s.distanceKm * 10) / 10,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                        lineNumber: 97,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                lineNumber: 88,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                        lineNumber: 86,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/FoldersClient.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, this) : null,
            groups.map(([category, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900 mb-4",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryLabel"])(category)
                        }, void 0, false, {
                            fileName: "[project]/src/app/folders/FoldersClient.tsx",
                            lineNumber: 108,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                            children: items.map((retailer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetailerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RetailerCard"], {
                                        retailer: retailer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                        lineNumber: 114,
                                        columnNumber: 9
                                    }, this)
                                }, retailer.slug, false, {
                                    fileName: "[project]/src/app/folders/FoldersClient.tsx",
                                    lineNumber: 113,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/folders/FoldersClient.tsx",
                            lineNumber: 111,
                            columnNumber: 6
                        }, this)
                    ]
                }, category, true, {
                    fileName: "[project]/src/app/folders/FoldersClient.tsx",
                    lineNumber: 107,
                    columnNumber: 5
                }, this)),
            midVariant === "between" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdPlacements"], {
                position: "mid"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/FoldersClient.tsx",
                lineNumber: 121,
                columnNumber: 32
            }, this) : null
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_4b4ad05b._.js.map