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
      name: 'Gtext Holdings',
      description: 'Multinational conglomerate with subsidiaries spanning real estate, agriculture, media, e-commerce, and investment consulting across four continents.',
      icon: 'fas fa-building',
      color: 'from-sky-blue to-dark-blue',
      link: '#'
    },
    {
      name: 'Real Estate Ventures',
      description: 'Comprehensive real estate investment portfolio including residential, commercial, and industrial properties across multiple markets.',
      icon: 'fas fa-home',
      color: 'from-powder-blue to-sky-blue',
      link: '#'
    },
    {
      name: 'Agriculture Investments',
      description: 'Strategic investments in agricultural technology, farming operations, and food security initiatives across Africa.',
      icon: 'fas fa-seedling',
      color: 'from-green-400 to-green-600',
      link: '#'
    },
    {
      name: 'Media & Communications',
      description: 'Digital media platforms, content creation, and communication services reaching millions globally.',
      icon: 'fas fa-broadcast-tower',
      color: 'from-purple-400 to-purple-600',
      link: '#'
    },
    {
      name: 'Technology',
      description: 'Buiding an AI Company to improve Real Estate market.',
      icon: 'fas fa-robot',
      color: 'from-orange-400 to-orange-600',
      link: '#'
    },
    {
      name: 'Investment Consulting',
      description: 'Strategic advisory services for high-net-worth individuals and organizations seeking wealth-building opportunities.',
      icon: 'fas fa-chart-line',
      color: 'from-red-400 to-red-600',
      link: '#'
    }
  ]

  return (
    <section id="businesses" className="section-padding bg-light-blue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo - Business Leader" 
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Business Empire
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Leading a multinational conglomerate with diverse business interests across four continents
          </p>
          <div className="w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {businesses.map((business, index) => (
            <div
              key={business.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-full flex items-center justify-center mb-4`}>
                  <i className={`${business.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {business.name}
                </h3>
                
                <p className="text-text-dark leading-relaxed mb-4">
                  {business.description}
                </p>
                
                <a
                  href={business.link}
                  className="inline-flex items-center text-sky-blue hover:text-dark-blue font-semibold transition-colors duration-300"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-dark-blue mb-8">
            Global Presence
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe-americas text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-blue mb-2">North America</h4>
              <p className="text-text-light">United States & Canada</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe-europe text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-blue mb-2">Europe</h4>
              <p className="text-text-light">United Kingdom & EU</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe-africa text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-blue mb-2">Africa</h4>
              <p className="text-text-light">Nigeria & Beyond</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe-asia text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark-blue mb-2">Asia</h4>
              <p className="text-text-light">Strategic Markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 