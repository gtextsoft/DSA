'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function IntroductionSection() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-deep-navy/5 -skew-x-12 transform translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.2em]">The Visionary</span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-deep-navy leading-tight font-serif italic">
                A Legacy of <br />
                <span className="text-gradient-gold non-italic font-sans uppercase">Excellence</span>
              </h2>

              <p className="text-luxury-gold font-bold text-lg uppercase tracking-widest bg-deep-navy/5 inline-block px-4 py-2 border-l-4 border-luxury-gold">
                Investment Coach & Philanthropist
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg leading-relaxed text-text-dark/80"
            >
              <p>
                Dr. Stephen Akintayo owns and operates multiple privately held companies, and an investment firm, <span className="font-bold text-deep-navy">Gtext Holdings</span>, with a portfolio of assets worth over <span className="font-bold text-luxury-gold">$200 Million</span>.
              </p>

              <p>
                As a bestselling author of <span className="font-bold text-deep-navy italic font-serif">45+ business books</span>, Dr. Akintayo has established a global movement featuring investment conferences and wealth-building programs, known as some of the most influential business and entrepreneur events in Africa and beyond.
              </p>

              <p>
                For over <span className="font-bold text-deep-navy">20 years</span>, his global investment group has been a trusted provider of comprehensive business training. His educational platforms serve over <span className="font-bold text-luxury-gold">850,000</span> individuals and businesses worldwide.
              </p>

              <p className="border-l-4 border-luxury-gold pl-6 italic font-serif text-xl text-deep-navy/70">
                "Real estate is the only investment where you can use other people's money to build your own wealth safely."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <Link
                href="/about"
                className="btn-luxury text-center"
              >
                Explore the Journey
              </Link>
              <Link
                href="/media"
                className="btn-outline-gold text-center"
              >
                Media & Press
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden shadow-[30px_30px_0px_#0A1128] group">
              <Image
                src="/images/stephen.png"
                alt="Dr. Stephen Akintayo"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Luxury Frame Overlay */}
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 12, delay: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-deep-navy text-white p-8 shadow-2xl z-20 hidden md:block"
            >
              <div className="text-luxury-gold text-4xl font-black mb-2">20+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Years of Impact</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

