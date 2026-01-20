'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Events() {
  const events = [
    {
      title: 'Sales Masterclass For Business Owners and Birthday Praise',
      date: 'January 28, 2026',
      location: '',
      description: 'Join Dr. Stephen Akintayo for an exclusive sales masterclass designed for business owners, combined with a special birthday celebration.',
      link: 'https://stephenakintayo.com/salesmasterclass'
    },
    {
      title: 'Barbecue CEO hangout with Dr Stephen Akintayo for 40 CEOs',
      date: 'January 30, 2026',
      time: '6pm - 9pm',
      location: '',
      description: 'An exclusive networking event for 40 CEOs to connect, share insights, and learn from Dr. Stephen Akintayo in an intimate setting.',
      link: '' // Add link when provided
    },
    {
      title: 'DSA 40TH BIRTHDAY CONFERENCE',
      date: 'January 31, 2026',
      location: '',
      description: 'Celebrate Dr. Stephen Akintayo\'s 40th birthday at this special conference featuring keynote sessions, networking, and exclusive insights.',
      link: 'https://www.stephenakintayoat40.com/'
    },
    {
      title: 'Owners and President Management Training (OPM)',
      date: 'February 3-4, 2026',
      location: '',
      description: 'Intensive two-day management training program designed for business owners and presidents to elevate their leadership and strategic thinking.',
      link: '' // Add link when provided
    },
    {
      title: 'Business Growth Conference Lagos',
      date: 'February 14-15, 2026',
      location: 'Lagos, Nigeria',
      description: 'A comprehensive business growth conference featuring strategies, insights, and networking opportunities for entrepreneurs and business leaders.',
      link: 'https://businessgrowthconference.org/nigeria'
    },
    {
      title: 'Business Growth Conference Abuja',
      date: 'February 28 - March 1, 2026',
      location: 'Abuja, Nigeria',
      description: 'Join us in Abuja for transformative business growth strategies, expert insights, and powerful networking opportunities.',
      link: 'https://businessgrowthconference.org/nigeria'
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
      link: 'https://www.stephenakintayo.com/kenyaretreat'
    },
    {
      title: 'Doha Retreat',
      date: 'April 26 - May 2, 2026',
      location: 'Doha, Qatar',
      description: 'An exclusive retreat in Doha combining luxury, learning, and networking for high-performing executives and entrepreneurs.',
      link: 'https://doharetreat.stephenakintayofoundation.org/'
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

  const formatDate = (dateString: string) => {
    if (dateString === 'TBA') return 'Date TBA'
    return dateString
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16 sm:pb-24">
        <div className="container-custom">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-luxury-gold"></span>
              <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.2em]">Upcoming Events</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-deep-navy font-serif italic mb-4">
              SA Events <span className="text-gradient-gold non-italic font-sans uppercase">Itinerary</span>
            </h1>
            <p className="text-text-dark/80 text-lg sm:text-xl max-w-3xl">
              Join Dr. Stephen Akintayo at these exclusive events designed to transform your business, leadership, and financial future.
            </p>
          </motion.div>

          {/* Year Badge */}
          <div className="mb-8 sm:mb-12">
            <span className="inline-block bg-deep-navy text-luxury-gold px-6 py-2 text-sm font-bold uppercase tracking-widest">
              2026
            </span>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-deep-navy/10 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Header Section */}
                <div className="bg-deep-navy p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-calendar-alt text-luxury-gold text-sm"></i>
                      <span className="text-luxury-gold text-xs font-bold uppercase tracking-wider">
                        {formatDate(event.date)}
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

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-deep-navy mb-4 leading-tight group-hover:text-luxury-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-text-dark/70 text-sm sm:text-base leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Register Button */}
                  {event.link ? (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

