import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const arsenal = await prisma.techArsenal.findMany({
            orderBy: { orderIdx: "asc" },
        });
        return Response.json({ arsenal });
    } catch (error) {
        console.error("Tech Arsenal API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const body = await req.json();
        const { title, description, items, icon, color, size, orderIdx } = body;

        if (!title || !description || !items || !icon) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const entry = await prisma.techArsenal.create({
            data: {
                title,
                description,
                items,
                icon,
                color: color || "amber",
                size: size || "md:col-span-1",
                orderIdx: orderIdx || 0,
            },
        });

        return Response.json({ entry }, { status: 201 });
    } catch (error) {
        console.error("Tech Arsenal create error:", error);
        return Response.json({ error: "Failed to create entry" }, { status: 500 });
    }
}
