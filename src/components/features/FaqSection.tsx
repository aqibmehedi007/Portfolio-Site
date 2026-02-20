"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
    id: string;
    question: string;
    answer: string;
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Questions & Answers</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white font-display">Frequently Asked <span className="text-slate-500">Questions</span></h3>
                </div>

                {faqs.length === 0 ? (
                    <div className="text-center text-slate-500 py-12">No FAQs have been added yet.</div>
                ) : (
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={faq.id}
                                className="glass-card border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    <span className="font-semibold text-lg text-white pr-8">{faq.question}</span>
                                    <ChevronDown
                                        className={`flex-shrink-0 text-brand-amber transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                        size={20}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
