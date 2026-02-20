import { prisma } from "@/core/prisma";
import { Lead } from "@prisma/client";
import { Users, LayoutDashboard, Folders } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardOverview() {
    const leadsCount = await prisma.lead.count();
    const projectsCount = await prisma.project.count();

    // Recent untouched leads
    const recentLeads = await prisma.lead.findMany({
        where: { status: "NEW" },
        orderBy: { createdAt: "desc" },
        take: 5
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
                <p className="text-slate-400 mt-2">Welcome to your command center. Here are your operational statistics.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 border border-white/10 rounded-xl relative overflow-hidden group hover:border-brand-amber/50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-amber group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Leads</div>
                            <div className="text-3xl font-bold">{leadsCount}</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-6 border border-white/10 rounded-xl relative overflow-hidden group hover:border-brand-amber/50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-amber group-hover:scale-110 transition-transform">
                            <Folders size={24} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">CMS Projects</div>
                            <div className="text-3xl font-bold">{projectsCount}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <LayoutDashboard className="text-brand-amber" size={20} />
                    Pending Action Items (New Leads)
                </h2>

                {recentLeads.length > 0 ? (
                    <div className="glass-card border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left bg-black text-sm">
                            <thead className="bg-white/5 border-b border-white/10 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <tr>
                                    <th className="px-6 py-4">Lead Detail</th>
                                    <th className="px-6 py-4">Service Required</th>
                                    <th className="px-6 py-4">Budget Range</th>
                                    <th className="px-6 py-4 text-right">Date Logged</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentLeads.map((lead: Lead) => (
                                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-white">{lead.name}</div>
                                            <div className="text-slate-500">{lead.email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-300 font-medium">{lead.service}</td>
                                        <td className="px-6 py-4 text-brand-amber font-bold">{lead.budget}</td>
                                        <td className="px-6 py-4 text-right text-slate-500">
                                            {lead.createdAt.toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="glass-card p-12 border border-white/10 rounded-xl flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-slate-500 mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">No Pending Leads</h3>
                        <p className="text-slate-400 max-w-sm">
                            All inbound leads have been processed. Wait for new form submissions on the frontend.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
