'use client'

import { useState } from 'react'
import { EXTERNAL_LINKS } from '@/lib/links'
import { FEATURED_BOOKS } from '@/lib/offers'
import { Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

type Book = (typeof FEATURED_BOOKS)[number]

function BookCard({ book }: { book: Book }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <a href={book.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col">
      <div className="relative mb-6 [perspective:1200px]">
        <div className="relative aspect-[2/3] overflow-hidden rounded-r-md rounded-l-sm bg-navy-soft shadow-[0_30px_60px_-25px_rgba(10,17,40,0.7)] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-14deg)_translateY(-8px)]">
          {imageFailed ? (
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-navy-soft to-deep-navy border border-luxury-gold/30">
              <span className="w-8 h-px bg-luxury-gold" aria-hidden="true"></span>
              <span className="font-serif text-2xl font-semibold text-white leading-tight">{book.title}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold">
                Dr. Stephen Akintayo
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={book.image}
              alt={`${book.title} book cover`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          {/* Spine shading */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 to-transparent" aria-hidden="true"></div>
        </div>
      </div>
      <h3 className="font-serif text-xl font-semibold text-deep-navy leading-snug">{book.title}</h3>
      <p className="mt-2 text-[15px] text-text-dark/70 leading-relaxed">{book.subtitle}</p>
      <span className="mt-auto pt-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-dark">
        <span className="link-draw pb-1">Order on Amazon</span>
        <i className="fas fa-arrow-up-right-from-square text-[10px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
      </span>
    </a>
  )
}

export default function BooksSection() {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">Author of 45+ business books</Eyebrow>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-deep-navy leading-[1.08] tracking-tight">
              Start with a book <span className="italic text-gradient-gold-deep pr-1">tonight.</span>
            </h2>
            <p className="mt-6 text-text-dark/70 text-lg leading-relaxed">
              The lowest-cost way to learn how Dr. Akintayo thinks about money, land and business. Four good places
              to begin.
            </p>
          </div>
          <a
            href={EXTERNAL_LINKS.officialStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury text-center self-start lg:self-auto"
          >
            Shop all books
          </a>
        </Reveal>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-10">
          {FEATURED_BOOKS.map((book) => (
            <StaggerItem key={book.title} className="h-full">
              <BookCard book={book} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
