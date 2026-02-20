"use client";

import { useTransition } from "react";
import { saveSettings } from "./actions";
import { toast } from "react-hot-toast";

interface Props {
    defaultValues: Record<string, string>;
}

export function SettingsForm({ defaultValues }: Props) {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            const result = await saveSettings(formData);
            if (result.success) {
                toast.success("Settings saved successfully!");
            } else {
                toast.error(result.error || "Failed to save");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-brand-amber mb-1 flex items-center gap-2">
                        <span>📧</span> SMTP & Email Configuration
                    </h2>
                    <p className="text-sm text-slate-400 mb-6">These credentials override the environment variables when sending lead notifications.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">SMTP Host</label>
                        <input
                            name="SMTP_HOST"
                            defaultValue={defaultValues.SMTP_HOST || ""}
                            placeholder="mail.yourdomain.com"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">SMTP Port</label>
                        <input
                            name="SMTP_PORT"
                            type="number"
                            defaultValue={defaultValues.SMTP_PORT || ""}
                            placeholder="465"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">SMTP Username</label>
                        <input
                            name="SMTP_USER"
                            defaultValue={defaultValues.SMTP_USER || ""}
                            placeholder="me@example.com"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">SMTP Password</label>
                        <input
                            name="SMTP_PASS"
                            type="password"
                            defaultValue={defaultValues.SMTP_PASS || ""}
                            placeholder="••••••••••••"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber"
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Admin Notification Email</label>
                    <p className="text-xs text-slate-500 mb-3">Where should lead alerts be sent? Defaults to aqibcareer007@gmail.com.</p>
                    <input
                        name="CONTACT_EMAIL"
                        defaultValue={defaultValues.CONTACT_EMAIL || "aqibcareer007@gmail.com"}
                        placeholder="aqibcareer007@gmail.com"
                        className="w-full md:w-1/2 bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-amber"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="btn-primary w-full md:w-auto px-8 py-3 rounded-full font-semibold bg-brand-amber text-black hover:bg-white transition-colors disabled:opacity-50"
            >
                {isPending ? "Saving..." : "Save Settings"}
            </button>
        </form>
    );
}
