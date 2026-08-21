'use client'

import { useState } from 'react'
import { BANK_TRANSFER, PAYMENT_OPTIONS } from '@/lib/payment'

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
      className="shrink-0 border border-deep-navy/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-deep-navy transition-colors hover:border-luxury-gold hover:bg-luxury-gold"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function PaymentDesk() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep-navy pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div
          className="absolute inset-0 bg-gradient-to-b from-deep-navy via-royal-blue/30 to-deep-navy"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-luxury-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold">
              General payment
            </span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-black text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Complete your payment
          </h1>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-luxury-gold">
            Stripe, Paystack &amp; bank transfer
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Choose how you would like to pay. Card options open a secure checkout. Bank transfer details
            can be copied in one tap.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">Payment options</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {PAYMENT_OPTIONS.map((option) => (
              <div
                key={option.id}
                className="group overflow-hidden rounded-sm border border-deep-navy/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden bg-deep-navy p-6 sm:p-8">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-luxury-gold/10" />
                  <p className="relative text-xs font-bold uppercase tracking-wider text-luxury-gold">
                    {option.flag}
                  </p>
                  <p className="relative mt-3 font-serif text-4xl font-black text-white">{option.symbol}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="mb-3 text-xl font-black leading-tight text-deep-navy transition-colors group-hover:text-luxury-gold sm:text-2xl">
                    {option.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-text-dark/70 sm:text-base">
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    rel="noopener noreferrer"
                    className="block w-full rounded-sm bg-luxury-gold px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-deep-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gold-dark hover:shadow-xl"
                  >
                    {option.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Pay into the company account
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700">
            Kindly pay directly into the company&apos;s account, then send your receipt to the email below.
          </p>

          <div className="divide-y divide-gray-200 rounded-sm border border-gray-200 bg-white">
            {[
              { label: 'Account number', value: BANK_TRANSFER.accountNumber },
              { label: 'Account name', value: BANK_TRANSFER.accountName },
              { label: 'Bank', value: BANK_TRANSFER.bank },
            ].map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{field.label}</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900 sm:text-xl">{field.value}</p>
                </div>
                <CopyButton value={field.value} label={field.label} />
              </div>
            ))}
            <div className="px-6 py-5">
              <p className="text-gray-700">After payment, kindly forward your receipt to</p>
              <a
                href={`mailto:${BANK_TRANSFER.receiptEmail}`}
                className="mt-1 inline-block font-semibold text-red-600 hover:underline"
              >
                {BANK_TRANSFER.receiptEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
