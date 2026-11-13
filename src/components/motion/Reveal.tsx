'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { MotionConfig, animate, motion, useInView, useReducedMotion, type Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

const VIEWPORT = { once: true, amount: 0.15 } as const

/** Wraps the app so every framer-motion animation honours the visitor's reduced-motion setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Direction the element travels in from. */
  from?: 'up' | 'left' | 'right' | 'none'
}

const OFFSET = { up: { y: 28 }, left: { x: -36 }, right: { x: 36 }, none: {} }

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, from = 'up' }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSET[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/** Container whose <StaggerItem> children animate in one after another. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  )
}

/**
 * Counts up to a figure such as "$200M+" or "850K+" when it scrolls into view.
 * The final text is rendered on the server, so it is correct without JavaScript.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [text, setText] = useState(value)

  useEffect(() => {
    const match = value.match(/^(\D*)(\d+)(.*)$/)
    if (!inView || reduce || !match) return
    const [, prefix, digits, suffix] = match
    const controls = animate(0, Number(digits), {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setText(`${prefix}${Math.round(v)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="w-10 h-px bg-luxury-gold" aria-hidden="true"></span>
      <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.28em]">{children}</span>
    </div>
  )
}
