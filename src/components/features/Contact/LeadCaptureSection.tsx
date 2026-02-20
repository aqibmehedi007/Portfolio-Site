"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Mail, Send, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";

const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    service: z.string().min(1, "Please select an area of interest."),
    budget: z.string().min(1, "Select an approximate budget tier."),
    message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function LeadCaptureSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full max-w-4xl radial-gradient glow-brand-amber blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-5 gap-16 items-start">

                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Initial Consultation</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Start the <br /> Diagnostic.
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I prioritize deep technical engagements over quick fixes. Whether you require a custom LLM pipeline, a rapid Flutter prototype, or enterprise architecture redesign, drop me a note to begin the evaluation process.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-amber">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Direct Ping</div>
                                    <div className="font-medium">aqibcareer007@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-amber">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Response Protocol</div>
                                    <div className="font-medium">Within 24-48 Business Hours</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="glass-card p-8 md:p-12 border border-white/10 rounded-2xl relative overflow-hidden">
                            {status === "success" ? (
                                <div className="absolute inset-0 z-10 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                                    <div className="w-20 h-20 bg-brand-amber/20 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} className="text-brand-amber" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-white mb-4">Transmission Received</h4>
                                    <p className="text-slate-400 max-w-sm mb-8">
                                        Your specifications have been logged securely. I will review them and reach out shortly to coordinate next steps.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-brand-amber hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                                    >
                                        Log New Request <ChevronRight size={16} />
                                    </button>
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Architect Designation (Name)</label>
                                        <input
                                            {...register("name")}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-400 text-xs mt-2 font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Secure Comms (Email)</label>
                                        <input
                                            {...register("email")}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-xs mt-2 font-medium">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Target Specialization</label>
                                        <select
                                            {...register("service")}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all appearance-none"
                                        >
                                            <option value="">Select Primary Focus...</option>
                                            <option value="Generative AI & LLMs">Generative AI / LLMs</option>
                                            <option value="Flutter Architecture">Flutter Architecture</option>
                                            <option value="Enterprise Backends">Enterprise Backends</option>
                                            <option value="General Consultation">General Consultation</option>
                                        </select>
                                        {errors.service && <p className="text-red-400 text-xs mt-2 font-medium">{errors.service.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Budget Scope Allocation</label>
                                        <select
                                            {...register("budget")}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all appearance-none"
                                        >
                                            <option value="">Select Range...</option>
                                            <option value="< $5k">Under $5k (Audits / Prototyping)</option>
                                            <option value="$5k - $25k">$5k - $25k (Standard Build phase)</option>
                                            <option value="$25k+">$25k+ (Enterprise Deployment)</option>
                                        </select>
                                        {errors.budget && <p className="text-red-400 text-xs mt-2 font-medium">{errors.budget.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Mission Parameters (Details)</label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all resize-none"
                                        placeholder="Describe the challenges you're facing and what success looks like for this deployment..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-400 text-xs mt-2 font-medium">{errors.message.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-white text-black font-bold text-sm uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-amber transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? (
                                        <span className="animate-pulse">Transmitting Data...</span>
                                    ) : (
                                        <>
                                            Initiate Handshake <Send size={16} />
                                        </>
                                    )}
                                </button>

                                {status === "error" && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm text-center">
                                        Transmission failed. Please verify configurations and retry, or use direct email.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
