'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function About() {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            About Dr. Stephen Akintayo
          </h2>
          <div className="w-24 h-1 bg-sky-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image and Book Me Button */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gradient-to-br from-sky-blue to-dark-blue rounded-2xl p-2 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Image 
                    src="/images/stephen.png" 
                    alt="Dr. Stephen Akintayo" 
                    width={256}
                    height={256}
                    className="w-64 h-64 mx-auto bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mb-6 object-cover"
                  />
                    
                    {/* Book Me Button */}
                    <div className="space-y-4">
                      <button className="btn-primary w-full">
                        <i className="fas fa-calendar-check mr-2"></i>
                        Book Me for Speaking
                      </button>
                      <p className="text-sm text-text-light">
                        Available for conferences, workshops, and private consultations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark-blue">
                Distinguished Entrepreneur & Mentor
              </h3>
              <p className="text-lg text-text-dark leading-relaxed">
                Dr. Stephen Akintayo is a distinguished Nigerian entrepreneur, investor, and mentor, 
                renowned for his transformative impact in real estate, investment coaching, and philanthropy.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-blue">Leadership & Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-crown text-sky-blue mt-1 mr-3"></i>
                  <span className="text-text-dark">
                    <strong>Chairman & CEO</strong> of Gtext Holdings - multinational conglomerate across 4 continents
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-trophy text-sky-blue mt-1 mr-3"></i>
                  <span className="text-text-dark">
                    <strong>Forbes Best of Africa</strong> Leading Investment Coach and Real Estate Mogul (2023)
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-users text-sky-blue mt-1 mr-3"></i>
                  <span className="text-text-dark">
                    <strong>Forbes Business Council</strong> member - invitation-only organization for successful entrepreneurs
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-book text-sky-blue mt-1 mr-3"></i>
                  <span className="text-text-dark">
                    <strong>Author of 45+ books</strong> including bestsellers "Billionaire Habits" and "Billionaire Codes"
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-blue">Education & Expertise</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-light-blue p-4 rounded-lg">
                  <h5 className="font-semibold text-dark-blue mb-2">Academic Background</h5>
                  <ul className="text-sm text-text-dark space-y-1">
                    <li>• Microbiology, Olabisi Onabanjo University</li>
                    <li>• Executive Programs, Harvard University</li>
                    <li>• Honorary Doctorate in Real Estate Development</li>
                    <li>• Honorary Doctorate in Strategic Leadership</li>
                  </ul>
                </div>
                <div className="bg-light-blue p-4 rounded-lg">
                  <h5 className="font-semibold text-dark-blue mb-2">Areas of Expertise</h5>
                  <ul className="text-sm text-text-dark space-y-1">
                    <li>• Real Estate Investment</li>
                    <li>• Business Strategy & Growth</li>
                    <li>• Wealth Building</li>
                    <li>• Leadership Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-blue">Impact & Philanthropy</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-sky-blue to-dark-blue text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">5,000+</div>
                  <div className="text-sm">Orphans & Vulnerable Children Supported</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-sky-blue to-dark-blue text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">10,000+</div>
                  <div className="text-sm">Individuals Personally Mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 