import { prisma } from "@/core/prisma";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const published = searchParams.get("published");

        const where = published !== null ? { published: published === "true" } : {};
        const skip = (page - 1) * limit;

        const [blogs, total, categories] = await Promise.all([
            prisma.blogPost.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
                include: { category: true },
            }),
            prisma.blogPost.count({ where }),
            prisma.blogCategory.findMany({ orderBy: { name: "asc" } }),
        ]);

        return Response.json({
            blogs,
            categories,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Blogs API error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    if (!auth) return unauthorizedResponse();

    try {
        const body = await req.json();
        const { title, slug, excerpt, content, coverImage, categoryId, published } = body;

        if (!title || !excerpt || !content || !coverImage || !categoryId) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const blog = await prisma.blogPost.create({
            data: {
                title,
                slug: slug || title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
                excerpt,
                content,
                coverImage,
                categoryId,
                published: published ?? false,
            },
            include: { category: true },
        });

        return Response.json({ blog }, { status: 201 });
    } catch (error) {
        console.error("Blog create error:", error);
        return Response.json({ error: "Failed to create blog post" }, { status: 500 });
    }
}
