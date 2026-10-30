import { CAMPAIGNS } from './campaigns'
import { EVENTS_2026, EVENTS_2027, type EventItem } from './events'
import { EXTERNAL_LINKS } from './links'
import { SITE_URL } from './metadata'
import { personSchema } from './schema'
import vercelConfig from '../../vercel.json'

// Knowledge used by the website AI assistant (/api/chat).
// Events, campaigns and links are imported from the same modules the pages use,
// so updating those files keeps the assistant in sync. Update the prose below
// when the About / Businesses / Media pages change.

function formatEvent(event: EventItem) {
  const status = event.cancelled ? 'CANCELLED' : event.done ? 'PAST (already held)' : 'UPCOMING / OPEN'
  const link = event.link.startsWith('/') ? `${SITE_URL}${event.link}` : event.link
  return [
    `- ${event.title} [${status}]`,
    `  Date: ${event.date === 'TBA' ? 'To be announced' : event.date}${event.time ? ` (${event.time})` : ''}`,
    event.location ? `  Location: ${event.location}` : null,
    `  ${event.description}`,
    link ? `  Registration / info: ${link}` : '  Registration link: coming soon',
  ]
    .filter(Boolean)
    .join('\n')
}

const SITE_PAGES = [
  ['/', 'Homepage'],
  ['/about', 'About Dr. Stephen Akintayo'],
  ['/businesses', 'Businesses & ventures (SACI Holdings, Gtext Holdings)'],
  ['/coaching', 'Investment coaching'],
  ['/events', 'Events & conferences'],
  ['/speaking', 'Book a speaking engagement'],
  ['/media', 'Media kit, press & Forbes articles'],
  ['/contact', 'Contact, consultations & mentorship'],
  ['/payment', 'Payments (Stripe, Paystack, bank transfer)'],
  ['/globalvolunteers', 'Global Volunteer Corps application'],
  ['/privacy', 'Privacy policy'],
  ['/terms', 'Terms of use'],
]

const sitePageLines = SITE_PAGES.map(([path, label]) => `- ${SITE_URL}${path === '/' ? '' : path} — ${label}`).join('\n')

// Every short link configured in vercel.json (stephenakintayo.com/<path> → destination).
// Case-only duplicates of internal pages (e.g. /Houston → /houston) are skipped.
const shortLinkLines = vercelConfig.redirects
  .filter((r) => !(r.destination.startsWith('/') && r.destination.toLowerCase() === r.source.toLowerCase()))
  .map((r) => `- ${SITE_URL}${r.source} → ${r.destination.startsWith('/') ? `${SITE_URL}${r.destination}` : r.destination}`)
  .join('\n')

const campaignLines = Object.entries(CAMPAIGNS)
  .map(([slug, c]) => `- ${SITE_URL}/${slug} — ${c.description}`)
  .join('\n')

