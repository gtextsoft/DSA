'use client'

import Link from 'next/link'
import { MENTORSHIP_OPTIONS, OFFERS, type Offer } from '@/lib/offers'
import { Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const MENTORSHIP_POINTS = [
  'Mentorship focused on building wealth and raising capital',
  'Frameworks drawn from two decades in real estate, private equity and venture capital',
  'Secure checkout in naira (Paystack) or dollars (Stripe)',
]

function OfferCard({ offer }: { offer: Offer }) {
  const external = offer.href.startsWith('http')
  const className =
    'group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-luxury-gold/60 hover:bg-white/[0.06]'
  const content = (
    <>
      <span
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-luxury-gold transition-transform duration-700 group-hover:scale-x-100"
        aria-hidden="true"
      ></span>
      <div className="flex items-center justify-between mb-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold transition-colors duration-500 group-hover:bg-luxury-gold group-hover:text-deep-navy">
          <i className={offer.icon} aria-hidden="true"></i>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">{offer.kind}</span>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-white mb-3">{offer.title}</h3>
      <p className="text-white/60 text-[15px] leading-relaxed mb-6">{offer.description}</p>
      <ul className="space-y-2 mb-8 text-sm text-white/70">
        {offer.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <i className="fas fa-check text-luxury-gold text-[10px] mt-1.5" aria-hidden="true"></i>
            {point}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-3 text-luxury-gold text-xs font-extrabold uppercase tracking-[0.18em]">
        <span className="link-draw pb-1">{offer.cta}</span>
        <i
          className={`fas ${external ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-[10px] transition-transform duration-300 group-hover:translate-x-1`}
          aria-hidden="true"
        ></i>
      </span>
    </>
  )

  return external ? (
    <a href={offer.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={offer.href} className={className}>
      {content}
    </Link>
  )
}

export default function OfferingsSection() {
  return (
    <section id="work-with-him" className="relative bg-deep-navy py-24 sm:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 plot-grid" aria-hidden="true"></div>
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-luxury-gold/10 blur-[120px]" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <Reveal className="max-w-3xl mb-14 sm:mb-20">
          <Eyebrow className="mb-6">Work with Dr. Akintayo</Eyebrow>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-tight">
            Five ways to start, <span className="italic text-gradient-gold">whatever your stage.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Pick the level of access that fits where you are — from a book you can finish this week to mentorship with
            Dr. Akintayo himself.
          </p>
        </Reveal>

        {/* Featured: mentorship */}
        <Reveal>
          <div
            id="mentorship"
            className="relative scroll-mt-28 overflow-hidden rounded-sm border border-luxury-gold/40 bg-gradient-to-br from-navy-soft to-deep-navy mb-6"
          >
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-luxury-gold/50" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-luxury-gold/50" aria-hidden="true"></div>

            <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-0">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14">
                <span className="inline-block bg-luxury-gold text-deep-navy text-[10px] font-extrabold uppercase tracking-[0.22em] px-3 py-1.5 rounded-sm mb-6">
                  Featured
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
                  Mentorship with Dr. Stephen Akintayo
                </h3>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mb-8">
                  Learn the habits, deal structures and investment thinking behind a $200M+ portfolio — and apply them
                  to your own business and money.
                </p>
                <ul className="space-y-3.5 text-white/80">
                  {MENTORSHIP_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/15 text-luxury-gold">
                        <i className="fas fa-check text-[9px]" aria-hidden="true"></i>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center gap-4 p-8 sm:p-12 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/50 mb-2">
                  Choose your currency to book
                </p>
                {MENTORSHIP_OPTIONS.map((option, i) => (
                  <a
                    key={option.currency}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${i === 0 ? 'btn-luxury' : 'btn-outline-gold'} flex items-center justify-between gap-4`}
                  >
                    <span>{option.name}</span>
                    <span className="text-[10px] font-bold opacity-70 normal-case tracking-normal">
                      via {option.provider}
                    </span>
                  </a>
                ))}
                <p className="text-sm text-white/50 leading-relaxed mt-2">
                  Have a question first?{' '}
                  <Link href="/contact?type=session" className="text-luxury-gold underline underline-offset-4 hover:text-gold-light">
                    Talk to the team
                  </Link>
                  . Prefer a bank transfer?{' '}
                  <Link href="/payment" className="text-luxury-gold underline underline-offset-4 hover:text-gold-light">
                    See payment options
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The other four */}
        <Stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {OFFERS.map((offer) => (
            <StaggerItem key={offer.id} className="h-full">
              <OfferCard offer={offer} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
