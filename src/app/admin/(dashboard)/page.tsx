import { prisma } from "@/core/prisma";
import { Lead } from "@prisma/client";
import { Users, Folders, Globe, BookOpen, TrendingUp, Eye, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboardOverview() {
    const [leadsCount, projectsCount, visitorsCount, blogsCount, totalVisits, newLeads, recentVisitors, recentBlogs] =
        await Promise.all([
            prisma.lead.count(),
            prisma.project.count(),
            prisma.visitor.count(),
            prisma.blogPost.count(),
            prisma.visitor.aggregate({ _sum: { visitCount: true } }),
            prisma.lead.findMany({ where: { status: "NEW" }, orderBy: { createdAt: "desc" }, take: 5 }),
            prisma.visitor.findMany({ orderBy: { lastVisit: "desc" }, take: 5 }),
            prisma.blogPost.findMany({ orderBy: { createdAt: "desc" }, take: 3, include: { category: true } }),
        ]);

    const totalPageViews = totalVisits._sum.visitCount ?? 0;
    const newLeadsCount = newLeads.length;

    const stats = [
        { label: "Total Leads", value: leadsCount, icon: Users, color: "text-brand-amber", bg: "bg-brand-amber/10", href: "/admin/leads", badge: newLeadsCount > 0 ? `${newLeadsCount} new` : null },
        { label: "CMS Projects", value: projectsCount, icon: Folders, color: "text-blue-400", bg: "bg-blue-400/10", href: "/admin/projects", badge: null },
        { label: "Unique Visitors", value: visitorsCount, icon: Globe, color: "text-green-400", bg: "bg-green-400/10", href: "/admin/visitors", badge: null },
        { label: "Page Views", value: totalPageViews, icon: Eye, color: "text-purple-400", bg: "bg-purple-400/10", href: "/admin/visitors", badge: null },
        { label: "Blog Posts", value: blogsCount, icon: BookOpen, color: "text-pink-400", bg: "bg-pink-400/10", href: "#", badge: null },
        { label: "New Leads", value: newLeadsCount, icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-400/10", href: "/admin/leads", badge: newLeadsCount > 0 ? "action needed" : null },
    ];

    // Country breakdown from visitors
    const countryMap: Record<string, number> = {};
    recentVisitors.forEach(v => {
        const c = v.country || "Unknown";
        countryMap[c] = (countryMap[c] || 0) + v.visitCount;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
                <p className="text-slate-400 mt-1 text-sm">Your complete command center — live data across all systems.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <Link href={stat.href} key={stat.label} className="glass-card p-5 border border-white/10 rounded-xl relative overflow-hidden group hover:border-brand-amber/40 transition-all">
                        <div className="flex items-start justify-between">
                            <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={20} />
                            </div>
                            {stat.badge && (
                                <span className="text-xs font-bold bg-brand-amber/20 text-brand-amber px-2 py-0.5 rounded-full">
                                    {stat.badge}
                                </span>
                            )}
                        </div>
                        <div className="mt-3">
                            <div className="text-3xl font-bold text-white">{stat.value.toLocaleString()}</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Pending Leads */}
                <div className="lg:col-span-2 glass-card border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                        <h2 className="font-bold flex items-center gap-2">
                            <AlertCircle size={16} className="text-brand-amber" />
                            Pending Leads
                        </h2>
                        <Link href="/admin/leads" className="text-xs text-slate-400 hover:text-brand-amber transition-colors flex items-center gap-1">
                            View all <ArrowRight size={12} />
                        </Link>
                    </div>
                    {newLeads.length > 0 ? (
                        <table className="w-full text-sm">
                            <thead className="border-b border-white/5 text-xs text-slate-500 uppercase tracking-widest">
                                <tr>
                                    <th className="text-left px-6 py-3">Lead</th>
                                    <th className="text-left px-4 py-3">Service</th>
                                    <th className="text-left px-4 py-3">Budget</th>
                                    <th className="text-right px-6 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {newLeads.map((lead: Lead) => (
                                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-3">
                                            <div className="font-bold text-white text-sm">{lead.name}</div>
                                            <div className="text-slate-500 text-xs">{lead.email}</div>
                                        </td>
                                        <td className="px-4 py-3 text-slate-300 text-sm">{lead.service}</td>
                                        <td className="px-4 py-3 text-brand-amber font-bold text-sm">{lead.budget}</td>
                                        <td className="px-6 py-3 text-right text-slate-500 text-xs">
                                            {lead.createdAt.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="py-12 flex flex-col items-center justify-center text-center text-slate-500">
                            <Users size={32} className="mb-3 opacity-30" />
                            <p className="text-sm">No pending leads. All clear.</p>
                        </div>
                    )}
                </div>

                {/* Sidebar: Recent Visitors + Recent Blogs */}
                <div className="space-y-4">
                    {/* Recent Visitors */}
                    <div className="glass-card border border-white/10 rounded-xl overflow-hidden">
                        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                            <h2 className="font-bold text-sm flex items-center gap-2">
                                <Globe size={14} className="text-green-400" />
                                Recent Visitors
                            </h2>
                            <Link href="/admin/visitors" className="text-xs text-slate-500 hover:text-brand-amber transition-colors">
                                <ArrowRight size={12} />
                            </Link>
                        </div>
                        <div className="divide-y divide-white/5">
                            {recentVisitors.length > 0 ? recentVisitors.map((v) => (
                                <div key={v.id} className="px-5 py-3 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-mono text-slate-300">{v.ip}</div>
                                        <div className="text-xs text-slate-500">{v.city ? `${v.city}, ${v.country}` : v.country || "Unknown"}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-brand-amber font-bold">{v.visitCount}×</div>
                                        <div className="text-xs text-slate-600">{v.device}</div>
                                    </div>
                                </div>
                            )) : (
                                <div className="py-6 text-center text-slate-500 text-xs">No visitors yet</div>
                            )}
                        </div>
                    </div>

                    {/* Recent Blog Posts */}
                    <div className="glass-card border border-white/10 rounded-xl overflow-hidden">
                        <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
                            <BookOpen size={14} className="text-pink-400" />
                            <h2 className="font-bold text-sm">Recent Posts</h2>
                        </div>
                        <div className="divide-y divide-white/5">
                            {recentBlogs.length > 0 ? recentBlogs.map((post) => (
                                <div key={post.id} className="px-5 py-3">
                                    <div className="text-xs font-medium text-slate-200 line-clamp-1">{post.title}</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-slate-500">{post.category.name}</span>
                                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${post.published ? "bg-green-500/10 text-green-400" : "bg-slate-700 text-slate-500"}`}>
                                            {post.published ? "Published" : "Draft"}
                                        </span>
                                    </div>
                                </div>
                            )) : (
                                <div className="py-6 text-center text-slate-500 text-xs">No blog posts yet</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
