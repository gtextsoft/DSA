'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: 'https://stephenakintayouniversity.com/products' },
    { name: 'Events', href: '/events' },
    { name: 'Foundation', href: 'https://stephenakintayofoundation.org' },
    { name: 'SACI Holdings', href: 'https://www.saciholding.com/' },
    { name: 'Book Mentorship', href: 'https://paystack.shop/pay/drkshfwy1g', isHighlight: true },
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
    }

    if (isContactDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isContactDropdownOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-deep-navy/95 backdrop-blur-lg shadow-2xl py-2' : 'bg-transparent py-4'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>

      {/* Search Bar / Top Highlight (Optional) */}
      <div className={`overflow-hidden transition-all duration-300 bg-luxury-gold/10 backdrop-blur-sm ${isScrolled ? 'h-0' : 'h-8'}`}>
        <div className="container-custom flex items-center justify-between h-full">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">
            <span className="hover:text-luxury-gold cursor-pointer transition-colors">Global Investment Group</span>
            <span className="hover:text-luxury-gold cursor-pointer transition-colors hidden md:block">Real Estate Mogul</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.1em] font-bold text-luxury-gold">
            <i className="fas fa-crown"></i>
            <span>Forbes Best of Africa</span>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-16 sm:w-40 sm:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/SAL.png"
                alt="Stephen Akintayo Consulting"
                fill
                className="object-contain filter brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${item.isHighlight
                  ? 'bg-luxury-gold hover:bg-gold-dark text-deep-navy px-6 py-3 rounded-sm shadow-[0_5px_15px_rgba(212,175,55,0.2)]'
                  : pathname === item.href
                    ? 'text-luxury-gold'
                    : 'text-white hover:text-luxury-gold'
                  }`}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
                {!item.isHighlight && (
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-full ${pathname === item.href ? 'w-full' : ''}`}></span>
                )}
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div className="relative contact-dropdown">
              <button
                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                className={`text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-2 ${pathname === '/contact' ? 'text-luxury-gold' : 'text-white hover:text-luxury-gold'
                  }`}
              >
                Contact
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-500 ${isContactDropdownOpen ? 'rotate-180' : ''}`}></i>
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2 !bg-luxury-gold' : ''}`}></span>
            <span className={`block w-4 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2 !bg-luxury-gold' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-white/5 overflow-hidden"
          >
            <nav className="container-custom py-8 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-4 px-6 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${item.isHighlight
                    ? 'bg-luxury-gold text-deep-navy text-center'
                    : pathname === item.href
                      ? 'text-luxury-gold bg-white/5'
                      : 'text-white hover:text-luxury-gold hover:bg-white/5'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="px-6 mb-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Contact Us</div>
                {contactOptions.map((option, index) => (
                  <Link
                    key={index}
                    href={option.href}
                    className="block py-3 px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-luxury-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 