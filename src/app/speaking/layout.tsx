import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Book a Speaking Engagement - Dr. Stephen Akintayo',
  description:
    'Book Dr. Stephen Akintayo for your next conference, keynote, workshop, or corporate event. Request availability and speaking fees.',
  path: '/speaking',
})

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children
}
