'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Events', href: '#events' },
    { name: 'Books', href: '#books' },
    { name: 'University', href: 'https://stephenakintayouniversity.com/', external: true },
    { name: 'Blog', href: 'https://stephenakintayo.com/blog', external: true },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo" 
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-dark-blue">
              Dr. Stephen Akintayo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-dark-blue hover:text-sky-blue font-medium transition-colors duration-300 flex items-center"
              >
                {item.name}
                {item.external && <i className="fas fa-external-link-alt ml-1 text-xs"></i>}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <nav className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block py-2 px-4 text-dark-blue hover:text-sky-blue hover:bg-light-blue transition-colors duration-300 flex items-center justify-between"
                  onClick={() => !item.external && setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.external && <i className="fas fa-external-link-alt text-xs"></i>}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 