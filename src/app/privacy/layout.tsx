import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy - Dr. Stephen Akintayo',
  description:
    'Privacy Policy for stephenakintayo.com. Learn how Dr. Stephen Akintayo Global collects, uses, and protects your personal information.',
  path: '/privacy',
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
