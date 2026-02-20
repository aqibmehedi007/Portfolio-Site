"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef } from "react";
import { Project } from "@prisma/client";
import { X, Save, AlertCircle, Upload, ImageIcon, Loader2 } from "lucide-react";
import { upsertProject } from "./actions";

const ProjectSchema = z.object({
    title: z.string().min(2, "Title is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(10, "Description must be at least 10 chars"),
    icon: z.string().min(1, "Icon name is required"),
    image: z.string().min(1, "Image is required"),
    video: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    tags: z.string().min(1, "At least one tag is required"),
    featured: z.boolean(),
    content: z.string().optional(),
    contentType: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof ProjectSchema>;

export default function ProjectForm({
    initialData,
    onClose,
    onSuccess
}: {
    initialData?: Project,
    onClose: () => void,
    onSuccess: () => void
}) {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string>(initialData?.image || "");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<ProjectFormValues>({
        resolver: zodResolver(ProjectSchema),
        defaultValues: initialData ? {
            title: initialData.title,
            category: initialData.category,
            description: initialData.description,
            icon: initialData.icon,
            image: initialData.image,
            video: initialData.video || "",
            link: initialData.link || "",
            tags: (initialData.tags as string[]).join(", "),
            featured: initialData.featured,
            content: (initialData as any).content || "",
            contentType: ((initialData as any).contentType || "markdown") as "markdown" | "html" | "text",
        } : {
            featured: true,
            icon: "Globe",
            contentType: "markdown" as const,
        }
    });

    const handleImageUpload = async (file: File) => {
        setUploading(true);
        setError("");
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Upload failed");
            setValue("image", data.url);
            setImagePreview(data.url);
        } catch (e: any) {
            setError(e.message || "Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const onSubmit = async (values: ProjectFormValues) => {
        setLoading(true);
        setError("");

        // Transform tags manually
        const data = {
            ...values,
            tags: values.tags.split(",").map(t => t.trim()).filter(Boolean)
        };

        const result = await upsertProject(data, initialData?.id);

        if (result.success) {
            onSuccess();
        } else {
            setError(result.error || "Failed to save project");
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-2xl glass-card border border-white/10 rounded-2xl p-8 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-8">
                    {initialData ? "Refine Deployment (Edit Project)" : "New Deployment (Add Project)"}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Project Title</label>
                            <input
                                {...register("title")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                                placeholder="e.g. Krishok AI"
                            />
                            {errors.title && <p className="text-red-400 text-xs mt-2">{errors.title.message}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Category</label>
                            <input
                                {...register("category")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                                placeholder="e.g. Generative AI"
                            />
                            {errors.category && <p className="text-red-400 text-xs mt-2">{errors.category.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Description</label>
                        <textarea
                            {...register("description")}
                            rows={3}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all resize-none"
                            placeholder="Engineering deep dive..."
                        />
                        {errors.description && <p className="text-red-400 text-xs mt-2">{errors.description.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Icon Name (Lucide)</label>
                            <input
                                {...register("icon")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                                placeholder="Globe, Cpu, Zap, etc."
                            />
                            {errors.icon && <p className="text-red-400 text-xs mt-2">{errors.icon.message}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Project Image</label>
                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleImageUpload(file);
                                }}
                            />
                            {/* Preview + Upload area */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="relative w-full h-32 bg-black/50 border-2 border-dashed border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-brand-amber/60 transition-all group"
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full gap-2 text-slate-500 group-hover:text-brand-amber transition-colors">
                                        <ImageIcon size={24} />
                                        <span className="text-xs">Click to upload image</span>
                                    </div>
                                )}
                                {uploading && (
                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                        <Loader2 size={24} className="text-brand-amber animate-spin" />
                                        <span className="text-white text-xs ml-2">Uploading...</span>
                                    </div>
                                )}
                                {imagePreview && !uploading && (
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs">
                                        <Upload size={16} /> Click to change
                                    </div>
                                )}
                            </div>
                            {/* URL fallback input */}
                            <input
                                {...register("image")}
                                className="w-full mt-2 bg-black/30 border border-white/5 rounded-lg px-3 py-2 text-slate-400 focus:outline-none focus:border-brand-amber text-xs transition-all"
                                placeholder="Or paste URL: https://... or /projects/image.jpg"
                                onChange={(e) => {
                                    register("image").onChange(e);
                                    setImagePreview(e.target.value);
                                }}
                            />
                            {errors.image && <p className="text-red-400 text-xs mt-1">{errors.image.message}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">External Link (Optional)</label>
                            <input
                                {...register("link")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                                placeholder="https://..."
                            />
                            {errors.link && <p className="text-red-400 text-xs mt-2">{errors.link.message}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Video URL (Optional)</label>
                            <input
                                {...register("video")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                                placeholder="https://..."
                            />
                            {errors.video && <p className="text-red-400 text-xs mt-2">{errors.video.message}</p>}
                        </div>
                    </div>

                    {/* Content Editor */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                                Project Content (Optional)
                            </label>
                            <select
                                {...register("contentType")}
                                className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-brand-amber text-xs transition-all"
                            >
                                <option value="markdown">📝 Markdown</option>
                                <option value="html">🌐 Raw HTML</option>
                                <option value="text">📄 Plain Text / Code</option>
                            </select>
                        </div>
                        <textarea
                            {...register("content")}
                            rows={14}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all resize-y font-mono leading-relaxed"
                            placeholder={`Write the detailed project breakdown here...\n\n# Architecture\nDescribe the system design...\n\n## Tech Stack\n- Next.js for frontend\n- Prisma ORM\n\n\`\`\`python\n# Example code block\nmodel = load_model('agri-llama')\n\`\`\``}
                        />
                        <p className="text-slate-600 text-xs">
                            Supports GitHub Flavored Markdown — headings, code blocks, tables, bold, italic, links, and lists.
                        </p>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tags (comma separated)</label>
                        <input
                            {...register("tags")}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-amber text-sm transition-all"
                            placeholder="Next.js, Prisma, Tailwind..."
                        />
                        {errors.tags && <p className="text-red-400 text-xs mt-2">{errors.tags.message}</p>}
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <input
                            type="checkbox"
                            {...register("featured")}
                            className="w-5 h-5 accent-brand-amber rounded border-white/10 bg-black/50"
                        />
                        <label className="text-sm font-medium text-slate-300">Feature on Homepage</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-black font-bold text-sm uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-amber transition-colors disabled:opacity-50"
                    >
                        {loading ? "Saving System Config..." : <>Deploy to Production <Save size={18} /></>}
                    </button>
                </form>
            </div>
        </div>
    );
}
