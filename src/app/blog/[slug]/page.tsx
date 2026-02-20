import { prisma } from "@/core/prisma";
import { SITE_CONFIG } from "@/core/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2, MessageSquare, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: { category: true }
    });

    if (!post) {
        notFound();
    }

    const relatedPosts = await prisma.blogPost.findMany({
        where: {
            categoryId: post.categoryId,
            id: { not: post.id },
            published: true
        },
        take: 3,
        include: { category: true }
    });

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header / Nav */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white font-display">
                        {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
                    </Link>
                    <Link
                        href="/blog"
                        className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 transition-all group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        BACK TO LOGBOOK
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Meta Above Title */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="text-brand-amber bg-brand-amber/10 px-2 py-1 rounded">
                                {post.category.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={12} className="text-brand-amber" />
                            {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={12} className="text-brand-amber" />
                            5 MIN READ
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight leading-[1.1]">
                        {post.title}
                    </h1>

                    {/* Author Bar */}
                    <div className="flex items-center justify-between py-8 border-y border-white/5 mb-16">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-brand-amber/30 p-0.5">
                                <img
                                    src={SITE_CONFIG.assets.profile}
                                    className="w-full h-full rounded-full object-cover"
                                    alt={post.authorName}
                                />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white uppercase tracking-widest">{post.authorName}</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Senior Solutions Architect</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-slate-400">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-20 border border-white/10">
                        <img
                            src={post.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-brand max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed font-medium mb-12 italic border-l-4 border-brand-amber pl-8 py-2">
                            {post.excerpt}
                        </p>

                        <div className="text-slate-400 text-lg leading-relaxed space-y-8">
                            {post.content.split('\n').map((para: string, i: number) => (
                                <p key={i}>{para}</p>
                            ))}

                            <div className="p-8 bg-brand-amber/5 border border-brand-amber/20 rounded-2xl mt-12">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <MessageSquare size={18} className="text-brand-amber" />
                                    Architect's Note
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    The full technical whitepaper for this topic is available upon request for enterprise clients. I frequently update these entries as state-of-the-art patterns evolve in the AI and Mobile ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-32 pt-24 border-t border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-12">Continue Exploring</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related: any) => (
                                <Link
                                    key={related.id}
                                    href={`/blog/${related.slug}`}
                                    className="group block space-y-4"
                                >
                                    <div className="aspect-[16/9] overflow-hidden rounded-xl bg-white/5 flex-shrink-0">
                                        <img
                                            src={related.coverImage}
                                            alt={related.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="font-bold text-white group-hover:text-brand-amber transition-colors line-clamp-2 leading-snug">
                                        {related.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <section className="bg-white/5 border-y border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-6">Have a specific architectural challenge?</h3>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">Let's discuss how we can implement these patterns in your next high-scale production system.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-3 bg-brand-amber text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                        SCHEDULE A CONSULTATION
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-black">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-[10px] font-bold tracking-widest">
                    © {new Date().getFullYear()} {SITE_CONFIG.name}. SENIOR SOLUTIONS ARCHITECT.
                </div>
            </footer>
        </div>
    );
}
