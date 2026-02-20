"use server";

import { prisma } from "@/core/prisma";
import { revalidatePath } from "next/cache";

function makeSlug(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({ where: { id } });
        revalidatePath('/');
        revalidatePath('/best-ai-engineer-bangladesh');
        revalidatePath('/admin/projects');
        return { success: true };
    } catch (error) {
        console.error("Delete Error", error);
        return { success: false, error: "Failed to delete project" };
    }
}

export async function upsertProject(data: any, id?: string) {
    try {
        const { content, contentType, ...rest } = data;

        if (id) {
            // On update: regenerate slug if title changed, preserve existing slug otherwise
            const existing = await prisma.project.findUnique({ where: { id }, select: { slug: true, title: true } });
            const newSlug = existing && existing.title !== rest.title
                ? makeSlug(rest.title)
                : existing?.slug;

            await prisma.project.update({
                where: { id },
                data: {
                    ...rest,
                    slug: newSlug || makeSlug(rest.title),
                    content: content || null,
                    contentType: contentType || "markdown",
                    updatedAt: new Date(),
                }
            });
        } else {
            const slug = makeSlug(rest.title);
            await prisma.project.create({
                data: {
                    ...rest,
                    slug,
                    content: content || null,
                    contentType: contentType || "markdown",
                    orderIdx: await prisma.project.count(),
                }
            });
        }

        revalidatePath('/');
        revalidatePath('/best-ai-engineer-bangladesh');
        revalidatePath('/admin/projects');
        return { success: true };
    } catch (error) {
        console.error("Upsert Error", error);
        return { success: false, error: "Failed to save project" };
    }
}
