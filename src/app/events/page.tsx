'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EventsHero from '@/components/EventsHero'
import { EVENTS_2026, EVENTS_2027, type EventItem } from '@/lib/events'
import { motion } from 'framer-motion'


type YearTab = 2026 | 2027

function formatEventDate(dateString: string) {
  if (dateString === 'TBA') return 'Date TBA'
  return dateString
}

function EventCard({
  event,
  index,
  showPastEvents,
}: {
  event: EventItem
  index: number
  showPastEvents: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-deep-navy/10 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="bg-deep-navy p-6 sm:p-8 relative overflow-hidden">
        {event.cancelled && (
          <span className="absolute top-4 right-4 z-20 inline-flex items-center rounded-sm border border-red-400/50 bg-red-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-red-300">
            Cancelled
          </span>
        )}
        {event.done && !event.cancelled && (
          <span className="absolute top-4 right-4 z-20 inline-flex items-center rounded-sm border border-luxury-gold/50 bg-luxury-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-luxury-gold">
            Done
          </span>
        )}
        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-calendar-alt text-luxury-gold text-sm"></i>
            <span className="text-luxury-gold text-xs font-bold uppercase tracking-wider">
              {formatEventDate(event.date)}
            </span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-clock text-luxury-gold/80 text-xs"></i>
              <span className="text-white/80 text-xs">{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-luxury-gold/80 text-xs"></i>
              <span className="text-white/80 text-xs">{event.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-black text-deep-navy mb-4 leading-tight group-hover:text-luxury-gold transition-colors">
          {event.title}
        </h3>
        <p className="text-text-dark/70 text-sm sm:text-base leading-relaxed mb-6">{event.description}</p>

        {event.cancelled ? (
          <button
            type="button"
            disabled
            className="w-full border border-red-400/30 bg-red-500/10 text-red-800/90 font-bold py-3 px-6 rounded-sm text-sm uppercase tracking-widest text-center cursor-not-allowed"
          >
            Cancelled
          </button>
        ) : event.done ? (
          showPastEvents && event.recapLink ? (
            <a
              href={event.recapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-luxury-gold/40 bg-luxury-gold/15 hover:bg-luxury-gold text-deep-navy font-bold py-3 px-6 rounded-sm text-sm uppercase tracking-widest text-center transition-colors"
            >
              View Recap
            </a>
          ) : null
        ) : event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-luxury-gold hover:bg-gold-dark text-deep-navy font-bold py-3 px-6 rounded-sm transition-all duration-300 text-sm uppercase tracking-widest text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Register Now
          </a>
        ) : (
          <button
            disabled
            className="w-full bg-deep-navy/10 text-text-dark/50 font-bold py-3 px-6 rounded-sm text-sm uppercase tracking-widest text-center cursor-not-allowed"
          >
            Link Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function Events() {
  const [selectedYear, setSelectedYear] = useState<YearTab>(2026)
  const [showPastEvents, setShowPastEvents] = useState(false)

  const yearEvents = selectedYear === 2026 ? EVENTS_2026 : EVENTS_2027
  const visibleEvents = showPastEvents ? yearEvents : yearEvents.filter((e) => !e.done)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EventsHero />
      <div className="pb-16 sm:pb-24">
        <div className="container-custom pt-10 sm:pt-12">
          {/* Year tabs */}
          <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Events by year">
            <button
              type="button"
              role="tab"
              aria-selected={selectedYear === 2026}
              onClick={() => setSelectedYear(2026)}
              className={`inline-block px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 ${
                selectedYear === 2026
                  ? 'bg-deep-navy text-luxury-gold shadow-md'
                  : 'border border-deep-navy/20 bg-white text-deep-navy/70 hover:border-luxury-gold/50 hover:text-deep-navy'
              }`}
            >
              2026
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedYear === 2027}
              onClick={() => setSelectedYear(2027)}
              className={`inline-block px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 ${
                selectedYear === 2027
                  ? 'bg-deep-navy text-luxury-gold shadow-md'
                  : 'border border-deep-navy/20 bg-white text-deep-navy/70 hover:border-luxury-gold/50 hover:text-deep-navy'
              }`}
            >
              2027
            </button>
            </div>
            <button
              type="button"
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="text-sm font-bold uppercase tracking-widest text-deep-navy/70 hover:text-luxury-gold border border-deep-navy/20 hover:border-luxury-gold/50 px-4 py-2 rounded-sm transition-colors"
            >
              {showPastEvents ? 'Hide past events' : 'Show past events'}
            </button>
          </div>

          {visibleEvents.length === 0 ? (
            <p className="text-center text-text-dark/60 py-12">
              No upcoming events for {selectedYear}.{' '}
              {!showPastEvents && (
                <button
                  type="button"
                  onClick={() => setShowPastEvents(true)}
                  className="text-luxury-gold font-bold hover:underline"
                >
                  Show past events
                </button>
              )}
            </p>
          ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            role="tabpanel"
            aria-label={selectedYear === 2026 ? '2026 events' : '2027 events'}
          >
            {visibleEvents.map((event, index) => (
              <EventCard key={`${selectedYear}-${index}`} event={event} index={index} showPastEvents={showPastEvents} />
            ))}
          </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

