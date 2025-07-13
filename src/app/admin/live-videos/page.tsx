"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"
import { Trash2, Plus } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { toast } from "sonner"
import SermonsForm from "@/components/admin/sermons-form"

export default function AdminSermonsPage() {
  const [sermons, setSermons] = useState<{ id: string; images: string[] }[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchSermons()
  }, [])

  const fetchSermons = async () => {
    setLoading(true)
    const { data, error } = await supabase.from("sermons").select("id, images")
    if (error) {
      toast.error("Failed to fetch sermons")
    } else {
      setSermons(data || [])
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("sermons").delete().eq("id", id)
    if (error) {
      toast.error("Delete failed")
    } else {
      toast.success("Sermon deleted")
      fetchSermons()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0D1B2A]">Sermon Videos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-[#CFA83C] text-white px-4 py-2 rounded-lg font-semibold">
              <Plus className="w-4 h-4" /> Add Videos
            </button>
          </DialogTrigger>
          <DialogContent>
            <SermonsForm />
          </DialogContent>
        </Dialog>
      </div>
      {loading ? (
        <div className="text-center py-12 text-[#CFA83C]">Loading...</div>
      ) : sermons.length === 0 ? (
        <div className="text-center py-12 text-[#CFA83C]">No sermon images found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg shadow p-4 relative">
              <button
                className="absolute top-2 right-2 text-red-500 hover:bg-red-100 rounded-full p-1"
                onClick={() => handleDelete(sermon.id)}
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <div className="grid grid-cols-1 gap-2">
                {sermon.images.map((img, idx) => (
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
