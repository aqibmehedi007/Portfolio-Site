import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        const body = await req.json();
        const skill = await prisma.skill.update({
            where: { id },
            data: body,
        });
        return Response.json({ skill });
    } catch (error) {
        console.error("Skill update error:", error);
        return Response.json({ error: "Failed to update skill" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        await prisma.skill.delete({ where: { id } });
        return Response.json({ message: "Skill deleted" });
    } catch (error) {
        console.error("Skill delete error:", error);
        return Response.json({ error: "Failed to delete skill" }, { status: 500 });
    }
}
