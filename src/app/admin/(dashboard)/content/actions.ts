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

export async function addProcess(data: FormData) {
    try {
        const step = data.get("step") as string;
        const title = data.get("title") as string;
        const description = data.get("description") as string;
        const icon = data.get("icon") as string;

        if (!step || !title || !description) return { error: "All fields are required" };

        const count = await prisma.processStep.count();

        await prisma.processStep.create({
            data: { step, title, description, icon, orderIdx: count }
        });

        revalidatePath('/');
        return { success: true };
    } catch (e) {
        return { error: "Failed to add Process Step" };
    }
}

export async function deleteProcess(id: string) {
    try {
        await prisma.processStep.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete" };
    }
}

export async function addSkill(data: FormData) {
    try {
        const title = data.get("title") as string;
        const description = data.get("description") as string;
        const icon = data.get("icon") as string;
        const skillsList = data.get("skillsList") as string;

        if (!title || !description || !skillsList) return { error: "All fields are required" };

        const skillArray = skillsList.split(',').map(s => s.trim()).filter(Boolean);
        const count = await prisma.skill.count();

        await prisma.skill.create({
            data: { title, description, icon, skills: skillArray, orderIdx: count }
        });

        revalidatePath('/');
        return { success: true };
    } catch (e) {
        return { error: "Failed to add Skill" };
    }
}

export async function deleteSkill(id: string) {
    try {
        await prisma.skill.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete" };
    }
}

