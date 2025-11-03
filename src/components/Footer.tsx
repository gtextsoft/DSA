'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'LEARN MORE': [
      { name: 'Akintayo University', href: '/store' },
      { name: 'Gtext Holdings', href: '/businesses' },
      { name: 'Licensee Program', href: '/contact' },
      { name: 'Akintayo On-Demand', href: '/media' },
      { name: 'Akintayo Ventures', href: '/businesses' }
    ],
    'COMPANY': [
      { name: 'About', href: '/about' },
      { name: 'Hire Dr. Akintayo', href: '/contact' },
      { name: 'Careers', href: '/contact' }
    ],
    'SUPPORT': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Careers', href: '/contact' },
      { name: 'Free eBooks', href: '/store' },
      { name: 'Free Books', href: '/store' }
    ],
    'RESOURCES': [
      { name: 'Quotes', href: '#' },
      { name: 'Free eBooks', href: '/store' },
      { name: 'Subscribe', href: '#' },
      { name: 'Free Books', href: '/store' }
    ]
  }

  const partnerLogos = [
    { name: 'DR. STEPHEN AKINTAYO', href: '/' },
    { name: 'SA AKINTAYO TV', href: '/media' },
    { name: 'AKINTAYO ON-DEMAND', href: '/media' },
    { name: 'GTEXT HOLDINGS', href: '/businesses' },
    { name: 'MM2050 FOUNDATION', href: '/foundation' }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-red-600 transition-colors duration-300 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Section */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Link href="/" className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 hover:opacity-90 transition-opacity duration-300">
              <Image 
                src="/images/SAL.png" 
                alt="Stephen Akintayo Consulting Logo" 
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                className="object-contain"
              />
            </Link>
          </div>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-4">
            {partnerLogos.map((partner, index) => (
              <Link
                key={index}
                href={partner.href}
                className="text-white/60 hover:text-red-600 transition-colors duration-300 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-center"
              >
                {partner.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="text-center text-xs sm:text-sm text-white/60">
            Copyright © {currentYear} Dr. Stephen Akintayo Training Technologies, Inc., All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 