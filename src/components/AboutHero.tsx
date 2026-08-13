'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-deep-navy pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-royal-blue/30 to-deep-navy" aria-hidden="true"></div>

      <div className="container-custom relative z-10 min-h-[75vh] flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 order-1 space-y-6 lg:space-y-8 bg-deep-navy/80 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-sm"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-luxury-gold"></span>
              <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">The Visionary</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-serif leading-[0.95] drop-shadow-lg">
              About Dr. Stephen <br />
              <span className="text-gradient-gold non-italic font-sans uppercase">Akintayo</span>
            </h1>
            <h2 className="text-luxury-gold text-sm font-bold uppercase tracking-[0.3em]">
              Legacy of a Giant
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed">
              Chairman of SACI Holdings, Founder of Gtext Holdings, and a Forbes-recognized investment coach. A private equity and venture capital entrepreneur helping founders raise capital and build wealth globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative order-2 h-[50vh] sm:h-[60vh] lg:h-[75vh] w-full"
          >
            <div className="relative w-full h-full group overflow-hidden bg-gradient-to-br from-deep-navy to-royal-blue">
              <Image
                src="/images/stephen.png"
                alt="Dr. Stephen Akintayo"
                fill
                className="object-cover object-top grayscale transition-all duration-1000 group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent"></div>
              <div className="absolute inset-0 border-[12px] lg:border-[20px] border-white/5 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-luxury-gold/30 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-luxury-gold/30 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-0 text-[12rem] lg:text-[20rem] font-black text-white/[0.03] leading-none pointer-events-none select-none font-serif italic">
        VISION
      </div>
    </section>
  )
}
