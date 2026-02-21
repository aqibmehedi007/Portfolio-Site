import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const projects = await prisma.project.findMany({
            orderBy: { orderIdx: "asc" },
        });

        return Response.json({ projects });
    } catch (error) {
        console.error("Projects API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const body = await req.json();
        const { title, slug, category, description, icon, image, tags, featured, link, video, content, contentType } = body;

        if (!title || !category || !description || !icon || !image) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const count = await prisma.project.count();
        const project = await prisma.project.create({
            data: {
                title,
                slug: slug || title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
                category,
                description,
                icon,
                image,
                tags: tags || [],
                featured: featured ?? true,
                link: link || null,
                video: video || null,
                content: content || null,
                contentType: contentType || "markdown",
                orderIdx: count,
            },
        });

        return Response.json({ project }, { status: 201 });
    } catch (error) {
        console.error("Project create error:", error);
        return Response.json({ error: "Failed to create project" }, { status: 500 });
    }
}
