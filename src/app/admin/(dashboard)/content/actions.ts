"use server";

import { prisma } from "@/core/prisma";
import { revalidatePath } from "next/cache";

export async function addFaq(data: FormData) {
    try {
        const question = data.get("question") as string;
        const answer = data.get("answer") as string;

        if (!question || !answer) return { error: "Question and answer are required" };

        const count = await prisma.faq.count();

        await prisma.faq.create({
            data: {
                question,
                answer,
                orderIdx: count
            }
        });

        revalidatePath('/');
        revalidatePath('/best-ai-engineer-bangladesh');
        revalidatePath('/admin/content');
        return { success: true };
    } catch (e) {
        return { error: "Failed to add FAQ" };
    }
}

export async function deleteFaq(id: string) {
    try {
        await prisma.faq.delete({ where: { id } });

        revalidatePath('/');
        revalidatePath('/best-ai-engineer-bangladesh');
        revalidatePath('/admin/content');
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete FAQ" };
    }
}
