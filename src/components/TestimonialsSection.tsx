'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BooksSection from './BooksSection'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Adaeze Okafor',
      role: 'Real Estate Developer, Lagos',
      quote: 'Dr. Akintayo\'s mentorship helped me structure my first land banking deal. Within 18 months I closed three profitable transactions.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'James Mitchell',
      role: 'CEO, Mitchell Capital Group',
      quote: 'The investment frameworks I learned at his masterclass transformed how our firm evaluates real estate opportunities across Africa and the diaspora.',
      image: '/images/bgc262.jpg'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Entrepreneur & SA University Graduate',
      quote: 'His coaching gave me clarity on building multiple income streams. I went from employee to business owner with a clear wealth-building roadmap.',
      image: '/images/bgc261.jpg'
    },
    {
      name: 'David Emeka',
      role: 'Business Owner, Abuja',
      quote: 'Attending the Business Growth Conference was a turning point. The strategies were practical, actionable, and immediately applicable to my company.',
      image: '/images/bgc262.jpg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>

      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-luxury-gold"></span>
            <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">Industry Voices</span>
            <span className="w-12 h-[1px] bg-luxury-gold"></span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-deep-navy font-serif italic">
            Global Leaders <span className="text-gradient-gold non-italic font-sans uppercase">Endorsements</span>
          </h2>
        </motion.div>

        {/* Testimonials Display */}
        <div className="relative max-w-5xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-dark bg-deep-navy p-10 sm:p-20 relative text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Large Quote Icon */}
              <div className="absolute top-10 left-10 text-luxury-gold opacity-10">
                <i className="fas fa-quote-left text-8xl md:text-9xl"></i>
              </div>

              <div className="relative z-10 space-y-10">
                <p className="text-white text-2xl sm:text-3xl md:text-4xl leading-relaxed font-serif italic text-white/90">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="pt-8 border-t border-white/10 inline-block">
                  <div className="text-luxury-gold font-bold text-lg sm:text-xl uppercase tracking-[0.2em] mb-2">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-black">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 text-luxury-gold opacity-10">
                <i className="fas fa-quote-right text-8xl md:text-9xl"></i>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`group relative h-1 transition-all duration-500 ${index === currentIndex ? 'w-16 bg-luxury-gold' : 'w-8 bg-black/10 hover:bg-black/30'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-luxury-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="mt-32">
          <BooksSection />
        </div>
      </div>
    </section>
  )
}

