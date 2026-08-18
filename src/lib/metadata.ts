import type { Metadata } from 'next'

export const SITE_URL = 'https://www.stephenakintayo.com'

const DEFAULT_OG_IMAGE = {
  url: '/images/stephen-akintayo-profile.jpg',
  width: 1200,
  height: 630,
  alt: 'Dr. Stephen Akintayo',
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}
