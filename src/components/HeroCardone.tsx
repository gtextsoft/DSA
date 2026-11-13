'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EVENTS_2026, EVENTS_2027, type EventItem } from '@/lib/events'
import { hasExactDate, upcomingEvents } from '@/lib/offers'
import { EASE } from '@/components/motion/Reveal'

const HEADLINE = ['Raise capital.', 'Build wealth', 'that outlasts you.']

const PROOF = [
  'Forbes Best of Africa — Leading Investment Coach',
  '$200M+ portfolio',
  '45+ business books',
  '850,000+ people and businesses served',
  '20+ years of impact',
  'Chairman, SACI Holdings',
  'Founder, Gtext Holdings',
  'Forbes Business Council',
]

function NextEventCard({ event }: { event: EventItem }) {
  const external = event.link.startsWith('http')
  return (
    <motion.aside
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="glass-dark rounded-sm border-l-2 border-luxury-gold p-6 sm:p-7 w-full max-w-sm"
      aria-label="Next event"
    >
      <div className="flex items-center gap-3 text-luxury-gold text-[10px] font-extrabold uppercase tracking-[0.24em] mb-4">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-60 animate-ping"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-luxury-gold"></span>
        </span>
        Next event
      </div>
      <h2 className="text-white text-xl font-semibold leading-snug mb-3">{event.title}</h2>
      <dl className="space-y-1.5 text-sm text-white/70 mb-6">
        <div className="flex gap-3">
          <dt className="sr-only">Date</dt>
          <i className="far fa-calendar text-luxury-gold w-4 mt-0.5" aria-hidden="true"></i>
          <dd>{event.date}</dd>
        </div>
        {event.location && (
          <div className="flex gap-3">
            <dt className="sr-only">Location</dt>
            <i className="fas fa-location-dot text-luxury-gold w-4 mt-0.5" aria-hidden="true"></i>
            <dd>{event.location}</dd>
          </div>
        )}
      </dl>
      <a
        href={event.link}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        className="group flex items-center justify-between gap-4 bg-luxury-gold hover:bg-gold-light text-deep-navy text-[11px] font-extrabold uppercase tracking-[0.18em] py-3.5 px-5 rounded-sm transition-colors duration-300"
      >
        {hasExactDate(event.date) ? 'Reserve your place' : 'See the details'}
        <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
      </a>
    </motion.aside>
  )
}

export default function HeroCardone() {
  const [nextEvent, setNextEvent] = useState<EventItem | null>(null)
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], [0, 160])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.25])

  // Resolved after mount so the card always reflects today's date, not the build date.
  useEffect(() => {
    setNextEvent(upcomingEvents([...EVENTS_2026, ...EVENTS_2027], new Date())[0] ?? null)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-deep-navy flex flex-col">
      {/* Background video */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <iframe
          src="https://www.youtube-nocookie.com/embed/i45_4AMAx54?autoplay=1&loop=1&mute=1&playlist=i45_4AMAx54&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-110"
          style={{ pointerEvents: 'none', border: 'none', filter: 'grayscale(0.3) brightness(0.4)' }}
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          title="Background video"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,50,0.72)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/70 via-deep-navy/20 to-deep-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/50 to-transparent"></div>
        <div className="absolute inset-0 plot-grid opacity-60"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 container-custom flex-1 flex items-center pt-36 sm:pt-44 pb-14"
      >
        <div className="grid xl:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-end w-full">
          <div className="max-w-3xl">
            <h1>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex items-center gap-4 font-sans text-luxury-gold text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-6"
              >
                <span className="w-10 h-px bg-luxury-gold" aria-hidden="true"></span>
                Dr. Stephen Akintayo
              </motion.span>

              {HEADLINE.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.95, delay: 0.15 + i * 0.12, ease: EASE }}
                    className={`block font-serif text-[2.9rem] leading-[1.02] sm:text-7xl xl:text-[5.6rem] tracking-tight ${
                      i === 2 ? 'italic text-gradient-gold font-medium pb-[0.18em] pr-2' : 'text-white font-semibold'
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
              className="mt-8 text-white/75 text-lg sm:text-xl max-w-2xl leading-relaxed"
            >
              Mentorship, live events, books and courses from the Chairman of SACI Holdings and founder of Gtext
              Holdings — for entrepreneurs and investors who want to learn from someone who has done it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#mentorship" className="btn-luxury text-center">
                Book mentorship
              </a>
              <Link href="/events" className="btn-ghost-light text-center">
                See upcoming events
              </Link>
            </motion.div>
          </div>

          {nextEvent && <NextEventCard event={nextEvent} />}
        </div>
      </motion.div>

      {/* Proof strip */}
      <div className="relative z-10 border-t border-white/10 bg-deep-navy/60 backdrop-blur-sm">
        <ul className="sr-only">
          {PROOF.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="overflow-hidden marquee-mask py-5" aria-hidden="true">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...PROOF, ...PROOF].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 pr-8 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/60 whitespace-nowrap"
              >
                {item}
                <span className="w-1.5 h-1.5 rotate-45 bg-luxury-gold"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
