"use client";

import { useState } from "react";
import { Project } from "@prisma/client";
import { Edit, Trash2, Star, ExternalLink, GripVertical, Plus } from "lucide-react";
import { deleteProject } from "./actions";
import ProjectForm from "./ProjectForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectList({ initialProjects }: { initialProjects: Project[] }) {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const router = useRouter();

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) return;

        setDeletingId(id);
        const result = await deleteProject(id);

        if (result.success) {
            setProjects(projects.filter(p => p.id !== id));
        } else {
            alert(result.error || "Failed to delete project");
        }
        setDeletingId(null);
    };

    const handleSuccess = () => {
        setIsAdding(false);
        setEditingProject(null);
        router.refresh(); // Refresh server data
        // For immediate UI update, we could also fetch projects again or use a state update if we had a list fetcher
        window.location.reload(); // Hard reload for simplicity in this flow to ensure all caches clear
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-white text-black font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-amber transition-colors shadow-lg shadow-white/5"
                >
                    <Plus size={18} /> Add New Project
                </button>
            </div>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="glass-card border border-white/10 rounded-xl p-4 flex items-center gap-6 group hover:border-brand-amber/30 transition-all"
                    >
                        <div className="text-slate-600 cursor-grab active:cursor-grabbing">
                            <GripVertical size={20} />
                        </div>

                        <div className="w-24 h-16 bg-black/50 border border-white/5 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-bold text-lg truncate">{project.title}</h3>
                                {project.featured && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-brand-amber/10 border border-brand-amber/20 rounded text-[10px] font-bold text-brand-amber uppercase tracking-widest">
                                        <Star size={10} fill="currentColor" /> Featured
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                <span className="uppercase tracking-widest text-slate-400">{project.category}</span>
                                <span className="text-slate-700">•</span>
                                <span className="flex items-center gap-1">
                                    {(project.tags as string[]).slice(0, 3).join(", ")}
                                    {(project.tags as string[]).length > 3 && "..."}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link
                                href={project.link || "#"}
                                target="_blank"
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                <ExternalLink size={18} />
                            </Link>
                            <button
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                onClick={() => setEditingProject(project)}
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                className="p-2 text-red-500/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all disabled:opacity-50"
                                onClick={() => handleDelete(project.id)}
                                disabled={deletingId === project.id}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className="py-20 text-center glass-card border border-white/10 rounded-xl">
                        <p className="text-slate-500">No projects found. Add your first project to showcase your work.</p>
                    </div>
                )}
            </div>

            {(isAdding || editingProject) && (
                <ProjectForm
                    initialData={editingProject || undefined}
                    onClose={() => {
                        setIsAdding(false);
                        setEditingProject(null);
                    }}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    );
}
