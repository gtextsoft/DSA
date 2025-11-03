'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroCardone() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo', label: 'Instagram' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo', label: 'YouTube' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo', label: 'Twitter' },
    { icon: 'fab fa-tiktok', href: 'https://tiktok.com/@stephenakintayo', label: 'TikTok' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/stephenakintayo', label: 'LinkedIn' },
  ]

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/stephen.png" 
          alt="Dr. Stephen Akintayo" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Event Card Overlay - Responsive Positioning */}
      <div className={`absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto md:left-12 lg:left-16 z-10 max-w-full sm:max-w-md transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="bg-black/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-2 border-white/20">
          <div className="text-white/60 text-xs uppercase tracking-wider mb-3 sm:mb-4">NEXT EVENT</div>
          
          {/* Event Card */}
          <div className="bg-gray-900/80 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 flex gap-3 sm:gap-4 items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded overflow-hidden">
              <Image 
                src="/images/stephen.png" 
                alt="Event" 
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 truncate">REAL ESTATE LIVE TRAINING</div>
              <div className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">22 NOV</div>
              <div className="text-white/70 text-xs">Virtual Event</div>
              <div className="text-white/70 text-xs">12:00 pm - 5:00 pm</div>
            </div>
          </div>

          {/* Secure Your Seat Button */}
          <Link 
            href="/events" 
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-300 text-center uppercase tracking-wider text-xs sm:text-sm"
          >
            SECURE YOUR SEAT
          </Link>

          {/* Follow Us Section */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
            <div className="text-white/80 text-xs uppercase tracking-wider mb-2 sm:mb-3">FOLLOW US</div>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-white text-xs`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

