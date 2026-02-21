import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const steps = await prisma.processStep.findMany({
            orderBy: { orderIdx: "asc" },
        });
        return Response.json({ steps });
    } catch (error) {
        console.error("Process Steps API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const body = await req.json();
        const { step, title, description, icon, orderIdx } = body;

        if (!step || !title || !description || !icon) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const count = await prisma.processStep.count();
        const processStep = await prisma.processStep.create({
            data: {
                step,
                title,
                description,
                icon,
                orderIdx: orderIdx || count,
            },
        });

        return Response.json({ processStep }, { status: 201 });
    } catch (error) {
        console.error("Process Step create error:", error);
        return Response.json({ error: "Failed to create process step" }, { status: 500 });
    }
}
