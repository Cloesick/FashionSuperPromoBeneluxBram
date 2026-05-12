module.exports = [
"[project]/src/components/FolderViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderViewer",
    ()=>FolderViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
"use client";
;
;
;
;
;
;
function FolderViewer({ folder, retailer }) {
    const hasEmbed = !!folder.embedUrl;
    const hasPdf = !!folder.pdfUrl;
    const hasPages = folder.pages.length > 0;
    const embedHost = (()=>{
        if (!folder.embedUrl) return null;
        try {
            return new URL(folder.embedUrl).hostname;
        } catch  {
            return null;
        }
    })();
    const isEmbedBlocked = !!embedHost && (retailer.slug === "delhaize" || embedHost === "ah.be" || embedHost.endsWith(".ah.be") || embedHost === "folder.aldi.be" || embedHost.endsWith(".folder.aldi.be") || embedHost === "view.publitas.com" || embedHost.endsWith(".publitas.com"));
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trackingEnabled, setTrackingEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mode = hasPages ? "pages" : "embed";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        pathname,
        mode,
        folder.pages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hasConsent = ()=>{
            if (typeof document === "undefined") return false;
            return document.cookie.split(";").map((c)=>c.trim()).some((c)=>c === "sp_cookie_consent=accepted" || c.startsWith("sp_cookie_consent=accepted"));
        };
        const update = ()=>setTrackingEnabled(hasConsent());
        update();
        window.addEventListener("sp_consent_changed", update);
        window.addEventListener("storage", update);
        return ()=>{
            window.removeEventListener("sp_consent_changed", update);
            window.removeEventListener("storage", update);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!trackingEnabled) return;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const send = undefined;
        const t = undefined;
        const onScroll = undefined;
    }, [
        trackingEnabled,
        retailer.slug
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!trackingEnabled) return;
        if (mode !== "pages") return;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const key = undefined;
    }, [
        trackingEnabled,
        mode,
        currentPage,
        retailer.slug
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ua = navigator.userAgent;
        const detectedIOS = /iP(hone|od|ad)/.test(ua);
        setIsIOS(detectedIOS);
    }, []);
    const validFrom = new Date(folder.validFrom).toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const validUntil = new Date(folder.validUntil).toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-900",
                        children: folder.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 181,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FolderViewer.tsx",
                                    lineNumber: 184,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        validFrom,
                                        " - ",
                                        validUntil
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FolderViewer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FolderViewer.tsx",
                            lineNumber: 183,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 182,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FolderViewer.tsx",
                lineNumber: 180,
                columnNumber: 4
            }, this),
            mode === "embed" && hasEmbed && !isEmbedBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${isFullscreen ? "fixed inset-0 z-50 bg-white" : ""}`,
                        children: [
                            isIOS && !hasPdf && !hasPages && !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:hidden px-6 py-4 border-b border-gray-100 bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: "Op iPhone wordt de online folder soms geblokkeerd in deze pagina."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FolderViewer.tsx",
                                        lineNumber: 200,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: folder.embedUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition",
                                        children: "Open in nieuw tabblad"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FolderViewer.tsx",
                                        lineNumber: 204,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 199,
                                columnNumber: 8
                            }, this),
                            isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsFullscreen(false),
                                className: "absolute z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 shadow-lg transition",
                                style: {
                                    top: "calc(env(safe-area-inset-top) + 1rem)",
                                    right: "calc(env(safe-area-inset-right) + 1rem)"
                                },
                                children: "Sluiten"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 215,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: folder.embedUrl,
                                title: `${retailer.name} folder`,
                                className: `w-full border-0 ${isFullscreen ? "h-full" : "h-[70dvh] sm:h-[750px] lg:h-[900px]"}`,
                                allow: "fullscreen",
                                loading: "lazy",
                                sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 226,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 195,
                        columnNumber: 6
                    }, this),
                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end px-6 py-3 border-t border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsFullscreen(true),
                            className: "inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FolderViewer.tsx",
                                    lineNumber: 243,
                                    columnNumber: 9
                                }, this),
                                "Volledig scherm"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FolderViewer.tsx",
                            lineNumber: 239,
                            columnNumber: 8
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 238,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FolderViewer.tsx",
                lineNumber: 194,
                columnNumber: 5
            }, this) : mode === "pages" && hasPages ? /* Fallback: Image page viewer */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-3/4 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: folder.pages[currentPage].imageUrl,
                            alt: `${retailer.name} folder pagina ${currentPage + 1}`,
                            fill: true,
                            className: "object-contain",
                            priority: currentPage === 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/FolderViewer.tsx",
                            lineNumber: 253,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 252,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-t border-gray-100",
                        children: [
                            currentPage > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/folders/${retailer.slug}/p/${currentPage}`,
                                className: "text-sm font-medium text-gray-700 hover:text-blue-700 transition",
                                children: "Vorige"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 264,
                                columnNumber: 8
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-300",
                                children: "Vorige"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 271,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "Pagina ",
                                    currentPage + 1,
                                    " van ",
                                    folder.pages.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 273,
                                columnNumber: 7
                            }, this),
                            currentPage < folder.pages.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/folders/${retailer.slug}/p/${currentPage + 2}`,
                                className: "text-sm font-medium text-gray-700 hover:text-blue-700 transition",
                                children: "Volgende"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 277,
                                columnNumber: 8
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-300",
                                children: "Volgende"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FolderViewer.tsx",
                                lineNumber: 284,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 262,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FolderViewer.tsx",
                lineNumber: 251,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 border border-gray-200 rounded-xl p-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "De folderpagina's worden binnenkort geladen."
                }, void 0, false, {
                    fileName: "[project]/src/components/FolderViewer.tsx",
                    lineNumber: 292,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FolderViewer.tsx",
                lineNumber: 291,
                columnNumber: 5
            }, this),
            mode === "pages" && folder.pages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-2 overflow-x-auto pb-2",
                children: folder.pages.map((page, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: i === 0 ? `/folders/${retailer.slug}` : `/folders/${retailer.slug}/p/${i + 1}`,
                        className: `shrink-0 w-16 h-22 rounded-md overflow-hidden border-2 transition ${i === currentPage ? "border-blue-600 shadow-sm" : "border-gray-200 hover:border-gray-300"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: page.imageUrl,
                            alt: `Pagina ${i + 1}`,
                            width: 64,
                            height: 88,
                            className: "object-cover w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FolderViewer.tsx",
                            lineNumber: 315,
                            columnNumber: 8
                        }, this)
                    }, page.pageNumber, false, {
                        fileName: "[project]/src/components/FolderViewer.tsx",
                        lineNumber: 302,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FolderViewer.tsx",
                lineNumber: 300,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FolderViewer.tsx",
        lineNumber: 178,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/DealsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealsSection",
    ()=>DealsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function DealsSection({ retailer, deals, fallbackPages }) {
    const [trackingEnabled, setTrackingEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hasConsent = ()=>{
            if (typeof document === "undefined") return false;
            return document.cookie.split(";").map((c)=>c.trim()).some((c)=>c === "sp_cookie_consent=accepted" || c.startsWith("sp_cookie_consent=accepted"));
        };
        const update = ()=>setTrackingEnabled(hasConsent());
        update();
        window.addEventListener("sp_consent_changed", update);
        window.addEventListener("storage", update);
        return ()=>{
            window.removeEventListener("sp_consent_changed", update);
            window.removeEventListener("storage", update);
        };
    }, []);
    const trackDealClick = (deal)=>{
        if (!trackingEnabled) return;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const destinationUrl = undefined;
        const key = undefined;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-gray-900 mb-4",
                children: "Producten"
            }, void 0, false, {
                fileName: "[project]/src/components/DealsSection.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            deals.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                children: deals.slice(0, 24).map((d)=>{
                    const href = d.affiliateUrl || `#folder-viewer`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        target: d.affiliateUrl ? "_blank" : undefined,
                        rel: d.affiliateUrl ? "noopener noreferrer sponsored" : undefined,
                        onClick: ()=>trackDealClick(d),
                        className: "bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition",
                        children: [
                            d.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: d.imageUrl,
                                alt: d.product,
                                width: 400,
                                height: 250,
                                className: "w-full h-40 object-cover rounded-lg mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 84,
                                columnNumber: 10
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-gray-900",
                                children: d.product
                            }, void 0, false, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 92,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 mt-1",
                                children: [
                                    typeof d.promoPrice === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-green-700",
                                        children: [
                                            "€ ",
                                            d.promoPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DealsSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 11
                                    }, this) : null,
                                    typeof d.originalPrice === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 line-through",
                                        children: [
                                            "€ ",
                                            d.originalPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DealsSection.tsx",
                                        lineNumber: 100,
                                        columnNumber: 11
                                    }, this) : null,
                                    d.discount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-blue-700",
                                        children: d.discount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DealsSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 11
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 93,
                                columnNumber: 9
                            }, this),
                            d.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 mt-2",
                                children: d.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 109,
                                columnNumber: 10
                            }, this) : null
                        ]
                    }, d.id, true, {
                        fileName: "[project]/src/components/DealsSection.tsx",
                        lineNumber: 75,
                        columnNumber: 8
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DealsSection.tsx",
                lineNumber: 71,
                columnNumber: 5
            }, this) : (fallbackPages?.length ?? 0) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                children: fallbackPages?.slice(0, 12).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#folder-viewer",
                        className: "bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: p.imageUrl,
                                alt: `Pagina ${p.pageNumber}`,
                                width: 400,
                                height: 520,
                                className: "w-full h-40 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 123,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-sm text-gray-800 font-medium",
                                children: [
                                    "Pagina ",
                                    p.pageNumber
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DealsSection.tsx",
                                lineNumber: 130,
                                columnNumber: 8
                            }, this)
                        ]
                    }, p.pageNumber, true, {
                        fileName: "[project]/src/components/DealsSection.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/DealsSection.tsx",
                lineNumber: 116,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-700",
                children: "Bekijk de folder hierboven voor de actuele promoties."
            }, void 0, false, {
                fileName: "[project]/src/components/DealsSection.tsx",
                lineNumber: 137,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DealsSection.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=src_components_d06d9243._.js.map