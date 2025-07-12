"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Merriweather, DM_Sans } from 'next/font/google';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { useEffect, useState } from "react"

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600'] });

export default function SermonsPage() {
  const [sermons, setSermons] = useState<{ img?: string; title?: string; date?: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSermons = async () => {
      // Example: fetch from 'sermons' table
      // const { data, error } = await supabase.from('sermons').select('*')
      // setSermons(data || [])
      setSermons([]) // Placeholder: no sermons yet
      setLoading(false)
    }
    fetchSermons()
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero and Featured Sermon Video */}
      <section className="py-10 md:py-20 bg-[#060606] text-white text-center">
        <div className="mt-16 mb-10 md:my-20 flex flex-col items-center justify-center w-full text-center">
          <h1 className={`${dmSans.className} text-[#8E8E8E] text-xs md:text-base font-medium mb-2`}>TITLE</h1>
          <h1 className={`${merriweather.className} text-2xl md:text-4xl font-bold mb-2`}>“His Grace is Sufficient”</h1>
          <h1 className={`${dmSans.className} text-[#8E8E8E] text-xs md:text-lg font-medium mb-2`}>20th June, 2025</h1>
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-black flex items-center justify-center">
            {/* Placeholder image or YouTube embed */}
            <Image src="/images/placeholder-hero.jpg" alt="Featured Sermon" width={800} height={450} className="w-full h-full object-cover" />
            {/* Or use iframe: */}
            {/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-full" allowFullScreen title="Featured Sermon"></iframe> */}
          </div>
          <div className={`${dmSans.className} text-[#8E8E8E] text-xs md:text-base mb-4`}>Share this sermon</div>
          <div className="flex justify-center gap-4 text-2xl">
            <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
            <FaXTwitter className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
            <CgFacebook className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
            <TbBrandInstagramFilled className="w-8 h-8 md:w-10 md:h-10 hover:text-[#CFA83C] border border-[#292929] hover:border-[#CFA83C] p-[6px] rounded-full cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Related Teachings Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-xs md:text-base uppercase font-medium text-[#3C4A5A] mb-1 ${dmSans.className} text-center`}>
            You Might Also Like
          </h2>
          <h2 className={`text-2xl md:text-[40px] font-bold text-[#1A1A1A] mb-8 ${merriweather.className} text-center`}>
            Related Teachings
          </h2>
          {loading ? null : !sermons.length ? (
            <div className="w-full text-center py-12 text-xl text-[#CFA83C]">Coming soon</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {sermons.slice(0, 8).map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Video Card */}
                  <div className="bg-[#181818] rounded-xl overflow-hidden shadow w-full">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={t.img || "/images/placeholder-hero.jpg"}
                        alt={t.title || "Sermon"}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Title & Date below the card */}
                  <div className="mt-2">
                    <div className={`${dmSans.className} text-[#1A1A1A] text-xs md:text-lg font-semibold mb-1`}>
                      {t.title || "Untitled Sermon"}
                    </div>
                    <div className={`${dmSans.className} font-medium text-[10px] md:text-sm text-[#3C4A5A]`}>
                      {t.date || "Date coming soon"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
          <div className="relative max-w-4xl mx-auto px-4 pointer-events-auto">
            <div className={`${dmSans.className} text-[#F5F5F5] text-xs md:text-base font-medium uppercase tracking-wide mt-6 mb-5 md:mt-12 md:mb-10`}>Favourite Quote</div>
            <blockquote className={`${dmSans.className} text-[#F5F5F5] text-xl md:text-3xl font-semibold mb-8`}>
              “One moment in God&apos;s presence <br />can change everything.”
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
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-xl`}>
                  6:30am
                </div>
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-xl`}>
                  8:00am
                </div>
                <div className={`${dmSans.className} px-4 md:px-8 py-3 bg-[#FFFFFF] text-[#3C4A5A] font-bold border-2 border-[#1A1A1A] rounded-xl`}>
                  9:30am
                </div>
              </div>
              <div className="text-white py-4">(GMT +1)</div>
            </div>
            <Link
              href="/contact"
            >
              <Button className={`w-full cursor-pointer max-w-[403px] mx-auto bg-[#B33A3A] text-white py-4 rounded-xl hover:bg-[#B33A3A]/90 transition-colors font-semibold`}>Contact us</Button>
            </Link>
          </div>
        </div>
        <div className="h-12 md:h-[350px]"></div>
      </section>
    </div>
  );
}
