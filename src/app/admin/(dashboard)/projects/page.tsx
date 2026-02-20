import { prisma } from "@/core/prisma";
import { Plus, Folders, Edit, Trash2, ExternalLink, Star } from "lucide-react";
import { Project } from "@prisma/client";
import Link from "next/link";
import ProjectList from "./ProjectList";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
    const projects = await prisma.project.findMany({
        orderBy: { orderIdx: "asc" }
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                        <Folders className="text-brand-amber" size={32} />
                        Project CMS
                    </h1>
                    <p className="text-slate-400">Add, edit, and organize your engineering portfolio inventory.</p>
                </div>
                <button
                    className="bg-white text-black font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-amber transition-colors"
                >
                    <Plus size={18} /> Add New Project
                </button>
            </div>

            <ProjectList initialProjects={projects} />
        </div>
    );
}
