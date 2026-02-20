"use client";

import { Brain, Smartphone, Cog, CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import SKILLS_DATA from "@/database/skills.json";

const ICON_MAP: Record<string, any> = {
    Brain: Brain,
    Smartphone: Smartphone,
    Cog: Cog,
};

const COLOR_MAP: Record<string, string> = {
    amber: "text-brand-amber border-brand-amber/30 bg-brand-amber/5",
    blue: "text-blue-400 border-blue-400/30 bg-blue-400/5",
    emerald: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
};

const GLOW_MAP: Record<string, string> = {
    amber: "shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)]",
    blue: "shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]",
    emerald: "shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)]",
};

export default function TechAuthority() {
    return (
        <section id="stack" className="py-32 bg-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-amber/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-brand-amber" />
                        <span className="text-brand-amber font-bold tracking-[0.3em] uppercase text-xs">Architectural Prowess</span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
                        Engineering the <br /> <span className="text-slate-500">Unconventional.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                        A decade of distilling complex business requirements into high-performance, resilient, and secure technological ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {SKILLS_DATA.map((pillar: any, idx) => {
                        const Icon = ICON_MAP[pillar.icon] || Brain;
                        const colors = COLOR_MAP[pillar.color] || COLOR_MAP.amber;
                        const glow = GLOW_MAP[pillar.color] || GLOW_MAP.amber;

                        return (
                            <div
                                key={idx}
                                className={`group relative glass-card p-10 flex flex-col items-start border border-white/5 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03] ${glow}`}
                            >
                                {/* Pillar Header */}
                                <div className="flex items-start justify-between w-full mb-10">
                                    <div className={`p-4 rounded-2xl border ${colors} transition-transform duration-500 group-hover:scale-110`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Experience</span>
                                        <span className={`text-sm font-bold ${colors.split(' ')[0]}`}>{pillar.experience}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-amber transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[60px]">
                                    {pillar.description}
                                </p>

                                {/* Skills Grid */}
                                <div className="w-full space-y-4">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                        <Zap size={10} className="text-brand-amber" />
                                        Core Stack
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {pillar.skills.map((skill: string, sIdx: number) => (
                                            <div
                                                key={sIdx}
                                                className="flex items-center gap-3 text-sm text-slate-300 group/skill"
                                            >
                                                <div className={`h-1.5 w-1.5 rounded-full bg-white/10 group-hover/skill:bg-brand-amber transition-colors shadow-[0_0_8px_transparent] group-hover/skill:shadow-brand-amber/50`} />
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Reveal Signal */}
                                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowRight size={20} className="text-brand-amber" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats/Badges */}
                <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { label: "Production Deployments", val: "25+", icon: Globe },
                        { label: "Technical Experience", val: "10y+", icon: Clock },
                        { label: "Security Preference", val: "AES-256", icon: ShieldCheck },
                        { label: "Awards Earned", val: "03 Early", icon: Award },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{stat.label}</span>
                            <span className="text-2xl font-bold text-white tracking-tight">{stat.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

function Globe({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

function Clock({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
