import Link from "next/link"
import { Copy } from "lucide-react"
import { Merriweather, DM_Sans, Great_Vibes } from 'next/font/google';
import { Button } from "@/components/ui/button";
import MemoriesGallery from "@/components/MemoriesGallery";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

export default function GivePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=400&width=1200')`,
          }}
        ></div>
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="hover:text-[#CFA83C]">
              Home
            </Link>
            <span>›</span>
            <span>Give</span>
          </div>
        </div>
      </section>

      {/* Give Online Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Give Online</h2>
            <p className="text-[#1A1A1A] text-lg mb-12">Every gift is a seed of faith, sown in love, grown by grace.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* United Bank for Africa */}
              <div className="border border-[#3C4A5A] rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">U</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">United Bank for Africa</h3>
                </div>
                <div className="text-left space-y-2">
                  <p className="text-[#1A1A1A] font-semibold">Prince Esshiett</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-[#1A1A1A]">2163691943</p>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Copy className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Moniepoint MFB */}
              <div className="border border-[#3C4A5A] rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Moniepoint MFB</h3>
                </div>
                <div className="text-left space-y-2">
                  <p className="text-[#1A1A1A] font-semibold">Elyon Life Ministry</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-[#1A1A1A]">8038128101</p>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Copy className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">Memories</h2>
          <MemoriesGallery />
          <div className="text-center mt-8">
            <Button className={`${dmSans.className} border border-[#3C4A5A] bg-transparent hover:bg-transparent cursor-pointer text-[#3C4A5A] px-8 py-3 rounded-full`}>
              View more
            </Button>
          </div>
        </div>
      </section>

      {/* See You This Sunday */}
      <section className="relative py-40 md:py-24 text-white text-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/footer-hero.png')`,
          }}
        ></div>

        {/* Fave Quote */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 w-full flex justify-center pointer-events-none">
          <div className="relative max-w-4xl mx-auto px-4 pointer-events-auto pt-8">
            <div className={`${dmSans.className} text-[#F5F5F5] text-xs md:text-base font-medium uppercase tracking-wide mb-4`}>Favourite Quote</div>
            <blockquote className={`${dmSans.className} text-[#F5F5F5] text-xl md:text-3xl font-semibold mb-8`}>
              “One moment in God's presence can change everything.”
            </blockquote>
          </div>
        </div>

        {/* sunday time card*/}
        <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 -bottom-10 md:-bottom-24 z-20 w-full px-4 flex justify-center pointer-events-none">
          <div className="bg-[#FFFFFF] max-w-[1120px] w-full mx-auto px-4 rounded-xl shadow-lg pointer-events-auto py-10 md:py-20">
            <h2 className={`text-[#1A1A1A] text-2xl md:text-[44px] font-bold mb-6 ${merriweather.className}`}>See You This Sunday</h2>
            <p className={`text-[#3C4A5A] text-sm md:text-lg mb-8 ${dmSans.className} max-w-[572px] mx-auto`}>Grow stronger in your walk with God and connect with a loving church family.</p>

            <div className="bg-[#1A1A1A] mb-4 flex flex-col md:max-w-[403px] mx-auto rounded-xl">
              <div className="pt-2 px-2 flex justify-between items-center">
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
                  6:30am
                </div>
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
                  8:00am
                </div>
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
                  9:30am
                </div>
              </div>
              <div className="text-white py-4">(GMT +1)</div>
            </div>
            <Link
              href="/contact"
            >
              <Button className={`w-full cursor-pointer max-w-[403px] mx-auto bg-[#B33A3A] text-white py-4 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold`}>Contact us</Button>
            </Link>
          </div>
        </div>
        <div className="h-12 md:h-[350px]"></div>
      </section>
    </div>
  )
}