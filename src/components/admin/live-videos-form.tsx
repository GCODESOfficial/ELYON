"use client"

import type React from "react"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Eye, EyeOff, Save, Radio, Play, Users } from "lucide-react"

export default function LiveVideosForm() {
  const [formData, setFormData] = useState({
    youtubeUrl: "",
    title: "",
    description: "",
    isLive: false,
    scheduledTime: "",
    isVisible: true,
  })

  const [previewUrl, setPreviewUrl] = useState("")

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const handleUrlChange = (url: string) => {
    setFormData({ ...formData, youtubeUrl: url })
    const videoId = extractVideoId(url)
    if (videoId) {
      setPreviewUrl(`https://www.youtube.com/embed/${videoId}`)
    } else {
      setPreviewUrl("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const liveVideoData = {
      youtube_url: formData.youtubeUrl,
      title: formData.title,
      description: formData.description,
      is_live: formData.isLive,
      scheduled_time: formData.scheduledTime || null,
      is_visible: formData.isVisible,
    }
    const { error } = await supabase.from('live_videos').insert([liveVideoData])
    if (error) {
      alert('Error saving live video: ' + error.message)
    } else {
      alert('Live video saved successfully!')
      setFormData({ youtubeUrl: '', title: '', description: '', isLive: false, scheduledTime: '', isVisible: true })
    }
  }

  return (
    <div className="space-y-6">
      {/* Live Status Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#0D1B2A]">Live Stream Status</h3>
          <div
            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
              formData.isLive ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${formData.isLive ? "bg-red-500 animate-pulse" : "bg-gray-400"}`} />
            {formData.isLive ? "LIVE" : "OFFLINE"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#F5F5F5] rounded-lg p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-[#CFA83C]" />
            <p className="text-2xl font-bold text-[#0D1B2A]">0</p>
            <p className="text-sm text-[#1A1A1A]">Current Viewers</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-4 text-center">
            <Radio className="w-8 h-8 mx-auto mb-2 text-[#CFA83C]" />
            <p className="text-2xl font-bold text-[#0D1B2A]">00:00</p>
            <p className="text-sm text-[#1A1A1A]">Stream Duration</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-4 text-center">
            <Play className="w-8 h-8 mx-auto mb-2 text-[#CFA83C]" />
            <p className="text-2xl font-bold text-[#0D1B2A]">HD</p>
            <p className="text-sm text-[#1A1A1A]">Stream Quality</p>
          </div>
        </div>
      </div>

      {/* Live Video Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">Manage Live Stream</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  YouTube Live URL or Stream Key
                </label>
                <input
                  type="text"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="https://youtube.com/watch?v=... or stream key"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Stream Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="Enter live stream title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors resize-none"
                  placeholder="Enter stream description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Scheduled Time (Optional)</label>
                <input
                  type="datetime-local"
                  value={formData.scheduledTime}
                  onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isLive: !formData.isLive })}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors
                    ${
                      formData.isLive
                        ? "bg-red-50 border-red-200 text-red-700"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }
                  `}
                >
                  <Radio className="w-4 h-4" />
                  <span className="text-sm font-semibold">{formData.isLive ? "Live Now" : "Go Live"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isVisible: !formData.isVisible })}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors
                    ${
                      formData.isVisible
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }
                  `}
                >
                  {formData.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  <span className="text-sm font-semibold">{formData.isVisible ? "Visible" : "Hidden"}</span>
                </button>
              </div>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Live Preview</label>
              <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                {previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                    title="Live Stream Preview"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Radio className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Enter a YouTube URL to see preview</p>
                    <p className="text-xs mt-1">Live stream will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#3C4A5A]">
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 bg-[#B33A3A] text-white px-6 py-3 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold"
            >
              <Save className="w-4 h-4" />
              <span>Save Stream Settings</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 border border-[#3C4A5A] text-[#1A1A1A] px-6 py-3 rounded-lg hover:bg-[#F5F5F5] transition-colors font-semibold"
            >
              <span>Test Stream</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
