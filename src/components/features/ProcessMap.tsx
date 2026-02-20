import { Search, Layers, Code, TrendingUp } from "lucide-react";
import PROCESS_DATA from "@/database/process.json";

const ICON_MAP: Record<string, any> = {
    Search,
    Layers,
    Code,
    TrendingUp,
};

export default function ProcessMap() {
    return (
        <section id="process" className="py-24 bg-graphation/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">The Approach</h2>
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Architecting with Precision
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-amber/10 -translate-y-1/2 -z-10"></div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS_DATA.map((item, idx) => {
                            const Icon = ICON_MAP[item.icon] || Code;
                            return (
                                <div key={idx} className="relative flex flex-col items-center text-center group">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black border border-brand-amber/20 text-brand-amber group-hover:border-brand-amber transition-all duration-500 group-hover:scale-110 shadow-xl shadow-brand-amber/5">
                                        <Icon size={28} />
                                    </div>

                                    <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 text-4xl font-bold text-white/5 font-display transition-colors group-hover:text-brand-amber/10">
                                        {item.step}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
