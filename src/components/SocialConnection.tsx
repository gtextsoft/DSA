'use client'

import { motion } from 'framer-motion'

export default function SocialConnection() {
  const socialLinks = [
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo', label: 'YouTube' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo', label: 'Instagram' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo', label: 'Facebook' },
    { icon: 'fab fa-tiktok', href: 'https://tiktok.com/@stephenakintayo', label: 'TikTok' },
    { icon: 'fab fa-spotify', href: 'https://open.spotify.com/show/1OBuNEZ0NQWYG9g5fqhEG9?si=eaf1020392804fe4', label: 'Spotify' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/drstephenakintayo', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo', label: 'X (Twitter)' },
  ]

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Legacy Graphic - Reduced opacity for better readability */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <div className="text-[15rem] sm:text-[25rem] font-black text-deep-navy/[0.05] leading-none uppercase select-none font-serif italic">
          LEGACY
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 relative z-20"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.2em]">Global Network</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-deep-navy font-serif italic leading-tight">
                Connect with the{' '}
                <span className="text-gradient-gold non-italic font-sans uppercase block mt-2">Visionary</span>
              </h2>
              <p className="text-text-dark/90 text-lg leading-relaxed max-w-xl relative z-10">
                Every day I share high-stakes strategies and wealth-building intelligence across all global platforms. Join our community of 1 million+ high-performers and transform your financial future.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/about"
                className="text-deep-navy font-bold text-sm uppercase tracking-widest flex items-center gap-3 group"
              >
                Learn More About the Mission
                <span className="w-10 h-[1px] bg-luxury-gold group-hover:w-16 transition-all"></span>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Social Icon Grid */}
          <div className="relative z-20">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-deep-navy rounded-sm flex items-center justify-center transition-all duration-300 shadow-xl border border-luxury-gold/10 hover:border-luxury-gold hover:shadow-2xl group"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-white group-hover:text-luxury-gold text-xl sm:text-2xl transition-colors`}></i>
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: socialLinks.length * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-luxury-gold rounded-sm flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 p-3 text-center"
              >
                <span className="text-deep-navy font-black text-[9px] sm:text-[10px] uppercase tracking-widest leading-tight">
                  Join 1M+
                </span>
              </motion.div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(#D4AF37_2px,transparent_2px)] [background-size:20px_20px] opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

