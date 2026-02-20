import { prisma } from "@/core/prisma";
import Link from "next/link";
import { Plus, Edit2, Trash2, Eye, EyeOff, FolderPlus, FileText } from "lucide-react";
import CategoryManager from "./CategoryManager";
import PostActions from "./PostActions";

export const metadata = { title: "Blog Engine - Admin" };

export default async function BlogsPage() {
    const posts = await prisma.blogPost.findMany({
        orderBy: { createdAt: "desc" },
        include: { category: true }
    });

    const categories = await prisma.blogCategory.findMany({
        orderBy: { name: "asc" },
        include: { _count: { select: { posts: true } } }
    });

    return (
        <div className="max-w-6xl space-y-8">
            <div className="flex justify-between items-end border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Blog Engine</h1>
                    <p className="text-slate-400">Manage your technical articles, SEO content, and categories to drive organic traffic.</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="btn-primary flex items-center gap-2 px-6 py-2 rounded-xl bg-brand-amber text-black hover:bg-white transition-colors h-fit font-semibold"
                >
                    <Plus size={18} /> New Article
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* Posts List */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                        <FileText className="text-brand-amber" size={20} /> All Articles ({posts.length})
                    </h2>

                    {posts.length === 0 ? (
                        <div className="glass-card p-8 rounded-2xl border border-white/5 text-center text-slate-500">
                            No articles published yet. Write your first technical deep-dive!
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {posts.map(post => (
                                <div key={post.id} className="glass-card p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-12 rounded-full ${post.published ? 'bg-emerald-500' : 'bg-slate-700'}`} />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-brand-amber transition-colors line-clamp-1">{post.title}</h3>
                                            <div className="flex gap-3 text-sm text-slate-500 mt-1">
                                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-xs text-brand-amber">{post.category.name}</span>
                                                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                                <span>{post.viewCount} views</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pr-2">
                                        <PostActions postId={post.id} published={post.published} />
                                        <Link
                                            href={`/admin/blogs/edit/${post.id}`}
                                            className="p-2 text-slate-400 hover:text-white transition-colors"
                                            title="Edit Post"
                                        >
                                            <Edit2 size={18} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Categories Management */}
                <div className="glass-card p-6 rounded-2xl border border-white/5">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                        <FolderPlus className="text-brand-amber" size={20} /> Categories
                    </h2>
                    <CategoryManager categories={categories} />
                </div>
            </div>
        </div>
    );
}
