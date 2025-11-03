'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function IntroductionSection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Name and Title */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                DR. STEPHEN
                <span className="block text-red-600 border-b-4 border-red-600 inline-block pb-2 mt-2">
                  AKINTAYO
                </span>
              </h2>
              
              <p className="text-red-600 font-bold text-lg sm:text-xl uppercase tracking-wider">
                PRIVATE EQUITY FUND MANAGER & REAL ESTATE INVESTOR
              </p>
              
              <p className="text-white/90 text-base sm:text-lg">
                CEO of Gtext Holdings and Global Investment Group
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white/90">
              <p>
                Dr. Stephen Akintayo owns and operates multiple privately held companies, and an investment firm, <span className="font-bold text-white">Gtext Holdings</span>, with a portfolio of assets worth over <span className="font-bold text-red-600">$200 Million</span>. He is one of the Top Investment Coaches in the world, having empowered over <span className="font-bold text-red-600">1 Million</span> individuals worldwide.
              </p>
              
              <p>
                A bestselling author of <span className="font-bold text-white">45+ business books</span>, including multiple #1 bestsellers, Dr. Akintayo has established a global movement featuring investment conferences and wealth-building programs, known as some of the most influential business and entrepreneur events in Africa and beyond.
              </p>
              
              <p>
                For over <span className="font-bold text-white">20 years</span>, Dr. Stephen Akintayo and his global investment group have been trusted providers of comprehensive business training and consulting. The online business and investment educational platforms Dr. Akintayo created serve over <span className="font-bold text-red-600">850,000</span> individuals, businesses, and clients throughout the world.
              </p>
              
              <p>
                Voted one of the top Investment Influencers by Forbes, Dr. Akintayo uses his massive following to give back via his <span className="font-bold text-white">Millionaires Mission 2050 Foundation</span>, a non-profit organization dedicated to mentoring underprivileged and troubled youth in financial literacy.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/about"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-center uppercase tracking-wider"
              >
                About Dr. Akintayo
              </Link>
              <Link 
                href="/media"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-center uppercase tracking-wider"
              >
                Media Kit
              </Link>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/images/stephen.png" 
                alt="Dr. Stephen Akintayo" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Credentials Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 sm:p-6 text-center w-[90%] sm:w-auto max-w-xs">
              <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">The New York Times</div>
              <div className="text-black font-black text-sm sm:text-lg md:text-xl uppercase tracking-wider leading-tight">
                BEST-SELLING AUTHOR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

