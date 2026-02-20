import Link from "next/link";
import { Server, Database, Brain, ArrowRight, ShieldCheck, Cpu, Globe } from "lucide-react";
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
            "@id": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect/#webpage`,
            "url": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect`,
            "name": `Enterprise AI Solutions Architect in Bangladesh | ${SITE_CONFIG.name}`,
            "description": "Strategic architect for production-grade AI infrastructure. LLM Fine-tuning, RAG pipelines, and high-performance backend systems by Aqib Mehedi.",
            "breadcrumb": { "@id": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect/#breadcrumb` },
            "primaryImageOfPage": { "@id": `${SITE_CONFIG.url}/#primaryimage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect/#breadcrumb`,
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
                    "name": "Enterprise AI Architect",
                    "item": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect`
                }
            ]
        }
    ]
};

export const metadata = {
    title: `Enterprise AI Solutions Architect in Bangladesh | ${SITE_CONFIG.name}`,
    description: "Strategic architect for production-grade AI infrastructure. LLM Fine-tuning, RAG pipelines, and high-performance backend systems by Aqib Mehedi.",
};

export default async function EnterpriseAIPage() {
    const projects = await prisma.project.findMany({
        where: { featured: true },
        orderBy: { orderIdx: "asc" }
    });

    const processSteps = await prisma.processStep.findMany({ orderBy: { orderIdx: "asc" } });

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
                    title={<>Enterprise AI <br /> Solutions Architect</>}
                    subtitle={<>Bridging the gap between raw research and production-hardened AI deployments. I architect secure, scalable, and high-performance systems for global enterprises.</>}
                    badgeText="Strategic Focus: AI Ecosystems"
                />

                <TechAuthority />

                {/* Engineering Depth Section (Special for Enterprise) */}
                <section className="py-24 bg-black/50 border-y border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Engineering Depth</h2>
                        <h3 className="text-3xl font-bold text-white mb-12 sm:text-5xl">Production-Grade Intelligence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card">
                                <ShieldCheck className="text-brand-amber mb-4" size={32} />
                                <h4 className="text-xl font-bold text-white mb-2">Security First</h4>
                                <p className="text-slate-400 text-sm">
                                    Zero-Trust architectures and PII masking for sensitive enterprise data pipelines.
                                </p>
                            </div>
                            <div className="glass-card">
                                <Cpu className="text-brand-amber mb-4" size={32} />
                                <h4 className="text-xl font-bold text-white mb-2">Compute Optimization</h4>
                                <p className="text-slate-400 text-sm">
                                    Scaling inference using vLLM, DeepSpeed, and custom Kubernetes operators.
                                </p>
                            </div>
                            <div className="glass-card">
                                <Globe className="text-brand-amber mb-4" size={32} />
                                <h4 className="text-xl font-bold text-white mb-2">Global Scale</h4>
                                <p className="text-slate-400 text-sm">
                                    Multi-region availability and localized model serving with RLHF feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Authority Signal: Awards */}
                <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left">
                        <div className="max-w-3xl">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Authority Signal</h2>
                            <h3 className="text-3xl font-bold text-white mb-8 sm:text-5xl">Nationally Recognized Innovation</h3>
                            <div className="space-y-6 mb-10">
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    Recipient of the <span className="text-brand-white font-bold underline decoration-brand-amber">BASIS National ICT Award 2018</span> and <span className="text-brand-white font-bold underline decoration-brand-amber">Banglalink IT Incubator 2.0 Champion</span>.
                                </p>
                                <p className="text-lg text-slate-500 leading-relaxed">
                                    Recognized for architecting E-Parking and HomeFoodz, demonstrating long-term leadership in the Bangladeshi technical ecosystem.
                                </p>
                            </div>
                            <Link href="#contact" className="btn-primary">
                                Scale Your Architecture
                            </Link>
                        </div>
                    </div>
                </section>

                <MediaShowcase />
                <ProcessMap processSteps={processSteps} />

                {/* Core Architecture Section */}
                <section className="py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Architecture</h2>
                                <h3 className="text-3xl font-bold text-white mb-6 sm:text-4xl">Production LLM & RAG</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-brand-amber/20 flex items-center justify-center shrink-0">
                                            <div className="h-2 w-2 rounded-full bg-brand-amber"></div>
                                        </div>
                                        <p className="text-slate-400">Beyond prompting: Quantization, LoRA optimization, and low-latency inference.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-brand-amber/20 flex items-center justify-center shrink-0">
                                            <div className="h-2 w-2 rounded-full bg-brand-amber"></div>
                                        </div>
                                        <p className="text-slate-400">Multi-stage retrieval, hybrid search, and hallucination-free knowledge bases.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-card bg-brand-amber/5 border-brand-amber/20">
                                <h4 className="text-white font-bold mb-4">Strategic Audit</h4>
                                <p className="text-slate-400 mb-6">Ready to transition from sandbox POCs to production-grade AI infrastructure?</p>
                                <Link href="#contact" className="btn-primary w-full text-center">
                                    Start the Audit
                                </Link>
                            </div>
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
                    <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.name}. Senior AI Solutions Lead.</p>
                </div>
            </footer>
        </div>
    );
}
