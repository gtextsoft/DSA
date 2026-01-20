'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutGrid() {
  const facets = [
    {
      title: 'Global Investment Strategist',
      description: 'Voted one of the top Investment Influencers by Forbes, his high-stakes strategies have redefined wealth-building for millions.',
      image: '/images/stephen.png',
      href: '/about'
    },
    {
      title: 'Master of 45+ Bestsellers',
      description: 'Bestselling author with multiple #1 hits globally. His works like "Investment Mastery" are the blueprint for financial independence.',
      image: '/images/stephen.png',
      href: '/store'
    },
    {
      title: 'Akintayo University',
      description: 'The world\'s premier wealth education platform. Empowering over 850,000 elites and corporations with elite investment intelligence.',
      image: '/images/stephen.png',
      href: '/store'
    },
    {
      title: 'Global Keynote Speaker',
      description: 'Commanding stages across five continents. Dr. Akintayo shares his vision on sales, real estate, and the mindset of giants.',
      image: '/images/stephen.png',
      href: '/events'
    },
    {
      title: 'Gtext Holdings CEO',
      description: 'At the helm of a $200M investment powerhouse. A visionary disrupting real estate, technology, and equity markets.',
      image: '/images/stephen.png',
      href: '/businesses'
    },
    {
      title: 'Media Authority',
      description: 'A regular voice on CNN, BBC, and Forbes. Dr. Akintayo provides expert insights on the global economy and future markets.',
      image: '/images/stephen.png',
      href: '/media'
    },
    {
      title: 'Real Estate Mogul',
      description: 'Leading a private equity real estate portfolio worth over $200M. Africa\'s most transparent crowdfunding pioneer.',
      image: '/images/stephen.png',
      href: '/businesses'
    },
    {
      title: 'Impact Philanthropy',
      description: 'Through the MM2050 Foundation, he is architecting a future where every youth has the tools for financial dominance.',
      image: '/images/stephen.png',
      href: '/foundation'
    },
    {
      title: 'Digital Visionary',
      description: 'Leading a community of 1 million+ high-performers. One of the world\'s most influential investment coaches to watch.',
      image: '/images/stephen.png',
      href: '/media'
    }
  ]

  return (
    <section className="bg-deep-navy py-24 sm:py-32 relative">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-luxury-gold"></span>
            <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">The Movement</span>
            <span className="w-12 h-[1px] bg-luxury-gold"></span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-serif italic mb-6">
            Dimensions of <span className="text-gradient-gold non-italic font-sans uppercase">A Legacy</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            A comprehensive overview of the facets that make Dr. Stephen Akintayo a global force in investment, mentorship, and excellence.
          </p>
        </motion.div>

        {/* Grid of Facets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facets.map((facet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={facet.href}
                className="group block relative h-full glass-dark bg-deep-navy/50 border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-500 overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={facet.image}
                    alt={facet.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight font-serif italic group-hover:text-luxury-gold transition-colors">
                    {facet.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                    {facet.description}
                  </p>
                  <div className="flex items-center gap-2 text-luxury-gold text-[10px] font-bold uppercase tracking-widest pt-4 transform translate-x-0 group-hover:translate-x-2 transition-transform">
                    Discover More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-luxury-gold/0 group-hover:border-luxury-gold/30 transition-all m-4"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

