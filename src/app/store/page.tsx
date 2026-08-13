'use client'

export default function StorePage() {
  return (
    <iframe
      src="https://store.stephenakintayofoundation.org/"
      title="DSA Store"
      className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
      allow="payment; clipboard-write"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
