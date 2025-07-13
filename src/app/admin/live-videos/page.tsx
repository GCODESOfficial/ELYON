"use client"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabaseClient"
import { Trash2, Plus, Archive } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { toast } from "sonner"
import VideoForm from "@/components/admin/video-form"

function extractVideoId(url: string): string | null {
  // Handles various YouTube URL formats
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function AdminLiveVideosPage() {
  const [liveVideos, setLiveVideos] = useState<{
    id: string;
    youtube_url: string;
    title?: string;
    date?: string;
  }[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchLiveVideos()
  }, [])

  const fetchLiveVideos = async () => {
    setLoading(true)
    // Only fetch videos where date is today or in the future (still live)
    const today = new Date().toISOString().split("T")[0]
    const { data, error } = await supabase
      .from("live_videos")
      .select("id, youtube_url, title, date")
      .gte("date", today)
      .order("date", { ascending: true })
    if (error) {
      toast.error("Failed to fetch live videos")
    } else {
      setLiveVideos(data || [])
    }
    setLoading(false)
  }

  // Move video to sermons and remove from live_videos
  const handleArchive = async (video: { id: string; youtube_url: string; title?: string; date?: string }) => {
    // Insert into sermons
    const { error: insertError } = await supabase.from("sermons").insert({
      youtube_url: video.youtube_url,
      title: video.title,
      date: video.date,
    })
    if (insertError) {
      toast.error("Failed to archive video")
      return
    }
    // Delete from live_videos
    const { error: deleteError } = await supabase.from("live_videos").delete().eq("id", video.id)
    if (deleteError) {
      toast.error("Failed to remove from live videos")
    } else {
      toast.success("Video archived to sermons")
      fetchLiveVideos()
    }
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("live_videos").delete().eq("id", id)
    if (error) {
      toast.error("Delete failed")
    } else {
      toast.success("Live video deleted")
      fetchLiveVideos()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0D1B2A]">Live Videos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-[#CFA83C] text-white px-4 py-2 rounded-lg font-semibold">
              <Plus className="w-4 h-4" /> Add Live Video
            </button>
          </DialogTrigger>
          <DialogContent>
            <VideoForm />
          </DialogContent>
        </Dialog>
      </div>
      {loading ? (
        <div className="text-center py-12 text-[#CFA83C]">Loading...</div>
      ) : liveVideos.length === 0 ? (
        <div className="text-center py-12 text-[#CFA83C]">No live videos found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow p-4 relative flex flex-col">
              <button
                className="absolute top-2 right-2 text-red-500 hover:bg-red-100 rounded-full p-1"
                onClick={() => handleDelete(video.id)}
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                className="absolute top-2 left-2 text-blue-500 hover:bg-blue-100 rounded-full p-1"
                onClick={() => handleArchive(video)}
                title="Archive to Sermons"
              >
                <Archive className="w-5 h-5" />
              </button>
              <div className="aspect-video w-full mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                {video.youtube_url ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${extractVideoId(video.youtube_url)}`}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title={video.title || "Live Video"}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No video
                  </div>
                )}
              </div>
              <div className="font-semibold text-[#1A1A1A] mb-1">{video.title || "Untitled Live Video"}</div>
              <div className="text-xs text-[#3C4A5A] mb-2">{video.date || ""}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
