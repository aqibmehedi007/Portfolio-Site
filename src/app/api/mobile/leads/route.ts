import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const status = searchParams.get("status"); // NEW, REVIEWED, CONTACTED, CLOSED

        const where = status ? { status } : {};
        const skip = (page - 1) * limit;

        const [leads, total] = await Promise.all([
            prisma.lead.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.lead.count({ where }),
        ]);

        return Response.json({
            leads,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Leads API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
