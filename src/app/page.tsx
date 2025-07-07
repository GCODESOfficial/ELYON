import Link from "next/link"
import Image from "next/image"
import { Merriweather, DM_Sans, Great_Vibes } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from '@/components/ui/card'

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-desktop.png')`,
          }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <p className={`text-4xl md:text-[64px] mb-6 ${greatVibes.className}`}>Welcome to</p>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${merriweather.className}`}>Elyon Life Ministry</h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${dmSans.className}`}>
            A place to worship, grow, and experience God's transforming love in community.
          </p>
        </div>
      </section>

      {/* Sharing God's Love Section */}
      <section className="pt-16 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="order-2 md:order-1 flex-1">
              <div className="relative rounded-lg">
                <Image
                  src="/images/mission.png"
                  alt="Worship service"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover max-w-[475px] max-h-[480px]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 flex-1">
              <div className={`text-[#3C4A5A] text-xs md:text-[16px] font-medium uppercase tracking-wide ${dmSans.className}`}>Our Mission</div>
              <h2 className={`text-2xl md:text-[44px] font-bold text-[#1A1A1A] ${merriweather.className}`}>Sharing God's Love and Changing Lives</h2>
              <p className={`text-[#1A1A1A] text-sm md:text-xl leading-relaxed ${dmSans.className}`}>
                Since 2017, God has been the author of our journey as we seek to be ready for His Kingdom. We believe in
                the power of community, worship, and spiritual growth to transform lives and bring hope to our world.
              </p>
              <Link href="/about">
                <Button className={`bg-[#C83737] text-white px-6 py-6 rounded-full font-medium text-sm md:text-lg cursor-pointer ${dmSans.className} hover:bg-[#C83737]/90 transition-colors`}>
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pt-16 md:pt-28 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className={`text-2xl md:text-3xl font-semibold mb-8 ${dmSans.className}`}>
            "And they that shall be of thee shall build the old waste places: thou shalt raise up the foundations of
            many generations; and thou shalt be called, The repairer of the breach, The restorer of paths to dwell in."
          </blockquote>
          <cite className={`text-[#C83737] text-sm md:text-xl font-semibold ${dmSans.className}`}>- Isaiah 58:12 (KJV)</cite>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="md:mt-20 py-10 md:py-20 max-w-[1120px] mx-auto bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`text-[#3C4A5A] text-xs md:text-base font-medium uppercase tracking-wide mb-5 md:mb-10 ${dmSans.className}`}>Fellowship with us</div>
          <h2 className={`text-2xl md:text-[44px] mx-auto max-w-[571px] font-bold text-[#1A1A1A] mb-10 md:mb-20 ${merriweather.className}`}>
            Join Us for Worship, Fellowship, and Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[936px] mx-auto">
            {/* Card 1: Sunday Worship Service */}
            <div className="relative group">
              <Image
                src="/images/worship.png"
                alt="Sunday Worship Service"
                width={400}
                height={300}
                className="w-full max-w-[296px] max-h-[240px] md:max-h-[357px] object-cover"
              />
              <div className="absolute bottom-0 w-full py-4 flex justify-center">
                <span className="text-white text-lg font-semibold">Sunday Worship Service</span>
              </div>
            </div>

            {/* Card 2: Healing and Deliverance Service */}
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/images/healing.png"
                alt="Healing and Deliverance Service"
                width={400}
                height={300}
                className="w-full max-w-[296px] max-h-[240px] md:max-h-[357px] object-cover"
              />
              <div className="absolute bottom-0 w-full py-4 flex justify-center">
                <span className="text-white text-lg font-semibold">Healing and Deliverance Service</span>
              </div>
            </div>

            {/* div 3: Communion Service */}
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src="/images/communion.png"
                alt="Communion Service"
                width={400}
                height={300}
               className="w-full max-w-[296px] max-h-[240px] md:max-h-[357px] object-cover"
              />
              <div className="absolute bottom-0 w-full py-4 flex justify-center">
                <span className="text-white text-lg font-semibold">Communion Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-[#CFA83C] text-sm font-semibold uppercase tracking-wide mb-4">Our Testimony</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">
            Every testimony is a reminder that God is still working.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <p className="text-[#1A1A1A] leading-relaxed">
                I want to thank the Almighty for using everyone in this ministry to bless my life. The word of God has
                been a source of strength and encouragement, and I'm grateful for the sense of purpose and empowerment
                I've found in this community.
              </p>
              <p className="text-[#CFA83C] font-semibold italic">- Jenny Bassey</p>
            </div>

            <div className="space-y-4">
              <p className="text-[#1A1A1A] leading-relaxed">
                I want to thank the Almighty for using everyone in this ministry to bless my life. The word of God has
                been a source of strength and encouragement, and I'm grateful for the sense of purpose and empowerment
                I've found in this community.
              </p>
              <p className="text-[#CFA83C] font-semibold italic">- Emem James</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Upcoming Events</h2>
            <Link href="/events" className="text-[#CFA83C] hover:underline">
              See more →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-yellow-600 to-orange-700"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#1A1A1A]">Special Event</h3>
                <p className="text-[#1A1A1A]">Join us for this special gathering</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-black">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="God's Word"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-[#B33A3A] text-white px-3 py-1 rounded text-sm inline-block mb-2">God's Word</div>
                <h3 className="font-bold text-xl text-[#1A1A1A]">Bible Study</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-16 bg-[#F5F5F5]">
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

      {/* See You This Sunday */}
      <section className="relative py-24 text-white text-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          }}
        ></div>
        <div className="relative z-20 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See You This Sunday</h2>
          <p className="text-lg mb-8">Grow stronger in your walk with God and connect with a loving church family.</p>

          <div className="bg-white text-[#1A1A1A] rounded-lg p-8 mb-8">
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
