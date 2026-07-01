'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroCardone() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo', label: 'Instagram' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo', label: 'YouTube' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo', label: 'Twitter' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/stephenakintayo', label: 'LinkedIn' },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-deep-navy">
      {/* Background Cinematic Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <iframe
          src="https://www.youtube.com/embed/i45_4AMAx54?autoplay=1&loop=1&mute=1&playlist=i45_4AMAx54&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-110"
          style={{
            pointerEvents: 'none',
            border: 'none',
            filter: 'grayscale(0.3) brightness(0.4)'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          title="Cinematic Background"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/40 via-transparent to-deep-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-transparent to-transparent"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-luxury-gold"></span>
            <span className="text-luxury-gold text-xs sm:text-sm font-bold uppercase tracking-[0.3em]">Forbes Best of Africa</span>
          </div>

          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-4 italic font-serif">
            Dr. Stephen <br />
            <span className="text-gradient-gold non-italic font-sans">Akintayo</span>
          </h1>
          <p className="text-luxury-gold text-sm sm:text-base font-bold uppercase tracking-[0.25em] mb-6">
            Entrepreneur · Investor · Real Estate Mogul
          </p>

          <p className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed">
            Chairman & CEO of Gtext Holdings. Private Equity Fund Manager, Real Estate Mogul & Global Investment Coach.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/events"
              className="btn-luxury text-center"
            >
              Secure Your Vision
            </Link>
            <Link
              href="/about"
              className="btn-outline-gold text-center"
            >
              The Legacy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Event Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-20 right-4 sm:right-8 md:right-12 lg:right-16 z-20 hidden md:block"
      >
        <div className="glass-dark p-6 rounded-sm border-l-4 border-luxury-gold max-w-sm">
          <div className="text-luxury-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">Upcoming Global Summit</div>
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-sm overflow-hidden bg-luxury-gold/20 relative group">
              <Image
                src="/images/stephen.png"
                alt="Event"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-1 leading-tight">CHINA BUSINESS RETREAT 2026</div>
              <div className="text-luxury-gold text-xs font-bold leading-snug">7-Day · 4 Cities · 2026</div>
            </div>
          </div>
          <Link
            href="https://stephenakintayo.com/chinaretreat"
            className="mt-6 block text-center py-3 bg-white text-deep-navy text-[10px] font-black uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300"
          >
            Claim Your Access
          </Link>
        </div>
      </motion.div>

      {/* Social Links Side Bar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6"
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-luxury-gold transition-all duration-300 transform hover:scale-125"
            aria-label={social.label}
          >
            <i className={`${social.icon} text-lg`}></i>
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-transparent">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}

