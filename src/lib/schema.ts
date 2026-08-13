import { SITE_URL } from './metadata'

export const BLOG_URL = 'https://blog.stephenakintayofoundation.org/'

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Stephen Akintayo',
  jobTitle: 'Chairman of SACI Holdings',
  description:
    'Real estate investor, private equity and venture capital entrepreneur. Chairman of SACI Holdings, Founder of Gtext Holdings and the Stephen Akintayo Foundation, helping entrepreneurs raise capital and build wealth globally.',
  url: SITE_URL,
  sameAs: [
    BLOG_URL,
    'https://linkedin.com/in/drstephenakintayo',
    'https://twitter.com/stephenakintayo',
    'https://instagram.com/stephenakintayo',
    'https://youtube.com/@stephenakintayo',
    'https://facebook.com/stephenakintayo',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'SACI Holdings',
    url: 'https://saciholdings.com/',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Harvard Business School',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Olabisi Onabanjo University',
    },
  ],
  award: ['Forbes Best of Africa Leading Investment Coach and Real Estate Mogul'],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SACI Holdings',
  url: 'https://saciholdings.com/',
  logo: `${SITE_URL}/images/SAL.png`,
  founder: {
    '@type': 'Person',
    name: 'Dr. Stephen Akintayo',
  },
  sameAs: [
    BLOG_URL,
    'https://linkedin.com/in/drstephenakintayo',
    'https://stephenakintayofoundation.org',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dr. Stephen Akintayo',
  url: SITE_URL,
  description:
    'Official website of Dr. Stephen Akintayo — Chairman of SACI Holdings, Founder of Gtext Holdings, real estate investor, and Forbes Best of Africa Leading Investment Coach.',
  publisher: {
    '@type': 'Organization',
    name: 'SACI Holdings',
  },
}

export const eventsItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Stephen Akintayo Events',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Event',
        name: 'Business Growth Conference Lagos',
        startDate: '2026-02-14',
        location: { '@type': 'Place', name: 'Lagos, Nigeria' },
        organizer: { '@type': 'Person', name: 'Dr. Stephen Akintayo' },
        url: 'https://businessgrowthconference.org/',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Event',
        name: 'Business Growth Conference USA',
        startDate: '2026-08-29',
        location: { '@type': 'Place', name: 'USA' },
        organizer: { '@type': 'Person', name: 'Dr. Stephen Akintayo' },
        url: 'https://businessgrowthconference.org/',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Event',
        name: 'London Business Growth Conference',
        startDate: '2026-10-10',
        location: { '@type': 'Place', name: 'London, UK' },
        organizer: { '@type': 'Person', name: 'Dr. Stephen Akintayo' },
        url: 'https://businessgrowthconference.org/',
      },
    },
  ],
}
