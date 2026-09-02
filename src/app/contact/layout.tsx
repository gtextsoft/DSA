import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Stephen Akintayo | Business & Investment Inquiries',
  description:
    'Contact Dr. Stephen Akintayo for business, investment, mentorship, speaking and partnership inquiries. Connect with his team for professional opportunities.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
