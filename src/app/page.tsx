import Link from "next/link"
import Image from "next/image"
import { Merriweather, DM_Sans, Great_Vibes } from 'next/font/google';
import { Button } from "@/components/ui/button";
import TestimonialCarousel from "@/components/TestimonialsCarousel";
import EventsCarousel from "@/components/EventsCarousel";
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
      <section className="md:mt-20 py-10 md:py-20 max-w-[1120px] rounded-xl mx-auto bg-[#FFFFFF]">
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
              <div className="absolute bottom-0 w-full py-4 flex justify-center md:w-[288px]">
                <span className={`text-white text-sm md:text-2xl font-semibold ${dmSans.className}`}>Sunday <br />Worship Service</span>
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
              <div className="absolute bottom-0 w-full py-4 flex justify-center md:w-[288px]">
                <span className={`text-white text-sm md:text-2xl font-semibold ${dmSans.className}`}>Healing and <br />Deliverance Service</span>
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
              <div className="absolute bottom-0 w-full py-4 flex justify-center md:w-[288px]">
                <span className={`text-white text-sm md:text-2xl font-semibold ${dmSans.className}`}>Communion <br />Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-10 md:py-20 bg-[#F5F5F5]">
        <div className="py-10 rounded-xl max-w-[1120px] bg-[#FFFFFF] mx-auto px-1 text-center">
          <div className={`text-[#3C4A5A] text-xs md:text-base font-medium uppercase tracking-wide mb-3 md:mb-6 ${dmSans.className}`}>Our stories</div>
          <h2 className={`max-w-[408px] mx-auto text-lg md:text-2xl font-semibold text-[#1A1A1A] mb-10 md:20 ${dmSans.className}`}>
            Every testimony is a reminder that God is still working.
          </h2>
          {/* testimonials carousel */}
          <TestimonialCarousel />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full max-w-[708px]">
            <h2 className={`text-2xl md:text-[40px] mb-5 md:mb-10 font-bold text-[#1A1A1A] ${merriweather.className}`}>Upcoming Events</h2>
            <EventsCarousel />
          </div>
          <div className="relative group">
            <h1 className={`text-[#3C4A5A] mb-5 md:mb-10 font-medium text-sm md:text-lg ${dmSans.className}`}>Hear God’s Word <br />Spoken to Your Heart.</h1>
            <Image
              src="/images/mission.png"
              alt="Sunday Worship Service"
              width={400}
              height={300}
              className="w-full max-w-[296px] h-full rounded-xl md:max-h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
              <div className={`text-white text-xs mb-2 uppercase ${dmSans.className}`}>Sermons</div>
              <div className={`text-white text-2xl md:text-3xl font-bold mb-6 ${merriweather.className}`}>God’s Word</div>
              <button className="bg-[#C83737] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#B33A3A] transition-colors w-fit">
                Watch Now
              </button>
            </div>
          </div>
          <div>
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
      <section className="relative py-24 text-white text-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/footer-hero.png')`,
          }}
        ></div>

        {/* sunday time card*/}
        <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 -bottom-24 z-20 w-full flex justify-center pointer-events-none">
          <div className="bg-[#FFFFFF] max-w-[1120px] w-full mx-auto px-4 rounded-xl shadow-lg pointer-events-auto py-10 md:py-20">
            <h2 className={`text-[#1A1A1A] text-2xl md:text-[44px] font-bold mb-6 ${merriweather.className}`}>See You This Sunday</h2>
            <p className={`text-[#3C4A5A] text-sm md:text-lg mb-8 ${dmSans.className} max-w-[572px] mx-auto`}>Grow stronger in your walk with God and connect with a loving church family.</p>

            <div className="bg-[#1A1A1A] mb-4 flex flex-col max-w-[403px] mx-auto rounded-xl">
              <div className="pt-2 px-2 flex justify-between items-center">
                <div className={`${dmSans.className} px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
                  6:30am
                </div>
                <div className={`${dmSans.className} px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
                  8:00am
                </div>
                <div className={`${dmSans.className} px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-lg`}>
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
        <div className="h-[300px] md:h-[350px]"></div>
      </section>
    </div>
  )
}
