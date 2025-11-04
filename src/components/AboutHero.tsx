'use client'

import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 bg-black">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] py-8 sm:py-12 lg:py-0">
          {/* Image Section - Takes up more space */}
          <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[80vh] order-2 lg:order-1">
            <div className="relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/stephen.png" 
                alt="Dr. Stephen Akintayo" 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2 px-2 sm:px-4 lg:px-0">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white uppercase tracking-tight leading-[1.1] sm:leading-tight">
                MEET DR. STEPHEN
                <span className="block text-red-600 border-b-2 md:border-b-4 border-red-600 pb-1 sm:pb-2 mt-1 sm:mt-2">
                  AKINTAYO
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium max-w-full">
                Nigerian businessman, Investment Fund Manager ($200M Assets Under Management), Real Estate Investor, 
                Business author and Founder of Millionaires Mission 2050, Akintayo Ventures & Global Investment Group. 
                Also author of 45+ best selling business books, creator of Akintayo University online education and 
                investment conferences (the largest investment conferences in Africa.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

