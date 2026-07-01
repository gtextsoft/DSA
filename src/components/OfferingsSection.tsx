'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EXTERNAL_LINKS } from '@/lib/links'

export default function OfferingsSection() {
  const offerings = [
    {
      title: 'GLOBAL EVENTS',
      subtitle: 'Exclusive',
      description: 'Join Dr. Stephen Akintayo at exclusive investment conferences and masterclasses worldwide.',
      image: '/images/bgc261.jpg',
      href: '/events',
    },
    {
      title: 'STEPHEN AKINTAYO PRODUCTION',
      subtitle: 'Impact',
      description: 'Watch exclusive content, interviews, and productions from Dr. Stephen Akintayo on YouTube.',
      image: '/images/bgc262.jpg',
      href: EXTERNAL_LINKS.youtubeProduction,
    },
    {
      title: 'SA UNIVERSITY',
      subtitle: 'Mastery',
      description: 'Comprehensive investment and wealth-building training programs tailored for the elite.',
      image: '/images/stephen.png',
      href: 'https://stephenakintayouniversity.com/',
    },
    {
      title: 'SA STORE',
      subtitle: 'Legacy',
      description: 'Browse our collection of 45+ books, courses, and exclusive mentorship products.',
      image: '/images/book-billionaire-habits.jpg',
      href: EXTERNAL_LINKS.officialStore,
      isStore: true
    }
  ]

  const storeOptions = [
    { name: 'Shop on Amazon', href: EXTERNAL_LINKS.amazonBooks },
    { name: 'Official Store', href: EXTERNAL_LINKS.officialStore }
  ]

  return (
    <section className="bg-deep-navy py-24 sm:py-32 relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 border border-luxury-gold/30 rounded-full mb-6">
            <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">Our Ecosystem</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-serif italic mb-6">
            The World of <span className="text-gradient-gold non-italic font-sans uppercase"> Stephen Akintayo</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Empowering the next generation of global leaders through high-stakes investment intelligence and real estate mastery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent"></div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {offering.subtitle}
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                  {offering.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {offering.description}
                </p>

                {offering.isStore ? (
                  <div className="flex flex-col gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {storeOptions.map((option, optIdx) => (
                      <a
                        key={optIdx}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-white uppercase tracking-widest hover:text-luxury-gold py-2 border-b border-white/10"
                      >
                        {option.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={offering.href}
                    {...(offering.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                  >
                    Explore Now <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-2"></i>
                  </Link>
                )}
              </div>

              {/* Decorative Luxury Border on hover */}
              <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/30 transition-all duration-500 pointer-events-none m-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

