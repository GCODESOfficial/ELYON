"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"
import { Trash2, Plus } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { toast } from "sonner"
import MomentsForm from "@/components/admin/moments-form"

export default function AdminMomentsPage() {
  const [moments, setMoments] = useState<{ id: string; images: string[] }[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchMoments()
  }, [])

  const fetchMoments = async () => {
    setLoading(true)
    const { data, error } = await supabase.from("moments").select("id, images")
    if (error) {
      toast.error("Failed to fetch moments")
    } else {
      setMoments(data || [])
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("moments").delete().eq("id", id)
    if (error) {
      toast.error("Delete failed")
    } else {
      toast.success("Moment deleted")
      fetchMoments()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0D1B2A]">Moments Videos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-[#CFA83C] text-white px-4 py-2 rounded-lg font-semibold">
              <Plus className="w-4 h-4" /> Add Videos
            </button>
          </DialogTrigger>
          <DialogContent>
            <MomentsForm />
          </DialogContent>
        </Dialog>
      </div>
      {loading ? (
        <div className="text-center py-12 text-[#CFA83C]">Loading...</div>
      ) : moments.length === 0 ? (
        <div className="text-center py-12 text-[#CFA83C]">No moments videos found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {moments.map((moment) => (
            <div key={moment.id} className="bg-white rounded-lg shadow p-4 relative">
              <button
                className="absolute top-2 right-2 text-red-500 hover:bg-red-100 rounded-full p-1"
                onClick={() => handleDelete(moment.id)}
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <div className="grid grid-cols-1 gap-2">
                {moment.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={img} alt={`Sermon ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
