"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, MessageCircle } from "lucide-react"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060606] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/images/logo.svg"
                alt="Elyon Ministry's Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 32px, 40px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#CFA83C] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#CFA83C] transition-colors">
              About us
            </Link>
            <Link href="/events" className="hover:text-[#CFA83C] transition-colors">
              Events
            </Link>
            <Link href="/give" className="hover:text-[#CFA83C] transition-colors text-[#CFA83C]">
              Give
            </Link>
            <Link href="/contact" className="hover:text-[#CFA83C] transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Facebook className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
            <MessageCircle className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0D1B2A]">
              <Link href="/" className="block px-3 py-2 hover:text-[#CFA83C]">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 hover:text-[#CFA83C]">
                About us
              </Link>
              <Link href="/events" className="block px-3 py-2 hover:text-[#CFA83C]">
                Events
              </Link>
              <Link href="/give" className="block px-3 py-2 text-[#CFA83C]">
                Give
              </Link>
              <Link href="/contact" className="block px-3 py-2 hover:text-[#CFA83C]">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
