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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/lib/folders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCurrentFolders",
    ()=>getAllCurrentFolders,
    "getCurrentFolder",
    ()=>getCurrentFolder,
    "getDealsForRetailer",
    ()=>getDealsForRetailer,
    "getFoldersForRetailer",
    ()=>getFoldersForRetailer,
    "getScrapedAt",
    ()=>getScrapedAt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "folders");
const STORAGE_BUCKET = process.env.SUPABASE_FOLDERS_BUCKET || "folders";
const VERTICAL = process.env.VERTICAL || "superpromobelgie";
function getSupabaseServerClient() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
        }
    });
}
function readScrapedData(retailerSlug) {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, `${retailerSlug}.json`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return null;
    try {
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        return JSON.parse(raw);
    } catch  {
        console.error(`Failed to read folder data for ${retailerSlug}`);
        return null;
    }
}
async function readScrapedDataFromStorage(retailerSlug) {
    const supabase = getSupabaseServerClient();
    if (!supabase) return null;
    const objectPath = `${VERTICAL}/${retailerSlug}/current.json`;
    try {
        const { data, error } = await supabase.storage.from(STORAGE_BUCKET).download(objectPath);
        if (error || !data) return null;
        const ab = await data.arrayBuffer();
        const raw = Buffer.from(ab).toString("utf-8");
        return JSON.parse(raw);
    } catch  {
        console.error(`Failed to read storage folder data for ${retailerSlug}`);
        return null;
    }
}
async function readScrapedDataPreferred(retailerSlug) {
    const fromStorage = await readScrapedDataFromStorage(retailerSlug);
    if (fromStorage) return fromStorage;
    return readScrapedData(retailerSlug);
}
async function getFoldersForRetailer(retailerSlug) {
    const data = await readScrapedDataPreferred(retailerSlug);
    return data?.folders ?? [];
}
async function getDealsForRetailer(retailerSlug) {
    const data = await readScrapedDataPreferred(retailerSlug);
    return data?.deals ?? [];
}
async function getCurrentFolder(retailerSlug) {
    const folders = await getFoldersForRetailer(retailerSlug);
    if (folders.length === 0) return null;
    const now = new Date();
    const current = folders.find((f)=>{
        const from = new Date(f.validFrom);
        const until = new Date(f.validUntil);
        return now >= from && now <= until;
    });
    return current ?? folders[0];
}
async function getScrapedAt(retailerSlug) {
    const data = await readScrapedDataPreferred(retailerSlug);
    return data?.scrapedAt ? new Date(data.scrapedAt) : null;
}
async function getAllCurrentFolders() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_DIR)) return [];
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(DATA_DIR).filter((f)=>f.endsWith(".json"));
    const results = await Promise.all(files.map(async (file)=>{
        const slug = file.replace(".json", "");
        const folder = await getCurrentFolder(slug);
        if (!folder) return null;
        return {
            slug,
            folder
        };
    }));
    return results.filter(Boolean);
}
}),
"[project]/src/components/FolderViewer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderViewer",
    ()=>FolderViewer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FolderViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FolderViewer() from the server but FolderViewer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FolderViewer.tsx <module evaluation>", "FolderViewer");
}),
"[project]/src/components/FolderViewer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderViewer",
    ()=>FolderViewer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FolderViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FolderViewer() from the server but FolderViewer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FolderViewer.tsx", "FolderViewer");
}),
"[project]/src/components/FolderViewer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FolderViewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FolderViewer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FolderViewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FolderViewer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FolderViewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/DealsSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealsSection",
    ()=>DealsSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DealsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DealsSection() from the server but DealsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/DealsSection.tsx <module evaluation>", "DealsSection");
}),
"[project]/src/components/DealsSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealsSection",
    ()=>DealsSection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DealsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DealsSection() from the server but DealsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/DealsSection.tsx", "DealsSection");
}),
"[project]/src/components/DealsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DealsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/DealsSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DealsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/DealsSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DealsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/folders/[retailer]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RetailerPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/retailers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$folders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/folders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FolderViewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FolderViewer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdPlacements.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DealsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DealsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retailers"].map((r)=>({
            retailer: r.slug
        }));
}
async function generateMetadata({ params }) {
    const { retailer: slug } = await params;
    const retailer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRetailerBySlug"])(slug);
    if (!retailer) return {};
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])();
    const pageUrl = `${baseUrl}/folders/${slug}`;
    return {
        title: `${retailer.name} folder deze week`,
        description: retailer.description,
        alternates: {
            canonical: `/folders/${slug}`
        },
        openGraph: {
            title: `${retailer.name} folder deze week | ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])()}`,
            description: retailer.description,
            url: pageUrl,
            images: [
                {
                    url: `${baseUrl}/icon.webp`,
                    width: 512,
                    height: 512,
                    alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])()
                }
            ]
        },
        twitter: {
            card: "summary",
            title: `${retailer.name} folder deze week | ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])()}`,
            description: retailer.description,
            images: [
                `${baseUrl}/icon.webp`
            ]
        }
    };
}
async function RetailerPage({ params }) {
    const { retailer: slug } = await params;
    const retailer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRetailerBySlug"])(slug);
    if (!retailer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const currentFolder = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$folders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentFolder"])(slug);
    const deals = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$folders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDealsForRetailer"])(slug);
    const outboundUrl = `/out/${slug}`;
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteConfig"])();
    const isSvgLogo = retailer.logo.toLowerCase().endsWith(".webp");
    const { seo } = retailer;
    const faqItems = [
        {
            question: `Wanneer verschijnt de nieuwe ${retailer.name} folder?`,
            answer: seo.folderDayDetail
        },
        {
            question: `Hoeveel ${retailer.name} winkels zijn er in België?`,
            answer: `${retailer.name} heeft ${seo.storeCount}.`
        },
        {
            question: `Wat zijn de openingsuren van ${retailer.name}?`,
            answer: seo.openingHours
        },
        {
            question: `Is ${retailer.name} goedkoop?`,
            answer: seo.pricePositioning
        },
        {
            question: `Heeft ${retailer.name} een klantenkaart of loyaliteitsprogramma?`,
            answer: seo.loyalty
        },
        ...seo.appName ? [
            {
                question: `Heeft ${retailer.name} een app?`,
                answer: `Ja, ${retailer.name} biedt de ${seo.appName} aan. Hiermee kun je de folder digitaal bekijken, boodschappenlijstjes maken en extra kortingen ontvangen.`
            }
        ] : [],
        ...seo.priceGuarantee ? [
            {
                question: `Wat is de laagste prijzen garantie van ${retailer.name}?`,
                answer: seo.priceGuarantee
            }
        ] : [],
        {
            question: `Waar kan ik de ${retailer.name} folder online bekijken?`,
            answer: `Op ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteTitle"])()} kun je altijd de actuele ${retailer.name} folder gratis bekijken. We updaten de folder elke ${seo.folderDay} zodat je altijd de nieuwste promoties vindt.`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetailerFolderJsonLd"])(retailer.name, slug, currentFolder?.validFrom, currentFolder?.validUntil)
            }, void 0, false, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 126,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFAQJsonLd"])(faqItems)
            }, void 0, false, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 134,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBreadcrumbJsonLd"])([
                    {
                        name: "Home",
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()
                    },
                    {
                        name: "Folders",
                        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()}/folders`
                    },
                    {
                        name: `${retailer.name} folder`,
                        url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()}/folders/${slug}`
                    }
                ])
            }, void 0, false, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 135,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "text-sm text-gray-500 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:text-blue-700",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 147,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-2",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 150,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/folders",
                        className: "hover:text-blue-700",
                        children: "Folders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 151,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-2",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 154,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900",
                        children: retailer.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 155,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 146,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-8",
                children: [
                    isSvgLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: retailer.logo,
                        alt: `${retailer.name} logo`,
                        width: 56,
                        height: 56,
                        className: "w-14 h-14 rounded-xl object-cover",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 161,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: retailer.logo,
                        alt: `${retailer.name} logo`,
                        width: 56,
                        height: 56,
                        className: "w-14 h-14 rounded-xl object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: [
                                    retailer.name,
                                    " folder deze week"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                lineNumber: 179,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: retailer.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                lineNumber: 182,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 159,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdPlacements"], {
                position: "mid"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 186,
                columnNumber: 4
            }, this),
            currentFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "folder-viewer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DealsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DealsSection"], {
                        retailer: retailer,
                        deals: deals,
                        fallbackPages: currentFolder.pages
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FolderViewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FolderViewer"], {
                            folder: currentFolder,
                            retailer: retailer
                        }, void 0, false, {
                            fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                            lineNumber: 197,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 196,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 190,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-50 border border-amber-200 rounded-xl p-8 text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-amber-800 font-medium mb-2",
                        children: [
                            "Er is momenteel geen folder beschikbaar voor ",
                            retailer.name,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 202,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-amber-700 text-sm",
                        children: "Folders worden wekelijks bijgewerkt. Kom later terug of bekijk onze Facebook-groep voor de laatste updates."
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 205,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 201,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: outboundUrl,
                        target: "_blank",
                        rel: "noopener noreferrer sponsored",
                        className: "inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 6
                            }, this),
                            "Bezoek ",
                            retailer.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 214,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: site.facebookGroupUrl ?? "https://www.facebook.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 6
                            }, this),
                            "Bekijk de beste deals in onze groep"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 223,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 213,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdPlacements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdPlacements"], {
                position: "bottom"
            }, void 0, false, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 234,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-6",
                        children: [
                            "Veelgestelde vragen over ",
                            retailer.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 238,
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
                                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-6 pb-4 text-gray-600 text-sm",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                                lineNumber: 243,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                        lineNumber: 241,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/folders/[retailer]/page.tsx",
                lineNumber: 237,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/folders/[retailer]/page.tsx",
        lineNumber: 125,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/app/folders/[retailer]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/folders/[retailer]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__205d8605._.js.map