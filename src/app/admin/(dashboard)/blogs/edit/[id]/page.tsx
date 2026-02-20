import { prisma } from "@/core/prisma";
import BlogForm from "../../BlogForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export const metadata = { title: "Edit Article" };

export default async function EditBlogPage({ params }: { params: { id: string } }) {
    const post = await prisma.blogPost.findUnique({
        where: { id: params.id }
    });

    if (!post) notFound();

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
                <h1 className="text-3xl font-bold text-white mb-2">Refine Arsenal</h1>
                <p className="text-slate-400">Updating exist strategy document.</p>
            </div>

            <BlogForm categories={categories} initialData={post} />
        </div>
    );
}
