import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata } from '@/lib/metadata'
import { eventsCollectionPageSchema, eventsItemListSchema } from '@/lib/schema'

export const metadata: Metadata = createPageMetadata({
  title: 'Stephen Akintayo Events & Conferences',
  description:
    'Discover upcoming Stephen Akintayo events, business growth conferences, retreats, and masterclasses in Nigeria, USA, UK, and worldwide.',
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
