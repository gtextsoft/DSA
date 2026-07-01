'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EXTERNAL_LINKS } from '@/lib/links'

const stats = [
  { value: '$200M+', label: 'Assets Managed' },
  { value: '850K+', label: 'Students Worldwide' },
  { value: '45+', label: 'Books Published' },
  { value: '20+', label: 'Years of Impact' },
]

export default function IntroductionSection() {
  return (
    <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-deep-navy/5 -skew-x-12 transform translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
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
                Dr. Stephen Akintayo owns and operates multiple privately held companies, and an investment firm,{' '}
                <span className="font-bold text-deep-navy">Gtext Holdings</span>, with a portfolio of assets worth over{' '}
                <span className="font-bold text-luxury-gold">$200 Million</span>.
              </p>
              <p>
                As a bestselling author of{' '}
                <span className="font-bold text-deep-navy italic font-serif">45+ business books</span>, Dr. Akintayo has
                established a global movement featuring investment conferences and wealth-building programs.
              </p>
              <p>
                For over <span className="font-bold text-deep-navy">20 years</span>, his global investment group has
                served over <span className="font-bold text-luxury-gold">850,000</span> individuals and businesses
                worldwide.
              </p>
              <p className="border-l-4 border-luxury-gold pl-6 italic font-serif text-xl text-deep-navy/70">
                &quot;Real estate is the only investment where you can use other people&apos;s money to build your own
                wealth safely.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link href="/about" className="btn-luxury text-center">
                Explore the Journey
              </Link>
              <a
                href={EXTERNAL_LINKS.youtubeProduction}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-center"
              >
                Stephen Akintayo Production
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left border border-deep-navy/10 bg-deep-navy/5 p-4 rounded-sm"
                >
                  <div className="text-2xl sm:text-3xl font-black text-luxury-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-deep-navy/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-h-[600px] mx-auto overflow-hidden shadow-[20px_20px_0px_#0A1128] group">
              <Image
                src="/images/stephen.png"
                alt="Dr. Stephen Akintayo"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
