"use server";

import { prisma } from "@/core/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(name: string) {
    try {
        if (!name.trim()) return { error: "Name is required" };

        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

        await prisma.blogCategory.create({
            data: { name, slug }
        });

        revalidatePath("/admin/blogs");
        revalidatePath("/blog");
        return { success: true };
    } catch (e: any) {
        if (e.code === 'P2002') return { error: "Category already exists" };
        return { error: "Failed to create category" };
    }
}

export async function deleteCategory(id: string) {
    try {
        await prisma.blogCategory.delete({ where: { id } });

        revalidatePath("/admin/blogs");
        revalidatePath("/blog");
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete category (it may contain posts)" };
    }
}

export async function deletePost(id: string) {
    try {
        await prisma.blogPost.delete({ where: { id } });
        revalidatePath("/admin/blogs");
        revalidatePath("/blog");
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete post" };
    }
}

export async function togglePublish(id: string, published: boolean) {
    try {
        await prisma.blogPost.update({
            where: { id },
            data: { published }
        });
        revalidatePath("/admin/blogs");
        revalidatePath("/blog");
        return { success: true };
    } catch (e) {
        return { error: "Failed to toggle status" };
    }
}
