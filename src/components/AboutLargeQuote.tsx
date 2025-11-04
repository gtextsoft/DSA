'use client'

import Image from 'next/image'

export default function AboutLargeQuote() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
      {/* Background Image - Crowd/Conference */}
      <div className="absolute inset-0">
        <Image 
          src="/images/stephen.png" 
          alt="Conference" 
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Quote Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-full lg:max-w-5xl mx-auto text-center">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white leading-[1.2] sm:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 uppercase tracking-tight px-2">
              "The single biggest financial mistake I've made was not thinking big enough. I encourage you to go for more than 
              a million. There is no shortage of money on this planet, only a shortage of people thinking big enough."
            </blockquote>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600 uppercase tracking-wider px-2">
              — DR. STEPHEN AKINTAYO
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

