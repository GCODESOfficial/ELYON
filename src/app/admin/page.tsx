"use client"

import { useState } from "react"
import ProtectedRoute from "@/components/admin/protected-route"
import AdminSidebar from "@/components/admin/admin-sidebar"
import SermonForm from "@/components/admin/sermon-form"
import EventsForm from "@/components/admin/events-form"
import LiveVideosForm from "@/components/admin/live-videos-form"
import { Menu } from "lucide-react"

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"sermons" | "events" | "live">("sermons")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getTabTitle = () => {
    switch (activeTab) {
      case "sermons":
        return "Sermons & Videos"
      case "events":
        return "Events & Photos"
      case "live":
        return "Live Videos"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="md:ml-64 transition-all duration-300 ease-in-out">
        {/* Fixed Header */}
        <header className="fixed top-0 right-0 left-0 md:left-64 bg-white border-b border-slate-100 px-6 py-4 z-20 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-[#1A1A1A]" />
              </button>

              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#0D1B2A]">{getTabTitle()}</h1>
                <p className="text-[#1A1A1A] text-sm hidden sm:block">Manage your church content and events</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-20 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Content based on active tab */}
            {activeTab === "sermons" && <SermonForm />}
            {activeTab === "events" && <EventsForm />}
            {activeTab === "live" && <LiveVideosForm />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  )
}
