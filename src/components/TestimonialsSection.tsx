'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Business Leader',
      role: 'CEO, Fortune 500 Company',
      quote: 'Dr. Stephen Akintayo\'s investment strategies transformed our company\'s financial trajectory. His guidance is invaluable.',
      image: '/images/stephen.png'
    },
    {
      name: 'Entrepreneur',
      role: 'Founder, Tech Startup',
      quote: 'The knowledge I gained from Dr. Akintayo\'s programs helped me scale my business from startup to multimillion-dollar company.',
      image: '/images/stephen.png'
    },
    {
      name: 'Investor',
      role: 'Real Estate Mogul',
      quote: 'Dr. Akintayo\'s approach to real estate investment is revolutionary. His mentorship changed my entire investment strategy.',
      image: '/images/stephen.png'
    },
    {
      name: 'Industry Expert',
      role: 'Financial Advisor',
      quote: 'I\'ve witnessed Dr. Akintayo empower thousands of individuals to achieve financial freedom. His impact is unparalleled.',
      image: '/images/stephen.png'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            WHAT INDUSTRY LEADERS
            <span className="block text-red-600 border-b-4 border-red-600 inline-block pb-2 mt-2">
              HAVE TO SAY
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Display */}
          <div className="relative bg-black rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex items-center">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center w-full">
              {/* Quote Section */}
              <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                <div className="text-4xl sm:text-5xl md:text-6xl text-red-600 font-black leading-none">"</div>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="pt-2 sm:pt-4">
                  <p className="text-white font-bold text-base sm:text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-white text-base sm:text-xl"></i>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-white text-base sm:text-xl"></i>
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-red-600 w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

