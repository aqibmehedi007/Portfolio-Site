import { prisma } from "@/core/prisma";
import { SettingsForm } from "./SettingsForm";
import { Mail, Shield, Server } from "lucide-react";

export const metadata = {
    title: "Site Settings - Admin"
};

export default async function SettingsPage() {
    // Fetch all current settings so we can pre-fill
    const settingsRaw = await prisma.setting.findMany();
    const settings = settingsRaw.reduce((acc: Record<string, string>, curr: { key: string; value: string }) => {
        acc[curr.key] = curr.value;
        return acc;
    }, {} as Record<string, string>);

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-2">Platform Settings</h1>
            <p className="text-slate-400 mb-8">Manage your database-driven environment configurations like SMTP mailers without touching .env files on CPanel.</p>

            <SettingsForm defaultValues={settings} />
        </div>
    );
}
