'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Merriweather, DM_Sans } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600'] });

export default function AdminPage() {
  const [video, setVideo] = useState({
    url: "",
    title: "",
    desc: "",
    show: true,
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <header className="w-full bg-white shadow flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <span className={`${merriweather.className} text-xl font-bold text-[#1A1A1A]`}>
            ELYON Admin
          </span>
        </div>
        <Button className="bg-[#C83737] hover:bg-[#B33A3A] text-white rounded-lg px-6 py-2 font-medium">
          Logout
        </Button>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-16">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-6">
          <h2 className={`${merriweather.className} text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2`}>
            Welcome, Admin <span className="inline-block">👋</span>
          </h2>

          <div className="bg-[#F5F5F5] rounded-xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Video Preview */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center mb-4">
                {video.url ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.url.split("v=")[1] || video.url}`}
                    className="w-full h-full"
                    allowFullScreen
                    title="YouTube Preview"
                  />
                ) : (
                  <span className="text-[#8E8E8E] text-sm">Video preview</span>
                )}
              </div>
              <div className="text-xs text-[#8E8E8E] text-center">
                Paste a YouTube URL or ID to preview
              </div>
            </div>

            {/* Video Form */}
            <form className="w-full md:w-1/2 flex flex-col gap-4">
              <label className="text-xs font-medium text-[#3C4A5A] text-left">
                YouTube URL or Video ID
              </label>
              <input
                type="text"
                value={video.url}
                onChange={(e) => setVideo((v) => ({ ...v, url: e.target.value }))}
                className={`border border-[#E5E5E5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CFA83C] ${dmSans.className}`}
                placeholder="e.g. https://youtube.com/watch?v=xxxx"
              />

              <label className="text-xs font-medium text-[#3C4A5A] text-left">Video Title</label>
              <input
                type="text"
                value={video.title}
                onChange={(e) => setVideo((v) => ({ ...v, title: e.target.value }))}
                className={`border border-[#E5E5E5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CFA83C] ${dmSans.className}`}
                placeholder="Title"
              />

              <label className="text-xs font-medium text-[#3C4A5A] text-left">Description</label>
              <textarea
                value={video.desc}
                onChange={(e) => setVideo((v) => ({ ...v, desc: e.target.value }))}
                className={`border border-[#E5E5E5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CFA83C] ${dmSans.className}`}
                placeholder="Description"
                rows={3}
              />

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={video.show}
                  onChange={(e) => setVideo((v) => ({ ...v, show: e.target.checked }))}
                  id="show-toggle"
                  className="accent-[#CFA83C] w-4 h-4"
                />
                <label htmlFor="show-toggle" className="text-xs text-[#3C4A5A]">
                  Show video on site
                </label>
              </div>

              <Button className="bg-[#CFA83C] hover:bg-[#B38C2C] text-white font-semibold rounded-lg py-3 mt-2 transition-colors">
                Save / Publish
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
