"use client"

import Image from "next/image";

const images = [
  "/images/memories/memories1.png",
  "/images/memories/memories2.png",
  "/images/memories/memories3.png",
  "/images/memories/memories4.png",
  "/images/memories/memories5.png",
  "/images/memories/memories6.png",
  "/images/memories/memories7.png",
  "/images/memories/memories8.png",
  "/images/memories/memories9.png",
  "/images/memories/memories10.png",
];

export default function MemoriesGallery() {
  return (
    <div className="w-full">
      {/* Desktop: 5 columns, 2 rows */}
      <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-4">
        {images.slice(0, 10).map((src, i) => (
          <div key={i} className="aspect-square bg-black rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Memory ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority={i < 5}
            />
          </div>
        ))}
      </div>
      {/* Mobile: 3 columns, 4 rows */}
      <div className="grid grid-cols-3 gap-3 md:hidden">
        {images.map((src, i) => (
          <div key={i} className="aspect-square bg-black rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Memory ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
