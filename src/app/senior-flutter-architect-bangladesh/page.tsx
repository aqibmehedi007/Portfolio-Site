import Link from "next/link";
import { Smartphone, Shield, Zap, Award, Brain, MessageSquare, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/core/config";
import Hero from "@/components/features/Hero";
import TechAuthority from "@/components/features/TechAuthority";
import MediaShowcase from "@/components/features/MediaShowcase";
import ModularPortfolio from "@/components/features/ModularPortfolio";
import ProcessMap from "@/components/features/ProcessMap";

import { prisma } from "@/core/prisma";

const PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh/#webpage`,
            "url": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh`,
            "name": `Senior Flutter Architect in Bangladesh | ${SITE_CONFIG.name} - Mobile Lead`,
            "description": "The leading Flutter Architect in Bangladesh. Specializing in high-security fintech, performance optimization, and custom AI integrations for mobile.",
            "breadcrumb": { "@id": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh/#breadcrumb` },
            "primaryImageOfPage": { "@id": `${SITE_CONFIG.url}/#primaryimage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh/#breadcrumb`,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SITE_CONFIG.url
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Senior Flutter Architect",
                    "item": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh`
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh/#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who is the best Flutter developer in Bangladesh?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aqib Mehedi is a leading Senior Flutter Architect in Bangladesh with 6+ years of experience building high-security fintech and AI-native mobile applications."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Flutter be used for high-security fintech?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, with proper architectural patterns like AES-256 encryption, certificate pinning, and root detection, which Aqib implements for enterprise-grade mobile solutions."
                    }
                }
            ]
        }
    ]
};

export const metadata = {
    title: `Senior Flutter Architect in Bangladesh | ${SITE_CONFIG.name} - Mobile Lead`,
    description: "The leading Flutter Architect in Bangladesh. Specializing in high-security fintech, performance optimization, and custom AI integrations for mobile.",
};

export default async function FlutterArchitectPage() {
    const projects = await prisma.project.findMany({
        where: { featured: true },
        orderBy: { orderIdx: "asc" }
    });

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white font-display">
                        {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
                    </Link>
                    <div className="hidden gap-8 text-sm font-medium text-slate-400 md:flex">
                        {SITE_CONFIG.navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-all hover:scale-105">
                            {SITE_CONFIG.cta.nav}
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-1 overflow-hidden">
                <Hero
                    title={<>Senior Flutter <br /> Architect</>}
                    subtitle={<>6+ years of dedicated Flutter mastery. I build apps that don't just work—they outperform native solutions in security, smoothness, and maintainability.</>}
                    badgeText="Mobile Engineering Excellence"
                />

                <TechAuthority />

                {/* Validated Authority Section (Special for Flutter) */}
                <section className="py-24 bg-black/50 border-y border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Validated Authority</h2>
                        <h3 className="text-3xl font-bold text-white mb-12 sm:text-5xl">Proven Architectural Success</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="glass-card">
                                <h4 className="text-xl font-bold text-white mb-4">Danesh Exchange</h4>
                                <p className="text-slate-400">
                                    High-security Australian FX platform. 60+ currencies, enterprise security, and
                                    3000+ branch integration. A benchmark for Flutter security.
                                </p>
                            </div>
                            <div className="glass-card">
                                <h4 className="text-xl font-bold text-white mb-4">Agri-Llama Mobile</h4>
                                <p className="text-slate-400">
                                    Optimizing large language models to run smoothly on low-resource Android devices
                                    via Flutter, bringing AI to the next billion users.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <MediaShowcase />
                <ProcessMap />

                {/* Specializations Grid */}
                <section className="py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4 text-center">Technical Depth</h2>
                            <h3 className="text-3xl font-bold text-white sm:text-5xl text-center">Flutter Specializations</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Strategic Bloc/Provider Architecture",
                                "Method Channel Native Integration",
                                "Custom Paint Rendering Pipelines",
                                "Isolates-based Heavy Computation",
                                "Zero-trust Security Auditing",
                                "CI/CD with Codemagic & Github Actions"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 glass p-6 rounded-2xl">
                                    <Shield className="text-brand-amber" size={20} />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Grid Section */}
                <section id="projects" className="py-24 bg-black/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Portfolio</h2>
                            <h3 className="text-3xl font-bold text-white">Engineering Inventory</h3>
                        </div>
                        <ModularPortfolio projects={projects} />
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/5 bg-black pt-24 pb-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <Link href="/" className="text-xl font-bold text-white font-display mb-6 block">
                        Aqib<span className="text-brand-amber">.</span>Dev
                    </Link>
                    <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.name}. Senior Flutter Lead.</p>
                </div>
            </footer>
        </div>
    );
}

