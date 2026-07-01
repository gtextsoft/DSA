'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-deep-navy pt-20">
      <div className="container-custom h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-luxury-gold"></span>
              <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">The Visionary</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-serif leading-[0.9]">
              About Dr. Stephen <br />
              <span className="text-gradient-gold non-italic font-sans uppercase">Akintayo</span>
            </h1>
            <h2 className="text-luxury-gold text-sm font-bold uppercase tracking-[0.3em]">
              Legacy of a Giant
            </h2>
            <p className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed">
              Dr. Stephen Akintayo is a Forbes-recognized leader, managing over $200M in assets. A pioneer in real estate and a mentor to millions worldwide.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[60vh] lg:h-[80vh] w-full"
          >
            <div className="relative w-full h-full group overflow-hidden">
              <Image
                src="/images/stephen.png"
                alt="Dr. Stephen Akintayo"
                fill
                className="object-cover object-top grayscale transition-all duration-1000 group-hover:grayscale-0"
                priority
              />
              {/* Luxury Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent"></div>
              <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none"></div>
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-luxury-gold/30 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-luxury-gold/30 -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 left-0 text-[20rem] font-black text-white/[0.02] leading-none pointer-events-none select-none font-serif italic">
        VISION
      </div>
    </section>
  )
}

