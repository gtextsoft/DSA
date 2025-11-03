'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Businesses() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('businesses')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const businesses = [
    {
      name: 'SACI Holdings',
      description: 'Multinational investment conglomerate with diversified interests in real estate, fintech, agriculture, media, and consulting. Leading projects in four continents, focusing on sustainable urban development and smart investment models.',
      icon: 'fas fa-building',
      color: 'from-sky-blue to-dark-blue',
      link: '#'
    },
    {
      name: 'Gtext Homes',
      description: 'Developers of Africa\'s first Green and Smart Homes, with 30+ estates across Nigeria, the UK, Dubai, and the U.S. Pioneering sustainable real estate development globally.',
      icon: 'fas fa-home',
      color: 'from-powder-blue to-sky-blue',
      link: '#'
    },
    {
      name: 'Gtext Land',
      description: 'The investment backbone for land acquisition and wealth building through land banking. Strategic land development across four continents.',
      icon: 'fas fa-landmark',
      color: 'from-green-400 to-green-600',
      link: '#'
    },
    {
      name: 'Stephen Akintayo Consulting (SAC)',
      description: 'Premier coaching and business education firm that has mentored over 100,000 entrepreneurs globally. Transforming lives through strategic mentorship and wealth education.',
      icon: 'fas fa-user-graduate',
      color: 'from-purple-400 to-purple-600',
      link: '#'
    },
    {
      name: 'GVest',
      description: 'Wealth and investment management platform offering co-investment opportunities. Empowering investors worldwide with smart wealth-building strategies.',
      icon: 'fas fa-chart-line',
      color: 'from-orange-400 to-orange-600',
      link: '#'
    },
    {
      name: 'Gtext Media',
      description: 'Multimedia company producing global shows like "Investment Chat in a Rolls Royce". Reaching millions with financial insights and leadership content.',
      icon: 'fas fa-broadcast-tower',
      color: 'from-red-400 to-red-600',
      link: '#'
    },
    {
      name: 'Gtext Farms',
      description: 'Promoting agricultural sustainability and food security across Africa. Building a sustainable future through innovative farming solutions.',
      icon: 'fas fa-seedling',
      color: 'from-yellow-400 to-yellow-600',
      link: '#'
    }
  ]

  return (
    <section id="businesses" className="section-padding bg-light-blue">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo - Business Leader" 
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="heading-lg text-dark-blue mb-3 sm:mb-4">
            Building Wealth, Creating Opportunities, Changing Lives
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto px-4">
            Under SACI Holdings, Dr. Stephen Akintayo oversees a global network of innovative companies shaping the future of business, real estate, and finance.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {businesses.map((business, index) => (
            <div
              key={business.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${business.color} rounded-full flex items-center justify-center mb-3 sm:mb-4`}>
                  <i className={`${business.icon} text-white text-base sm:text-xl`}></i>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-dark-blue mb-2 sm:mb-3">
                  {business.name}
                </h3>
                
                <p className="text-sm sm:text-base text-text-dark leading-relaxed mb-3 sm:mb-4">
                  {business.description}
                </p>
                
                <a
                  href={business.link}
                  className="inline-flex items-center text-sm sm:text-base text-sky-blue hover:text-dark-blue font-semibold transition-colors duration-300"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className={`mt-12 sm:mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h3 className="heading-md text-dark-blue mb-6 sm:mb-8">
            Impact Highlights
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">30+</div>
              <div className="text-sm sm:text-base text-text-dark">Real Estate Developments Worldwide</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">Multi-Billion</div>
              <div className="text-sm sm:text-base text-text-dark">Naira Asset Portfolio</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">4</div>
              <div className="text-sm sm:text-base text-text-dark">Continents of Operation</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">Thousands</div>
              <div className="text-sm sm:text-base text-text-dark">Youth Entrepreneurs Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 