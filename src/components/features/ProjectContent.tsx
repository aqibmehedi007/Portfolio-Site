"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface ProjectContentProps {
    content: string;
    contentType: string;
}

export default function ProjectContent({ content, contentType }: ProjectContentProps) {
    if (!content || content.trim() === "") return null;

    if (contentType === "html") {
        return (
            <div
                className="project-html-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    if (contentType === "text") {
        return (
            <pre className="bg-white/5 border border-white/10 rounded-xl p-6 text-sm text-slate-300 font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
                {content}
            </pre>
        );
    }

    // Default: markdown
    return (
        <div className="prose-project">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-white mt-12 mb-6 pb-3 border-b border-white/10">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-white mt-10 mb-5">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="text-lg font-semibold text-slate-200 mt-6 mb-3">{children}</h4>
                    ),
                    p: ({ children }) => (
                        <p className="text-slate-300 leading-relaxed mb-5 text-base">{children}</p>
                    ),
                    a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-amber hover:underline font-medium">
                            {children}
                        </a>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-5 text-slate-300 ml-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 mb-5 text-slate-300 ml-2">{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="text-slate-300 leading-relaxed">{children}</li>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-brand-amber pl-5 py-2 my-6 bg-brand-amber/5 rounded-r-lg text-slate-300 italic">
                            {children}
                        </blockquote>
                    ),
                    code: ({ className, children, ...props }) => {
                        const isBlock = className?.includes("language-");
                        if (isBlock) {
                            return (
                                <code className={`${className} text-sm`} {...props}>
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className="bg-white/10 text-brand-amber font-mono text-sm px-1.5 py-0.5 rounded" {...props}>
                                {children}
                            </code>
                        );
                    },
                    pre: ({ children }) => (
                        <pre className="bg-[#0d1117] border border-white/10 rounded-xl overflow-x-auto my-6 text-sm">
                            {children}
                        </pre>
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-sm border-collapse border border-white/10 rounded-lg overflow-hidden">
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead className="bg-white/5">{children}</thead>
                    ),
                    th: ({ children }) => (
                        <th className="text-left px-4 py-3 font-bold text-white text-xs uppercase tracking-widest border-b border-white/10">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="px-4 py-3 text-slate-300 border-b border-white/5">{children}</td>
                    ),
                    hr: () => (
                        <hr className="border-white/10 my-10" />
                    ),
                    img: ({ src, alt }) => (
                        <img src={src} alt={alt} className="rounded-xl border border-white/10 max-w-full my-6" />
                    ),
                    strong: ({ children }) => (
                        <strong className="text-white font-bold">{children}</strong>
                    ),
                    em: ({ children }) => (
                        <em className="text-slate-200 italic">{children}</em>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
