import { prisma } from "@/core/prisma";
import ContentTabs from "./ContentTabs";

export const metadata = { title: "Site Content CMS" };

export default async function ContentCmsPage() {
    const faqs = await prisma.faq.findMany({ orderBy: { orderIdx: "asc" } });
    const skills = await prisma.skill.findMany({ orderBy: { orderIdx: "asc" } });
    const processSteps = await prisma.processStep.findMany({ orderBy: { orderIdx: "asc" } });
    const techArsenal = await prisma.techArsenal.findMany({ orderBy: { orderIdx: "asc" } });

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-2">Site Content CMS</h1>
            <p className="text-slate-400 mb-8">Manage the textual content directly from the database instead of the source code.</p>

            <ContentTabs faqs={faqs} skills={skills} processSteps={processSteps} techArsenal={techArsenal} />
        </div>
    );
}

