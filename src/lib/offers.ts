import { EXTERNAL_LINKS } from '@/lib/links'
import type { EventItem } from '@/lib/events'

// Single source for the mentorship checkout links (used by the header and the homepage).
export const MENTORSHIP_OPTIONS = [
  { name: 'Pay in Naira', currency: 'NGN', provider: 'Paystack', href: 'https://paystack.shop/pay/drkshfwy1g' },
  { name: 'Pay in Dollars', currency: 'USD', provider: 'Stripe', href: 'https://buy.stripe.com/9B66oI8wYaXR68C2oQew80t' },
] as const

export type Offer = {
  id: string
  kind: string
  title: string
  description: string
  points: string[]
  cta: string
  href: string
  icon: string
}

// The other ways to work with Dr. Akintayo. Mentorship is featured separately.
export const OFFERS: Offer[] = [
  {
    id: 'consultation',
    kind: 'One-on-one',
    title: 'Private consultation',
    description:
      'A focused session on your business or investment decision — capital raising, real estate, or scaling a company.',
    points: ['Your numbers, your market', 'Direct answers, clear next steps'],
    cta: 'Request a session',
    href: '/contact?type=session',
    icon: 'fas fa-user-tie',
  },
  {
    id: 'speaking',
    kind: 'For organisers',
    title: 'Book him to speak',
    description:
      'Keynotes, conferences, seminars and corporate trainings on wealth creation, real estate and leadership.',
    points: ['Keynotes and workshops', 'Conferences and corporate trainings'],
    cta: 'Send a speaking request',
    href: '/speaking',
    icon: 'fas fa-microphone-lines',
  },
  {
    id: 'university',
    kind: 'Self-paced',
    title: 'SA University',
    description:
      'Investment and wealth-building courses you can take at your own pace, including free resources to start with.',
    points: ['Real estate and land banking', 'Start with free material'],
    cta: 'Browse the courses',
    href: EXTERNAL_LINKS.university,
    icon: 'fas fa-graduation-cap',
  },
  {
    id: 'store',
    kind: 'Read & learn',
    title: 'Books and courses store',
    description: 'More than 45 business books, plus courses and mentorship products, in one official store.',
    points: ['45+ titles in one place', 'Also available on Amazon'],
    cta: 'Visit the store',
    href: EXTERNAL_LINKS.officialStore,
    icon: 'fas fa-book-open',
  },
]

export const FEATURED_BOOKS = [
  {
    title: 'Billionaire Habits',
    subtitle: 'Master the daily practices of the ultra-wealthy.',
    href: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+habits',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618844694i/57783562.jpg',
  },
  {
    title: 'Billionaire Codes',
    subtitle: 'Decode the secrets of wealth creation.',
    href: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+codes',
    image: 'https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Becoming a Billionaire Land Banker',
    subtitle: 'The ultimate guide to real estate wealth.',
    href: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+land+banker',
    image: 'https://m.media-amazon.com/images/I/61M2130f5EL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Information Millionaire',
    subtitle: 'Turn knowledge into unlimited wealth.',
    href: 'https://www.amazon.com/s?k=stephen+akintayo+information+millionaire',
    image: 'https://m.media-amazon.com/images/I/61mGRSkSXyL._AC_SX148_SY213_QL70_.jpg',
  },
] as const

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]

/**
 * Last day an event runs, read from its free-text date ("December 14-18, 2026",
 * "February 28 - March 1, 2026"). Year-only dates resolve to the end of that year;
 * "TBA" returns null.
 */
export function eventEndDate(date: string): Date | null {
  const year = date.match(/\b(20\d{2})\b/)
  if (!year) return null
  const y = Number(year[1])
  // Drop the year first so its digits are never read as a day.
  const withoutYear = date.toLowerCase().replace(/\b20\d{2}\b/g, ' ')
  const parts = Array.from(withoutYear.matchAll(/([a-z]+)?\s*(\d{1,2})(?!\d)/g))
  let month = -1
  let day = -1
  for (const part of parts) {
    const m = part[1] ? MONTHS.indexOf(part[1]) : -1
    if (m >= 0) month = m
    if (month >= 0) day = Number(part[2])
  }
  if (month < 0 || day < 0) return new Date(y, 11, 31, 23, 59, 59)
  return new Date(y, month, day, 23, 59, 59)
}

/** True when the event's date names a specific day, not just a year. */
export function hasExactDate(date: string): boolean {
  return /[a-z]+\s+\d{1,2}/i.test(date)
}

/** Events that are still ahead of `now`, soonest first. Undated ("TBA") events are left out. */
export function upcomingEvents(events: EventItem[], now: Date): EventItem[] {
  return events
    .filter((e) => !e.done && !e.cancelled && e.link)
    .map((e) => ({ event: e, end: eventEndDate(e.date) }))
    .filter((x): x is { event: EventItem; end: Date } => x.end !== null && x.end >= now)
    .sort((a, b) => a.end.getTime() - b.end.getTime())
    .map((x) => x.event)
}
