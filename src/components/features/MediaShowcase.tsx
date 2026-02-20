"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import SHOWCASE_DATA from "@/database/showcase.json";

export default function MediaShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const active = SHOWCASE_DATA[activeIndex];
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (!isPlaying) {
                setActiveIndex((prev) => (prev + 1) % SHOWCASE_DATA.length);
            }
        }, 5000); // 5 seconds per slide
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying]);

    const next = () => {
        setIsPlaying(false);
        setActiveIndex((prev) => (prev + 1) % SHOWCASE_DATA.length);
    };

    const prev = () => {
        setIsPlaying(false);
        setActiveIndex((prev) => (prev - 1 + SHOWCASE_DATA.length) % SHOWCASE_DATA.length);
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-24 bg-graphation/30 overflow-hidden relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Media Side */}
                    <div className="flex-1 w-full order-2 lg:order-1 relative group">
                        <div className="glass-card p-0 aspect-video rounded-3xl overflow-hidden border-brand-amber/20 shadow-2xl shadow-brand-amber/5 relative">

                            {!isPlaying ? (
                                <div className="relative w-full h-full cursor-pointer group/thumb" onClick={handlePlay}>
                                    <img
                                        src={active.media.thumbnail}
                                        alt={active.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover/thumb:bg-black/20">
                                        <div className="w-20 h-20 rounded-full bg-brand-amber/90 flex items-center justify-center text-black shadow-xl transform transition-transform group-hover/thumb:scale-110">
                                            <Play size={32} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {active.media.type === "youtube" ? (
                                        <iframe
                                            src={`${active.media.url}?autoplay=1`}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : active.media.type === "video" ? (
                                        <video
                                            src={active.media.url}
                                            className="w-full h-full object-cover"
                                            controls
                                            autoPlay
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={active.media.url}
                                            alt={active.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </>
                            )}

                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <button onClick={prev} className="p-3 rounded-full bg-black/50 border border-white/10 text-white pointer-events-auto hover:bg-brand-amber hover:text-black transition-all">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={next} className="p-3 rounded-full bg-black/50 border border-white/10 text-white pointer-events-auto hover:bg-brand-amber hover:text-black transition-all">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex gap-2 mt-6 justify-center">
                            {SHOWCASE_DATA.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsPlaying(false);
                                        setActiveIndex(i);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-amber' : 'w-2 bg-white/10'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-amber/5 border border-brand-amber/10">
                            <Play size={14} className="text-brand-amber" />
                            <span className="text-xs font-bold text-brand-amber uppercase tracking-widest leading-none">Featured Project</span>
                        </div>

                        <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">{active.tagline}</h2>
                        <h3 className="text-gradient mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            {active.title}
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 h-[90px] line-clamp-3">
                            {active.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            {active.stats.map((stat, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-xl font-bold text-brand-amber mb-1">{stat.value}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-8">
                            <Link href={active.link} className="btn-primary">
                                Case Study <ArrowRight className="ml-2" size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
