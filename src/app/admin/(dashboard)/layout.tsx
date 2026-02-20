import { getServerSession } from "next-auth";
import { authOptions } from "@/core/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, Folders, Globe, Settings, LogOut, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex-shrink-0 bg-black/50 border-r border-white/5 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-white/5">
                    <span className="font-bold text-lg tracking-widest uppercase">Admin Panel</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <LayoutDashboard size={18} />
                        Overview
                    </Link>
                    <Link
                        href="/admin/leads"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <Users size={18} />
                        Leads Database
                    </Link>
                    <Link
                        href="/admin/visitors"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <Globe size={18} />
                        Site Visitors
                    </Link>
                    <Link
                        href="/admin/projects"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <Folders size={18} />
                        Project CMS
                    </Link>
                    <Link
                        href="/admin/content"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <FileText size={18} />
                        Content CMS
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
                    >
                        <Settings size={18} />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 text-sm font-medium">
                        <div className="w-8 h-8 bg-brand-amber/20 text-brand-amber rounded-full flex items-center justify-center font-bold">
                            {session.user?.email?.[0].toUpperCase()}
                        </div>
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {session.user?.email}
                        </div>
                    </div>
                    {/* NextAuth SignOut requires Client Context. This is a Server Component. 
                        We will put SignOut logic inside a minimal Client component later, 
                        or just let them click a standard sign-out link API endpoint */}
                    <Link
                        href="/api/auth/signout"
                        className="mt-2 flex items-center gap-3 px-4 py-3 rounded-lg text-red-500/80 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium tracking-wide"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
