'use client'

import { useState } from 'react'
import { BANK_TRANSFER, PAYMENT_OPTIONS } from '@/lib/payment'

type PaymentDeskProps = {
  description?: string
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="shrink-0 rounded-sm border border-luxury-gold/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-luxury-gold transition-colors hover:bg-luxury-gold hover:text-deep-navy"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function PaymentDesk({ description }: PaymentDeskProps) {
  return (
    <main className="min-h-screen bg-deep-navy text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-luxury-gold">
              Stephen Akintayo Foundation
            </p>
            <p className="mt-1 text-sm text-white/60">General payment desk</p>
          </div>
          <p className="text-xs text-white/45">Secure checkout via Stripe &amp; Paystack</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-luxury-gold">
          One page. Any currency.
        </p>
        <h1 className="mt-4 max-w-3xl font-playfair text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Complete your payment
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {description ??
            'Choose how you would like to pay. Card options open a secure checkout. Bank transfer details can be copied in one tap.'}
        </p>

        <section aria-labelledby="pay-heading" className="mt-12">
          <h2 id="pay-heading" className="sr-only">
            Payment options
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {PAYMENT_OPTIONS.map((option) => (
              <a
                key={option.id}
                href={option.href}
                rel="noopener noreferrer"
                className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-sm border border-white/10 bg-royal-blue p-6 transition-transform hover:-translate-y-1 hover:border-luxury-gold/60"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 font-playfair text-8xl font-black text-white/5"
                >
                  {option.symbol}
                </span>
                <span className="w-fit rounded-sm bg-luxury-gold px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-deep-navy">
                  {option.flag}
                </span>
                <h3 className="relative mt-6 font-playfair text-2xl font-bold">{option.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/65">
                  {option.description}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-luxury-gold">
                  {option.cta}
                  <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="bank-heading" className="mt-16 border-t border-white/10 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-luxury-gold">
            Direct transfer
          </p>
          <h2 id="bank-heading" className="mt-3 font-playfair text-3xl font-bold sm:text-4xl">
            Pay into the company account
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Kindly pay directly into the company&apos;s account, then send your receipt to the email
            below.
          </p>

          <div className="mt-8 divide-y divide-white/10 rounded-sm border border-white/10 bg-black/30">
            {[
              {
                label: 'Account number',
                value: BANK_TRANSFER.accountNumber,
              },
              {
                label: 'Account name',
                value: BANK_TRANSFER.accountName,
              },
              {
                label: 'Bank',
                value: BANK_TRANSFER.bank,
              },
            ].map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {field.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold sm:text-xl">{field.value}</p>
                </div>
                <CopyButton value={field.value} label={field.label} />
              </div>
            ))}
            <div className="px-5 py-5">
              <p className="text-sm text-white/60">After payment, kindly forward your receipt to</p>
              <a
                href={`mailto:${BANK_TRANSFER.receiptEmail}`}
                className="mt-1 inline-block font-semibold text-luxury-gold underline-offset-4 hover:underline"
              >
                {BANK_TRANSFER.receiptEmail}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
