import Link from "next/link"
import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#CFA83C] rounded-full flex items-center justify-center">
                <span className="text-[#0D1B2A] font-bold">ELM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ELYON LIFE</h3>
                <p className="text-[#CFA83C] text-sm">MINISTRY</p>
              </div>
            </div>
          </div>

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
