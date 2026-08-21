export const CAMPAIGNS = {
  rbm: {
    src: 'https://rim.stephenakintayofoundation.org/',
    title: 'RBM — Dr. Stephen Akintayo',
    description: 'Real estate and investment briefing with Dr. Stephen Akintayo.',
  },
  chinaretreat: {
    src: 'https://china.stephenakintayofoundation.org/',
    title: 'China Retreat — Dr. Stephen Akintayo',
    description: 'Join Dr. Stephen Akintayo for the China retreat.',
  },
  chinameet: {
    src: 'https://chinameet.stephenakintayofoundation.org/',
    title: 'China Meet — Dr. Stephen Akintayo',
    description: 'Register for the China meet with Dr. Stephen Akintayo.',
  },
  japanretreat: {
    src: 'https://japan.stephenakintayofoundation.org/',
    title: 'Japan Retreat — Dr. Stephen Akintayo',
    description: 'Join Dr. Stephen Akintayo for the Japan retreat.',
  },
  japan: {
    src: 'https://japan.stephenakintayofoundation.org/',
    title: 'Japan Retreat — Dr. Stephen Akintayo',
    description: 'Join Dr. Stephen Akintayo for the Japan retreat.',
  },
  houston: {
    src: 'https://houston.stephenakintayofoundation.org/',
    title: 'Houston — Dr. Stephen Akintayo',
    description: 'Houston meet and event with Dr. Stephen Akintayo.',
  },
  business: {
    src: 'https://business.stephenakintayofoundation.org/',
    title: 'Business — Dr. Stephen Akintayo',
    description: 'Business growth programmes with Dr. Stephen Akintayo.',
  },
  dallas: {
    src: 'https://dallas.stephenakintayofoundation.org/',
    title: 'Dallas — Dr. Stephen Akintayo',
    description: 'Dallas meet and event with Dr. Stephen Akintayo.',
  },
  manchester: {
    src: 'https://manchester.stephenakintayofoundation.org/',
    title: 'Manchester — Dr. Stephen Akintayo',
    description: 'Manchester meet and event with Dr. Stephen Akintayo.',
  },
  pjmentorship: {
    src: 'https://pjmentorship.stephenakintayofoundation.org/',
    title: 'PJ Mentorship — Dr. Stephen Akintayo',
    description: 'PJ mentorship with Dr. Stephen Akintayo.',
  },
  germany: {
    src: 'https://germany.stephenakintayofoundation.org/',
    title: 'Germany — Dr. Stephen Akintayo',
    description: 'Germany event with Dr. Stephen Akintayo.',
  },
  mentorship: {
    src: 'https://mentorship.stephenakintayofoundation.org/',
    title: 'Mentorship — Dr. Stephen Akintayo',
    description: 'Mentorship programmes with Dr. Stephen Akintayo.',
  },
  doha: {
    src: 'https://dohameet.stephenakintayofoundation.org/',
    title: 'Doha — Dr. Stephen Akintayo',
    description: 'Doha meet and greet with Dr. Stephen Akintayo.',
  },
  london: {
    src: 'https://foundersmeet.stephenakintayofoundation.org/',
    title: 'London — Dr. Stephen Akintayo',
    description: 'London founders meet with Dr. Stephen Akintayo.',
  },
  foundersmeet: {
    src: 'https://foundersmeet.stephenakintayofoundation.org/',
    title: 'Founders Meet — Dr. Stephen Akintayo',
    description: 'Founders meet with Dr. Stephen Akintayo.',
  },
  retreat: {
    src: 'https://lakowe.stephenakintayofoundation.org/',
    title: 'Retreat — Dr. Stephen Akintayo',
    description: 'Lakowe retreat with Dr. Stephen Akintayo.',
  },
  bundle: {
    src: 'https://bundle.stephenakintayofoundation.org/',
    title: 'Bundle — Dr. Stephen Akintayo',
    description: 'Book and product bundles from Dr. Stephen Akintayo.',
  },
  wellness: {
    src: 'https://marketplace.drstellamd.com/stephenakintayo',
    title: 'Wellness — Dr. Stephen Akintayo',
    description: 'Wellness marketplace with Dr. Stephen Akintayo.',
  },
  aicc: {
    src: 'https://aimsclass.vercel.app/',
    title: '4 Weeks AI Course — Dr. Stephen Akintayo',
    description:
      'Four-week AI Course Certification 2.0 with Dr. Stephen Akintayo. Live every Thursday from 17 September to 8 October 2026.',
  },
  OWNERS: {
    src: 'https://ownersconsulting.vercel.app/',
    title: 'Seven-Day Virtual Challenge — Stephen Akintayo Consulting',
    description:
      'Build a consulting or speaking business that commands premium fees. A seven-day virtual challenge with Stephen Akintayo, 8–14 September 2026.',
  },
  aiworkshop: {
    src: 'https://aiworksop.vercel.app/',
    title: 'AI Master Class 2.0 — Dr. Stephen Akintayo',
    description:
      'Discover your AI advantage. AI Master Class 2.0 certification with the Stephen Akintayo Foundation. Next cohort: 17 September 2026.',
  },
} as const

export type CampaignSlug = keyof typeof CAMPAIGNS

export const CAMPAIGN_SLUGS = Object.keys(CAMPAIGNS) as CampaignSlug[]

export function isCampaignPath(pathname: string | null): boolean {
  if (!pathname) return false
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  return slug in CAMPAIGNS
}
