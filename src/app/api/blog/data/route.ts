import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [posts, categories] = await Promise.all([
            prisma.blogPost.findMany({
                where: { published: true },
                include: { category: true },
                orderBy: { createdAt: "desc" },
            }),
            prisma.blogCategory.findMany({
                include: { _count: { select: { posts: true } } }
            })
        ]);

        return NextResponse.json({ posts, categories });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch blog data" }, { status: 500 });
    }
}
