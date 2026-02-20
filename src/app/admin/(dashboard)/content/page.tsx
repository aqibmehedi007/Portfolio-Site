import { prisma } from "@/core/prisma";
import FaqManager from "./FaqManager";
import { FileText, Award, Layers } from "lucide-react";

export const metadata = { title: "Site Content CMS" };

export default async function ContentCmsPage() {
    const faqs = await prisma.faq.findMany({ orderBy: { orderIdx: "asc" } });

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-2">Site Content CMS</h1>
            <p className="text-slate-400 mb-8">Manage the textual content directly from the database instead of the source code. Currently supporting FAQs.</p>

            <div className="mb-6 flex gap-4 border-b border-white/5 pb-4">
                {/* Tabs - Only FAQ is active for now, we will add Skills & Process next */}
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-amber/10 text-brand-amber rounded-lg font-medium border border-brand-amber/30">
                    <FileText size={16} /> FAQs
                </button>
                <div className="flex items-center gap-2 px-4 py-2 text-slate-500 opacity-50 cursor-not-allowed">
                    <Award size={16} /> Skills (Coming soon)
                </div>
                <div className="flex items-center gap-2 px-4 py-2 text-slate-500 opacity-50 cursor-not-allowed">
                    <Layers size={16} /> Process (Coming soon)
                </div>
            </div>

            {/* Render the FAQ Manager specifically under the active tab */}
            <FaqManager initialFaqs={faqs} />
        </div>
    );
}
