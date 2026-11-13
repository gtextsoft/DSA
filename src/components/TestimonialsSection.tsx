'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { TESTIMONIALS, type Testimonial } from '@/lib/testimonials'
import { EASE, Eyebrow, Reveal } from '@/components/motion/Reveal'

const AUTOPLAY_MS = 7000
const SWIPE_DISTANCE = 60

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -80 : 80 }),
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

function Portrait({ person }: { person: Testimonial }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = person.image && !failed

  return (
    <div className="relative mx-auto w-40 sm:w-52 md:w-full max-w-[17rem]">
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-luxury-gold/50"
        aria-hidden="true"
      ></div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-navy-soft to-black/40 border border-white/10">
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.image}
            alt={person.name}
            onError={() => setFailed(true)}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="font-serif text-6xl sm:text-7xl font-semibold text-gradient-gold">
              {initials(person.name)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1])
  const [paused, setPaused] = useState(false)
  const count = TESTIMONIALS.length

  const go = useCallback(
    (step: number) => setSlide(([current]) => [(current + step + count) % count, step]),
    [count]
  )

  const goTo = (target: number) => setSlide(([current]) => [target, target >= current ? 1 : -1])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, go, index])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_DISTANCE) go(1)
    else if (info.offset.x > SWIPE_DISTANCE) go(-1)
  }

  const person = TESTIMONIALS[index]

  return (
    <section className="relative bg-deep-navy py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 plot-grid" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">What people say</Eyebrow>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-tight">
              In their <span className="italic text-gradient-gold pr-1">own words.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="mr-2 font-serif text-lg text-white/60 tabular-nums" aria-hidden="true">
              <span className="text-luxury-gold">{String(index + 1).padStart(2, '0')}</span> /{' '}
              {String(count).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-luxury-gold hover:bg-luxury-gold hover:text-deep-navy"
            >
              <i className="fas fa-arrow-left text-sm" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-luxury-gold hover:bg-luxury-gold hover:text-deep-navy"
            >
              <i className="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="relative min-h-[36rem] sm:min-h-[34rem] md:min-h-[26rem] flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.figure
                  key={index}
                  custom={direction}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: EASE }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={onDragEnd}
                  className="w-full grid md:grid-cols-[17rem_minmax(0,1fr)] gap-10 md:gap-14 items-center p-8 sm:p-12 lg:p-16 cursor-grab active:cursor-grabbing select-none"
                >
                  <Portrait person={person} />

                  <div>
                    <i className="fas fa-quote-left text-luxury-gold/40 text-4xl mb-6 block" aria-hidden="true"></i>
                    <blockquote className="font-serif text-xl sm:text-2xl lg:text-[2rem] lg:leading-[1.3] text-white/90 leading-snug">
                      {person.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-5">
                      <span className="w-10 h-px bg-luxury-gold" aria-hidden="true"></span>
                      <span>
                        <span className="block text-luxury-gold font-bold uppercase tracking-[0.18em] text-sm">
                          {person.name}
                        </span>
                        <span className="block text-white/50 text-xs uppercase tracking-[0.14em] font-semibold mt-1">
                          {person.role}
                        </span>
                      </span>
                    </figcaption>
                  </div>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Autoplay progress */}
            <div className="h-0.5 bg-white/10" aria-hidden="true">
              <motion.div
                key={`${index}-${paused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                className="h-full origin-left bg-luxury-gold"
              />
            </div>
          </div>
        </Reveal>

        {/* Pick a person */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-4 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                i === index
                  ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold'
                  : 'border-white/15 text-white/50 hover:border-white/40 hover:text-white'
              }`}
            >
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-navy-soft text-[10px] text-luxury-gold">
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  initials(t.name)
                )}
              </span>
              {t.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
