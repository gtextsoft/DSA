'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-blue via-powder-blue to-light-blue flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-dark-blue leading-tight">
                Dr. Stephen{' '}
                <span className="text-gradient">Akintayo</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-light font-medium">
                Forbes Best of Africa Leading Investment Coach & Real Estate Mogul
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-text-dark leading-relaxed">
                Distinguished Nigerian entrepreneur, investor, and mentor. Chairman & CEO of Gtext Holdings, 
                author of 45+ books, and mentor to millions worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="btn-primary">
                  Learn More
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-dark-blue">45+</div>
                <div className="text-sm text-text-light">Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dark-blue">5M+</div>
                <div className="text-sm text-text-light">People Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dark-blue">4</div>
                <div className="text-sm text-text-light">Continents</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-full shadow-2xl flex items-center justify-center p-2">
                <Image 
                  src="/images/stephen.png" 
                  alt="Dr. Stephen Akintayo" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <i className="fas fa-trophy text-sky-blue text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <i className="fas fa-chart-line text-sky-blue text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-dark-blue">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  )
} 