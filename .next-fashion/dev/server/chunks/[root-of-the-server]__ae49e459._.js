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
"[project]/src/app/robots.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>robots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-route] (ecmascript)");
;
function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSiteBaseUrl"])()}/sitemap.xml`
    };
}
}),
"[project]/src/app/robots--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/robots.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "text/plain";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "robots";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./robots.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
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
"[project]/src/app/robots--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/robots--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/robots.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae49e459._.js.map