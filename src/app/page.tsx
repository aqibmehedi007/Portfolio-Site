import Link from "next/link";
import { SITE_CONFIG } from "@/core/config";
import Hero from "@/components/features/Hero";
import TechAuthority from "@/components/features/TechAuthority";
import TechnicalArsenal from "@/components/features/TechnicalArsenal";
import MediaShowcase from "@/components/features/MediaShowcase";
import ModularPortfolio from "@/components/features/ModularPortfolio";
import ProcessMap from "@/components/features/ProcessMap";

import LeadCaptureSection from "@/components/features/Contact/LeadCaptureSection";
import FaqSection from "@/components/features/FaqSection";
import { prisma } from "@/core/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany({
    where: { featured: true },
    orderBy: { orderIdx: "asc" }
  });

  const faqs = await prisma.faq.findMany({
    orderBy: { orderIdx: "asc" }
  });

  return (
    <div className="flex flex-col min-h-screen">
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
            <Link
              href="/admin/login"
              className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-brand-amber/20 hover:border-brand-amber/60 hover:scale-110 transition-all duration-300 active:scale-95 group"
              title="Admin Command Center"
            >
              <img
                src={SITE_CONFIG.assets.profile}
                alt={SITE_CONFIG.name}
                className="h-full w-full object-cover group-hover:grayscale-0 grayscale transition-all"
              />
              <div className="absolute inset-0 bg-brand-amber/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <TechAuthority />
        <TechnicalArsenal />
        <MediaShowcase />
        <ProcessMap />

        {/* Project Grid Section */}
        <section id="projects" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Portfolio</h2>
              <h3 className="text-3xl font-bold text-white">Engineering Inventory</h3>
            </div>
            <ModularPortfolio projects={projects} />
          </div>
        </section>

        <FaqSection faqs={faqs} />
        <LeadCaptureSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-xl font-bold text-white font-display mb-6 block">
                {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Senior Solutions Architect specializing in the intersection of AI, Mobile Engineering, and Scalable Cloud Infrastructure.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Specializations</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="/best-ai-engineer-bangladesh" className="hover:text-brand-amber transition-colors">Best AI Engineer</Link></li>
                <li><Link href="/senior-flutter-architect-bangladesh" className="hover:text-brand-amber transition-colors">Flutter Architect</Link></li>
                <li><Link href="/enterprise-ai-solutions-architect" className="hover:text-brand-amber transition-colors">Enterprise AI Lead</Link></li>
                <li><Link href="/blog" className="hover:text-brand-amber transition-colors font-bold text-slate-400 border-t border-white/5 pt-3 mt-3 block">Knowledge Base</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href={SITE_CONFIG.socials.linkedin} className="hover:text-brand-amber transition-colors">LinkedIn</a></li>
                <li><a href={SITE_CONFIG.socials.github} className="hover:text-brand-amber transition-colors">GitHub</a></li>
                <li><a href={SITE_CONFIG.assets.resume} download className="hover:text-brand-amber transition-colors">Download Resume</a></li>
                <li><a href={`mailto:${SITE_CONFIG.socials.email}`} className="hover:text-brand-amber transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.name}. Licensed Architect & Engineer.</p>
            <p className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.3em]">Built for Cyber Architect Presence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
