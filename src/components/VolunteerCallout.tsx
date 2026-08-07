'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const PILLARS = [
  {
    icon: 'fas fa-clock',
    title: 'Flexible Commitment',
    copy: 'From a few hours a month to full-time — you set the pace.',
  },
  {
    icon: 'fas fa-tower-broadcast',
    title: 'Remote or On-Site',
    copy: 'Serve from your own city, or join activations on the ground.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grow As You Give',
    copy: 'Training, mentorship and access to the wider founder network.',
  },
]

export default function VolunteerCallout() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-deep-navy relative overflow-hidden rounded-sm"
        >
          {/* Gold framing motif */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-luxury-gold/30"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-luxury-gold/30"></div>
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-luxury-gold/10 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 p-8 sm:p-14 lg:p-20">
            {/* Pitch */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">
                  Global Volunteer Corps
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif italic leading-[1.1]">
                Give Your Time.
                <br />
                <span className="text-gradient-gold not-italic font-sans uppercase">
                  Change a Continent
                </span>
              </h2>

              <p className="mt-8 text-white/50 text-base sm:text-lg leading-relaxed max-w-lg">
                Our volunteers power the food banks, bursaries, business clinics and community
                activations that carry this work beyond any one city. Tell us where you are and what
                you bring — we will place you with the team that needs it.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <Link href="/globalvolunteers" className="btn-luxury inline-block text-center">
                  Become a Volunteer
                  <i className="fas fa-arrow-right ml-3"></i>
                </Link>
                <p className="text-xs text-white/30 leading-relaxed max-w-[14rem]">
                  Open worldwide. A coordinator replies within 5 working days.
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="lg:border-l lg:border-white/10 lg:pl-16 flex flex-col justify-center">
              <div className="space-y-px bg-white/10">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="bg-deep-navy py-6 group">
                    <div className="flex items-start gap-5">
                      <span className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-sm border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-deep-navy transition-all duration-500">
                        <i className={`${pillar.icon} text-sm`}></i>
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                          {pillar.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-white/40 leading-relaxed">
                          {pillar.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
