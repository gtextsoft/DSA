'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { EVENTS_2026, EVENTS_2027, type EventItem } from '@/lib/events'
import { hasExactDate, upcomingEvents } from '@/lib/offers'
import { Eyebrow, Reveal } from '@/components/motion/Reveal'

const ALL_EVENTS = [...EVENTS_2026, ...EVENTS_2027]

function EventRow({ event }: { event: EventItem }) {
  const external = event.link.startsWith('http')
  return (
    <a
      href={event.link}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 border-b border-deep-navy/10 transition-colors duration-500 hover:bg-deep-navy"
    >
      <div className="md:col-span-3">
        <div className="font-serif text-xl sm:text-2xl font-semibold text-deep-navy transition-colors duration-500 group-hover:text-luxury-gold">
          {event.date}
        </div>
        {event.location && (
          <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-deep-navy/50 transition-colors duration-500 group-hover:text-white/50">
            {event.location}
          </div>
        )}
      </div>
      <div className="md:col-span-7">
        <h3 className="font-sans text-lg sm:text-xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
          {event.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-text-dark/70 line-clamp-2 transition-colors duration-500 group-hover:text-white/60">
          {event.description}
        </p>
      </div>
      <div className="md:col-span-2 flex md:justify-end">
        <span className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-dark transition-colors duration-500 group-hover:text-luxury-gold">
          {hasExactDate(event.date) ? 'Register' : 'Details'}
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current transition-transform duration-500 group-hover:translate-x-1">
            <i className="fas fa-arrow-right text-[11px]" aria-hidden="true"></i>
          </span>
        </span>
      </div>
    </a>
  )
}

export default function HomeEvents() {
  // Filtered after mount so past events drop off by today's date rather than the build date.
  const [events, setEvents] = useState<EventItem[] | null>(null)

  useEffect(() => {
    setEvents(upcomingEvents(ALL_EVENTS, new Date()).slice(0, 4))
  }, [])

  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="container-custom">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">In the room</Eyebrow>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-navy leading-[1.08] tracking-tight">
              Meet him at the <span className="italic text-gradient-gold-deep pr-1">next event.</span>
            </h2>
            <p className="mt-6 text-text-dark/70 text-lg leading-relaxed">
              Conferences, retreats and masterclasses where deals, partnerships and plans get made in person.
            </p>
          </div>
          <Link href="/events" className="btn-outline-gold text-center self-start lg:self-auto !border-gold-dark !text-gold-dark hover:!text-deep-navy">
            View the full calendar
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-deep-navy/10 min-h-[12rem]">
            {events?.map((event) => <EventRow key={event.title} event={event} />)}
            {events?.length === 0 && (
              <p className="py-12 text-lg text-text-dark/70">
                New dates are being confirmed.{' '}
                <Link href="/events" className="font-bold text-gold-dark underline underline-offset-4">
                  Check the events page
                </Link>{' '}
                or{' '}
                <a href="#inner-circle" className="font-bold text-gold-dark underline underline-offset-4">
                  join the newsletter
                </a>{' '}
                to hear first.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
