"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060606] text-white">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-10 justify-between items-center">
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
              <Link href="/" className={
                `hover:text-[#CFA83C] transition-colors${pathname === "/" ? " text-[#CFA83C]" : ""}`
              }>
                Home
              </Link>
              <Link href="/about" className={
                `hover:text-[#CFA83C] transition-colors${pathname === "/about" ? " text-[#CFA83C]" : ""}`
              }>
                About us
              </Link>
              <Link href="/events" className={
                `hover:text-[#CFA83C] transition-colors${pathname === "/events" ? " text-[#CFA83C]" : ""}`
              }>
                Events
              </Link>
              <Link href="/give" className={
                `hover:text-[#CFA83C] transition-colors${pathname === "/give" ? " text-[#CFA83C]" : ""}`
              }>
                Give
              </Link>
              <Link href="/sermons" className={
                `hover:text-[#CFA83C] transition-colors${pathname === "/sermons" ? " text-[#CFA83C]" : ""}`
              }>
                Sermons
              </Link>
            </div>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 border border-[#292929] rounded-full px-4 py-2">
            <Link href="https://web.facebook.com/profile.php?id=61552813367120" target="_blank" title="Facebook">
              <CgFacebook className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
            </Link>
            <Link href="https://wa.me/2348038128101" target="_blank" title="WhatsApp">
              <FaWhatsapp className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bottom-0 z-40 bg-[#060606] flex flex-col justify-between">
            <div className="flex-1 flex flex-col mt-5 space-y-6">
              <Link href="/" className={`block px-3 py-2 hover:text-[#CFA83C] text-center${pathname === "/" ? " text-[#CFA83C]" : ""}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={`block px-3 py-2 hover:text-[#CFA83C] text-center${pathname === "/about" ? " text-[#CFA83C]" : ""}`} onClick={() => setIsOpen(false)}>
                About us
              </Link>
              <Link href="/events" className={`block px-3 py-2 hover:text-[#CFA83C] text-center${pathname === "/events" ? " text-[#CFA83C]" : ""}`} onClick={() => setIsOpen(false)}>
                Events
              </Link>
              <Link href="/give" className={`block px-3 py-2 hover:text-[#CFA83C] text-center${pathname === "/give" ? " text-[#CFA83C]" : ""}`} onClick={() => setIsOpen(false)}>
                Give
              </Link>
              <Link href="/sermons" className={`block px-3 py-2 hover:text-[#CFA83C] text-center${pathname === "/sermons" ? " text-[#CFA83C]" : ""}`} onClick={() => setIsOpen(false)}>
                Sermons
              </Link>
            </div>
            <div className="flex justify-center pb-8">
              <div className="flex items-center space-x-4 border border-[#292929] rounded-full px-4 py-2">
                <Link href="https://web.facebook.com/profile.php?id=61552813367120" target="_blank" title="Facebook">
                  <CgFacebook className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
                </Link>
                <Link href="https://wa.me/2348038128101" target="_blank" title="WhatsApp">
                  <FaWhatsapp className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
