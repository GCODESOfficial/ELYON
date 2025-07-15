"use client";

import type React from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Save, Play } from "lucide-react";

export default function VideoForm() {
  const [formData, setFormData] = useState({
    youtubeUrl: "",
    title: "",
    live_date: "",
  });

  const [previewUrl, setPreviewUrl] = useState("");

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleUrlChange = (url: string) => {
    setFormData({ ...formData, youtubeUrl: url });
    const videoId = extractVideoId(url);
    if (videoId) {
      setPreviewUrl(`https://www.youtube.com/embed/${videoId}`);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const liveVideoData = {
      youtube_url: formData.youtubeUrl,
      title: formData.title,
      live_date: formData.live_date,
    };
    const { error } = await supabase.from("live-videos").insert([liveVideoData]);
    if (error) {
      alert("Error saving video: " + error.message);
    } else {
      alert("Video saved successfully!");
      setFormData({
        youtubeUrl: "",
        title: "",
        live_date: "",
      });
      setPreviewUrl("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">
          Add Live Video URL
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  YouTube URL or Video ID
                </label>
                <input
                  type="text"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="https://youtube.com/watch?v=... or video ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="Enter video title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.live_date} // <-- fixed here
                  onChange={(e) =>
                    setFormData({ ...formData, live_date: e.target.value }) // <-- fixed here
                  }
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                Preview
              </label>
              <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                {previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                    title="Video Preview"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">
                      Enter a YouTube URL to see preview
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex pt-6 border-t border-[#3C4A5A]">
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 bg-[#B33A3A] text-white px-6 py-3 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold"
            >
              <Save className="w-4 h-4" />
              <span>Save & Publish</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
