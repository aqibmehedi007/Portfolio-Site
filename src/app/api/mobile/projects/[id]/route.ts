import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        const body = await req.json();

        const project = await prisma.project.update({
            where: { id },
            data: body,
        });

        return Response.json({ project });
    } catch (error) {
        return Response.json({ error: "Project not found or update failed" }, { status: 404 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        await prisma.project.delete({ where: { id } });
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Project not found" }, { status: 404 });
    }
}
