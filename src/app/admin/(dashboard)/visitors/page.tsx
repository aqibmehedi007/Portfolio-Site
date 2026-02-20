import { prisma } from "@/core/prisma";
import { Globe, Monitor, Smartphone, Tablet, MapPin, Clock, TrendingUp, Users } from "lucide-react";

export const dynamic = "force-dynamic";

async function getVisitorData() {
    const visitors = await prisma.visitor.findMany({
        orderBy: { lastVisit: "desc" },
        take: 200,
    });

    const totalVisitors = visitors.length;
    const totalVisits = visitors.reduce((sum, v) => sum + v.visitCount, 0);

    // Device breakdown
    const deviceCounts = visitors.reduce((acc, v) => {
        const d = v.device || "Unknown";
        acc[d] = (acc[d] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Country breakdown
    const countryCounts = visitors.reduce((acc, v) => {
        const c = v.country || "Unknown";
        acc[c] = (acc[c] || 0) + v.visitCount;
        return acc;
    }, {} as Record<string, number>);

    const topCountries = Object.entries(countryCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10);

    // Browser breakdown
    const browserCounts = visitors.reduce((acc, v) => {
        const b = v.browser || "Other";
        acc[b] = (acc[b] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Geo coordinates for map markers
    const geoPoints = visitors
        .filter((v) => v.latitude && v.longitude)
        .map((v) => ({ lat: v.latitude!, lng: v.longitude!, country: v.country, city: v.city }));

    return { visitors, totalVisitors, totalVisits, deviceCounts, topCountries, browserCounts, geoPoints };
}

export default async function VisitorsPage() {
    const { visitors, totalVisitors, totalVisits, deviceCounts, topCountries, browserCounts, geoPoints } =
        await getVisitorData();

    const maxCountryVisits = topCountries[0]?.[1] || 1;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Site Visitors</h1>
                <p className="text-slate-400 mt-1 text-sm">Real-time analytics from your audience worldwide.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Unique IPs", value: totalVisitors, icon: Users, color: "text-brand-amber" },
                    { label: "Total Page Visits", value: totalVisits, icon: TrendingUp, color: "text-green-400" },
                    { label: "Countries Reached", value: Object.keys(topCountries).length, icon: Globe, color: "text-blue-400" },
                    { label: "Mobile Visitors", value: deviceCounts["Mobile"] || 0, icon: Smartphone, color: "text-purple-400" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                            <stat.icon size={20} />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-bold text-white mt-1">{stat.value.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* World Map Placeholder (CSS-based dot map) */}
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe size={18} className="text-brand-amber" />
                        Visitor Origins
                    </h2>
                    <div className="relative w-full h-56 bg-slate-900/50 rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                        {/* SVG World Map Background */}
                        <div className="absolute inset-0 opacity-20 flex items-center justify-center text-slate-600 text-xs">
                            [ Interactive Map — coordinates recorded ]
                        </div>
                        {/* Render geo dots */}
                        {geoPoints.slice(0, 50).map((pt, i) => {
                            // Convert lat/lng to % positions in a simple equirectangular projection
                            const x = ((pt.lng + 180) / 360) * 100;
                            const y = ((90 - pt.lat) / 180) * 100;
                            return (
                                <div
                                    key={i}
                                    title={`${pt.city || ""}, ${pt.country || ""}`}
                                    className="absolute w-2 h-2 rounded-full bg-brand-amber/80 animate-pulse shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                                />
                            );
                        })}
                        {geoPoints.length === 0 && (
                            <p className="text-slate-500 text-sm z-10">Waiting for first visitors...</p>
                        )}
                    </div>
                    {/* Top Countries Bar Chart */}
                    <div className="mt-6 space-y-3">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Top Countries</h3>
                        {topCountries.map(([country, count]) => (
                            <div key={country} className="flex items-center gap-3">
                                <span className="text-slate-300 text-sm w-32 truncate">{country}</span>
                                <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-brand-amber to-yellow-300 rounded-full"
                                        style={{ width: `${(count / maxCountryVisits) * 100}%` }}
                                    />
                                </div>
                                <span className="text-slate-400 text-xs w-8 text-right">{count}</span>
                            </div>
                        ))}
                        {topCountries.length === 0 && <p className="text-slate-500 text-sm">No data yet.</p>}
                    </div>
                </div>

                {/* Device & Browser Breakdown */}
                <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <h2 className="text-base font-semibold text-white mb-4">Device Types</h2>
                        <div className="space-y-3">
                            {[
                                { label: "Desktop", key: "Desktop", Icon: Monitor, color: "text-blue-400" },
                                { label: "Mobile", key: "Mobile", Icon: Smartphone, color: "text-green-400" },
                                { label: "Tablet", key: "Tablet", Icon: Tablet, color: "text-purple-400" },
                            ].map(({ label, key, Icon, color }) => {
                                const count = deviceCounts[key] || 0;
                                const pct = totalVisitors > 0 ? Math.round((count / totalVisitors) * 100) : 0;
                                return (
                                    <div key={key} className="flex items-center gap-3">
                                        <Icon size={16} className={color} />
                                        <span className="text-slate-300 text-sm flex-1">{label}</span>
                                        <span className="text-slate-400 text-sm">{count}</span>
                                        <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <h2 className="text-base font-semibold text-white mb-4">Browsers</h2>
                        <div className="space-y-3">
                            {Object.entries(browserCounts)
                                .sort(([, a], [, b]) => b - a)
                                .slice(0, 5)
                                .map(([browser, count]) => {
                                    const pct = totalVisitors > 0 ? Math.round((count / totalVisitors) * 100) : 0;
                                    return (
                                        <div key={browser} className="flex items-center gap-3">
                                            <span className="text-slate-300 text-sm flex-1">{browser}</span>
                                            <div className="w-16 bg-white/5 rounded-full h-1.5 overflow-hidden">
                                                <div
                                                    className="h-full bg-brand-amber rounded-full"
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                            <span className="text-slate-400 text-sm w-6 text-right">{count}</span>
                                        </div>
                                    );
                                })}
                            {Object.keys(browserCounts).length === 0 && (
                                <p className="text-slate-500 text-sm">No data yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visitor Log Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        <MapPin size={18} className="text-brand-amber" />
                        Visitor Log
                    </h2>
                    <span className="text-slate-400 text-sm">{visitors.length} unique IPs</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5 text-slate-500 text-xs uppercase tracking-widest">
                                <th className="text-left px-6 py-3">IP Address</th>
                                <th className="text-left px-4 py-3">Location</th>
                                <th className="text-left px-4 py-3">Device</th>
                                <th className="text-left px-4 py-3">Browser</th>
                                <th className="text-left px-4 py-3">Visits</th>
                                <th className="text-left px-4 py-3">Last Seen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitors.map((v) => (
                                <tr key={v.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-3 font-mono text-slate-300 text-xs">{v.ip}</td>
                                    <td className="px-4 py-3 text-slate-400">
                                        {v.city && v.country
                                            ? `${v.city}, ${v.country}`
                                            : v.country || "—"}
                                    </td>
                                    <td className="px-4 py-3 text-slate-400">{v.device || "—"}</td>
                                    <td className="px-4 py-3 text-slate-400">{v.browser || "—"}</td>
                                    <td className="px-4 py-3">
                                        <span className="bg-brand-amber/10 text-brand-amber text-xs font-bold px-2 py-0.5 rounded-full">
                                            {v.visitCount}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-slate-500 text-xs flex items-center gap-1">
                                        <Clock size={12} />
                                        {new Date(v.lastVisit).toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </td>
                                </tr>
                            ))}
                            {visitors.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                        No visitors recorded yet. They will appear here automatically.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
