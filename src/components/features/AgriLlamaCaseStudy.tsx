import { Cpu, Zap, BarChart3, Globe } from "lucide-react";

export default function AgriLlamaCaseStudy() {
    return (
        <section className="py-24 bg-graphation/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Visual Side */}
                    <div className="flex-1 w-full order-2 lg:order-1">
                        <div className="glass-card relative aspect-square max-w-md mx-auto overflow-hidden border-brand-amber/20 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/10 to-transparent"></div>

                            {/* Abstract Technical Visualization */}
                            <div className="absolute inset-x-0 bottom-0 p-8">
                                <div className="flex items-end gap-2 mb-4">
                                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-brand-amber/40 rounded-t-sm animate-pulse"
                                            style={{ height: `${h}%`, animationDelay: `${i * 150}ms` }}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs font-mono text-brand-amber/60 tracking-widest uppercase">
                                    LLM Optimization: 70% Size Reduction
                                </div>
                            </div>

                            {/* Central Identity */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-6 rounded-full bg-black/50 border border-brand-amber/30 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                                    <Cpu size={48} className="text-brand-amber" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 order-1 lg:order-2">
                        <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Deep Dive: Agri-Llama</h2>
                        <h3 className="text-gradient mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Scaling AI to <br /> Emerging Markets.
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            The challenge: How do you provide advanced LLM intelligence to farmers with 2GB RAM devices and spotty connectivity?
                            The solution: A custom-architected quantization and fine-tuning pipeline that reduced model size by 70% while maintaining native precision.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-brand-amber/10 text-brand-amber">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Optimized Inference</h4>
                                    <p className="text-sm text-slate-500">Sub-second response times on low-power mobile CPU.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-brand-amber/10 text-brand-amber">
                                    <BarChart3 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Impact at Scale</h4>
                                    <p className="text-sm text-slate-500">Serving 10k+ queries in native Bengali dialects.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-brand-amber/10 text-brand-amber">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Privacy First</h4>
                                    <p className="text-sm text-slate-500">On-device execution ensuring zero data exposure.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <button className="text-brand-amber font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Read the Technical Whitepaper <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
