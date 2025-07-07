import Link from "next/link"
import { Copy } from "lucide-react"

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

      {/* Quote Section */}
      <section className="relative py-24 text-white text-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <div className="text-[#CFA83C] text-sm font-semibold uppercase tracking-wide mb-4">Favourite Quote</div>
          <blockquote className="text-2xl md:text-3xl font-light italic">
            "One moment in God's presence can change everything."
          </blockquote>
        </div>
      </section>

      {/* See You This Sunday */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">See You This Sunday</h2>
          <p className="text-[#1A1A1A] mb-8">
            Grow stronger in your walk with God and connect with a loving church family.
          </p>

          <div className="bg-[#F5F5F5] rounded-lg p-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <button className="px-6 py-3 border-2 border-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors">
                6:30am
              </button>
              <button className="px-6 py-3 border-2 border-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors">
                8:00am
              </button>
              <button className="px-6 py-3 border-2 border-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors">
                9:30am
              </button>
            </div>
            <div className="bg-[#1A1A1A] text-white py-2 px-4 rounded-lg mb-6">(GMT +1)</div>
            <Link
              href="/contact"
              className="block w-full bg-[#B33A3A] text-white py-4 rounded-lg hover:bg-[#B33A3A]/90 transition-colors font-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}