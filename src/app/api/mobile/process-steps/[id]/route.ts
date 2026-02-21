import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        const body = await req.json();
        const step = await prisma.processStep.update({
            where: { id },
            data: body,
        });
        return Response.json({ step });
    } catch (error) {
        console.error("Process Step update error:", error);
        return Response.json({ error: "Failed to update" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        await prisma.processStep.delete({ where: { id } });
        return Response.json({ message: "Step deleted" });
    } catch (error) {
        console.error("Process Step delete error:", error);
        return Response.json({ error: "Failed to delete" }, { status: 500 });
    }
}
