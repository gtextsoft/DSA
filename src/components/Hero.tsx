'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-[110px] sm:pt-[120px] md:pt-[130px]">
      {/* Main Hero Section */}
      <div className="relative bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center py-16 sm:py-20 md:py-28 min-h-[85vh]">
            {/* Left Side - Text Content - Grant Cardone Style */}
            <div className={`space-y-8 sm:space-y-10 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Title Section */}
              <div className="space-y-6">
                {/* Small Title/Subtitle */}
                <div className="text-white/80 text-sm sm:text-base font-semibold uppercase tracking-wider">
                  PRIVATE EQUITY FUND MANAGER & REAL ESTATE INVESTOR
                </div>
                
                {/* Main Heading - Bold and Impactful */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tight">
                  DR. STEPHEN
                  <span className="block text-red-600">AKINTAYO</span>
                </h1>
                
                {/* Role/Tagline */}
                <p className="text-white text-lg sm:text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                  CEO of Gtext Holdings and Global Investment Group
                </p>
              </div>

              {/* Achievement Statement - Grant Cardone Style */}
              <div className="space-y-4 pt-4 border-t-2 border-white/20">
                <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl">
                  Dr. Stephen Akintayo owns and operates multiple privately held companies, and an investment firm with a portfolio of assets worth over <span className="font-bold text-red-600">$200 Million</span>. He is one of the Top Investment Coaches in the world, having empowered over <span className="font-bold text-red-600">1 Million</span> individuals worldwide.
                </p>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                  A bestselling author of 45+ business books, including multiple #1 bestsellers, Dr. Akintayo has established a global movement featuring investment conferences and wealth-building programs, known as some of the most influential business and entrepreneur events in Africa and beyond.
                </p>
              </div>

              {/* CTA Buttons - Bold and Prominent */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="/contact" 
                  className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 sm:px-12 rounded-md transition-all duration-300 transform hover:scale-105 shadow-2xl text-center text-base sm:text-lg uppercase tracking-wider"
                >
                  SECURE YOUR SEAT NOW
                </a>
                <a 
                  href="/about" 
                  className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 sm:px-12 rounded-md border-2 border-white transition-all duration-300 transform hover:scale-105 text-center text-base sm:text-lg uppercase tracking-wider"
                >
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Right Side - Photo - Full Height */}
            <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/stephen.png" 
                  alt="Dr. Stephen Akintayo" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Grant Cardone Style */}
      <div className="bg-gray-900 border-t-4 border-red-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-12">
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-red-600 mb-2">45+</div>
              <div className="text-white text-sm sm:text-base font-semibold uppercase tracking-wider">Published Books</div>
            </div>
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-red-600 mb-2">$200M</div>
              <div className="text-white text-sm sm:text-base font-semibold uppercase tracking-wider">Global Expansion</div>
            </div>
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-red-600 mb-2">4</div>
              <div className="text-white text-sm sm:text-base font-semibold uppercase tracking-wider">Continents</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-red-600 mb-2">1M</div>
              <div className="text-white text-sm sm:text-base font-semibold uppercase tracking-wider">Millionaires Mission 2050</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 text-3xl font-bold w-10 h-10 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close video"
            >
              ×
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <p className="text-white text-xl">Video Player - Add your video URL here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 