"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Eye, EyeOff, Save, Play } from "lucide-react"

export default function SermonForm() {
  const [formData, setFormData] = useState({
    youtubeUrl: "",
    title: "",
    description: "",
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
    const sermonData = {
      youtube_url: formData.youtubeUrl,
      title: formData.title,
      description: formData.description,
      is_visible: formData.isVisible,
    }
    const { error } = await supabase.from('sermons').insert([sermonData])
    if (error) {
      alert('Error saving sermon: ' + error.message)
    } else {
      alert('Sermon saved successfully!')
      setFormData({ youtubeUrl: '', title: '', description: '', isVisible: true })
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">Add New Sermon Video</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">YouTube URL or Video ID</label>
                <input
                  type="text"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="https://youtube.com/watch?v=... or video ID"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Video Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                  placeholder="Enter sermon title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors resize-none"
                  placeholder="Enter sermon description"
                />
              </div>

              <div className="flex items-center space-x-3">
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
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Preview</label>
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
                    <p className="text-sm">Enter a YouTube URL to see preview</p>
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
              <span>Save & Publish</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 border border-[#3C4A5A] text-[#1A1A1A] px-6 py-3 rounded-lg hover:bg-[#F5F5F5] transition-colors font-semibold"
            >
              <span>Save as Draft</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
