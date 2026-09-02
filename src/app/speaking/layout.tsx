import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Stephen Akintayo | Real Estate & Investment Speaker',
  description:
    'Book Dr. Stephen Akintayo for real estate, investment, entrepreneurship and wealth creation speaking engagements, conferences and business events.',
  path: '/speaking',
})

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children
}
