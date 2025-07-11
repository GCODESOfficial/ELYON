"use client"

import { useState } from "react"
import Image from "next/image"
import { Video, Calendar, Menu, X } from "lucide-react"

interface AdminSidebarProps {
  activeTab: "sermons" | "events"
  onTabChange: (tab: "sermons" | "events") => void
}

export default function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "sermons" as const, label: "Sermons", icon: Video, description: "Manage video content" },
    { id: "events" as const, label: "Events", icon: Calendar, description: "Manage event photos" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white border-b border-[#3C4A5A] p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center space-x-2 text-[#1A1A1A] hover:text-[#CFA83C] transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="font-semibold">Menu</span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#3C4A5A] transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-[#CFA83C] rounded-full flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                alt="Elyon Ministry's Logo"
               width={100}
               height={100}
              />
            </div>
            <div>
              <h2 className="font-bold text-[#0D1B2A]">Admin Panel</h2>
              <p className="text-xs text-[#1A1A1A]">Content Management</p>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                    ${activeTab === tab.id
                      ? "bg-[#CFA83C]/10 text-[#CFA83C] border border-[#CFA83C]/20"
                      : "text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#CFA83C]"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">{tab.label}</div>
                    <div className="text-xs opacity-70">{tab.description}</div>
                  </div>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}
