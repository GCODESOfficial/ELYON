"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { v4 as uuidv4 } from "uuid"

export default function MomentsForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [momentDate, setMomentDate] = useState("2025-05-15")
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    if (!videoFile) return alert("Please select a video")

    setUploading(true)

    const fileExt = videoFile.name.split('.').pop()
    const fileName = `${uuidv4()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("moments")
      .upload(fileName, videoFile, {
        contentType: "video/mp4",
      })

    if (uploadError) {
      alert("Upload failed")
      console.error(uploadError)
      setUploading(false)
      return
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/moments/${fileName}`

    const { error: insertError } = await supabase.from("moments").insert([
      {
        video_url: publicUrl,
        moment_date: momentDate,
      },
    ])

    if (insertError) {
      alert("Error saving metadata")
      console.error(insertError)
    } else {
      alert("Moment uploaded successfully!")
      setVideoFile(null)
    }

    setUploading(false)
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="video/mp4"
        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
      />
      <input
        type="date"
        value={momentDate}
        onChange={(e) => setMomentDate(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Upload Moment"}
      </button>
    </div>
  )
}
