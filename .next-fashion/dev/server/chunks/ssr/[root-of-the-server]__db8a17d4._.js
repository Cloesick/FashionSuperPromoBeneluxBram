module.exports = [
"[project]/src/app/icon.webp.mjs { IMAGE => \"[project]/src/app/icon.webp (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon.webp.mjs { IMAGE => \"[project]/src/app/icon.webp (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/retailers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNlBorderRetailerBySlug",
    ()=>getNlBorderRetailerBySlug,
    "getRetailerBySlug",
    ()=>getRetailerBySlug,
    "getRetailersByCategory",
    ()=>getRetailersByCategory,
    "nlBorderRetailers",
    ()=>nlBorderRetailers,
    "retailers",
    ()=>retailers,
    "retailersBe",
    ()=>retailersBe
]);
const retailersBe = [
    {
        slug: "hm",
        name: "H&M",
        logo: "/retailers/hm.webp",
        color: "#E11D48",
        website: "https://www2.hm.com/nl_be",
        description: "Bekijk H&M promoties en acties op dames-, heren- en kinderkleding.",
        category: "mode",
        seo: {
            folderDay: "doorlopend",
            folderDayDetail: "H&M heeft doorlopend aanbiedingen en tijdelijke acties. Bekijk de nieuwste deals.",
            storeCount: "winkels in België en Nederland",
            pricePositioning: "Mode met regelmatige acties en seizoenskortingen.",
            loyalty: "H&M Member",
            openingHours: "Openingstijden verschillen per vestiging.",
            uniqueSellingPoint: "Grote collectie en regelmatige kortingen."
        }
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
            folderDayDetail: "Zalando heeft doorlopend acties en tijdelijke promoties. Bekijk de nieuwste deals.",
            storeCount: "online",
            pricePositioning: "Grote keuze merken met regelmatige promoties.",
            loyalty: "Account",
            openingHours: "Online",
            uniqueSellingPoint: "Groot aanbod merken met snelle levering en returns."
        }
    },
    {
        slug: "albert-heijn",
        name: "Albert Heijn",
        logo: "/retailers/albert-heijn.webp",
        color: "#00A0E2",
        website: "https://www.ah.be",
        description: "Bekijk de nieuwste Albert Heijn Bonusfolder en ontdek de beste AH aanbiedingen van deze week.",
        category: "supermarkt",
        seo: {
            folderDay: "maandag",
            folderDayDetail: "De nieuwe AH Bonusfolder verschijnt elke maandag en is geldig van maandag tot en met zondag.",
            storeCount: "meer dan 50 winkels in België",
            pricePositioning: "Albert Heijn positioneert zich in het middensegment met wekelijkse Bonus-aanbiedingen en 35% korting via de AH-app.",
            loyalty: "Bonuskaart (gratis) + AH Premium (betaald loyaliteitsprogramma met extra korting)",
            appName: "Albert Heijn app",
            openingHours: "Maandag t/m zaterdag 8:00–20:00, sommige vestigingen ook op zondag geopend.",
            uniqueSellingPoint: "Sterk in huismerken en Bonus-kortingen tot 50%, breed assortiment kant-en-klaar maaltijden."
        }
    },
    {
        slug: "lidl",
        name: "Lidl",
        logo: "/retailers/lidl.webp",
        color: "#0050AA",
        website: "https://www.lidl.be",
        description: "Ontdek de Lidl folder van deze week met de scherpste prijzen en weekendaanbiedingen.",
        category: "supermarkt",
        seo: {
            folderDay: "maandag",
            folderDayDetail: "De Lidl folder verschijnt elke maandag. Daarnaast zijn er speciale weekendpromoties die op donderdag worden aangekondigd.",
            storeCount: "meer dan 310 winkels in België",
            pricePositioning: "Lidl is een discountsupermarkt met een focus op lage prijzen, sterke eigen merken en wekelijkse thema-acties (non-food).",
            loyalty: "Lidl Plus-app met digitale kortingsbonnen, kraskaarten en persoonlijke aanbiedingen.",
            appName: "Lidl Plus",
            openingHours: "Maandag t/m zaterdag 8:00–20:00. De meeste Lidl-winkels zijn gesloten op zondag.",
            uniqueSellingPoint: "Laagste vaste prijzen op basisproducten, wekelijkse non-food thema-aanbiedingen, en bakkerij in elke winkel."
        }
    },
    {
        slug: "delhaize",
        name: "Delhaize",
        logo: "/retailers/delhaize.webp",
        color: "#E31837",
        website: "https://www.delhaize.be",
        description: "Bekijk de Delhaize folder van deze week en profiteer van de beste supermarktpromoties.",
        category: "supermarkt",
        seo: {
            folderDay: "donderdag",
            folderDayDetail: "De nieuwe Delhaize folder verschijnt elke donderdag en is geldig van donderdag tot en met woensdag van de volgende week.",
            storeCount: "meer dan 760 winkels in België (eigen winkels + AD Delhaize affiliates)",
            pricePositioning: "Delhaize positioneert zich als kwaliteitssupermarkt met een breed assortiment, sterke huismerken (365, Delhaize Bio) en regelmatige 1+1 gratis acties.",
            loyalty: "SuperPlus-kaart met persoonlijke kortingen en spaarpunten die inwisselbaar zijn voor korting.",
            appName: "Delhaize app",
            openingHours: "Maandag t/m zaterdag 8:00–20:00, veel AD Delhaize-winkels ook op zondag geopend (9:00–13:00).",
            uniqueSellingPoint: "Grootste assortiment van alle Belgische supermarkten, sterk in vers, bio en lokale producten."
        }
    },
    {
        slug: "colruyt",
        name: "Colruyt",
        logo: "/retailers/colruyt.webp",
        color: "#E94E1B",
        website: "https://www.colruyt.be",
        description: "Bekijk de Colruyt folder en ontdek de laagste prijzen van deze week in België.",
        category: "supermarkt",
        seo: {
            folderDay: "woensdag",
            folderDayDetail: "De nieuwe Colruyt folder verschijnt elke woensdag en is geldig van woensdag tot en met dinsdag van de volgende week.",
            storeCount: "meer dan 240 Colruyt Laagste Prijzen-winkels in België",
            pricePositioning: "Colruyt garandeert de laagste prijs op elk product. Als een concurrent goedkoper is, past Colruyt de prijs onmiddellijk aan.",
            loyalty: "Xtra-kaart met digitale kortingsbonnen en spaarpunten (via de Xtra-app of CLP-app).",
            appName: "Colruyt app (CLP)",
            openingHours: "Maandag t/m zaterdag 8:30–20:00. Alle Colruyt-winkels zijn gesloten op zondag.",
            priceGuarantee: "Colruyt biedt de Laagste Prijzen Garantie: als je hetzelfde product elders goedkoper vindt, past Colruyt de prijs direct aan. Dit geldt voor het volledige assortiment.",
            uniqueSellingPoint: "Laagste prijzen garantie in België, geen reclame-franje: geen muziek, geen fancy inrichting, alles gericht op de laagste prijs voor de klant."
        }
    },
    {
        slug: "aldi",
        name: "ALDI",
        logo: "/retailers/aldi.webp",
        color: "#0B5AA2",
        website: "https://www.aldi.be",
        description: "Bekijk de ALDI folder van deze week en ontdek de nieuwste promoties en straffe specials.",
        category: "supermarkt",
        seo: {
            folderDay: "wekelijks",
            folderDayDetail: "ALDI publiceert elke week een nieuwe folder met verrassende promo’s en straffe specials. Bekijk ook de folder van volgende week om je boodschappen vooruit te plannen.",
            storeCount: "meer dan 445 winkels in België",
            pricePositioning: "ALDI is een discountsupermarkt met een focus op hoge kwaliteit aan de laagst mogelijke prijs, met wekelijks wisselende acties naast het vaste assortiment.",
            loyalty: "ALDI-punten via de ALDI-app (spaarprogramma met voordelen en acties).",
            appName: "ALDI app",
            openingHours: "Maandag t/m zaterdag doorgaans 8:00–20:00 (verschilt per vestiging). ALDI is meestal gesloten op zondag.",
            uniqueSellingPoint: "Sterk in scherpe prijzen, compacte winkels en wekelijkse acties (Specials) naast dagelijkse basisproducten."
        }
    },
    {
        slug: "action",
        name: "Action",
        logo: "/retailers/action.webp",
        color: "#0046AD",
        website: "https://www.action.com/nl-be",
        description: "Bekijk de Action folder en weekactie aanbiedingen in België met kleine prijzen en grote glimlach.",
        category: "discounter",
        seo: {
            folderDay: "woensdag",
            folderDayDetail: "De nieuwe Action-folder verschijnt elke woensdag met weekdeals, nieuwe producten en basics voor elke dag.",
            storeCount: "meer dan 3000 winkels in Europa (ook in België)",
            pricePositioning: "Action is een non-food discounter met een breed en snel wisselend assortiment tegen zeer lage prijzen, met veel producten onder 1 euro.",
            loyalty: "Geen klassieke klantenkaart; je kunt wel een Action-account gebruiken voor favorieten en productinformatie.",
            appName: "Action app",
            openingHours: "Maandag t/m zaterdag doorgaans 9:00–19:00, vaak ook open op zondag (verschilt per winkel).",
            uniqueSellingPoint: "Elke week nieuwe non-food deals (huishouden, decoratie, hobby, multimedia) met extreem scherpe prijzen."
        }
    }
];
const nlBorderRetailers = [];
const retailers = retailersBe;
function getNlBorderRetailerBySlug(slug) {
    return nlBorderRetailers.find((r)=>r.slug === slug);
}
function getRetailerBySlug(slug) {
    return retailersBe.find((r)=>r.slug === slug) ?? nlBorderRetailers.find((r)=>r.slug === slug);
}
function getRetailersByCategory(category) {
    return retailers.filter((r)=>r.category === category);
}
}),
"[project]/src/app/folders/FoldersClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FoldersClient",
    ()=>FoldersClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FoldersClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FoldersClient() from the server but FoldersClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/folders/FoldersClient.tsx <module evaluation>", "FoldersClient");
}),
"[project]/src/app/folders/FoldersClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FoldersClient",
    ()=>FoldersClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FoldersClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FoldersClient() from the server but FoldersClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/folders/FoldersClient.tsx", "FoldersClient");
}),
"[project]/src/app/folders/FoldersClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$folders$2f$FoldersClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/folders/FoldersClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$folders$2f$FoldersClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/folders/FoldersClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$folders$2f$FoldersClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/folders/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FoldersPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/retailers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdPlacements.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$folders$2f$FoldersClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/folders/FoldersClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Alle Folders",
    description: "Bekijk alle actuele reclamefolders en promoties van winkels in België en Nederland. Elke week bijgewerkt.",
    alternates: {
        canonical: "/folders"
    }
};
function FoldersPage() {
    const faqItems = [
        {
            question: "Hoe vaak worden de folders bijgewerkt?",
            answer: "Folders en promoties worden doorlopend bijgewerkt. Veel winkels publiceren wekelijks nieuwe acties. Wij updaten de pagina zodra er nieuwe folders beschikbaar zijn."
        },
        {
            question: "Zijn alle folders gratis te bekijken?",
            answer: "Ja, alle folders zijn gratis te bekijken. Je hebt geen account of registratie nodig."
        },
        {
            question: `Welke winkels staan op ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])()}?`,
            answer: "We verzamelen folders en promoties van zo veel mogelijk winkels, ketens en discounters. Het aanbod groeit continu."
        },
        {
            question: "Kan ik de folder ook op mijn smartphone bekijken?",
            answer: "Ja, onze website is volledig responsive. Je kunt alle folders comfortabel bekijken op je smartphone, tablet of computer. Gebruik de volledig scherm-knop voor de beste ervaring op mobiel."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBreadcrumbJsonLd"])([
                    {
                        name: "Home",
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()
                    },
                    {
                        name: "Folders",
                        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()}/folders`
                    }
                ])
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFAQJsonLd"])(faqItems)
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "text-sm text-gray-500 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "hover:text-blue-700",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 55,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-2",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 58,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900",
                        children: "Folders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 59,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 54,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900 mb-2",
                children: "Alle folders van deze week"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-10",
                children: "Bekijk de actuele reclamefolders van je favoriete winkels in België. Elke week bijgewerkt."
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$folders$2f$FoldersClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FoldersClient"], {
                retailers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retailers"]
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 70,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdPlacements"], {
                position: "bottom"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-4",
                        children: "Reclamefolders online bekijken"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 76,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Op ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])(),
                                    " vind je de nieuwste reclamefolders en promoties van winkels en ketens in België en Nederland. Zo vergelijk je acties snel op één plek."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/folders/page.tsx",
                                lineNumber: 80,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Veel winkels hebben een vaste dag waarop een nieuwe folder verschijnt. Door regelmatig langs te komen mis je geen enkele aanbieding."
                            }, void 0, false, {
                                fileName: "[project]/src/app/folders/page.tsx",
                                lineNumber: 85,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 79,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 75,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-6",
                        children: "Veelgestelde vragen over folders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 95,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: faqItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "bg-white border border-gray-200 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-blue-700",
                                        children: item.question
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/folders/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-6 pb-4 text-gray-600 text-sm",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/folders/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/folders/page.tsx",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/page.tsx",
                        lineNumber: 98,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/page.tsx",
                lineNumber: 94,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/folders/page.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/app/folders/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/folders/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db8a17d4._.js.map