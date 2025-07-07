import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="hover:text-[#CFA83C]">
              Home
            </Link>
            <span>›</span>
            <span>About us</span>
          </div>
        </div>
      </section>

      {/* Meet Our Pastor Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-[#CFA83C] text-sm font-semibold uppercase tracking-wide">Meet Our Pastor</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">PRINCE ESSHIETT</h2>
              <p className="text-[#CFA83C] text-lg font-semibold">General Overseer</p>
              <div className="space-y-4 text-[#1A1A1A] leading-relaxed">
                <p>
                  Prince Esshiett is a servant of God who has been in the ministry for a number of years. He carries the
                  burden of the Gospel and has been called by God to minister the Gospel of our Lord Jesus Christ to
                  this generation.
                </p>
                <p>
                  In 2016, God led him to pioneer the church of our Lord Jesus Christ. Being one who has the revelation
                  of the church in his heart, he established the church to be a place of God's presence where believers
                  can come and experience the transforming power of God.
                </p>
                <p>
                  He believes in the local church transformation of the life of the people of God, and he has been a
                  shepherd and a father of love.
                </p>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="bg-[#0D1B2A] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Prince Esshiett"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-[#CFA83C] text-sm font-semibold uppercase tracking-wide">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Our Story</h2>
              <div className="space-y-4 text-[#1A1A1A] leading-relaxed">
                <p>
                  A divine encounter changed my life 2017 opened revealed the ministry that was to come. That encounter,
                  also known as Light and Fire Revelational Convention, 2017, was used mightily by God to birth many
                  things, and I became a different person.
                </p>
                <p>
                  Today, Light and Fire Revelational Convention has become a platform that God uses to Minister to
                  people and bring them into a deeper relationship with Him.
                </p>
                <p>
                  We are a ministry where God's love is a place where God builds His people and makes them into vessels
                  of honor and service. We believe in the power of God's word, where God builds His people and makes
                  them into vessels of honor and service.
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
