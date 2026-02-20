"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

export default function Typewriter({
    text,
    speed = 30,
    delay = 0,
    className = "",
    onComplete
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [displayedText, text, speed, started, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {displayedText.length < text.length && started && (
                <span className="inline-block w-2 h-5 ml-1 bg-brand-amber animate-pulse align-middle" />
            )}
        </span>
    );
}
