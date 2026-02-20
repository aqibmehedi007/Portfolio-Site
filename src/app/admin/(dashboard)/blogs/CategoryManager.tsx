"use client";

import { useState } from "react";
import { createCategory, deleteCategory } from "./actions";
import { toast } from "react-hot-toast";
import { Plus, Trash2 } from "lucide-react";

interface Category {
    id: string;
    name: string;
    slug: string;
    _count: { posts: number };
}

export default function CategoryManager({ categories }: { categories: Category[] }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);
        const name = data.get("name") as string;

        const res = await createCategory(name);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Category created");
            (e.target as HTMLFormElement).reset();
        }
        setIsSubmitting(false);
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure? Posts in this category will cause deletion to fail.")) return;

        const res = await deleteCategory(id);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Category deleted");
        }
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleAdd} className="flex gap-2">
                <input
                    name="name"
                    required
                    placeholder="New category name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white text-sm"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-amber text-black px-3 rounded-xl hover:bg-white transition-colors"
                >
                    <Plus size={18} />
                </button>
            </form>

            <ul className="space-y-3">
                {categories.map(cat => (
                    <li key={cat.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm font-semibold truncate">{cat.name}</h4>
                            <span className="text-xs text-slate-500">{cat._count.posts} posts</span>
                        </div>
                        <button
                            onClick={() => handleDelete(cat.id)}
                            className="text-slate-600 hover:text-red-500 transition-colors p-2"
                            title="Delete Category"
                        >
                            <Trash2 size={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
