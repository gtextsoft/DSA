import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Dr. Stephen Akintayo - Speaking & Consultation',
  description:
    'Contact Dr. Stephen Akintayo for speaking engagements, one-on-one consultations, mentorship inquiries, and general business questions.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
