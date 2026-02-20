"use client";

import { useState } from "react";
import { addFaq, deleteFaq } from "./actions";
import { toast } from "react-hot-toast";
import { Trash2, Plus } from "lucide-react";

interface Faq {
    id: string;
    question: string;
    answer: string;
    orderIdx: number;
}

export default function FaqManager({ initialFaqs }: { initialFaqs: Faq[] }) {
    const [faqs, setFaqs] = useState(initialFaqs);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);

        const res = await addFaq(data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("FAQ Added");
            // Hard reload to show new data since we want the page to re-fetch
            window.location.reload();
        }
        setIsSubmitting(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Delete this FAQ?")) return;

        setFaqs(faqs.filter(f => f.id !== id));
        const res = await deleteFaq(id);
        if (res.error) {
            toast.error(res.error);
            window.location.reload(); // Revert on failure
        } else {
            toast.success("FAQ Deleted");
        }
    }

    return (
        <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h2 className="text-xl font-semibold text-brand-amber mb-6">Add New FAQ</h2>
                <form onSubmit={handleAdd} className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Question</label>
                        <input
                            name="question"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="Current State of the market?"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Answer</label>
                        <textarea
                            name="answer"
                            required
                            rows={3}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="The current state is..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex items-center gap-2 px-6 py-2 rounded-xl bg-brand-amber text-black hover:bg-white transition-colors disabled:opacity-50"
                    >
                        <Plus size={18} /> {isSubmitting ? "Adding..." : "Add FAQ"}
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Current FAQs</h2>
                {faqs.length === 0 ? (
                    <p className="text-slate-500">No FAQs found.</p>
                ) : (
                    faqs.map(faq => (
                        <div key={faq.id} className="glass-card p-4 rounded-xl border border-white/5 flex gap-4 items-start group">
                            <div className="flex-1">
                                <h3 className="text-white font-medium mb-1">{faq.question}</h3>
                                <p className="text-slate-400 text-sm whitespace-pre-wrap">{faq.answer}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(faq.id)}
                                className="text-slate-600 hover:text-red-500 transition-colors p-2"
                                title="Delete FAQ"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
