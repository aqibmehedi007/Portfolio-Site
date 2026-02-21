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
        const { status } = body;

        if (!status || !["NEW", "REVIEWED", "CONTACTED", "CLOSED"].includes(status)) {
            return Response.json({ error: "Invalid status" }, { status: 400 });
        }

        const lead = await prisma.lead.update({
            where: { id },
            data: { status },
        });

        return Response.json({ lead });
    } catch (error) {
        console.error("Lead update error:", error);
        return Response.json({ error: "Lead not found or update failed" }, { status: 404 });
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
        await prisma.lead.delete({ where: { id } });
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Lead not found" }, { status: 404 });
    }
}
