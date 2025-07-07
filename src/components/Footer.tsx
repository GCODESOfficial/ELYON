import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react"
import { Merriweather, DM_Sans, Great_Vibes } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600'],
});



export default function Footer() {
  return (
    <footer className="bg-[#060606] text-white md:pt-[450px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:justify-between items-center">
           {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 md:w-32 md:h-32">
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
            <h4 className={`font-bold ${dmSans.className} text-sm md:text-lg mb-4`}>Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className={`block text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`block text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                About us
              </Link>
              <Link href="/give" className={`block text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                Give
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-bold ${dmSans.className} text-sm md:text-lg mb-4`}>Contact</h4>
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

        <div className="border-t border-[#3C4A5A] mt-8 py-3 md:py-6 text-center text-sm">
          <p className={`${dmSans.className} text-[#F8FFF8] text-xs md:text-base font-medium`}>© 2025 - Elyon Life Ministry | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
