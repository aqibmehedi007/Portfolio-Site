"use client";

import { Code2, Layers, Cloud, Cpu, ShieldCheck, Terminal } from "lucide-react";

interface TechArsenalItem {
    id: string;
    title: string;
    description: string;
    items: any;
    size: string;
    icon: string;
    color: string;
}

interface Props {
    arsenal: TechArsenalItem[];
}

const ICON_MAP: Record<string, any> = {
    Code2: Code2,
    Layers: Layers,
    Cloud: Cloud,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck,
    Terminal: Terminal
};

const COLOR_MAP: Record<string, string> = {
    amber: "text-brand-amber border-brand-amber/20 bg-brand-amber/5",
    blue: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    emerald: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    purple: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    rose: "text-rose-400 border-rose-400/20 bg-rose-400/5",
    cyan: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5"
};

export default function TechnicalArsenal({ arsenal }: Props) {
    return (
        <section id="arsenal" className="py-32 bg-black relative overflow-hidden">
            {/* Background noise/grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-brand-amber" />
                        <span className="text-brand-amber font-bold tracking-[0.3em] uppercase text-xs">Technical Inventory</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white tracking-tight sm:text-6xl mb-6">
                        The Developer <span className="text-slate-500 italic font-display">Arsenal.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        A comprehensive stack of languages, frameworks, and infrastructure tools leveraged to build resilient, award-winning digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[150px]">
                    {arsenal.map((box, idx) => {
                        const Icon = ICON_MAP[box.icon] || Code2;
                        const colors = COLOR_MAP[box.color] || COLOR_MAP.amber;

                        return (
                            <div
                                key={box.id}
                                className={`group relative glass-card p-5 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-700 hover:bg-white/[0.03] overflow-hidden ${box.size || "col-span-1"}`}
                            >
                                {/* Decorative Large Icon */}
                                <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000">
                                    <Icon size={120} strokeWidth={1} />
                                </div>

                                <div className="relative z-10">
                                    <div className={`inline-flex p-2 rounded-lg ${colors} mb-3 transition-transform group-hover:scale-110 duration-500`}>
                                        <Icon size={18} />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand-amber transition-colors">
                                        {box.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-snug font-medium">
                                        {box.description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                                    {(box.items as string[]).map((item: string, i: number) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-slate-400 group-hover:text-slate-100 transition-all group-hover:bg-white/10 group-hover:border-white/10"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-amber transition-colors" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-brand-amber group-hover:w-full transition-all duration-700 ease-in-out`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

