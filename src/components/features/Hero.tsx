import Link from "next/link";
import { SITE_CONFIG } from "@/core/config";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    ctaText?: string;
    badgeText?: string;
}

export default function Hero({ title, subtitle, ctaText, badgeText }: HeroProps) {
    return (
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 lg:px-8">
            {/* Background Decorative Element */}
            <div className="absolute top-0 -z-10 h-full w-full bg-deep-base">
                <ParticlesBackground />
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-brand-amber/10 opacity-30 blur-[100px]"></div>
            </div>

            <div className="flex max-w-6xl flex-col items-center text-center">
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-amber to-white opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-brand-amber/30 ring-4 ring-black">
                        <img
                            src={SITE_CONFIG.assets.profile}
                            alt={SITE_CONFIG.name}
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                <div className="mb-6 badge-premium">
                    <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-brand-amber"></span>
                    {badgeText || "Award-Winning AI Solutions"}
                </div>

                <h1 className="text-gradient mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
                    {title || <>Architecting the Future <br /> of AI & Mobile.</>}
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl lg:text-2xl">
                    {subtitle || (
                        <>
                            Senior Solutions Architect at <span className="text-white">{SITE_CONFIG.company}</span>.
                            Pioneering <span className="text-brand-amber font-medium">Custom LLMs</span>,
                            <span className="text-white"> RAG Systems</span>, and
                            <span className="text-white"> High-Security Mobile</span> architectures.
                        </>
                    )}
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                    <Link href="#contact" className="btn-primary">
                        {ctaText || "Start a Consultation"}
                    </Link>
                    <a
                        href={SITE_CONFIG.assets.resume}
                        download
                        className="btn-secondary flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status-check: 4, L4, download" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF Resume
                    </a>
                </div>

                <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/5 pt-10 sm:grid-cols-4 sm:gap-16">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">10+</span>
                        <span className="text-xs text-slate-500 uppercase tracking-[0.2em]">Years Depth</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">25+</span>
                        <span className="text-xs text-slate-500 uppercase tracking-[0.2em]">Deployments</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-brand-amber">BASIS</span>
                        <span className="text-xs text-slate-500 uppercase tracking-[0.2em]">National Award</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">6+</span>
                        <span className="text-xs text-slate-500 uppercase tracking-[0.2em]">Flutter Expert</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
