import { prisma } from "@/core/prisma";
import BlogForm from "../BlogForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "New Article" };

export default async function NewBlogPage() {
    const categories = await prisma.blogCategory.findMany({
        orderBy: { name: "asc" }
    });

    return (
        <div className="max-w-6xl space-y-6">
            <Link
                href="/admin/blogs"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={16} /> Back to Engine
            </Link>

            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Write Article</h1>
                <p className="text-slate-400">Compose your next deep-dive to capture global technical traffic.</p>
            </div>

            <BlogForm categories={categories} />
        </div>
    );
}
