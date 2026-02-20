"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, LogIn, ChevronRight, ShieldAlert, Cpu, Terminal, ShieldCheck, Sparkles } from "lucide-react";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Typewriter from "@/components/ui/Typewriter";
import { SITE_CONFIG } from "@/core/config";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("IDENTITY MISMATCH. ACCESS DENIED.");
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-mono">
            {/* Particles Background - The requested dots effect */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            {/* Scanning Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
                <div className="w-full h-1 bg-brand-amber/50 absolute top-0 animate-[scan_4s_linear_infinite]" />
            </div>

            {/* Neural Network Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-brand-amber/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full max-w-xl relative z-20">
                <div className="glass-card border border-white/10 rounded-3xl p-1 md:p-1 overflow-hidden shadow-2xl">
                    <div className="bg-black/80 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 border border-white/5">
                        {/* AI Identity Header */}
                        <div className="mb-12 flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute -inset-4 bg-brand-amber/20 blur-xl rounded-full animate-pulse" />
                                <div className="w-24 h-24 rounded-2xl bg-white/5 border border-brand-amber/30 flex items-center justify-center relative z-10 group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Cpu size={40} className="text-brand-amber animate-[pulse_2s_infinite]" />
                                    <div className="absolute inset-0 border-t border-brand-amber/50 h-1/2 -top-full group-hover:top-full transition-all duration-1000" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-black border border-brand-amber/50 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-brand-amber animate-ping" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-[10px] font-bold text-brand-amber uppercase tracking-widest mb-2">
                                    <Sparkles size={10} />
                                    Neural Link Established
                                </div>
                                <div className="min-h-[6rem] flex items-center justify-center">
                                    <Typewriter
                                        text={`Hello Master, ${SITE_CONFIG.name}. Accessing secure architectural protocols. I've been monitoring the logs... We missed your strategic oversight. Please calibrate your identity to proceed.`}
                                        speed={25}
                                        className="text-slate-300 text-sm md:text-base leading-relaxed tracking-tight"
                                        onComplete={() => setShowForm(true)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Login Form Reveal */}
                        <div className={`transition-all duration-1000 transform ${showForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold animate-shake">
                                        <ShieldAlert size={16} />
                                        <span className="tracking-widest uppercase">{error}</span>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-brand-amber transition-colors">Admin Core Identity</label>
                                            <Terminal size={12} className="text-slate-700 group-focus-within:text-brand-amber" />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-amber/50 focus:bg-white/[0.05] transition-all text-sm font-mono tracking-tight"
                                            placeholder="CORP\AQIB.MEHEDI"
                                        />
                                    </div>

                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-focus-within:text-brand-amber transition-colors">Neural Keyphrase</label>
                                            <Lock size={12} className="text-slate-700 group-focus-within:text-brand-amber" />
                                        </div>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-amber/50 focus:bg-white/[0.05] transition-all text-sm font-mono tracking-tight"
                                            placeholder="••••••••••••••••"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full relative group overflow-hidden bg-brand-amber text-black font-bold text-[10px] uppercase tracking-[0.3em] py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                >
                                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-black animate-bounce" />
                                            <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:-0.3s]" />
                                            DECRYPTING...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-3">
                                            Initialize Secure Session <ShieldCheck size={14} />
                                        </span>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => router.push("/")}
                                    className="w-full text-slate-600 hover:text-brand-amber transition-colors text-[10px] font-bold uppercase tracking-[0.2em] pt-4 block text-center"
                                >
                                    Terminate Access Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* System Stats Footer */}
                <div className="mt-8 flex justify-between px-4 text-[9px] font-bold text-slate-800 uppercase tracking-widest">
                    <span>Node: ARCH-01</span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-amber/50" />
                        System: Optimal
                    </span>
                    <span>V: 2.4.0-Stable</span>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scan {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </main>
    );
}
