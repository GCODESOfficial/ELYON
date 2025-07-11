"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Video, Calendar, Radio, X, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

interface AdminSidebarProps {
  activeTab: "sermons" | "events" | "live"
  onTabChange: (tab: "sermons" | "events" | "live") => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export default function AdminSidebar({
  activeTab,
  onTabChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: AdminSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { user, logout } = useAuth()

  // Close mobile menu on route change or outside click
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [setIsMobileMenuOpen])

  const handleLogout = () => {
    logout()
    window.location.href = "/cpanel"
  }

  const tabs = [
    { id: "sermons" as const, label: "Sermons", icon: Video, description: "Manage video content" },
    { id: "events" as const, label: "Events", icon: Calendar, description: "Manage event photos" },
    { id: "live" as const, label: "Live Videos", icon: Radio, description: "Manage live streams" },
  ]

  const sidebarContent = (
    <div className="h-full flex flex-col bg-white border-r border-[#3C4A5A]">
      {/* Logo and Header */}
      <div className={`p-6 border-b border-[#3C4A5A] ${isCollapsed ? "px-4" : ""}`}>
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-3 ${isCollapsed ? "justify-center" : ""}`}>
            <div className="w-10 h-10 bg-[#CFA83C] rounded-full flex items-center justify-center flex-shrink-0">
             <Image src="/images/logo.svg" alt="Elyon Ministry Logo" width={100} height={100} />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-[#0D1B2A]">Admin Panel</h2>
                <p className="text-xs text-[#1A1A1A]">Content Management</p>
              </div>
            )}
          </div>

          {/* Mobile close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#1A1A1A]" />
          </button>
        </div>
      </div>

      {/* Desktop collapse button */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 bg-white border border-[#3C4A5A] rounded-full p-1 hover:bg-[#F5F5F5] transition-colors z-10"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-[#1A1A1A]" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-[#1A1A1A]" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
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
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors group
                ${
                  activeTab === tab.id
                    ? "bg-[#CFA83C]/10 text-[#CFA83C] border border-[#CFA83C]/20"
                    : "text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#CFA83C]"
                }
                ${isCollapsed ? "justify-center px-2" : ""}
              `}
              title={isCollapsed ? tab.label : ""}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <div>
                  <div className="font-semibold">{tab.label}</div>
                  <div className="text-xs opacity-70">{tab.description}</div>
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {/* User info and logout */}
      <div className={`p-6 border-t border-[#3C4A5A] ${isCollapsed ? "px-4" : ""}`}>
        {!isCollapsed && (
          <div className="mb-4">
            <div className="flex items-center space-x-2 text-[#1A1A1A] mb-2">
              <div className="w-8 h-8 bg-[#CFA83C]/20 rounded-full flex items-center justify-center">
                <span className="text-[#CFA83C] text-xs font-bold">{user?.email?.charAt(0).toUpperCase()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{user?.email}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={`
            w-full flex items-center space-x-2 bg-[#B33A3A] text-white px-4 py-3 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold
            ${isCollapsed ? "justify-center px-2" : ""}
          `}
          title={isCollapsed ? "Logout" : ""}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`
        hidden md:block fixed left-0 top-0 h-full z-30 transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-64"}
      `}
      >
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
        md:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Sidebar */}
        <div className="relative w-80 max-w-[85vw] h-full">{sidebarContent}</div>
      </div>
    </>
  )
}
