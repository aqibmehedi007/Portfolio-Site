import Link from "next/link";
import { Shield, Lock, Smartphone, MessageSquare, Award, Globe, ArrowRight, Activity, Cpu, Zap, Bot } from "lucide-react";
import { Project } from "@prisma/client";

const ICON_MAP: Record<string, any> = {
    Shield,
    Lock,
    Smartphone,
    MessageSquare,
    Award,
    Globe,
    Activity,
    Cpu,
    Zap,
    Bot,
};

export default function ModularPortfolio({ projects = [] }: { projects?: Project[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
                const Icon = ICON_MAP[project.icon] || Globe;
                return (
                    <div
                        key={idx}
                        className="glass-card flex flex-col group hover:translate-y-[-4px] transition-all duration-300 overflow-hidden p-0"
                    >
                        {/* Project Image */}
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 rounded-lg bg-brand-amber/10 text-brand-amber border border-brand-amber/10">
                                    <Icon size={20} />
                                </div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-amber transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between gap-2 pt-6 border-t border-white/5 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {(project.tags as string[] || []).map((tag: string, tIdx: number) => (
                                        <span
                                            key={tIdx}
                                            className="text-[10px] font-bold text-slate-500 uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={project.link || "#"} className="text-white hover:text-brand-amber transition-colors">
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
