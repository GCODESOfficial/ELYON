"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import ProtectedRoute from "@/components/admin/protected-route"
import AdminSidebar from "@/components/admin/admin-sidebar"
import SermonForm from "@/components/admin/sermon-form"
import EventsForm from "@/components/admin/events-form"
import { LogOut, User } from "lucide-react"

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"sermons" | "events">("sermons")
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = "/cpanel"
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-[#3C4A5A] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0D1B2A]">Welcome, Admin 👋</h1>
              <p className="text-[#1A1A1A] text-sm">Manage your church content and events</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-[#1A1A1A]">
                <User className="w-4 h-4" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-[#B33A3A] text-white px-4 py-2 rounded-lg hover:bg-[#B33A3A]/90 transition-colors text-sm font-semibold"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Tab Content */}
            <div className="mb-6">
              <div className="border-b border-[#3C4A5A] mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab("sermons")}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === "sermons"
                        ? "border-[#CFA83C] text-[#CFA83C]"
                        : "border-transparent text-[#1A1A1A] hover:text-[#CFA83C] hover:border-[#CFA83C]/50"
                    }`}
                  >
                    Sermons & Videos
                  </button>
                  <button
                    onClick={() => setActiveTab("events")}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === "events"
                        ? "border-[#CFA83C] text-[#CFA83C]"
                        : "border-transparent text-[#1A1A1A] hover:text-[#CFA83C] hover:border-[#CFA83C]/50"
                    }`}
                  >
                    Events & Photos
                  </button>
                </nav>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === "sermons" && <SermonForm />}
            {activeTab === "events" && <EventsForm />}
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
