import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/core/config";
import { Bot, ArrowLeft, Zap, Activity } from "lucide-react";

export const metadata = {
    title: `Krishok AI - Agricultural Intelligence | ${SITE_CONFIG.name}`,
    description: "AI-powered agricultural platform with Bengali voice interaction and computer vision for disease diagnosis.",
};

export default function KrishokAI() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 text-white hover:text-brand-amber transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium text-sm">Back to Portfolio</span>
                    </Link>
                    <Link href="/" className="text-xl font-bold tracking-tight text-white font-display hidden md:block">
                        {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
                    </Link>
                </div>
            </nav>

            <main className="flex-1 pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 mb-6">
                            <Bot size={14} className="text-brand-amber" />
                            <span className="text-[10px] font-bold text-brand-amber tracking-widest uppercase">
                                Agricultural AI
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Krishok AI
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            An advanced AI-powered agricultural platform integrating Bengali voice interaction and computer vision for instant crop disease diagnosis.
                        </p>
                    </div>

                    <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-16">
                        <Image src="/projects/krishok-ai.jpg" alt="Krishok AI Dashboard" fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed mb-16">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                            <p>
                                Farmers in Bangladesh often face significant crop losses due to an inability or delay in accurately diagnosing plant diseases. In addition, lower digital literacy and a lack of localized AI tools (such as Bengali NLP support) create a vast barrier for adopting modern ag-tech solutions.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                            <p>
                                Krishok AI addresses these issues directly by bringing AI to the farmer&apos;s pocket. Utilizing offline-capable predictive modeling and high-accuracy computer vision, simply pointing a smartphone camera at an affected plant yields instant diagnoses and localized treatment plans, delivered in spoken Bengali.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8 mb-16">
                        <h2 className="text-white font-bold text-xl mb-6">Core Capabilities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-lg bg-brand-amber/10 text-brand-amber border border-brand-amber/10 shrink-0">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Vision Diagnostics</h3>
                                    <p className="text-sm text-slate-400">95%+ accuracy in identifying common sub-tropical plant diseases from smartphone images.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-lg bg-brand-amber/10 text-brand-amber border border-brand-amber/10 shrink-0">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Bengali NLP & Voice</h3>
                                    <p className="text-sm text-slate-400">Full end-to-end voice interface natively supporting Bengali regional accents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/5 py-12 text-center">
                <p className="text-xs text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.name}. Licensed Architect & Engineer.</p>
            </footer>
        </div>
    );
}
