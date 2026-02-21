import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "50");
        const skip = (page - 1) * limit;

        const [visitors, total, countryBreakdown] = await Promise.all([
            prisma.visitor.findMany({
                orderBy: { lastVisit: "desc" },
                skip,
                take: limit,
            }),
            prisma.visitor.count(),
            prisma.$queryRaw`
                SELECT country, COUNT(*) as count 
                FROM Visitor 
                WHERE country IS NOT NULL 
                GROUP BY country 
                ORDER BY count DESC 
                LIMIT 20
            ` as Promise<Array<{ country: string; count: bigint }>>,
        ]);

        return Response.json({
            visitors,
            countryBreakdown: countryBreakdown.map(c => ({
                country: c.country,
                count: Number(c.count),
            })),
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Visitors API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
