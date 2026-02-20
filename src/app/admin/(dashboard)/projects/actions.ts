"use server";

import { prisma } from "@/core/prisma";
import { revalidatePath } from "next/cache";

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
        if (id) {
            await prisma.project.update({
                where: { id },
                data: {
                    ...data,
                    updatedAt: new Date(),
                }
            });
        } else {
            await prisma.project.create({
                data: {
                    ...data,
                    orderIdx: await prisma.project.count(), // Put it at the end
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
