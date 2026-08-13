'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { EXTERNAL_LINKS } from '@/lib/links'

const MOBILE_MENU_ID = 'mobile-nav-drawer'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const [isMentorshipDropdownOpen, setIsMentorshipDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    closeMenu()
    setIsContactDropdownOpen(false)
    setIsMentorshipDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        closeMenu()
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: EXTERNAL_LINKS.blog, external: true },
    { name: 'Events', href: '/events' },
    { name: 'Store', href: EXTERNAL_LINKS.officialStore },
    { name: 'Foundation', href: EXTERNAL_LINKS.foundation, external: true },
    { name: 'SACI Holdings', href: EXTERNAL_LINKS.saciHolding, external: true },
  ]

  const mentorshipOptions = [
    { name: 'Pay in Naira', href: 'https://paystack.shop/pay/drkshfwy1g' },
    { name: 'Pay in Dollars', href: 'https://buy.stripe.com/9B66oI8wYaXR68C2oQew80t' },
  ]

  const contactOptions = [
    { name: 'Book a Speaking Engagement', href: '/contact?type=event' },
    { name: 'Book a One-on-One Consultation', href: '/contact?type=session' },
    { name: 'General Inquiry', href: '/contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.contact-dropdown')) {
        setIsContactDropdownOpen(false)
      }
      if (!target.closest('.mentorship-dropdown')) {
        setIsMentorshipDropdownOpen(false)
      }
    }

    if (isContactDropdownOpen || isMentorshipDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isContactDropdownOpen, isMentorshipDropdownOpen])

  const showHeader = isVisible || isMenuOpen

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-deep-navy/95 backdrop-blur-lg shadow-2xl py-2' : 'bg-transparent py-4'
      } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Top highlight bar — hidden on small screens */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 bg-luxury-gold/10 backdrop-blur-sm ${
          isScrolled ? 'h-0' : 'h-8'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-full min-w-0 gap-4">
          <div className="flex items-center gap-4 lg:gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 min-w-0">
            <span className="hover:text-luxury-gold cursor-pointer transition-colors truncate">
              Chairman, SACI Holdings
            </span>
            <span className="hover:text-luxury-gold cursor-pointer transition-colors hidden lg:block">
              Private Equity & Venture Capital
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] font-bold text-luxury-gold flex-shrink-0 max-w-[50%]">
            <i className="fas fa-crown" aria-hidden="true"></i>
            <span className="truncate hidden lg:inline">Forbes Best of Africa</span>
            <span className="truncate lg:hidden">Forbes</span>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center group flex-shrink-0 min-w-0">
            <div className="relative w-28 h-14 sm:w-40 sm:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/SAL.png"
                alt="Stephen Akintayo Consulting"
                fill
                className="object-contain filter brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation — xl+ only */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 whitespace-nowrap ${
                  pathname === item.href
                    ? 'text-luxury-gold'
                    : 'text-white hover:text-luxury-gold'
                }`}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}

            <div className="relative mentorship-dropdown">
              <button
                type="button"
                onClick={() => {
                  setIsMentorshipDropdownOpen(!isMentorshipDropdownOpen)
                  setIsContactDropdownOpen(false)
                }}
                aria-expanded={isMentorshipDropdownOpen}
                className="bg-luxury-gold hover:bg-gold-dark text-deep-navy px-5 py-3 rounded-sm shadow-[0_5px_15px_rgba(212,175,55,0.2)] text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Book Mentorship
                <i
                  className={`fas fa-chevron-down text-[10px] transition-transform duration-500 ${
                    isMentorshipDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                ></i>
              </button>

              <AnimatePresence>
                {isMentorshipDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 w-64 glass-dark rounded-sm overflow-hidden z-50 p-2"
                  >
                    {mentorshipOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-white/80 hover:bg-luxury-gold hover:text-deep-navy transition-all duration-300 rounded-sm mb-1 last:mb-0"
                        onClick={() => setIsMentorshipDropdownOpen(false)}
                      >
                        {option.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative contact-dropdown">
              <button
                type="button"
                onClick={() => {
                  setIsContactDropdownOpen(!isContactDropdownOpen)
                  setIsMentorshipDropdownOpen(false)
                }}
                aria-expanded={isContactDropdownOpen}
                className={`text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-2 ${
                  pathname === '/contact' ? 'text-luxury-gold' : 'text-white hover:text-luxury-gold'
                }`}
              >
                Contact
                <i
                  className={`fas fa-chevron-down text-[10px] transition-transform duration-500 ${
                    isContactDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                ></i>
              </button>

              <AnimatePresence>
                {isContactDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 w-72 glass-dark rounded-sm overflow-hidden z-50 p-2"
                  >
                    {contactOptions.map((option, index) => (
                      <Link
                        key={index}
                        href={option.href}
                        className="block px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-white/80 hover:bg-luxury-gold hover:text-deep-navy transition-all duration-300 rounded-sm mb-1 last:mb-0"
                        onClick={() => setIsContactDropdownOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile: Book Mentorship CTA + hamburger */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative mentorship-dropdown">
              <button
                type="button"
                onClick={() => {
                  setIsMentorshipDropdownOpen(!isMentorshipDropdownOpen)
                  setIsMenuOpen(false)
                }}
                aria-expanded={isMentorshipDropdownOpen}
                className="bg-luxury-gold hover:bg-gold-dark text-deep-navy px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm shadow-[0_5px_15px_rgba(212,175,55,0.2)] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Book Mentorship</span>
                <span className="sm:hidden">Mentorship</span>
                <i
                  className={`fas fa-chevron-down text-[8px] transition-transform duration-500 ${
                    isMentorshipDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                ></i>
              </button>

              <AnimatePresence>
                {isMentorshipDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-3 w-56 glass-dark rounded-sm overflow-hidden z-50 p-2"
                  >
                    {mentorshipOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white/80 hover:bg-luxury-gold hover:text-deep-navy transition-all duration-300 rounded-sm mb-1 last:mb-0"
                        onClick={() => setIsMentorshipDropdownOpen(false)}
                      >
                        {option.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="text-white flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold rounded-sm"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                setIsMentorshipDropdownOpen(false)
              }}
              aria-expanded={isMenuOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-500 ${
                  isMenuOpen ? 'rotate-45 translate-y-2 !bg-luxury-gold' : ''
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-500 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2 !bg-luxury-gold' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Full-screen mobile drawer — outside header so transform doesn't clip fixed positioning */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            />
            <motion.div
              id={MOBILE_MENU_ID}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-deep-navy z-[70] xl:hidden overflow-y-auto border-l border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.2em]">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="text-white/70 hover:text-luxury-gold p-2"
                  aria-label="Close menu"
                >
                  <i className="fas fa-times text-xl" aria-hidden="true"></i>
                </button>
              </div>
              <nav className="p-6 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-4 px-6 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                      pathname === item.href
                        ? 'text-luxury-gold bg-white/5'
                        : 'text-white hover:text-luxury-gold hover:bg-white/5'
                    }`}
                    onClick={closeMenu}
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-white/10">
                  <div className="px-6 mb-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Book Mentorship
                  </div>
                  {mentorshipOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3.5 px-6 mx-2 mb-2 text-[11px] font-bold uppercase tracking-[0.15em] bg-luxury-gold text-deep-navy hover:bg-gold-dark transition-all duration-300 rounded-sm text-center"
                      onClick={closeMenu}
                    >
                      {option.name}
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 mt-4">
                  <div className="px-6 mb-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Contact Us
                  </div>
                  {contactOptions.map((option, index) => (
                    <Link
                      key={index}
                      href={option.href}
                      className="block py-3 px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-luxury-gold transition-colors"
                      onClick={closeMenu}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
