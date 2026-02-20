"use client";

import { SITE_CONFIG } from "@/core/config";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search, Hash, LayoutGrid, List } from "lucide-react";
import { useEffect, useState } from "react";

// Types for lint fixing
interface Category {
    id: string;
    name: string;
    slug: string;
    _count: { posts: number };
}

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    createdAt: Date;
    authorName: string;
    category: { name: string };
}

export default function BlogListingPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [view, setView] = useState<"grid" | "timeline">("grid");
    const [loading, setLoading] = useState(true);

    // Fetch data on client since we're using "use client" for interactivity
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/blog/data');
                const data = await res.json();
                setPosts(data.posts);
                setCategories(data.categories);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation Overlay */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white font-display">
                        {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
                    </Link>
                    <div className="hidden gap-8 text-sm font-medium text-slate-400 md:flex">
                        {SITE_CONFIG.navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className={`transition-colors hover:text-white ${link.href === '/blog' ? 'text-white' : ''}`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-16 text-center md:text-left md:flex md:items-end md:justify-between">
                        <div>
                            <h1 className="text-brand-amber font-semibold tracking-wide uppercase text-sm mb-4">Intellectual Inventory</h1>
                            <h2 className="text-4xl font-bold text-white sm:text-6xl tracking-tight">
                                The Engineering <br /> <span className="text-slate-500">Logbook</span>
                            </h2>
                        </div>
                        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end gap-6">
                            <p className="text-slate-400 max-w-md text-lg leading-relaxed text-center md:text-right">
                                Deep dives into AI architecture, high-security mobile engineering, and production-grade software patterns.
                            </p>

                            {/* View Toggle */}
                            <div className="flex bg-white/5 border border-white/10 rounded-full p-1 self-center md:self-end">
                                <button
                                    onClick={() => setView("grid")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${view === 'grid' ? 'bg-brand-amber text-black' : 'text-slate-500 hover:text-white'}`}
                                >
                                    <LayoutGrid size={14} />
                                    GRID
                                </button>
                                <button
                                    onClick={() => setView("timeline")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${view === 'timeline' ? 'bg-brand-amber text-black' : 'text-slate-500 hover:text-white'}`}
                                >
                                    <List size={14} />
                                    TIMELINE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar / Filters */}
                        <div className="lg:col-span-1 space-y-12">
                            {/* Search */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Search Knowledge</h3>
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand-amber transition-colors" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Topics</h3>
                                <div className="flex flex-col gap-2">
                                    {categories.map((cat: Category) => (
                                        <button
                                            key={cat.id}
                                            className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all text-sm group"
                                        >
                                            <span className="flex items-center gap-3">
                                                <Hash size={14} className="text-slate-600 group-hover:text-brand-amber" />
                                                {cat.name}
                                            </span>
                                            <span className="text-[10px] font-mono bg-white/5 border border-white/10 rounded px-1.5 py-0.5">
                                                {cat._count.posts}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Blog Grid / Timeline */}
                        <div className="lg:col-span-3">
                            {loading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[1, 2, 4, 6].map((i) => (
                                        <div key={i} className="h-96 rounded-2xl bg-white/5 animate-pulse" />
                                    ))}
                                </div>
                            ) : view === "grid" ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {posts.map((post: Post) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-amber/30 transition-all duration-500"
                                        >
                                            {/* Image wrapper */}
                                            <div className="aspect-[16/9] overflow-hidden bg-white/5">
                                                <img
                                                    src={post.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="p-8 flex flex-col flex-1">
                                                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest">
                                                    <span className="text-brand-amber">{post.category.name}</span>
                                                    <span className="text-slate-600">—</span>
                                                    <span className="text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-brand-amber transition-colors leading-snug">
                                                    {post.title}
                                                </h3>

                                                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-brand-amber/20 border border-brand-amber/30 flex items-center justify-center text-[10px] text-brand-amber font-bold">
                                                            AM
                                                        </div>
                                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{post.authorName}</span>
                                                    </div>
                                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-brand-amber transition-colors">
                                                        READ MORE
                                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-amber/50 before:via-white/5 before:to-transparent">
                                    {posts.map((post: Post, i: number) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            {/* Dot */}
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-brand-amber shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-120 transition-transform z-10">
                                                <div className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
                                            </div>
                                            {/* Card */}
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-brand-amber/30 transition-all">
                                                <time className="text-xs font-mono text-brand-amber mb-2 block">{new Date(post.createdAt).toLocaleDateString()}</time>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-amber transition-colors line-clamp-1">{post.title}</h3>
                                                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{post.excerpt}</p>
                                                <div className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-brand-amber flex items-center gap-2">
                                                    EXAMINE DATA <ArrowRight size={12} />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-black py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-slate-500 text-xs">
                    © {new Date().getFullYear()} {SITE_CONFIG.name}. Licensed Architect & Engineer.
                </div>
            </footer>
        </div>
    );
}
