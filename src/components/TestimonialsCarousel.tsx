"use client"

import React, { useRef, useEffect, useState } from "react";
import { DM_Sans, Great_Vibes } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

const testimonials = [
    {
        text: "I came to Elyon Life Ministry feeling depressed, fearful, and lost. Through the love, worship, and teachings at the church, God healed her, restored her sense of purpose, and empowered her to live in freedom and serve others.",
        author: "Johnny Wills",
    },
    {
        text: "I want to thank the Almighty for using everyone in this ministry to bless my life. The word of God has been a source of strength and encouragement, and I'm grateful for the sense of purpose and empowerment I've found in this community.",
        author: "Emem James",
    },
    // Add more testimonials as needed
];

function TestimonialCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const scrollStep = 1; // px per tick
        const scrollInterval = 20; // ms
        let interval: NodeJS.Timeout | null = null;

        function startScroll() {
            if (interval) return;
            interval = setInterval(() => {
                if (!containerRef.current || isPaused) return;
                let currentScroll = containerRef.current.scrollLeft;
                currentScroll += scrollStep;
                if (
                    currentScroll >=
                    containerRef.current.scrollWidth - containerRef.current.clientWidth
                ) {
                    currentScroll = 0; // loop
                }
                containerRef.current.scrollLeft = currentScroll;
            }, scrollInterval);
        }

        function stopScroll() {
            if (interval) clearInterval(interval);
            interval = null;
        }

        if (!isPaused) startScroll();
        else stopScroll();

        return () => stopScroll();
    }, [isPaused]);

    return (
        <div
            ref={containerRef}
            className="overflow-x-hidden w-full"
            style={{ width: "100%", cursor: "pointer" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="min-w-[500px] max-w-[700px] bg-[#F5F5F5] rounded-xl shadow py-8 px-4 mx-6"
                        style={{ display: "inline-block" }}
                    >
                        <p className={`text-[#3C4A5A] leading-relaxed font-medium text-base md:text-xl mb-4 ${dmSans.className}`}>{t.text}</p>
                        <p className={`text-[#2E2E2E] text-2xl md:text-[32px] ${greatVibes.className}`}>{t.author}</p>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {testimonials.map((t, i) => (
                    <div
                        key={i + testimonials.length}
                        className="min-w-[500px] max-w-[700px] bg-[#F5F5F5] rounded-lg shadow py-8 px-4 mx-6"
                        style={{ display: "inline-block" }}
                    >
                        <p className={`text-[#3C4A5A] leading-relaxed font-medium text-base md:text-xl mb-4 ${dmSans.className}`}>{t.text}</p>
                        <p className={`text-[#2E2E2E] text-2xl md:text-[32px] ${greatVibes.className}`}>{t.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialCarousel;