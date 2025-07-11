"use client"

import type React from "react"

import { useAuth } from "@/hooks/useAuth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/cpanel")
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#CFA83C] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Image
              src="/images/logo.svg"
              alt="Elyon Ministry's Logo"
              width={50}
              height={50}
            />
          </div>
          <p className="text-[#1A1A1A]">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
