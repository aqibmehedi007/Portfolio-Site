import { prisma } from "@/core/prisma";
import { Lead } from "@prisma/client";
import { Mail, Briefcase, DollarSign, Calendar, MessageSquare, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function LeadsDatabasePage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">CRM: Leads Database</h1>
                    <p className="text-slate-400">View and manage all incoming prospective clients.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm font-bold tracking-widest uppercase text-brand-amber">
                    Total: {leads.length}
                </div>
            </div>

            <div className="space-y-6">
                {leads.length > 0 ? (
                    leads.map((lead: Lead) => (
                        <div key={lead.id} className="glass-card border border-white/10 rounded-xl p-6 group hover:border-brand-amber/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                {/* Left Side: Details */}
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-black/50 border border-white/10 rounded-full flex flex-col items-center justify-center text-xl font-bold text-white shadow-inner">
                                            {lead.name[0]?.toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{lead.name}</h3>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                                                <Mail size={14} />
                                                <a href={`mailto:${lead.email}`} className="hover:text-brand-amber transition-colors">
                                                    {lead.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-300">
                                            <Briefcase size={12} className="text-brand-amber" />
                                            {lead.service}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-300">
                                            <DollarSign size={12} className="text-green-400" />
                                            {lead.budget}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-300">
                                            <Calendar size={12} className="text-blue-400" />
                                            {lead.createdAt.toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-300">
                                            <Tag size={12} className="text-purple-400" />
                                            Status: {lead.status}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <div className="flex gap-3 text-slate-300">
                                    <MessageSquare size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                                        "{lead.message}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-24 glass-card border border-white/10 rounded-xl">
                        <h3 className="text-2xl font-bold text-slate-400">Database Empty</h3>
                        <p className="text-slate-500 mt-2">No active leads have been submitted through the portal yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
