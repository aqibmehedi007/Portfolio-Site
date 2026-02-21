"use client";

import { useState } from "react";
import FaqManager from "./FaqManager";
import SkillManager from "./SkillManager";
import ProcessManager from "./ProcessManagerComponent";
import TechArsenalManager from "./TechArsenalManager";
import { FileText, Award, Layers, Swords } from "lucide-react";

export default function ContentTabs({ faqs, skills, processSteps, techArsenal }: any) {
    const [activeTab, setActiveTab] = useState("faqs");

    return (
        <div>
            <div className="mb-6 flex gap-4 border-b border-white/5 pb-4 overflow-x-auto">
                <button
                    onClick={() => setActiveTab("faqs")}
                    className={`flex flex-shrink-0 items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors border ${activeTab === "faqs" ? "bg-brand-amber/10 text-brand-amber border-brand-amber/30" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                    <FileText size={16} /> FAQs
                </button>
                <button
                    onClick={() => setActiveTab("skills")}
                    className={`flex flex-shrink-0 items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors border ${activeTab === "skills" ? "bg-brand-amber/10 text-brand-amber border-brand-amber/30" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                    <Award size={16} /> Skills
                </button>
                <button
                    onClick={() => setActiveTab("arsenal")}
                    className={`flex flex-shrink-0 items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors border ${activeTab === "arsenal" ? "bg-brand-amber/10 text-brand-amber border-brand-amber/30" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                    <Swords size={16} /> Tech Arsenal
                </button>
                <button
                    onClick={() => setActiveTab("process")}
                    className={`flex flex-shrink-0 items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors border ${activeTab === "process" ? "bg-brand-amber/10 text-brand-amber border-brand-amber/30" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                    <Layers size={16} /> Process Map
                </button>
            </div>

            <div className="mt-8">
                {activeTab === "faqs" && <FaqManager initialFaqs={faqs} />}
                {activeTab === "skills" && <SkillManager initialSkills={skills} />}
                {activeTab === "arsenal" && <TechArsenalManager initialItems={techArsenal} />}
                {activeTab === "process" && <ProcessManager initialProcess={processSteps} />}
            </div>
        </div>
    );
}

