"use client"

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const events = [
  {
    image: "/images/worship.png",
    title: "Sunday Worship Service",
    description: "Join us for a powerful time of worship and fellowship.",
  },
  {
    image: "/images/healing.png",
    title: "Healing and Deliverance Service",
    description: "Experience God's healing and deliverance power.",
  },
  {
    image: "/images/communion.png",
    title: "Communion Service",
    description: "Celebrate the Lord's table with us.",
  },
];

function EventsCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-black">
      <div className="relative h-[240px] md:h-[400px] flex items-center justify-center">
        <Image
          src={events[current].image}
          alt={events[current].title}
          fill
          className="object-cover w-full h-full"
        //   sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
        {events.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-white transition-all duration-200 ${
              idx === current ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to event ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsCarousel;
