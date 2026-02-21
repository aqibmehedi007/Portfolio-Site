import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const [
            totalLeads,
            newLeads,
            totalVisitors,
            totalProjects,
            totalBlogs,
            publishedBlogs,
            recentLeads,
            recentVisitors,
        ] = await Promise.all([
            prisma.lead.count(),
            prisma.lead.count({ where: { status: "NEW" } }),
            prisma.visitor.count(),
            prisma.project.count(),
            prisma.blogPost.count(),
            prisma.blogPost.count({ where: { published: true } }),
            prisma.lead.findMany({
                orderBy: { createdAt: "desc" },
                take: 5,
                select: { id: true, name: true, email: true, service: true, status: true, createdAt: true },
            }),
            prisma.visitor.findMany({
                orderBy: { lastVisit: "desc" },
                take: 5,
                select: { id: true, ip: true, country: true, city: true, device: true, browser: true, lastVisit: true },
            }),
        ]);

        return Response.json({
            stats: {
                totalLeads,
                newLeads,
                totalVisitors,
                totalProjects,
                totalBlogs,
                publishedBlogs,
            },
            recentLeads,
            recentVisitors,
        });
    } catch (error) {
        console.error("Dashboard API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
