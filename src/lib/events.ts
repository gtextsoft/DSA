import { EXTERNAL_LINKS } from '@/lib/links'

export type EventItem = {
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

export const EVENTS_2026: EventItem[] = [
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

export const EVENTS_2027: EventItem[] = [
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
