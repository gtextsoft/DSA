import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms & Conditions | Stephen Akintayo',
  description:
    "Read the Terms & Conditions for Stephen Akintayo's website, covering website use, intellectual property, services, disclaimers, liability and external links.",
  path: '/terms',
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
