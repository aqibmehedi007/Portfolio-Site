import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const skills = await prisma.skill.findMany({
            orderBy: { orderIdx: "asc" },
        });
        return Response.json({ skills });
    } catch (error) {
        console.error("Skills API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const body = await req.json();
        const { title, description, skills, icon, orderIdx } = body;

        if (!title || !description || !skills || !icon) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const skill = await prisma.skill.create({
            data: {
                title,
                description,
                skills,
                icon,
                orderIdx: orderIdx || 0,
            },
        });

        return Response.json({ skill }, { status: 201 });
    } catch (error) {
        console.error("Skill create error:", error);
        return Response.json({ error: "Failed to create skill" }, { status: 500 });
    }
}
