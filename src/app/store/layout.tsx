import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'DSA Store — Books and products by Dr. Stephen Akintayo',
  description:
    'Shop books, courses, and exclusive products from Dr. Stephen Akintayo.',
  path: '/store',
})

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return children
}
