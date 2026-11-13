'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CountUp, Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const stats = [
  { value: '$200M+', label: 'Portfolio of assets' },
  { value: '850K+', label: 'People and businesses served' },
  { value: '45+', label: 'Business books published' },
  { value: '20+', label: 'Years of impact' },
]

export default function IntroductionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <Reveal from="left" className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 sm:-inset-4 border border-luxury-gold/40 rounded-sm translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-mist">
                <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0">
                  <Image
                    src="/images/stephen.png"
                    alt="Dr. Stephen Akintayo"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute -bottom-5 left-4 sm:left-6 bg-deep-navy text-white px-5 py-4 rounded-sm shadow-xl">
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-luxury-gold mb-1">
                  Forbes Best of Africa
                </div>
                <div className="text-sm font-semibold">Leading Investment Coach</div>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal className="space-y-6">
              <Eyebrow>Who you will learn from</Eyebrow>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-navy leading-[1.08] tracking-tight">
                He teaches what he <span className="italic text-gradient-gold-deep pr-1">practises.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-text-dark/80 max-w-2xl">
              <p>
                Dr. Stephen Akintayo is Chairman of <strong className="text-deep-navy">SACI Holdings</strong>, a private
                equity and venture capital firm based in Houston, Texas, and Founder of{' '}
                <strong className="text-deep-navy">Gtext Holdings</strong>, with a portfolio of assets worth over $200
                million.
              </p>
              <p>
                For more than 20 years his investment group has served over 850,000 individuals and businesses — through
                conferences, mentorship and 45+ business books.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="border-l-2 border-luxury-gold pl-6 font-serif italic text-xl sm:text-2xl text-deep-navy/80 max-w-2xl leading-snug">
                &ldquo;Real estate is the only investment where you can use other people&apos;s money to build your own
                wealth safely.&rdquo;
              </blockquote>
            </Reveal>

            <Stagger className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-deep-navy/10">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="border-b border-r border-deep-navy/10 p-5">
                  <CountUp
                    value={stat.value}
                    className="block font-serif text-2xl sm:text-[2rem] font-semibold text-deep-navy tabular-nums"
                  />
                  <span className="mt-2 block text-[11px] uppercase tracking-[0.14em] font-bold text-deep-navy/55 leading-snug">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="flex flex-col sm:flex-row gap-4">
              <a href="#work-with-him" className="btn-luxury text-center">
                See how to work with him
              </a>
              <Link href="/about" className="btn-outline-gold text-center">
                Read his story
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
