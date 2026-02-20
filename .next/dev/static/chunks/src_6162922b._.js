(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ParticlesBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticlesBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-tsparticles/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2d$slim$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tsparticles-slim/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ParticlesBackground() {
    _s();
    const particlesInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesBackground.useCallback[particlesInit]": async (engine)=>{
            // This loads the slim version of tsparticles which contains the minimal required features
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2d$slim$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlim"])(engine);
        }
    }["ParticlesBackground.useCallback[particlesInit]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: "tsparticles",
        init: particlesInit,
        options: {
            background: {
                color: {
                    value: "transparent"
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 2
                    },
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.8,
                            color: "#f59e0b"
                        }
                    }
                }
            },
            particles: {
                color: {
                    value: "#f59e0b"
                },
                links: {
                    color: "#f59e0b",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: true,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 60
                },
                opacity: {
                    value: 0.3
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 2
                    }
                }
            },
            detectRetina: true
        },
        className: "absolute inset-0 -z-0"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ParticlesBackground.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(ParticlesBackground, "cmdqFBMeZZYPpK6hY2WnPPSxZAw=");
_c = ParticlesBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticlesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Typewriter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Typewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Typewriter({ text, speed = 30, delay = 0, className = "", onComplete }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Typewriter.useEffect": ()=>{
            const timeout = setTimeout({
                "Typewriter.useEffect.timeout": ()=>{
                    setStarted(true);
                }
            }["Typewriter.useEffect.timeout"], delay);
            return ({
                "Typewriter.useEffect": ()=>clearTimeout(timeout)
            })["Typewriter.useEffect"];
        }
    }["Typewriter.useEffect"], [
        delay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Typewriter.useEffect": ()=>{
            if (!started) return;
            if (displayedText.length < text.length) {
                const timeout = setTimeout({
                    "Typewriter.useEffect.timeout": ()=>{
                        setDisplayedText(text.slice(0, displayedText.length + 1));
                    }
                }["Typewriter.useEffect.timeout"], speed);
                return ({
                    "Typewriter.useEffect": ()=>clearTimeout(timeout)
                })["Typewriter.useEffect"];
            } else if (onComplete) {
                onComplete();
            }
        }
    }["Typewriter.useEffect"], [
        displayedText,
        text,
        speed,
        started,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: [
            displayedText,
            displayedText.length < text.length && started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block w-2 h-5 ml-1 bg-brand-amber animate-pulse align-middle"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Typewriter.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Typewriter.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(Typewriter, "kKN/+rpAORa+ly82nA6qRajEex0=");
_c = Typewriter;
var _c;
__turbopack_context__.k.register(_c, "Typewriter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/core/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCHEMA_DATA",
    ()=>SCHEMA_DATA,
    "SITE_CONFIG",
    ()=>SITE_CONFIG
]);
const SITE_CONFIG = {
    name: "Aqib Mehedi",
    company: "Kamal-Paterson Ltd",
    logo: {
        text: "Aqib",
        suffix: " Mehedi"
    },
    title: "Best AI Engineer in Bangladesh | Senior Solutions Architect",
    description: "Aqib Mehedi is the Best AI Engineer in Bangladesh, specializing in custom LLMs, RAG systems, and high-performance Flutter applications. Award-winning innovation and 10+ years experience.",
    url: "https://aqibmehedi.com",
    ogImage: "/og-image.png",
    keywords: [
        "Best AI Engineer in Bangladesh",
        "Top AI Engineer Bangladesh",
        "Hire AI Engineer Dhaka",
        "Generative AI Specialist Bangladesh",
        "LLM Fine-Tuning Expert Bangladesh",
        "RAG System Developer Bangladesh",
        "Senior Mobile Solutions Architect",
        "Best Flutter Developer Bangladesh",
        "Aqib Mehedi",
        "Kamal-Paterson Ltd",
        "Agri-Llama",
        "Krishok AI",
        "AI Consultant Bangladesh",
        "Technical Architect Dhaka",
        "Machine Learning Engineer Bangladesh"
    ],
    author: "Aqib Mehedi",
    location: "Dhaka, Bangladesh",
    coordinates: {
        lat: 23.8103,
        lng: 90.4125
    },
    socials: {
        github: "https://github.com/aqibmehedi007",
        linkedin: "https://linkedin.com/in/aqibmehedi",
        email: "aqibcareer007@gmail.com"
    },
    navLinks: [
        {
            label: "Expertise",
            href: "/#stack"
        },
        {
            label: "Arsenal",
            href: "/#arsenal"
        },
        {
            label: "Projects",
            href: "/#projects"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Approach",
            href: "/#process"
        },
        {
            label: "Contact",
            href: "/#contact"
        }
    ],
    cta: {
        nav: "Hire Me",
        hero: "Architect Your Future",
        contact: "Start the Audit"
    },
    assets: {
        profile: "/profile/aqib_mehedi.jpg",
        resume: "/resume/Aqib-Mehedi-Resume.pdf",
        og: "/og-image.png"
    }
};
const SCHEMA_DATA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}/#person`,
            "name": SITE_CONFIG.name,
            "url": SITE_CONFIG.url,
            "image": {
                "@type": "ImageObject",
                "@id": `${SITE_CONFIG.url}/#primaryimage`,
                "url": `${SITE_CONFIG.url}${SITE_CONFIG.assets.profile}`,
                "contentUrl": `${SITE_CONFIG.url}${SITE_CONFIG.assets.profile}`,
                "caption": `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
                "width": 800,
                "height": 800
            },
            "jobTitle": [
                "Senior AI & Mobile Solutions Architect",
                "Best AI Engineer in Bangladesh",
                "LLM Specialist"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": SITE_CONFIG.company,
                "url": "https://kamal-paterson.com"
            },
            "alternateName": [
                "Aqib Mehedi",
                "Mehedi Aqib",
                "Engineer Aqib",
                "Aqib AI",
                "Best AI Engineer Bangladesh",
                "Top Gen AI Specialist Bangladesh",
                "Leading Flutter Architect Dhaka",
                "Architect Aqib",
                "Aqib GenAI",
                "Aqib RAG Expert"
            ],
            "description": SITE_CONFIG.description,
            "sameAs": [
                SITE_CONFIG.socials.linkedin,
                SITE_CONFIG.socials.github
            ],
            "knowsAbout": [
                "Artificial Intelligence",
                "Generative AI",
                "Large Language Models (LLM)",
                "Retrieval-Augmented Generation (RAG)",
                "Flutter Development",
                "System Architecture",
                "LLM Fine-tuning",
                "MLOps",
                "Computer Vision",
                "AES-256 Encryption",
                "Cloud Computing",
                "AWS",
                "Google Cloud",
                "Vector Databases"
            ],
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "BSc in Computer Science & Engineering",
                    "recognizedBy": {
                        "@type": "Organization",
                        "name": "Daffodil International University"
                    }
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "BASIS Certified Android Developer"
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Machine Learning Specialization",
                    "recognizedBy": {
                        "@type": "Organization",
                        "name": "DeepLearning.AI"
                    }
                }
            ],
            "award": [
                "BASIS National ICT Awards 2018 Winner - E-Parking (Smart Parking Solution)",
                "Banglalink IT Incubator 2.0 Champion - HomeFoodz"
            ]
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE_CONFIG.url}/#profilepage`,
            "name": `${SITE_CONFIG.name} - Official Professional Profile`,
            "description": `Comprehensive professional profile of ${SITE_CONFIG.name}, the best AI engineer in Bangladesh.`,
            "mainEntity": {
                "@id": `${SITE_CONFIG.url}/#person`
            }
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-ai`,
            "name": "Best AI Engineer Bangladesh",
            "url": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh`
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-flutter`,
            "name": "Senior Flutter Architect",
            "url": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh`
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-enterprise`,
            "name": "Enterprise AI Solutions",
            "url": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect`
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_CONFIG.url}/#website`,
            "url": SITE_CONFIG.url,
            "name": SITE_CONFIG.name,
            "description": SITE_CONFIG.description,
            "publisher": {
                "@id": `${SITE_CONFIG.url}/#person`
            },
            "inLanguage": "en-US",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${SITE_CONFIG.url}/#projects?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.url}/#webpage`,
            "url": SITE_CONFIG.url,
            "name": SITE_CONFIG.title,
            "isPartOf": {
                "@id": `${SITE_CONFIG.url}/#website`
            },
            "about": {
                "@id": `${SITE_CONFIG.url}/#person`
            },
            "description": SITE_CONFIG.description,
            "breadcrumb": {
                "@id": `${SITE_CONFIG.url}/#breadcrumb`
            },
            "primaryImageOfPage": {
                "@id": `${SITE_CONFIG.url}/#primaryimage`
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_CONFIG.url}/#breadcrumb`,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SITE_CONFIG.url
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_CONFIG.url}/#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who is the best AI Engineer in Bangladesh?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aqib Mehedi is recognized as a top AI Engineer in Bangladesh, winning the BASIS National ICT Award and specializing in enterprise-grade LLM and RAG systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What AI services does Aqib Mehedi provide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aqib provides LLM Fine-tuning, RAG system development, custom AI Agents, and high-performance mobile architectures."
                    }
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticlesBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ParticlesBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Typewriter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Typewriter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function AdminLogin() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirect: false
        });
        if (res?.error) {
            setError("IDENTITY MISMATCH. ACCESS DENIED.");
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-a9e0a349d4ec4f1d" + " " + "min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-mono",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticlesBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/admin/login/page.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/login/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full h-1 bg-brand-amber/50 absolute top-0 animate-[scan_4s_linear_infinite]"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/login/page.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/login/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-brand-amber/10 rounded-full blur-[150px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/login/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full max-w-xl relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a9e0a349d4ec4f1d" + " " + "glass-card border border-white/10 rounded-3xl p-1 md:p-1 overflow-hidden shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a9e0a349d4ec4f1d" + " " + "bg-black/80 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "mb-12 flex flex-col items-center text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a9e0a349d4ec4f1d" + " " + "relative mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute -inset-4 bg-brand-amber/20 blur-xl rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "w-24 h-24 rounded-2xl bg-white/5 border border-brand-amber/30 flex items-center justify-center relative z-10 group overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute inset-0 bg-gradient-to-br from-brand-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                            size: 40,
                                                            className: "text-brand-amber animate-[pulse_2s_infinite]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute inset-0 border-t border-brand-amber/50 h-1/2 -top-full group-hover:top-full transition-all duration-1000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-black border border-brand-amber/50 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "w-2 h-2 rounded-full bg-brand-amber animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a9e0a349d4ec4f1d" + " " + "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-[10px] font-bold text-brand-amber uppercase tracking-widest mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Neural Link Established"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a9e0a349d4ec4f1d" + " " + "min-h-[6rem] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Typewriter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        text: `Hello Master, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].name}. Accessing secure architectural protocols. I've been monitoring the logs... We missed your strategic oversight. Please calibrate your identity to proceed.`,
                                                        speed: 25,
                                                        className: "text-slate-300 text-sm md:text-base leading-relaxed tracking-tight",
                                                        onComplete: ()=>setShowForm(true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/login/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a9e0a349d4ec4f1d" + " " + `transition-all duration-1000 transform ${showForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "space-y-6",
                                        children: [
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold animate-shake",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "tracking-widest uppercase",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "flex justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-brand-amber transition-colors",
                                                                        children: "Admin Core Identity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                        size: 12,
                                                                        className: "text-slate-700 group-focus-within:text-brand-amber"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: email,
                                                                onChange: (e)=>setEmail(e.target.value),
                                                                required: true,
                                                                placeholder: "CORP\\AQIB.MEHEDI",
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-amber/50 focus:bg-white/[0.05] transition-all text-sm font-mono tracking-tight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "flex justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-brand-amber transition-colors",
                                                                        children: "Neural Keyphrase"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                        size: 12,
                                                                        className: "text-slate-700 group-focus-within:text-brand-amber"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                value: password,
                                                                onChange: (e)=>setPassword(e.target.value),
                                                                required: true,
                                                                placeholder: "••••••••••••••••",
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-amber/50 focus:bg-white/[0.05] transition-all text-sm font-mono tracking-tight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full relative group overflow-hidden bg-brand-amber text-black font-bold text-[10px] uppercase tracking-[0.3em] py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this),
                                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "flex items-center justify-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-2 h-2 rounded-full bg-black animate-bounce"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-0.15s]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-0.3s]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 45
                                                            }, this),
                                                            "DECRYPTING..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 41
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "flex items-center justify-center gap-3",
                                                        children: [
                                                            "Initialize Secure Session ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 71
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>router.push("/"),
                                                className: "jsx-a9e0a349d4ec4f1d" + " " + "w-full text-slate-600 hover:text-brand-amber transition-colors text-[10px] font-bold uppercase tracking-[0.2em] pt-4 block text-center",
                                                children: "Terminate Access Request"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/login/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/login/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/login/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/login/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a9e0a349d4ec4f1d" + " " + "mt-8 flex justify-between px-4 text-[9px] font-bold text-slate-800 uppercase tracking-widest",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a9e0a349d4ec4f1d",
                                children: "Node: ARCH-01"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/login/page.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a9e0a349d4ec4f1d" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9e0a349d4ec4f1d" + " " + "w-1.5 h-1.5 rounded-full bg-brand-amber/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/login/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this),
                                    "System: Optimal"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/login/page.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a9e0a349d4ec4f1d",
                                children: "V: 2.4.0-Stable"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/login/page.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/login/page.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/login/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a9e0a349d4ec4f1d",
                children: "@keyframes scan{0%{top:-10%}to{top:110%}}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-4px)}75%{transform:translate(4px)}}.animate-shake{animation:.5s cubic-bezier(.36,.07,.19,.97) both shake}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/login/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(AdminLogin, "JIPT4rSg/uJm1cT1S3+L/Wl5m+g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminLogin;
var _c;
__turbopack_context__.k.register(_c, "AdminLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6162922b._.js.map