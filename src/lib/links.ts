import { BLOG_URL } from '@/lib/schema'

export const EXTERNAL_LINKS = {
  blog: BLOG_URL,
  foundation: 'https://stephenakintayofoundation.org',
  university: 'https://stephenakintayouniversity.com/',
  saciHolding: 'https://saciholdings.com/',
  amazonBooks: 'https://www.amazon.com/s?k=stephen+akintayo&ref=sr_pg_1',
  officialStore: 'https://store.stephenakintayofoundation.org/',
  youtubeProduction: 'https://www.youtube.com/@StephenAkintayoProduction',
} as const

// Recommended DNS-level 301 redirects (configure on respective domains):
// - books.stephenakintayo.com → https://store.stephenakintayofoundation.org/
