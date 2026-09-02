import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata } from '@/lib/metadata'
import { eventsCollectionPageSchema, eventsItemListSchema } from '@/lib/schema'

export const metadata: Metadata = createPageMetadata({
  title: 'Global Leadership Conference | Stephen Akintayo',
  description:
    'Join the Global Leadership Conference with Stephen Akintayo and gain insights from inspiring leaders, entrepreneurs, and industry experts on leadership, business, and global growth.',
  path: '/events',
})

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={eventsCollectionPageSchema} />
      <JsonLd data={eventsItemListSchema} />
      {children}
    </>
  )
}
