"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/core/config";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hi Aqib! I visited your portfolio and I'd like to discuss a project with you. 🚀"
);

// Strip non-digits except leading +
const phone = SITE_CONFIG.socials.whatsapp.replace(/[^\d+]/g, "");
const WHATSAPP_URL = `https://wa.me/${phone}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    // Show button after 2s
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(t);
    }, []);

    // Show tooltip pulse after 4s
    useEffect(() => {
        if (!visible || dismissed) return;
        const t = setTimeout(() => setShowTooltip(true), 2000);
        return () => clearTimeout(t);
    }, [visible, dismissed]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Tooltip bubble */}
            {showTooltip && !dismissed && (
                <div className="relative flex items-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-2xl max-w-[220px] animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <span>Let's talk on WhatsApp! 👋</span>
                    <button
                        onClick={() => { setShowTooltip(false); setDismissed(true); }}
                        className="ml-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
                        aria-label="Dismiss"
                    >
                        <X size={14} />
                    </button>
                    {/* Tail */}
                    <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
                </div>
            )}

            {/* Main WhatsApp Button */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                onClick={() => setShowTooltip(false)}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
                style={{ backgroundColor: "#25D366" }}
            >
                {/* Ping animation ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

                {/* WhatsApp SVG Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-white drop-shadow-sm"
                >
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.775L0 32l8.437-2.01A15.94 15.94 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.765-1.851l-.484-.289-5.008 1.196 1.228-4.877-.317-.5A13.23 13.23 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.87c-.398-.199-2.353-1.161-2.718-1.294-.365-.133-.631-.199-.898.199-.266.398-1.031 1.294-1.264 1.56-.234.266-.466.299-.864.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.056-1.981-2.36-2.214-2.758-.234-.398-.025-.613.175-.811.18-.179.398-.466.597-.699.199-.234.266-.398.398-.664.133-.266.066-.499-.033-.698-.1-.199-.898-2.164-1.231-2.962-.323-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-.1064.499-.365.398-1.397 1.365-1.397 3.329 0 1.964 1.43 3.862 1.629 4.128.199.266 2.813 4.295 6.816 6.026.953.41 1.697.655 2.278.839.957.305 1.828.262 2.516.159.767-.114 2.353-.962 2.686-1.891.332-.93.332-1.728.232-1.892-.099-.163-.365-.262-.764-.46z" />
                </svg>
            </a>
        </div>
    );
}
