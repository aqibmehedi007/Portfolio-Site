"use client";

import { useState } from "react";
import { addTechArsenal, updateTechArsenal, deleteTechArsenal } from "./actions";
import { toast } from "react-hot-toast";
import { Trash2, Plus, Pencil, X } from "lucide-react";

interface TechArsenalItem {
    id: string;
    title: string;
    description: string;
    items: any;
    size: string;
    icon: string;
    color: string;
    orderIdx: number;
}

const ICON_OPTIONS = [
    { value: "Code2", label: "Code / Languages" },
    { value: "Layers", label: "Layers / Frameworks" },
    { value: "Cloud", label: "Cloud / Infra" },
    { value: "Cpu", label: "CPU / AI" },
    { value: "ShieldCheck", label: "Shield / Security" },
    { value: "Terminal", label: "Terminal / DevOps" },
];

const COLOR_OPTIONS = [
    { value: "amber", label: "Amber (Gold)" },
    { value: "blue", label: "Blue" },
    { value: "emerald", label: "Emerald (Green)" },
    { value: "purple", label: "Purple" },
    { value: "rose", label: "Rose (Red)" },
    { value: "cyan", label: "Cyan (Teal)" },
];

const SIZE_OPTIONS = [
    { value: "md:col-span-1", label: "1 Column" },
    { value: "md:col-span-2", label: "2 Columns (Wide)" },
    { value: "md:row-span-2 md:col-span-1", label: "2 Rows (Tall)" },
    { value: "md:col-span-2 md:row-span-2", label: "2x2 (Large)" },
];

export default function TechArsenalManager({ initialItems }: { initialItems: TechArsenalItem[] }) {
    const [items, setItems] = useState(initialItems);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);

        const res = await addTechArsenal(data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Arsenal Category Added");
            window.location.reload();
        }
        setIsSubmitting(false);
    }

    async function handleUpdate(e: React.FormEvent<HTMLFormElement>, id: string) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);

        const res = await updateTechArsenal(id, data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Arsenal Category Updated");
            setEditingId(null);
            window.location.reload();
        }
        setIsSubmitting(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Delete this Arsenal category?")) return;

        setItems(items.filter(i => i.id !== id));
        const res = await deleteTechArsenal(id);
        if (res.error) {
            toast.error(res.error);
            window.location.reload();
        } else {
            toast.success("Arsenal Category Deleted");
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            {/* Add Form */}
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
                                placeholder="Core Languages"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Icon</label>
                            <select
                                name="icon"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            >
                                {ICON_OPTIONS.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Description</label>
                        <input
                            name="description"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="Multi-paradigm mastery."
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Color Theme</label>
                            <select
                                name="color"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            >
                                {COLOR_OPTIONS.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Grid Size</label>
                            <select
                                name="size"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            >
                                {SIZE_OPTIONS.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Tech Items (Comma separated)</label>
                        <input
                            name="itemsList"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white"
                            placeholder="Python, Dart, PHP, JavaScript, Rust"
                        />
                        <p className="text-xs text-slate-500 mt-2">These render as the skill tags in the staggered grid.</p>
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

            {/* Current Items */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Current Arsenal ({items.length})</h2>
                {items.length === 0 ? (
                    <p className="text-slate-500">No arsenal categories found.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {items.map(item => (
                            <div key={item.id} className="glass-card p-4 rounded-xl border border-white/5 group">
                                {editingId === item.id ? (
                                    /* Edit Mode */
                                    <form onSubmit={(e) => handleUpdate(e, item.id)} className="space-y-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            <input name="title" defaultValue={item.title} required className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm" />
                                            <select name="icon" defaultValue={item.icon} className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm">
                                                {ICON_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                        </div>
                                        <input name="description" defaultValue={item.description} required className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm" />
                                        <div className="grid grid-cols-2 gap-3">
                                            <select name="color" defaultValue={item.color} className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm">
                                                {COLOR_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                            <select name="size" defaultValue={item.size} className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm">
                                                {SIZE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                            </select>
                                        </div>
                                        <input name="itemsList" defaultValue={(item.items as string[]).join(", ")} required className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm" />
                                        <div className="flex gap-2">
                                            <button type="submit" disabled={isSubmitting} className="px-4 py-1.5 rounded-lg bg-brand-amber text-black text-sm font-bold hover:bg-white transition-colors disabled:opacity-50">
                                                {isSubmitting ? "Saving..." : "Save"}
                                            </button>
                                            <button type="button" onClick={() => setEditingId(null)} className="px-4 py-1.5 rounded-lg border border-white/10 text-slate-400 text-sm hover:text-white transition-colors">
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    /* View Mode */
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-medium">{item.title}</h3>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                                                    ${item.color === "amber" ? "text-amber-400 bg-amber-400/10" : ""}
                                                    ${item.color === "blue" ? "text-blue-400 bg-blue-400/10" : ""}
                                                    ${item.color === "emerald" ? "text-emerald-400 bg-emerald-400/10" : ""}
                                                    ${item.color === "purple" ? "text-purple-400 bg-purple-400/10" : ""}
                                                    ${item.color === "rose" ? "text-rose-400 bg-rose-400/10" : ""}
                                                    ${item.color === "cyan" ? "text-cyan-400 bg-cyan-400/10" : ""}
                                                `}>{item.color}</span>
                                                <span className="text-[10px] text-slate-600 font-mono">{item.size}</span>
                                            </div>
                                            <p className="text-slate-400 text-xs mb-3">{item.description}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {(item.items as string[]).map((s, i) => (
                                                    <span key={i} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-slate-300">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => setEditingId(item.id)}
                                                className="text-slate-600 hover:text-brand-amber transition-colors p-2"
                                                title="Edit"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-slate-600 hover:text-red-500 transition-colors p-2"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
