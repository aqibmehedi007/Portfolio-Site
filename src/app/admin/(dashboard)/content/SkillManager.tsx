"use client";

import { useState } from "react";
import { addSkill, deleteSkill } from "./actions";
import { toast } from "react-hot-toast";
import { Trash2, Plus } from "lucide-react";

interface Skill {
    id: string;
    title: string;
    description: string;
    skills: any;
    icon: string;
    orderIdx: number;
}

export default function SkillManager({ initialSkills }: { initialSkills: Skill[] }) {
    const [skills, setSkills] = useState(initialSkills);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);

        const res = await addSkill(data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Skill Arsenal Added");
            window.location.reload();
        }
        setIsSubmitting(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Delete this Skill Set?")) return;

        setSkills(skills.filter(s => s.id !== id));
        const res = await deleteSkill(id);
        if (res.error) {
            toast.error(res.error);
            window.location.reload();
        } else {
            toast.success("Skill Set Deleted");
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h2 className="text-xl font-semibold text-brand-amber mb-6">Add New Arsenal Category</h2>
                <form onSubmit={handleAdd} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Category Title</label>
                            <input
                                name="title"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                                placeholder="Artificial Intelligence"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Icon</label>
                            <select
                                name="icon"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            >
                                <option value="Cpu">Cpu / AI</option>
                                <option value="Code2">Code / Backend</option>
                                <option value="Terminal">Terminal</option>
                                <option value="Cloud">Cloud / Infra</option>
                                <option value="Database">Database</option>
                                <option value="Layers">Layers</option>
                                <option value="ShieldCheck">Shield / Security</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Description</label>
                        <textarea
                            name="description"
                            required
                            rows={2}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white resize-none"
                            placeholder="Architecting custom LLMs and RAG pipelines..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Skills (Comma separated)</label>
                        <input
                            name="skillsList"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="Python, TensorFlow, LLaMA-3, LangChain"
                        />
                        <p className="text-xs text-slate-500 mt-2">These will render as the bullet points.</p>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex items-center gap-2 px-6 py-2 rounded-xl bg-brand-amber text-black hover:bg-white transition-colors disabled:opacity-50"
                    >
                        <Plus size={18} /> {isSubmitting ? "Adding..." : "Add Category"}
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Current Arsenal Inventory</h2>
                {skills.length === 0 ? (
                    <p className="text-slate-500">No skills found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map(skill => (
                            <div key={skill.id} className="glass-card p-4 rounded-xl border border-white/5 flex gap-4 items-start group">
                                <div className="flex-1">
                                    <h3 className="text-white font-medium mb-1">{skill.title}</h3>
                                    <p className="text-slate-400 text-xs whitespace-pre-wrap mb-3 line-clamp-2">{skill.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {(skill.skills as string[]).map((s, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-slate-300">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(skill.id)}
                                    className="text-slate-600 hover:text-red-500 transition-colors p-2 flex-shrink-0"
                                    title="Delete Skill"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
