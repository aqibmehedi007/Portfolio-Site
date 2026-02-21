import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = await authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        const body = await req.json();

        const blog = await prisma.blogPost.update({
            where: { id },
            data: body,
            include: { category: true },
        });

        return Response.json({ blog });
    } catch (error) {
        console.error("Blog update error:", error);
        return Response.json({ error: "Blog not found or update failed" }, { status: 404 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const auth = await authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { id } = await params;
        await prisma.blogPost.delete({ where: { id } });
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Blog not found" }, { status: 404 });
    }
}
