import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | Stephen Akintayo',
  description:
    'Read the Stephen Akintayo privacy policy to learn how we collect, use, protect and manage personal information when you use our website and services.',
  path: '/privacy',
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
