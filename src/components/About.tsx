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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-lg text-dark-blue mb-4">
            From Humble Beginnings to Global Impact
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image and Book Me Button */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gradient-to-br from-sky-blue to-dark-blue rounded-2xl p-2 shadow-2xl">
                  <div className="bg-white rounded-xl p-4 sm:p-6 text-center">
                    <Image 
                      src="/images/stephen.png" 
                      alt="Dr. Stephen Akintayo" 
                      width={256}
                      height={256}
                      className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mb-4 sm:mb-6 object-cover"
                    />
                    
                    {/* Book Me Button */}
                    <div className="space-y-3 sm:space-y-4">
                      <button className="btn-primary w-full">
                        <i className="fas fa-calendar-check mr-2"></i>
                        Book Me for Speaking
                      </button>
                      <p className="text-xs sm:text-sm text-text-light">
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
            <div className="space-y-3 sm:space-y-4">
              <h3 className="heading-md text-dark-blue">
                The Journey of Transformation
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-text-dark leading-relaxed">
                Dr. Stephen Akintayo's story is a testament to vision, resilience, and purpose-driven success. 
                Born in Maiduguri, Nigeria, he rose from poverty to become one of Africa's most respected voices in 
                <strong> real estate, investment, and wealth education.</strong>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-text-dark leading-relaxed">
                As the <strong>Chairman of SACI Holdings</strong>, a multinational investment conglomerate operating in the 
                <strong> United States, the United Kingdom, Dubai, and Nigeria</strong>, Dr. Akintayo has redefined global investment strategy. 
                Under his leadership, SACI Holdings is spearheading a <strong>$200 million expansion project across the U.S.</strong>, 
                positioning the group as a leader in <strong>smart and sustainable real estate development.</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-xl p-4 sm:p-6 text-white">
              <blockquote className="text-base sm:text-lg md:text-xl font-semibold italic">
                "Wealth isn't magic; it's the discipline of habits and the heart of giving. 
                I exist to raise a generation of ethical, wealthy Africans who will change the world."
              </blockquote>
              <p className="text-sm sm:text-base mt-2 opacity-90">— Dr. Stephen Akintayo</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue">Key Credentials</h4>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
                  <h5 className="font-semibold text-dark-blue mb-2 text-sm sm:text-base">Academic Achievements</h5>
                  <ul className="text-xs sm:text-sm text-text-dark space-y-1">
                    <li>• Doctor of Science (Honoris Causa) — Real Estate Development & Corporate Leadership (European American University)</li>
                    <li>• Doctorate in Strategic Leadership & Management (Myles Leadership University, Benin Republic)</li>
                    <li>• Harvard University Alumnus — Executive Programs</li>
                    <li>• Certified Coach — The Coaching Academy, UK</li>
                    <li>• Member — Institute of Strategic Management, Nigeria</li>
                  </ul>
                </div>
                <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
                  <h5 className="font-semibold text-dark-blue mb-2 text-sm sm:text-base">Awards & Recognition</h5>
                  <ul className="text-xs sm:text-sm text-text-dark space-y-1">
                    <li>• Forbes Best of Africa Leading Investment Coach & Real Estate Mogul (2023)</li>
                    <li>• Certificate of U.S. Congressional Recognition</li>
                    <li>• Mentorship Excellence Award — CEOs Network Africa (2024)</li>
                    <li>• Ten Outstanding Young Persons (TOYP) JCI Award (2015)</li>
                    <li>• Verified Member — Forbes Business Council</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue">Global Collaborations</h4>
              <p className="text-sm sm:text-base text-text-dark leading-relaxed">
                Dr. Akintayo is a <strong>globally recognized thought leader</strong> who has hosted and collaborated with business legends including 
                <strong> Grant Cardone, John C. Maxwell, Ryan Serhant, Robert Kiyosaki, Dr. Brian Tracy, and Dr. Les Brown.</strong> 
                Through flagship events like the <strong>Global Property Festival, Global Wealth Festival,</strong> and the 
                <strong> Billionaire Habits Masterclass</strong>, Dr. Akintayo continues to shape the future of ethical wealth creation and leadership.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue">Philanthropy & Impact</h4>
              <p className="text-sm sm:text-base text-text-dark leading-relaxed">
                Beyond business, Dr. Akintayo is the <strong>Founder of the Stephen Akintayo Foundation</strong>, a non-profit focused on 
                <strong> entrepreneurship development, education, and poverty eradication.</strong> The foundation has empowered thousands of individuals through 
                <strong> mentorship, scholarships, and financial grants</strong>, with a bold vision to <strong>raise one million millionaires by 2050.</strong>
              </p>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sky-blue to-dark-blue text-white rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">1M</div>
                  <div className="text-xs sm:text-sm">Millionaires by 2050 Vision</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sky-blue to-dark-blue text-white rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">100K+</div>
                  <div className="text-xs sm:text-sm">Entrepreneurs Mentored</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sky-blue to-dark-blue text-white rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">$200M</div>
                  <div className="text-xs sm:text-sm">Global Expansion</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue">Personal Life</h4>
              <p className="text-sm sm:text-base text-text-dark leading-relaxed">
                Dr. Akintayo is happily married and blessed with three children. His family remains his anchor as he continues to travel the world, 
                teaching, investing, and transforming lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 