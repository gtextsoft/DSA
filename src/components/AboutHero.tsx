'use client'

import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/stephen.png" 
          alt="Dr. Stephen Akintayo" 
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Overlay - Grant Cardone Style */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6">
        <div className="container-custom w-full">
          <div className="max-w-full lg:max-w-3xl lg:ml-auto lg:mr-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
              MEET DR. STEPHEN
              <span className="block text-red-600 border-b-2 sm:border-b-4 border-red-600 inline-block pb-1 sm:pb-2 mt-1 sm:mt-2">
                AKINTAYO
              </span>
            </h1>
            
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium max-w-full lg:max-w-2xl">
              Nigerian businessman, Investment Fund Manager ($200M Assets Under Management), Real Estate Investor, 
              Business author and Founder of Millionaires Mission 2050, Akintayo Ventures & Global Investment Group. 
              Also author of 45+ best selling business books, creator of Akintayo University online education and 
              investment conferences (the largest investment conferences in Africa.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

