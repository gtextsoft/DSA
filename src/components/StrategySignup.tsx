'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormStatus = 'idle' | 'success' | 'error'

export default function StrategySignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('idle')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email.trim())) {
      setStatus('error')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      setStatus('success')
    }, 1000)
  }

  return (
    <section className="bg-deep-navy py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-dark border-luxury-gold/20 p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-luxury-gold/30"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-luxury-gold/30"></div>

            <div className="relative z-10 mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold"></span>
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">The Inner Circle</span>
                <span className="w-8 h-[1px] bg-luxury-gold"></span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-serif italic mb-6">
                Access the <span className="text-gradient-gold non-italic font-sans uppercase">Wealth Intelligence</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Join 850,000+ others receiving weekly high-stakes investment strategies and masterclass insights directly from Dr. Stephen Akintayo.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status !== 'idle') setStatus('idle')
                    }}
                    placeholder="Your email address"
                    required
                    aria-invalid={status === 'error'}
                    className="w-full bg-white/5 border border-white/10 text-white py-4 px-6 rounded-sm font-medium focus:outline-none focus:border-luxury-gold transition-all duration-300 placeholder:text-white/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury whitespace-nowrap disabled:opacity-50 min-w-[200px]"
                >
                  {isSubmitting ? 'Processing...' : 'Secure Access'}
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-4 text-sm font-semibold text-luxury-gold bg-luxury-gold/10 border border-luxury-gold/30 rounded-sm py-3 px-4" role="status">
                  You&apos;re in! Check your inbox for confirmation.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm font-semibold text-white bg-red-500/10 border border-red-400/30 rounded-sm py-3 px-4" role="alert">
                  Please enter a valid email address.
                </p>
              )}

              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                Privacy Guaranteed. Exclusive Content Only.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
