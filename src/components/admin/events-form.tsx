"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Upload, X, Save } from "lucide-react"

export default function EventsForm() {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDate: "",
    description: "",
    isVisible: true,
  })

  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`
        const { data, error } = await supabase.storage.from('events-images').upload(fileName, file)
        if (!error) {
          const url = supabase.storage.from('events-images').getPublicUrl(fileName).data.publicUrl
          setUploadedImages((prev) => [...prev, url])
        }
      }
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const eventData = {
      event_title: formData.eventTitle,
      event_date: formData.eventDate,
      description: formData.description,
      is_visible: formData.isVisible,
      images: uploadedImages,
    }
    const { error } = await supabase.from('events').insert([eventData])
    if (error) {
      alert('Error saving event: ' + error.message)
    } else {
      alert('Event saved successfully!')
      setFormData({ eventTitle: '', eventDate: '', description: '', isVisible: true })
      setUploadedImages([])
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">Add New Event</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Event Title</label>
              <input
                type="text"
                value={formData.eventTitle}
                onChange={(e) => setFormData({ ...formData, eventTitle: e.target.value })}
                className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                placeholder="Enter event title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Event Date</label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-[#3C4A5A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA83C] focus:border-transparent transition-colors resize-none"
              placeholder="Enter event description"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Event Photos</label>
            <div className="border-2 border-dashed border-[#3C4A5A] rounded-lg p-6 text-center hover:border-[#CFA83C] transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-[#3C4A5A]" />
                <p className="text-[#1A1A1A] font-semibold mb-2">Upload Event Photos</p>
                <p className="text-sm text-gray-500">Click to select multiple images or drag and drop</p>
              </label>
            </div>
          </div>

          {/* Uploaded Images Preview */}
          {uploadedImages.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3">Uploaded Images ({uploadedImages.length})</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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
