'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EventsHero from '@/components/EventsHero'
import { EXTERNAL_LINKS } from '@/lib/links'
import { motion } from 'framer-motion'

type EventItem = {
  title: string
  date: string
  location: string
  description: string
  link: string
  time?: string
  done?: boolean
  cancelled?: boolean
  recapLink?: string
}

const BGC_NIGERIA_LINK = 'https://businessgrowthconference.org/nigeria'

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
  const events2026: EventItem[] = [
    {
      title: 'Sales Masterclass For Business Owners and Birthday Praise',
      date: 'January 28, 2026',
      location: '',
      description: 'Join Dr. Stephen Akintayo for an exclusive sales masterclass designed for business owners, combined with a special birthday celebration.',
      link: EXTERNAL_LINKS.youtubeProduction,
      done: true,
      recapLink: EXTERNAL_LINKS.youtubeProduction,
    },
    {
      title: 'Barbecue CEO hangout with Dr Stephen Akintayo for 40 CEOs',
      date: 'January 30, 2026',
      time: '6pm - 9pm',
      location: '',
      description: 'An exclusive networking event for 40 CEOs to connect, share insights, and learn from Dr. Stephen Akintayo in an intimate setting.',
      link: 'https://www.ceobarbequehangout.com/' // Add link when provided
    },
    {
      title: 'DSA 40TH BIRTHDAY CONFERENCE',
      date: 'January 31, 2026',
      location: '',
      description: 'Celebrate Dr. Stephen Akintayo\'s 40th birthday at this special conference featuring keynote sessions, networking, and exclusive insights.',
      link: 'https://www.stephenakintayoat40.com/',
      done: true,
      recapLink: EXTERNAL_LINKS.youtubeProduction,
    },
    {
      title: 'Business Growth Conference Lagos',
      date: 'February 14-15, 2026',
      location: 'Lagos, Nigeria',
      description: 'A comprehensive business growth conference featuring strategies, insights, and networking opportunities for entrepreneurs and business leaders.',
      link: BGC_NIGERIA_LINK,
      done: true,
      recapLink: EXTERNAL_LINKS.youtubeProduction,
    },
    {
      title: 'Business Growth Conference Abuja',
      date: 'February 28 - March 1, 2026',
      location: 'Abuja, Nigeria',
      description: 'Join us in Abuja for transformative business growth strategies, expert insights, and powerful networking opportunities.',
      link: BGC_NIGERIA_LINK,
      done: true,
      recapLink: EXTERNAL_LINKS.youtubeProduction,
    },
    {
      title: "Founders Meet & Greet (USA Tour)",
      date: 'March 28 - April 11, 2026',
      time: '10:00 AM (Philadelphia) • TBA (Dallas & Houston)',
      location: 'Philadelphia • Dallas • Houston (USA)',
      description: "An exclusive Founders Meet & Greet with Dr. Stephen Akintayo—designed for founders, entrepreneurs, executives, investors, and professionals to network, gain insights, and build strategic relationships. Venue details are shared with registered attendees.",
      link: 'https://foundersmeet.stephenakintayofoundation.org/'
    },
    {
      title: 'China Business Retreat 2026',
      date: '2026',
      location: 'Shenzhen · Shanghai · Guangzhou · Beijing, China',
      description: 'A 7-day luxury business, trade, and investment immersion into China’s manufacturing, sourcing, and innovation ecosystems—factory and market access, strategy sessions with Dr. Stephen Akintayo, and curated networking. Limited to 25 seats; visa support included.',
      link: '/chinaretreat'
    },
    {
      title: 'Guinness World Record event',
      date: 'TBA',
      location: '',
      description: 'Be part of history as Dr. Stephen Akintayo attempts to set a Guinness World Record. Details coming soon.',
      link: '' // Add link when provided
    },
    {
      title: 'Corporate Leadership Retreat, Kenya',
      date: 'April 20-26, 2026',
      location: 'Kenya',
      description: 'A week-long intensive leadership retreat in Kenya designed for corporate leaders seeking to transform their leadership capabilities and strategic vision.',
      link: '/contact'
    },
    {
      title: 'Doha Retreat',
      date: 'April 26 - May 2, 2026',
      location: 'Doha, Qatar',
      description: 'An exclusive retreat in Doha combining luxury, learning, and networking for high-performing executives and entrepreneurs.',
      link: 'https://doharetreat.stephenakintayofoundation.org/',
      cancelled: true,
    },
    {
      title: 'Business Growth Conference USA',
      date: 'August 29-30, 2026',
      location: 'USA',
      description: 'Join Dr. Stephen Akintayo in the USA for a powerful business growth conference featuring cutting-edge strategies and global networking opportunities.',
      link: 'https://businessgrowthconference.org/'
    },
    {
      title: 'London Business Growth Conference',
      date: 'October 10-11, 2026',
      location: 'London, UK',
      description: 'Experience world-class business growth strategies and insights in the heart of London, connecting with international entrepreneurs and investors.',
      link: 'https://businessgrowthconference.org/'
    },
    {
      title: 'Real Estate Developers Retreat',
      date: 'December 14-18, 2026',
      location: '',
      description: 'An exclusive 5-day retreat designed specifically for real estate developers, featuring advanced strategies, market insights, and networking opportunities.',
      link: 'https://rim.stephenakintayofoundation.org/'
    }
  ]

  const events2027: EventItem[] = [
    {
      title: 'Business Growth Conference Lagos 2027',
      date: '2027',
      location: 'Lagos, Nigeria',
      description:
        'A comprehensive business growth conference featuring strategies, insights, and networking opportunities for entrepreneurs and business leaders.',
      link: BGC_NIGERIA_LINK,
    },
    {
      title: 'Business Growth Conference Abuja 2027',
      date: '2027',
      location: 'Abuja, Nigeria',
      description:
        'Join us in Abuja for transformative business growth strategies, expert insights, and powerful networking opportunities.',
      link: BGC_NIGERIA_LINK,
    },
  ]

  const [selectedYear, setSelectedYear] = useState<YearTab>(2026)
  const [showPastEvents, setShowPastEvents] = useState(false)

  const yearEvents = selectedYear === 2026 ? events2026 : events2027
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