export const CHAT_KNOWLEDGE = `
# DR. STEPHEN AKINTAYO — OFFICIAL WEBSITE KNOWLEDGE (${SITE_URL})

## Identity
- Dr. Stephen Akintayo is a Nigerian-American entrepreneur, real estate investor, private equity & venture capital entrepreneur, global investment coach, bestselling author and philanthropist.
- Chairman of SACI Holdings — a Houston, Texas-based private equity and venture capital firm acquiring and scaling high-impact enterprises across AI, logistics, electric vehicles, biotech and real estate (${EXTERNAL_LINKS.saciHolding}).
- Founder of Gtext Holdings — a multinational conglomerate with a real estate and investment portfolio worth over $200 million, with estates across Africa, the UAE, the UK and the United States.
- Founder of the Stephen Akintayo Foundation (${EXTERNAL_LINKS.foundation}) — dedicated to lifting millions out of poverty and raising a generation of ethical wealth creators.
- Recognition: ${personSchema.award.join('; ')}. Member/contributor of the Forbes Business Council. Featured voice on CNN, BBC and Forbes (per the website).
- Tagline: "Helping entrepreneurs raise capital and build wealth globally."
- Website figures: 45+ business books published, 20+ years of impact, 850,000+ individuals and businesses served worldwide, a community of 1 million+ followers, $200M+ assets.
- Has partnered with global entities like Google, Microsoft and IBM (per the About page).
- Education: enrolled in the Owner/President Management (OPM) program at Harvard Business School (graduating 2027); completed Harvard Business School executive education in Real Estate Investment and Development; in 2026 completed Mergers and Acquisitions at Stanford Graduate School of Business and the Venture Capital Program at the Wharton School. Also an alumnus of Olabisi Onabanjo University.
- Signature ideas: "Billionaire Habits" framework; "Success is your duty, obligation, responsibility"; "Real estate is the only investment where you can use other people's money to build your own wealth safely."; "You were not born to be poor — you were born to be great. Your wealth is a service to humanity."

## Businesses (Gtext Holdings subsidiaries — see ${SITE_URL}/businesses)
- SACI Holdings — private equity and venture capital, Houston, Texas
- Gtext Homes — real estate development
- Gtext Land — land acquisition and sales
- Stephen Akintayo Consulting — business and investment coaching
- GVest — investment platform
- Gtext Media — media production and content creation
- Gtext Farms — agricultural ventures
- Impact highlights: 500+ homes built, 1000+ acres of land acquired, 2000+ businesses coached.

## Books (Store)
- 45+ business books. Highlighted titles: "Billionaire Habits" (master the daily practices of the ultra-wealthy), "Billionaire Codes" (decode the secrets of wealth creation), "Becoming a Billionaire Land Banker" (the ultimate guide to real estate wealth), "The Information Millionaire" (turn knowledge into unlimited wealth).
- Buy on Amazon: ${EXTERNAL_LINKS.amazonBooks}
- Official store (books, courses, mentorship products): ${EXTERNAL_LINKS.officialStore}

## Ecosystem & online resources
- Blog, insights & daily quotes: ${EXTERNAL_LINKS.blog}
- SA University (investment & wealth-building training, free resources): ${EXTERNAL_LINKS.university}
- Stephen Akintayo Production on YouTube (interviews, event recaps): ${EXTERNAL_LINKS.youtubeProduction}
- Social: YouTube https://youtube.com/@stephenakintayo · Instagram https://instagram.com/stephenakintayo · Facebook https://facebook.com/stephenakintayo · LinkedIn https://linkedin.com/in/drstephenakintayo · X/Twitter https://twitter.com/stephenakintayo
- Media kit, Forbes articles and press: ${SITE_URL}/media (Forbes Business Council articles include "Diversification: The Key to Building Transgenerational Wealth", "Long-Term Success: Getting Your Business to the 10-Year Mark", "Leadership and Mentorship: Guiding Aspiring Entrepreneurs in Africa", "Guiding the Next Generation of African Entrepreneurs", "Lessons Learned on Navigating Global Real Estate Investments", "Why Integrity Is Your Biggest Asset When Scaling Up", and "The Leadership Shift Required for Sustainable Growth" (2026)).

## Services & how to engage
- Investment coaching / mentorship / one-on-one consultation: ${SITE_URL}/contact?type=session (also ${SITE_URL}/coaching)
- Book Dr. Akintayo to speak (conference, seminar, workshop, keynote, training): ${SITE_URL}/speaking or ${SITE_URL}/contact?type=event
- General inquiries: ${SITE_URL}/contact
- Payments (USD/EUR/GBP via Stripe, NGN via Paystack, or bank transfer): ${SITE_URL}/payment
- Global Volunteer Corps (volunteer worldwide, 40+ countries; chapters in Lagos, Abuja, London, Houston; a coordinator replies within 5 working days): ${SITE_URL}/globalvolunteers
- Newsletter "The Inner Circle" — weekly investment strategies, sign-up on the homepage.

## Contact
- Email: ea@stephenakintayo.com
- Phone: +1 (443) 790-3925
- WhatsApp support: use the "Need human support?" button in this chat.

## Events (from ${SITE_URL}/events)
2026:
${EVENTS_2026.map(formatEvent).join('\n')}
2027:
${EVENTS_2027.map(formatEvent).join('\n')}

## Website pages
${sitePageLines}

## Program & campaign pages
${campaignLines}

## Short links on stephenakintayo.com
Each short link redirects to the destination shown. Infer what a link is for from its name and destination (e.g. /forbesarticleN = Forbes articles, /rim* = Real Estate Investment Masterclass, /bom* = Business Opportunity Masterclass, /gwf* = Global Wealth Festival, zoom.us = webinar registration, pay.gtextglobal.com / paystack / stripe / selar = payment or offer pages, forms.gle / docs.google.com = forms, chat.whatsapp.com = WhatsApp communities).
Many of these are older promotions, webinars and tours that may have ended — never claim one is active or upcoming unless the Events section above says so; say "this link was used for…" and suggest confirming via the contact page. Share a short link only when it is relevant to the visitor's question, and prefer the stephenakintayo.com short link form.
${shortLinkLines}
`.trim()
