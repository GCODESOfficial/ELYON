import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#060606] text-white md:pt-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-[#CFA83C] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block hover:text-[#CFA83C] transition-colors">
                About us
              </Link>
              <Link href="/give" className="block hover:text-[#CFA83C] transition-colors">
                Give
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>+2349012867508, +2348131867503</p>
              <p>19 Ikot Anyang Offot,</p>
              <p>Uyo, Akwa Ibom - Nigeria</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <MessageCircle className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-[#CFA83C] cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#3C4A5A] mt-8 pt-8 text-center text-sm">
          <p>© 2025 - Elyon Life Ministry | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
