"use client";

import { useTransition } from "react";
import { deletePost, togglePublish } from "./actions";
import { toast } from "react-hot-toast";
import { Trash2, Eye, EyeOff } from "lucide-react";

export default function PostActions({ postId, published }: { postId: string, published: boolean }) {
    const [isPending, startTransition] = useTransition();

    async function handleDeleteFn() {
        if (!confirm("Permanently delete this post?")) return;
        startTransition(async () => {
            const res = await deletePost(postId);
            if (res.error) toast.error(res.error);
            else toast.success("Article deleted");
        });
    }

    async function handleTogglePublishFn() {
        startTransition(async () => {
            const res = await togglePublish(postId, !published);
            if (res.error) toast.error(res.error);
            else toast.success(published ? "Unpublished" : "Published");
        });
    }

    return (
        <div className="flex items-center gap-1">
            <button
                onClick={handleTogglePublishFn}
                disabled={isPending}
                className={`p-2 transition-colors rounded hover:bg-white/5 ${published ? 'text-emerald-500 hover:text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
                title={published ? "Unpublish" : "Publish"}
            >
                {published ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
            <button
                onClick={handleDeleteFn}
                disabled={isPending}
                className="p-2 text-slate-500 hover:text-red-500 transition-colors rounded hover:bg-white/5"
                title="Delete"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}
