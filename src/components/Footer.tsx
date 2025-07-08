import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { Merriweather, DM_Sans } from 'next/font/google';

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
    <footer className="bg-[#060606] text-white pt-[300px] md:pt-[450px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-6 md:mb-0">
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
          <div className="mb-6 md:mb-0">
            <h4 className={`font-bold ${dmSans.className} text-sm text-[#FFFFFF] md:text-lg mb-4`}>Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                About us
              </Link>
              <Link href="/give" className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8] hover:text-[#CFA83C] transition-colors`}>
                Give
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="relative">
            <h4 className={`font-bold ${dmSans.className} text-sm text-[#FFFFFF] md:text-lg mb-4`}>Contact</h4>
            <div className="space-y-2 text-sm">
              <p className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8] md:mb-4`}>+2349012867508, +2348131867503</p>
              <p className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8]`}>19 Ikot Anyang Offot,</p>
              <p className={`block ${dmSans.className} font-medium text-xs md:text-base text-[#F8FFF8]`}>Uyo, Akwa Ibom - Nigeria</p>
            </div>
            <div className="absolute -bottom-12 flex space-x-4">
              <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
              <FaXTwitter className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
              <CgFacebook className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
              <TbBrandInstagramFilled className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#3C4A5A] mt-20 py-3 md:py-6 text-center text-sm">
          <p className={`${dmSans.className} text-[#F8FFF8] text-xs md:text-base font-medium`}>© 2025 - Elyon Life Ministry | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
