module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/retailers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/folders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key, {
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
"[project]/src/lib/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategoryLabel",
    ()=>getCategoryLabel,
    "getDefaultMetaDescription",
    ()=>getDefaultMetaDescription,
    "getSiteBaseUrl",
    ()=>getSiteBaseUrl,
    "getSiteConfig",
    ()=>getSiteConfig,
    "getSiteTitle",
    ()=>getSiteTitle
]);
function env(name) {
    return typeof process !== "undefined" ? process.env[name] : undefined;
}
function getSiteConfig() {
    const verticalRaw = (env("NEXT_PUBLIC_RETAIL_VERTICAL") ?? "general").toLowerCase();
    const vertical = verticalRaw === "diy" ? "diy" : verticalRaw === "supermarket" ? "supermarket" : verticalRaw === "electronics" ? "electronics" : verticalRaw === "beauty" ? "beauty" : verticalRaw === "fashion" ? "fashion" : verticalRaw === "home-garden" ? "home-garden" : "general";
    const name = env("NEXT_PUBLIC_SITE_NAME") ?? "FashionPromo";
    const regionLabel = env("NEXT_PUBLIC_SITE_REGION") ?? "Benelux";
    const domain = env("NEXT_PUBLIC_SITE_DOMAIN") ?? "fashionpromo.local";
    const facebookGroupUrl = env("NEXT_PUBLIC_FACEBOOK_GROUP_URL");
    return {
        name,
        regionLabel,
        domain,
        vertical,
        facebookGroupUrl
    };
}
function getSiteTitle() {
    const c = getSiteConfig();
    return c.regionLabel ? `${c.name} ${c.regionLabel}` : c.name;
}
function getSiteBaseUrl() {
    const c = getSiteConfig();
    return `https://${c.domain}`;
}
function getDefaultMetaDescription() {
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
function getCategoryLabel(category) {
    const labels = {
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
        "vrije-tijd": "Vrije tijd"
    };
    return labels[category] ?? category;
}
}),
"[project]/src/app/sitemap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/retailers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$folders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/folders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-route] (ecmascript)");
;
;
;
const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])();
async function sitemap() {
    const retailerPages = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$retailers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["retailers"].map(async (r)=>({
            url: `${BASE_URL}/folders/${r.slug}`,
            lastModified: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$folders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScrapedAt"])(r.slug) ?? new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        })));
    const latestScrape = retailerPages.reduce((latest, p)=>{
        const d = p.lastModified instanceof Date ? p.lastModified : new Date(p.lastModified);
        return d > latest ? d : latest;
    }, new Date(0));
    return [
        {
            url: BASE_URL,
            lastModified: latestScrape.getTime() > 0 ? latestScrape : new Date(),
            changeFrequency: "daily",
            priority: 1
        },
        {
            url: `${BASE_URL}/folders`,
            lastModified: latestScrape.getTime() > 0 ? latestScrape : new Date(),
            changeFrequency: "daily",
            priority: 0.9
        },
        ...retailerPages,
        {
            url: `${BASE_URL}/veelgestelde-vragen`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: `${BASE_URL}/over-ons`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3
        }
    ];
}
}),
"[project]/src/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sitemap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/src/app/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sitemap.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__78ca2c43._.js.map