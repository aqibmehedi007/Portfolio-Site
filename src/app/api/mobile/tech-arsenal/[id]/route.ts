import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        const body = await req.json();
        const entry = await prisma.techArsenal.update({
            where: { id },
            data: body,
        });
        return Response.json({ entry });
    } catch (error) {
        console.error("Tech Arsenal update error:", error);
        return Response.json({ error: "Failed to update entry" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        await prisma.techArsenal.delete({ where: { id } });
        return Response.json({ message: "Entry deleted" });
    } catch (error) {
        console.error("Tech Arsenal delete error:", error);
        return Response.json({ error: "Failed to delete entry" }, { status: 500 });
    }
}
