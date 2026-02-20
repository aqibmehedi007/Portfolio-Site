import { NextResponse } from 'next/server';
import { prisma } from '@/core/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/core/auth';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const formData = await req.formData();

        const id = formData.get("id") as string | null;
        const title = formData.get("title") as string;
        const excerpt = formData.get("excerpt") as string;
        const content = formData.get("content") as string;
        const categoryId = formData.get("categoryId") as string;
        const coverImage = formData.get("coverImage") as string;
        const published = formData.get("published") === "true"; // checkbox

        // Validate
        if (!title || !content || !categoryId || !coverImage) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Generate slug
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

        if (id) {
            // Update
            await prisma.blogPost.update({
                where: { id },
                data: { title, slug, excerpt, content, categoryId, coverImage, published }
            });
        } else {
            // Create
            // Need to check slug uniqueness, if it exists, append short hash
            const exists = await prisma.blogPost.findUnique({ where: { slug } });
            const finalSlug = exists ? `${slug}-${Math.random().toString(36).substring(2, 6)}` : slug;

            await prisma.blogPost.create({
                data: { title, slug: finalSlug, excerpt, content, categoryId, coverImage, published }
            });
        }

        revalidatePath("/admin/blogs");
        revalidatePath("/blog");

        return NextResponse.json({ success: true });
    } catch (e: any) {
        console.error("Blog Upsert Error:", e);
        return NextResponse.json({ error: "Failed to save post." }, { status: 500 });
    }
}
