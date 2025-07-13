"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Trash2, Plus, Save } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { toast } from "sonner"
import LiveVideosForm from "@/components/admin/live-videos-form"

export default function SermonsPage() {
  const [liveVideos, setLiveVideos] = useState<{ id: string; youtube_url: string; title?: string; date?: string }[]>([]);
  const [sermons, setSermons] = useState<{ id: string; youtube_url: string; title?: string; date?: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // Helper to extract YouTube video ID
  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    // Fetch live videos
    const { data: liveData } = await supabase.from("live_videos").select("id, youtube_url, title, date").order('id', { ascending: false });
    setLiveVideos(liveData || []);
    // Fetch archived sermons
    const { data: sermonData } = await supabase.from("sermons").select("id, youtube_url, title, date").order('id', { ascending: false });
    setSermons(sermonData || []);
    setLoading(false);
  };

  const handleDelete = async (id: string, type: 'live' | 'sermon') => {
    const table = type === 'live' ? 'live_videos' : 'sermons';
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
      toast.error("Delete failed");
    } else {
      toast.success("Video deleted");
      fetchData();
    }
  };

  // Move a finished live video to the sermons table
  const handleArchive = async (video: { id: string; youtube_url: string; title?: string; date?: string }) => {
    // Insert into sermons
    const { error: insertError } = await supabase.from('sermons').insert([
      {
        youtube_url: video.youtube_url,
        title: video.title || '',
        date: video.date || '',
        is_visible: true,
      },
    ]);
    if (insertError) {
      toast.error('Failed to archive video');
      return;
    }
    // Delete from live_videos
    const { error: deleteError } = await supabase.from('live_videos').delete().eq('id', video.id);
    if (deleteError) {
      toast.error('Failed to remove from live videos');
      return;
    }
    toast.success('Video archived to sermons!');
    fetchData();
  };

  return (
    <div className="space-y-10">
      {/* Live Videos Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0D1B2A]">Live Videos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-[#CFA83C] text-white px-4 py-2 rounded-lg font-semibold">
              <Plus className="w-4 h-4" /> Add Live Video
            </button>
          </DialogTrigger>
          <DialogContent>
            <LiveVideosForm />
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
                onClick={() => handleDelete(video.id, 'live')}
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <div className="aspect-video w-full mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                {video.youtube_url && extractVideoId(video.youtube_url) ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${extractVideoId(video.youtube_url)}`}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    title={video.title || 'Live Video'}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No video</div>
                )}
              </div>
              <div className="font-semibold text-[#1A1A1A] mb-1">{video.title || 'Untitled Live Video'}</div>
              <div className="text-xs text-[#3C4A5A] mb-2">{video.date || ''}</div>
              <button
                className="flex items-center gap-2 bg-[#B33A3A] text-white px-3 py-2 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold mt-auto"
                onClick={() => handleArchive(video)}
                title="Archive to Sermons"
              >
                <Save className="w-4 h-4" /> Archive to Sermons
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Archived Sermons Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">Archived Sermon Videos</h2>
        {loading ? (
          <div className="text-center py-12 text-[#CFA83C]">Loading...</div>
        ) : sermons.length === 0 ? (
          <div className="text-center py-12 text-[#CFA83C]">No archived sermons found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-lg shadow p-4 relative flex flex-col">
                <button
                  className="absolute top-2 right-2 text-red-500 hover:bg-red-100 rounded-full p-1"
                  onClick={() => handleDelete(sermon.id, 'sermon')}
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="aspect-video w-full mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                  {sermon.youtube_url && extractVideoId(sermon.youtube_url) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${extractVideoId(sermon.youtube_url)}`}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      title={sermon.title || 'Sermon Video'}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No video</div>
                  )}
                </div>
                <div className="font-semibold text-[#1A1A1A] mb-1">{sermon.title || 'Untitled Sermon'}</div>
                <div className="text-xs text-[#3C4A5A] mb-2">{sermon.date || ''}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
