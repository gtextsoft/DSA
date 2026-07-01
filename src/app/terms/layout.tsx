import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms & Conditions - Dr. Stephen Akintayo',
  description:
    'Terms and Conditions governing use of stephenakintayo.com and services offered by Dr. Stephen Akintayo Global.',
  path: '/terms',
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
