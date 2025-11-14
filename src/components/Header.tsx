'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
      
      // Show header when at top or scrolling up, hide when scrolling down
      if (currentScrollY < 100) {
        // Always show when near the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Store', href: 'https://stephenakintayouniversity.com/products' },
    { name: 'Events', href: '/events' },
    { name: 'Foundation', href: '/foundation' },
  ]

  const contactOptions = [
    { name: 'Book a Speaking Engagement', href: '/contact?type=event' },
    { name: 'Book a One-on-One Consultation', href: '/contact?type=session' },
    { name: 'General Inquiry', href: '/contact' },
  ]

  // Close dropdown when clicking outside
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Bar */}
      <div className="bg-black border-b border-white/10 py-1.5">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-white text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
              <span className="hidden sm:inline">LOGIN:</span>
              <Link href="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm whitespace-nowrap">SA INDIVIDUAL</Link>
              <Link href="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm whitespace-nowrap">SA CORPORATE</Link>
              <Link href="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm whitespace-nowrap hidden md:inline">AKINTAYO ON DEMAND</Link>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-red-600 text-xs sm:text-sm"></i>
              <span className="text-xs sm:text-sm">Call: (234) XXX-XXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-300">
            <div className="relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 flex-shrink-0">
              <Image 
                src="/images/SAL.png" 
                alt="Stephen Akintayo Consulting Logo" 
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm xl:text-base font-semibold transition-colors duration-300 whitespace-nowrap uppercase tracking-wider ${
                  pathname === item.href
                    ? 'text-red-600'
                    : 'text-white hover:text-red-600'
                }`}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Dropdown */}
            <div className="relative contact-dropdown">
              <button
                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                className={`text-sm xl:text-base font-semibold transition-colors duration-300 whitespace-nowrap uppercase tracking-wider flex items-center gap-1 ${
                  pathname === '/contact'
                    ? 'text-red-600'
                    : 'text-white hover:text-red-600'
                }`}
              >
                Contact
                <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isContactDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isContactDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-black border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                  {contactOptions.map((option, index) => (
                    <Link
                      key={index}
                      href={option.href}
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-900 hover:text-red-600 transition-colors duration-300 border-b border-white/5 last:border-b-0"
                      onClick={() => setIsContactDropdownOpen(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button className="text-white hover:text-red-600 transition-colors">
              <i className="fas fa-search text-xl"></i>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white p-1.5 hover:text-red-600 transition-colors duration-300 relative z-50 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <nav className="bg-black border-t border-white/10 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wider ${
                  pathname === item.href
                    ? 'text-red-600 font-bold bg-gray-900'
                    : 'text-white hover:text-red-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact Dropdown */}
            <div className="contact-dropdown">
              <button
                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wider ${
                  pathname === '/contact'
                    ? 'text-red-600 font-bold bg-gray-900'
                    : 'text-white hover:text-red-600'
                }`}
              >
                Contact
                <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isContactDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isContactDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {contactOptions.map((option, index) => (
                  <Link
                    key={index}
                    href={option.href}
                    className="block py-2.5 px-8 text-sm text-white/80 hover:bg-gray-900 hover:text-red-600 transition-colors duration-300"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsContactDropdownOpen(false)
                    }}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
} 