"use client";

import { useState } from "react";
import { addProcess, deleteProcess } from "./actions";
import { toast } from "react-hot-toast";
import { Trash2, Plus } from "lucide-react";

interface ProcessStep {
    id: string;
    step: string;
    title: string;
    description: string;
    icon: string;
    orderIdx: number;
}

export default function ProcessManager({ initialProcess }: { initialProcess: ProcessStep[] }) {
    const [processSteps, setProcessSteps] = useState(initialProcess);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);

        const res = await addProcess(data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Process Step Added");
            window.location.reload();
        }
        setIsSubmitting(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Delete this Process Step?")) return;

        setProcessSteps(processSteps.filter(s => s.id !== id));
        const res = await deleteProcess(id);
        if (res.error) {
            toast.error(res.error);
            window.location.reload();
        } else {
            toast.success("Process Step Deleted");
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h2 className="text-xl font-semibold text-brand-amber mb-6">Add New Process Step</h2>
                <form onSubmit={handleAdd} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Step Label</label>
                            <input
                                name="step"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                                placeholder="01 / Discovery"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Icon</label>
                            <select
                                name="icon"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            >
                                <option value="Search">Search</option>
                                <option value="Code2">Code</option>
                                <option value="Rocket">Rocket</option>
                                <option value="Shield">Shield</option>
                                <option value="Database">Database</option>
                                <option value="Layers">Layers</option>
                                <option value="Cpu">Cpu</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Title</label>
                        <input
                            name="title"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="Architectural Planning"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Description</label>
                        <textarea
                            name="description"
                            required
                            rows={3}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="We begin by mapping out the cloud infrastructure..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex items-center gap-2 px-6 py-2 rounded-xl bg-brand-amber text-black hover:bg-white transition-colors disabled:opacity-50"
                    >
                        <Plus size={18} /> {isSubmitting ? "Adding..." : "Add Step"}
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Current Process Layout</h2>
                {processSteps.length === 0 ? (
                    <p className="text-slate-500">No process steps found.</p>
                ) : (
                    processSteps.map(step => (
                        <div key={step.id} className="glass-card p-4 rounded-xl border border-white/5 flex gap-4 items-start group">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-xs font-bold text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded-full">{step.step}</span>
                                    <h3 className="text-white font-medium">{step.title}</h3>
                                </div>
                                <p className="text-slate-400 text-sm whitespace-pre-wrap mt-2">{step.description}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(step.id)}
                                className="text-slate-600 hover:text-red-500 transition-colors p-2"
                                title="Delete Step"
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
