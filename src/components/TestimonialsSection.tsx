'use client'

import { useState, useEffect } from 'react'
import BooksSection from './BooksSection'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Kevin Harris',
      quote: 'Dr. Stephen Akintayo is teaching us to take the game to the next level. His investment strategies are unmatched.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'Jorge Masvidal',
      quote: 'Everybody wants to learn from the best. Dr. Akintayo shows us how to achieve financial freedom.',
      image: '/images/bgc262.jpg'
    },
    {
      name: 'Jon Taffer',
      quote: 'There\'s nothing I wouldn\'t do to support Dr. Akintayo. He\'s transformed countless lives through his mentorship.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'Udonis Haslem',
      quote: 'Really appreciate Dr. Akintayo bringing people together and being a BGC example.',
      image: '/images/bgc262.jpg'
    },
    {
      name: 'Danelle Delgado',
      quote: 'Dr. Stephen Akintayo changed my life forever through his investment coaching.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'Ricardo Allen',
      quote: 'Dr. Akintayo shows us how to think bigger and go bigger in wealth building.',
      image: '/images/bgc262.jpg'
    },
    {
      name: 'Tim Grover',
      quote: 'Dr. Akintayo is never satisfied, always looking for the next level of success.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'Usher Raymond',
      quote: 'Dr. Akintayo represents the future of investment coaching.',
      image: '/images/bgc262.jpg'
    },
    {
      name: 'Mayweather',
      quote: 'Many different leaders have been part of Dr. Akintayo\'s BGC movement.',
      image: '/images/bgc261.jpg'
    }
  ]

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Slide every 4 seconds
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            WHAT INDUSTRY LEADERS
            <span className="block">
              <span className="border-b-4 border-red-600 inline-block pb-2">HAVE TO SAY</span>
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel - Auto Sliding */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="flex items-center justify-center px-4">
                    {/* Quote and Name */}
                    <div className="w-full max-w-4xl text-center space-y-6 py-8">
                      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-medium italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-white font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Books Section */}
        <BooksSection />
      </div>
    </section>
  )
}

