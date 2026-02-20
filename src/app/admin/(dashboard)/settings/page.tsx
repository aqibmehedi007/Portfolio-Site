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

    // If a setting isn't in the DB yet, pre-fill it with our current API defaults 
    // so the admin can see what is currently being used
    if (!settings.SMTP_HOST) settings.SMTP_HOST = process.env.SMTP_HOST || 'mail.aqibmehedi.com';
    if (!settings.SMTP_PORT) settings.SMTP_PORT = process.env.SMTP_PORT || '465';
    if (!settings.SMTP_USER) settings.SMTP_USER = process.env.SMTP_USER || 'mr@aqibmehedi.com';
    if (!settings.SMTP_PASS) settings.SMTP_PASS = process.env.SMTP_PASS || 'ACE@VICA.?9Tiv~V';
    if (!settings.CONTACT_EMAIL) settings.CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'aqibcareer007@gmail.com';

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-2">Platform Settings</h1>
            <p className="text-slate-400 mb-8">Manage your database-driven environment configurations like SMTP mailers without touching .env files on CPanel.</p>

            <SettingsForm defaultValues={settings} />
        </div>
    );
}
