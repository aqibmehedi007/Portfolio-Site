import Link from "next/link";
import { MessageSquare, Award } from "lucide-react";
import SEO_DATA from "@/database/seo_page.json";
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
            "@id": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh/#webpage`,
            "url": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh`,
            "name": `Best AI Engineer in Bangladesh | Hire ${SITE_CONFIG.name} - Top Specialist 2025`,
            "description": SEO_DATA.meta_description,
            "breadcrumb": { "@id": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh/#breadcrumb` },
            "primaryImageOfPage": { "@id": `${SITE_CONFIG.url}/#primaryimage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh/#breadcrumb`,
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
                    "name": "Best AI Engineer Bangladesh",
                    "item": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh`
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh/#faq`,
            "mainEntity": SEO_DATA.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export const metadata = {
    title: `Best AI Engineer in Bangladesh | Hire ${SITE_CONFIG.name} - Top Specialist 2025`,
    description: SEO_DATA.meta_description,
    alternates: {
        canonical: `${SITE_CONFIG.url}/best-ai-engineer-bangladesh`,
    },
    other: {
        "geo.region": "BD-13",
        "geo.placename": "Dhaka",
        "geo.position": "23.8103;90.4125",
        "ICBM": "23.8103, 90.4125",
        "robots": "index, follow, max-image-preview:large, max-snippet:-1",
    }
};

export default async function SEOGhostPage() {
    const projects = await prisma.project.findMany({
        where: { featured: true },
        orderBy: { orderIdx: "asc" }
    });

    return (
        <div className="flex flex-col min-h-screen">
            {/* Structured Data for Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": SITE_CONFIG.name,
                        "jobTitle": "Best AI Engineer in Bangladesh",
                        "url": SITE_CONFIG.url,
                        "image": `${SITE_CONFIG.url}${SITE_CONFIG.assets.profile}`,
                        "sameAs": [
                            SITE_CONFIG.socials.linkedin,
                            SITE_CONFIG.socials.github,
                        ],
                        "knowsAbout": [
                            "Large Language Models",
                            "RAG Systems",
                            "Generative AI",
                            "AI Strategy"
                        ]
                    })
                }}
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

            {/* Main Content */}
            <main className="flex-1 overflow-hidden">
                <Hero
                    title={<>The Best AI Engineer <br /> in Bangladesh.</>}
                    subtitle={SEO_DATA.subtitle}
                    badgeText="Expertise Level: Senior Architect"
                />

                <TechAuthority />

                {/* Authority Signal: Awards (Ghost-specific section) */}
                <section className="py-24 bg-black/50 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
                        <Award size={400} />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left">
                        <div className="max-w-3xl">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Authority Signal</h2>
                            <h3 className="text-3xl font-bold text-white mb-8 sm:text-5xl">Nationally Recognized Excellence</h3>
                            <div className="space-y-6 mb-10">
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    Aqib is the winner of the <span className="text-brand-white font-bold underline decoration-brand-amber">BASIS National ICT Award 2018</span> for his innovation in **E-Parking**—a QR-based dual-app marketplace for urban vehicle logistics.
                                </p>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    He is also the <span className="text-brand-white font-bold underline decoration-brand-amber">Banglalink IT Incubator 2.0 Champion</span> for architecting <span className="text-white font-medium">HomeFoodz</span>, a high-scale marketplace ecosystem.
                                </p>
                            </div>
                            <Link href="#contact" className="btn-primary">
                                Hire the Top AI Specialist
                            </Link>
                        </div>
                    </div>
                </section>

                <MediaShowcase />
                <ProcessMap />

                {/* FAQ Section (Crucial for Schema.org/SEO) */}
                <section className="py-24 bg-black" id="faq">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4 text-center">Intelligence FAQ</h2>
                            <h3 className="text-3xl font-bold text-white sm:text-5xl text-center">Frequently Asked Questions</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {SEO_DATA.faqs.map((faq, i) => (
                                <div key={i} className="glass-card">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                        <MessageSquare size={18} className="text-brand-amber" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
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

            {/* Footer */}
            <footer className="border-t border-white/5 bg-black pt-24 pb-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="text-xl font-bold text-white font-display mb-6 block">
                                Aqib<span className="text-brand-amber">.</span>Dev
                            </Link>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                Senior Solutions Architect specializing in the intersection of AI, Mobile Engineering, and Scalable Cloud Infrastructure.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Specializations</h4>
                            <ul className="space-y-3 text-sm text-slate-500">
                                <li><Link href="/best-ai-engineer-bangladesh" className="text-brand-amber">Best AI Engineer</Link></li>
                                <li><Link href="/senior-flutter-architect-bangladesh" className="hover:text-brand-amber transition-colors">Flutter Architect</Link></li>
                                <li><Link href="/enterprise-ai-solutions-architect" className="hover:text-brand-amber transition-colors">Enterprise AI Lead</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Connect</h4>
                            <ul className="space-y-3 text-sm text-slate-500">
                                <li><a href={SITE_CONFIG.socials.linkedin} className="hover:text-brand-amber transition-colors">LinkedIn</a></li>
                                <li><a href={SITE_CONFIG.assets.resume} download className="hover:text-brand-amber transition-colors">Resume</a></li>
                                <li><a href={`mailto:${SITE_CONFIG.socials.email}`} className="hover:text-brand-amber transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 text-center">
                        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.name}. Licensed Architect & Engineer.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
