(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/features/VisitorTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitorTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function VisitorTracker() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisitorTracker.useEffect": ()=>{
            const trackVisitor = {
                "VisitorTracker.useEffect.trackVisitor": async ()=>{
                    try {
                        // We only track once per session/tab ideally or simply on mount
                        await fetch("/api/track", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                platform: navigator.platform,
                                language: navigator.language
                            })
                        });
                    } catch (error) {
                    // Silently fail as tracking shouldn't break the UX
                    }
                }
            }["VisitorTracker.useEffect.trackVisitor"];
            trackVisitor();
        }
    }["VisitorTracker.useEffect"], []);
    return null; // Invisible component
}
_s(VisitorTracker, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = VisitorTracker;
var _c;
__turbopack_context__.k.register(_c, "VisitorTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_features_VisitorTracker_tsx_d79cc5a5._.js.map