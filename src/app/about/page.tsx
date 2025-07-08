import Link from "next/link"
import Image from "next/image"
import { Merriweather, DM_Sans, Great_Vibes } from 'next/font/google';
import { Button } from "@/components/ui/button";
import AboutCarousel from "@/components/AboutCarousel";


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



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-64 md:h-[440px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/about/about-hero.png')`,
          }}
        ></div>
        <div className="absolute z-20 left-0 bottom-0 p-4 md:p-8">
          <h1 className={`${merriweather.className} text-xl md:text-[40px] mb-4 font-bold`}>About Us</h1>
          <div className={`${dmSans.className}flex text-xs md:text-lg space-x-2 font-medium`}>
            <Link href="/" className="hover:text-[#CFA83C]">
              Home
            </Link>
            <span>›</span>
            <span className="text-[#8E8E8E]">About us</span>
          </div>
        </div>
      </section>

      {/* About Carousel Section */}
      {/* <section className="w-full max-w-5xl mx-auto py-8">
        <AboutCarousel height="320px" />
      </section> */}

      {/* Meet Our Pastor Section */}
      <section className="py-16 md:py-24 w-full md:max-w-[1120px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="">
              <div className={`text-[#3C4A5A] mb-4 md:mb-10 text-xs md:text-base font-medium uppercase tracking-wide ${dmSans.className}`}>Meet Our Pastor</div>
              <h2 className={`text-2xl md:text-[44px] font-bold text-[#1A1A1A] ${merriweather.className}`}>PRINCE ESSHIETT</h2>
              <p className={`${dmSans.className} mb-4 md:mb-10 text-[#3C4A5A] text-base md:text-2xl font-semibold`}>General Overseer</p>
              <div className={`${dmSans.className} text-sm md:textlg text-[#3C4A5A] leading-relaxed`}>
                <p>
                  Prince Esshiett is a servant of God who has been in the ministry for a couple of years.
                  He spends his time being used by God to minister to people of all works of life irrespective of age, color, or race etc., in order to effect positive changes in their lives by the power of the Holy Ghost.
                  Being one who has dedicated his life solely to the things of God, he believes in the total positive transformation of man by the power of God, and is passionate about touching lives through charitable works like Jesus did.
                  Apart from being a servant of God, he's also a husband and a father of two. </p>
              </div>
            </div>
            <div className="">
              <div className="bg-[#0D1B2A] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/eshiett.png"
                  alt="Prince Esshiett"
                  width={400}
                  height={500}
                  className="w-full h-full max-h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white w-full md:max-w-[1120px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`text-[#3C4A5A] text-xs md:text-base font-medium uppercase tracking-wide ${dmSans.className}`}>Who We Are</div>
              <h2 className={`${merriweather.className} text-2xl md:text-[44px] font-bold text-[#1A1A1A]`}>Our Story</h2>
              <div className={`space-y-4 text-sm md:text-lg text-[#3C4A5A] leading-relaxed ${dmSans.className}`}>
                <p>
                  A divine movement began in May 2017, geared towards the spiritual emancipation, restoration, and divine awakening of God's people. This movement, also known as Light and Fire Renaissance Commission  (LFRC), was used mightily by God to touch lives, save souls, and liberate God's people from all forms of darkness and spiritual captivity.
                </p>
                <p>
                  Today, Light and Fire Renaissance Commission has metamorphosed into Elyon Life Ministry, a vision with a greater mandate from God, to take the glorious gospel of Jesus Christ to the ends of the earth and transform lives positively through the victorious light of God. 
                </p>
                <p>
                 Welcome to Elyon Life Ministry, a place where God lives, a place where the Spirit of God reigns, a place of Power and divine authority, a place of favour, grace and blessings, a place where God's love takes centre stage, and a place of God's light, where darkness is annihilated and the peace of God is enthroned in every aspect of our lives.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black rounded-lg overflow-hidden h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Ministry gathering"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black rounded-lg overflow-hidden h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Worship service"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Experience Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#CFA83C] text-sm font-semibold uppercase tracking-wide mb-4">Come Visit Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">Come Experience Elyon Life Ministry</h2>

          <div className="rounded-lg overflow-hidden mb-12">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="City view"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Need Help Finding Us */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">Need help finding us?</h2>
          <p className="text-center text-[#1A1A1A] mb-12">
            Use the map to find your way. We'd love to welcome you when you arrive!
          </p>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - 19 Ikot Anyang Offot, Uyo, Akwa Ibom - Nigeria</p>
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">Memories</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-square bg-black rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Memory${i + 1}`}
                  alt={`Memory ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors">
              View more
            </button>
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
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
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
