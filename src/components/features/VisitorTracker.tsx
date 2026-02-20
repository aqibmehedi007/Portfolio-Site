"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        const trackVisitor = async () => {
            try {
                // We only track once per session/tab ideally or simply on mount
                await fetch("/api/track", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        platform: navigator.platform,
                        language: navigator.language
                    })
                });
            } catch (error) {
                // Silently fail as tracking shouldn't break the UX
            }
        };

        trackVisitor();
    }, []);

    return null; // Invisible component
}
