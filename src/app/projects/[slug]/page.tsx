import { prisma } from "@/core/prisma";
import { SITE_CONFIG } from "@/core/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Tag, Layers, PlayCircle, FileText } from "lucide-react";
import * as Icons from "lucide-react";
import ProjectContent from "@/components/features/ProjectContent";

export const dynamic = "force-dynamic";

function DynamicIcon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
    const Icon = (Icons as any)[name] ?? Icons.Globe;
    return <Icon size={size} className={className} />;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = await prisma.project.findUnique({ where: { slug } });
    if (!project) notFound();

    // Similar projects in same category
    const related = await prisma.project.findMany({
        where: { category: project.category, id: { not: project.id } },
        take: 3,
    });

    // All projects for "next project" navigation
    const allProjects = await prisma.project.findMany({ orderBy: { orderIdx: "asc" }, select: { slug: true, title: true, id: true } });
    const currentIdx = allProjects.findIndex(p => p.id === project.id);
    const nextProject = allProjects[currentIdx + 1] ?? allProjects[0];
    const prevProject = allProjects[currentIdx - 1] ?? allProjects[allProjects.length - 1];

    const tags = project.tags as string[];
    const hasVideo = project.video && project.video.trim() !== "";

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Nav */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="text-xl font-bold tracking-tight font-display">
                        {SITE_CONFIG.logo.text}<span className="text-brand-amber">{SITE_CONFIG.logo.suffix}</span>
                    </Link>
                    <Link href="/#projects" className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 transition-all group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        BACK TO PROJECTS
                    </Link>
                </div>
            </nav>

            <main className="pt-28 pb-24">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Category + Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-xs font-bold text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-full uppercase tracking-widest">
                            {project.category}
                        </span>
                        {tags.map(tag => (
                            <span key={tag} className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                                <Tag size={10} /> {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        {project.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl border-l-4 border-brand-amber pl-6">
                        {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-amber text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm uppercase tracking-widest"
                            >
                                View Project <ExternalLink size={16} />
                            </a>
                        )}
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all text-sm uppercase tracking-widest border border-white/10"
                        >
                            Discuss This Tech <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-16 border border-white/10 bg-white/5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Video embed (if present) */}
                    {hasVideo && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <PlayCircle size={22} className="text-brand-amber" />
                                Demo Video
                            </h2>
                            {project.video!.includes("youtube") || project.video!.includes("youtu.be") ? (
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                                    <iframe
                                        src={project.video!}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                                    <video src={project.video!} controls className="w-full h-full object-contain" />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Rich Content Section */}
                    {project.content && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <FileText size={22} className="text-brand-amber" />
                                Project Deep Dive
                            </h2>
                            <ProjectContent
                                content={project.content}
                                contentType={project.contentType}
                            />
                        </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="mb-16 p-8 bg-white/3 border border-white/10 rounded-2xl">
                        <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2 uppercase tracking-widest text-sm">
                            <Layers size={18} className="text-brand-amber" />
                            Tech Stack & Focus Areas
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {tags.map(tag => (
                                <span key={tag} className="text-sm font-bold text-white bg-brand-amber/10 border border-brand-amber/20 px-4 py-2 rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Architect's Note */}
                    <div className="p-8 bg-gradient-to-r from-brand-amber/5 to-transparent border border-brand-amber/20 rounded-2xl mb-16">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-amber/30 flex-shrink-0">
                                <img src={SITE_CONFIG.assets.profile} alt={SITE_CONFIG.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-brand-amber uppercase tracking-widest mb-1">Architect's Note</p>
                                <p className="text-white font-bold text-sm mb-1">{SITE_CONFIG.name}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    This project represents a key milestone in my journey building production-grade AI and mobile systems.
                                    Want to discuss the architecture, replicate something similar, or explore an enterprise implementation?
                                    I'm open to deep technical conversations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Navigation: Prev / Next */}
                    <div className="grid grid-cols-2 gap-4 mb-20">
                        {prevProject && (
                            <Link href={`/projects/${prevProject.slug}`} className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-amber/40 transition-all">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1"><ArrowLeft size={10} /> Previous</p>
                                <p className="text-white font-bold text-sm line-clamp-1 group-hover:text-brand-amber transition-colors">{prevProject.title}</p>
                            </Link>
                        )}
                        {nextProject && (
                            <Link href={`/projects/${nextProject.slug}`} className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-amber/40 transition-all text-right">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-end gap-1">Next <ArrowRight size={10} /></p>
                                <p className="text-white font-bold text-sm line-clamp-1 group-hover:text-brand-amber transition-colors">{nextProject.title}</p>
                            </Link>
                        )}
                    </div>

                    {/* Related Projects */}
                    {related.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8">Related Projects</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {related.map((r) => (
                                    <Link key={r.id} href={`/projects/${r.slug}`} className="group block">
                                        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-white/5 mb-4">
                                            <img
                                                src={r.image}
                                                alt={r.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <h4 className="font-bold text-white group-hover:text-brand-amber transition-colors text-sm">{r.title}</h4>
                                        <p className="text-slate-500 text-xs mt-1">{r.category}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* CTA */}
            <section className="bg-white/3 border-y border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-4">Want to build something like this?</h3>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">Let's architect your next production-grade AI or mobile system together.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-3 bg-brand-amber text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                        START THE CONVERSATION <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <footer className="py-12 bg-black">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-[10px] font-bold tracking-widest">
                    © {new Date().getFullYear()} {SITE_CONFIG.name}. SENIOR SOLUTIONS ARCHITECT.
                </div>
            </footer>
        </div>
    );
}
