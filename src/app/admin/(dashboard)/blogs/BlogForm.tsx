"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { Save, UploadCloud, X } from "lucide-react";

interface Category {
    id: string;
    name: string;
}

interface BlogPostValues {
    id?: string;
    title: string;
    excerpt: string;
    content: string;
    categoryId: string;
    coverImage: string;
    published: boolean;
}

interface Props {
    categories: Category[];
    initialData?: BlogPostValues;
}

export default function BlogForm({ categories, initialData }: Props) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(initialData?.coverImage || "");

    async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            setImagePreview(data.url);
            toast.success("Image uploaded!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload image");
        } finally {
            setIsUploading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData(e.currentTarget);
        // Ensure image acts as part of payload
        if (imagePreview) data.set("coverImage", imagePreview);

        if (initialData?.id) data.append("id", initialData.id);

        try {
            // Using a new API route or Server action
            const res = await fetch("/api/blog/data", {
                method: "POST",
                body: data
            });

            if (!res.ok) {
                const err = await res.json();
                toast.error(err.error || "Failed to save post");
            } else {
                toast.success("Post saved successfully!");
                router.push("/admin/blogs");
                router.refresh();
            }
        } catch (err) {
            toast.error("Internal server error");
        }
        setIsSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 glass-card p-6 md:p-10 rounded-2xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Content Side */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Article Title</label>
                        <input
                            name="title"
                            defaultValue={initialData?.title}
                            required
                            placeholder="e.g. Scaling Flutter Apps for 1M Users"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber font-display text-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Short Excerpt (SEO Meta Description)</label>
                        <textarea
                            name="excerpt"
                            defaultValue={initialData?.excerpt}
                            required
                            rows={3}
                            placeholder="Summarize your article in 1-2 sentences. Crucial for Google CTR."
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber resize-none"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-slate-400">Content (Markdown)</label>
                            <span className="text-xs text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded-full border border-brand-amber/20">
                                Supports GFM Code Blocks
                            </span>
                        </div>
                        <textarea
                            name="content"
                            defaultValue={initialData?.content}
                            required
                            rows={20}
                            placeholder="## Introduction\n\nStart writing your next masterpiece here..."
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber font-mono text-sm leading-relaxed"
                        />
                    </div>
                </div>

                {/* Sidebar Configuration */}
                <div className="space-y-6">
                    {/* Cover Image Upload (Reusing existing API) */}
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Cover Image</label>
                        <div className="relative group w-full aspect-video rounded-xl border-2 border-dashed border-white/10 hover:border-brand-amber overflow-hidden transition-colors flex flex-col items-center justify-center bg-black/50">
                            {imagePreview ? (
                                <>
                                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setImagePreview("")}
                                        className="absolute top-2 right-2 p-1.5 bg-black/80 hover:bg-red-500 rounded-full text-white transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </>
                            ) : (
                                <div className="text-center p-4">
                                    <UploadCloud className="mx-auto text-slate-500 mb-2 group-hover:text-brand-amber transition-colors" size={24} />
                                    <span className="text-xs text-slate-500 px-4">Click or drag image here (16:9 recommended)</span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                disabled={isUploading}
                            />
                        </div>
                        {isUploading && <p className="text-xs text-brand-amber mt-2 text-center animate-pulse">Uploading...</p>}
                        <input type="hidden" name="coverImage" value={imagePreview} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Category</label>
                        <select
                            name="categoryId"
                            defaultValue={initialData?.categoryId || ""}
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber"
                        >
                            <option value="" disabled>Select a Category...</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    name="published"
                                    value="true"
                                    defaultChecked={initialData?.published}
                                    className="peer sr-only"
                                />
                                <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 border border-white/10"></div>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-white block group-hover:text-emerald-400 transition-colors">Publish Live</span>
                                <span className="text-xs text-slate-500">Make this visible to users immediately</span>
                            </div>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || isUploading || !imagePreview}
                        className="w-full btn-primary flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-amber text-black hover:bg-white transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                        <Save size={18} /> {isSubmitting ? "Processing..." : initialData ? "Update Article" : "Save Article"}
                    </button>
                    {!imagePreview && <p className="text-xs text-red-400 text-center uppercase tracking-wider font-bold">Cover image required</p>}
                </div>
            </div>
        </form>
    );
}
