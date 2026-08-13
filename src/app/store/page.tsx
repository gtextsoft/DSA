'use client'

const STORE_ORIGIN = 'https://store.stephenakintayofoundation.org/'

export default function StorePage() {
  return (
    <iframe
      src={STORE_ORIGIN}
      title="DSA Store"
      className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
      allow="payment; clipboard-write"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
