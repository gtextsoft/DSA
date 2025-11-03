'use client'

import Image from 'next/image'

export default function AboutLargeQuote() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image - Crowd/Conference */}
      <div className="absolute inset-0">
        <Image 
          src="/images/stephen.png" 
          alt="Conference" 
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Quote Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="container-custom">
          <div className="max-w-full lg:max-w-5xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-tight sm:leading-tight mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight">
              "The single biggest financial mistake I've made was not thinking big enough. I encourage you to go for more than 
              a million. There is no shortage of money on this planet, only a shortage of people thinking big enough."
            </blockquote>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 uppercase tracking-wider">
              — DR. STEPHEN AKINTAYO
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

