'use client'

import Link from 'next/link'
import Image from 'next/image'
import { EXTERNAL_LINKS } from '@/lib/links'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'THE VISIONARY': [
      { name: 'About the Legacy', href: '/about' },
      { name: 'Stephen Akintayo Production', href: EXTERNAL_LINKS.youtubeProduction },
      { name: 'Speaking Engagements', href: '/speaking' },
      { name: 'Foundation Impact', href: EXTERNAL_LINKS.foundation }
    ],
    'ECOSYSTEM': [
      { name: 'SACI Holdings', href: EXTERNAL_LINKS.saciHolding },
      { name: 'Gtext Holdings', href: '/businesses' },
      { name: 'SA University', href: EXTERNAL_LINKS.university },
      { name: 'Global Store', href: EXTERNAL_LINKS.officialStore }
    ],
    'CLIENT CARE': [
      { name: 'Contact Inquiry', href: '/contact' },
      { name: 'Mentorship Access', href: '/contact' },
      { name: 'Privacy Protocol', href: '/privacy' },
      { name: 'Terms of Excellence', href: '/terms' }
    ],
    'RESOURCES': [
      { name: 'Bestselling Books', href: EXTERNAL_LINKS.amazonBooks },
      { name: 'Blog & Insights', href: EXTERNAL_LINKS.blog },
      { name: 'Daily Quotes', href: EXTERNAL_LINKS.blog },
      { name: 'Free Resources', href: EXTERNAL_LINKS.university }
    ]
  }

  const socialLinks = [
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/drstephenakintayo' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-deep-navy text-white relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            <div className="col-span-2 space-y-8">
              <Link href="/" className="inline-block group">
                <div className="relative w-48 h-24 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/SAL.png"
                    alt="Stephen Akintayo Consulting"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </Link>
              <p className="text-white/50 text-base max-w-sm leading-relaxed">
                Helping entrepreneurs raise capital and build wealth globally. Chairman of SACI Holdings, Founder of Gtext Holdings, and Forbes Best of Africa Leading Investment Coach.
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="text-white/30 hover:text-luxury-gold transition-colors text-xl"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 className="text-luxury-gold font-bold text-xs uppercase tracking-[0.3em] font-serif italic">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-bold tracking-wider"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-bold tracking-wider"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            Copyright © {currentYear} Dr. Stephen Akintayo Global. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 group"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 group-hover:text-luxury-gold transition-colors">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
              <i className="fas fa-arrow-up text-xs text-white/30 group-hover:text-luxury-gold"></i>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute bottom-40 left-0 text-[15rem] font-black text-white/[0.02] leading-none pointer-events-none select-none font-serif italic translate-x-[-10%]">
        EXCELLENCE
      </div>
    </footer>
  )
} 