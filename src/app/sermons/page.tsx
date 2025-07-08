"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Merriweather, DM_Sans } from 'next/font/google';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600'] });

const relatedTeachings = Array.from({ length: 9 }).map((_, i) => ({
  img: `/images/video-${(i % 3) + 1}.jpg`,
  title: "God’s Grace in Fullness",
  speaker: "Pastor John Doe"
}));

export default function SermonsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-64 md:h-[440px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/placeholder-hero.jpg')` }}
        ></div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full text-center">
          <h1 className={`${merriweather.className} text-2xl md:text-4xl font-bold mb-2`}>“His Grace is Sufficient”</h1>
        </div>
      </section>

      {/* Featured Sermon Video */}
      <section className="py-10 md:py-20 bg-[#111] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-black flex items-center justify-center">
            {/* Placeholder image or YouTube embed */}
            <Image src="/images/placeholder-hero.jpg" alt="Featured Sermon" width={800} height={450} className="w-full h-full object-cover" />
            {/* Or use iframe: */}
            {/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-full" allowFullScreen title="Featured Sermon"></iframe> */}
          </div>
          <div className={`${dmSans.className} text-lg md:text-2xl mb-4`}>Featured Sermon: The Power of Grace</div>
          <div className="flex justify-center gap-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#CFA83C]"><FaFacebook /></a>
            <a href="#" aria-label="Whatsapp" className="hover:text-[#CFA83C]"><FaWhatsapp /></a>
          </div>
        </div>
      </section>

      {/* Related Teachings Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-[32px] font-bold text-[#1A1A1A] mb-8 ${merriweather.className}`}>Related Teachings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedTeachings.map((t, i) => (
              <div key={i} className="bg-[#181818] rounded-xl overflow-hidden shadow text-white flex flex-col items-center p-4">
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <Image src={t.img} alt={t.title} width={400} height={225} className="w-full h-full object-cover" />
                </div>
                <div className={`${dmSans.className} text-base md:text-lg font-semibold mb-1`}>{t.title}</div>
                <div className="text-xs md:text-sm text-[#CFA83C]">{t.speaker}</div>
              </div>
            ))}
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
          <div className="relative max-w-4xl mx-auto px-4 pointer-events-auto">
            <div className={`${dmSans.className} text-[#F5F5F5] text-xs md:text-base font-medium uppercase tracking-wide mt-6 mb-5 md:mt-12 md:mb-10`}>Favourite Quote</div>
            <blockquote className={`${dmSans.className} text-[#F5F5F5] text-xl md:text-3xl font-semibold mb-8`}>
              “One moment in God's presence <br />can change everything.”
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
