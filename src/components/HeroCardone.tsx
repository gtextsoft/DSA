'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const SUMMIT_DISMISS_KEY = 'hero-summit-dismissed'

function SummitCard({ className = '', onDismiss }: { className?: string; onDismiss?: () => void }) {
  return (
    <div className={`glass-dark p-6 rounded-sm border-l-4 border-luxury-gold max-w-sm relative ${className}`}>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-3 right-3 text-white/40 hover:text-luxury-gold transition-colors"
          aria-label="Dismiss event card"
        >
          <i className="fas fa-times text-sm" aria-hidden="true"></i>
        </button>
      )}
      <div className="text-luxury-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4 pr-6">
        Upcoming Global Summit
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-sm overflow-hidden bg-luxury-gold/20 relative group flex-shrink-0">
          <Image
            src="/images/stephen.png"
            alt="China Business Retreat 2026"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div>
          <div className="text-white font-bold text-sm mb-1 leading-tight">CHINA BUSINESS RETREAT 2026</div>
          <div className="text-luxury-gold text-xs font-bold leading-snug">7-Day · 4 Cities · 2026</div>
        </div>
      </div>
      <a
        href="/chinaretreat"
        className="mt-6 block text-center py-3 bg-luxury-gold text-deep-navy text-[10px] font-black uppercase tracking-widest hover:bg-gold-dark transition-colors duration-300"
      >
        Claim Your Access
      </a>
    </div>
  )
}

export default function HeroCardone() {
  const [summitDismissed, setSummitDismissed] = useState(false)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (localStorage.getItem(SUMMIT_DISMISS_KEY) === 'true') {
      setSummitDismissed(true)
    }
  }, [])

  const dismissSummit = () => {
    localStorage.setItem(SUMMIT_DISMISS_KEY, 'true')
    setSummitDismissed(true)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-deep-navy">
      {/* Background video */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube-nocookie.com/embed/i45_4AMAx54?autoplay=1&loop=1&mute=1&playlist=i45_4AMAx54&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-110"
          style={{
            pointerEvents: 'none',
            border: 'none',
            filter: 'grayscale(0.3) brightness(0.4)',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          title="Cinematic Background"
        />
        {/* Dark scrim + gradients for consistent text contrast */}
        <div className="absolute inset-0 bg-[rgba(10,15,50,0.7)]" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/60 via-deep-navy/30 to-deep-navy" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/40 to-transparent" aria-hidden="true"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col justify-center pt-24 pb-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-4 italic font-serif drop-shadow-lg">
            Dr. Stephen <br />
            <span className="text-gradient-gold non-italic font-sans">Akintayo</span>
          </h1>
          <p className="text-luxury-gold text-sm sm:text-base font-bold uppercase tracking-[0.25em] mb-6">
            Entrepreneur · Investor · Real Estate Mogul
          </p>

          <p className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 font-medium leading-relaxed">
            Chairman & CEO of Gtext Holdings. Private Equity Fund Manager, Real Estate Mogul & Global Investment Coach.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8 lg:mb-0">
            <Link href="/events" className="btn-luxury text-center">
              Secure Your Vision
            </Link>
            <Link href="/about" className="btn-outline-gold text-center">
              The Legacy
            </Link>
          </div>

          {/* Summit card — inline on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:hidden mt-4"
          >
            <SummitCard />
          </motion.div>
        </motion.div>
      </div>

      {/* Summit card — floating on desktop */}
      {!summitDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-24 right-4 sm:right-8 md:right-12 lg:right-16 z-20 hidden lg:block"
        >
          <SummitCard onDismiss={dismissSummit} />
        </motion.div>
      )}

      {/* Scroll indicator — desktop only, bottom anchored */}
      <motion.div
        style={{ opacity }}
        className="hidden md:flex pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-transparent">
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
