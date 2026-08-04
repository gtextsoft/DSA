'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { COUNTRIES, TIME_ZONES, detectTimeZoneValue } from '@/lib/geo'

const GENDER_OPTIONS = [
  'Woman (she/her)',
  'Man (he/him)',
  'Non-binary (they/them)',
  'Prefer to self-describe',
  'Prefer not to say',
]

const SELF_DESCRIBE = 'Prefer to self-describe'

const AGE_RANGES = ['Under 18', '18 – 24', '25 – 34', '35 – 44', '45 – 54', '55 – 64', '65+']

const AVAILABILITY_OPTIONS = [
  { value: 'Full-time', detail: '30+ hours a week' },
  { value: 'Part-time', detail: '15 – 30 hours a week' },
  { value: 'Limited', detail: '5 – 15 hours a week' },
  { value: 'Project-based', detail: 'Occasional, under 5 hours a week' },
  { value: 'Event-only', detail: 'On-site during activations' },
]

type FormState = {
  fullName: string
  email: string
  dialCode: string
  phone: string
  gender: string
  genderSelfDescribe: string
  ageRange: string
  dateOfBirth: string
  country: string
  region: string
  timeZone: string
  availability: string
  codeOfConduct: boolean
  dataPrivacy: boolean
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  dialCode: '',
  phone: '',
  gender: '',
  genderSelfDescribe: '',
  ageRange: '',
  dateOfBirth: '',
  country: '',
  region: '',
  timeZone: '',
  availability: '',
  codeOfConduct: false,
  dataPrivacy: false,
}

type Errors = Partial<Record<keyof FormState, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[0-9\s-]{6,15}$/

/**
 * Submissions go to Formspree — the site is a static export, so there is no API
 * route of our own to post to. Override with NEXT_PUBLIC_VOLUNTEER_FORM_ENDPOINT
 * if the collection point ever moves.
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_VOLUNTEER_FORM_ENDPOINT || 'https://formspree.io/f/mbgrrpll'

const inputClass = (hasError: boolean) =>
  `w-full bg-white/[0.03] border text-white py-4 px-5 rounded-sm font-medium placeholder:text-white/25 focus:outline-none focus:bg-white/[0.06] transition-all duration-300 ${
    hasError ? 'border-red-400/60' : 'border-white/10 focus:border-luxury-gold'
  }`

const selectClass = (hasError: boolean) =>
  `${inputClass(hasError)} appearance-none cursor-pointer pr-12`

const labelClass = 'block text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-2 text-xs font-semibold text-red-300" role="alert">
      {message}
    </p>
  )
}

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-luxury-gold/60">
      <i className="fas fa-chevron-down text-xs"></i>
    </span>
  )
}

function SectionHeading({ index, title, blurb }: { index: string; title: string; blurb: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-luxury-gold/50 text-xs font-black tracking-[0.3em]">{index}</span>
        <span className="h-[1px] flex-1 bg-gradient-to-r from-luxury-gold/40 to-transparent"></span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">{title}</h2>
      <p className="mt-2 text-sm text-white/40">{blurb}</p>
    </div>
  )
}

export default function GlobalVolunteersForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Pre-fill the time zone from the visitor's browser; they can still change it.
  useEffect(() => {
    const detected = detectTimeZoneValue()
    if (detected) {
      setForm((previous) => (previous.timeZone ? previous : { ...previous, timeZone: detected }))
    }
  }, [])

  const update = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((previous) => ({ ...previous, [key]: value }))
    setErrors((previous) => (previous[key] ? { ...previous, [key]: undefined } : previous))
    setSubmitError(null)
  }

  // Selecting a country fills in its dialling code unless one was typed already.
  const handleCountryChange = (name: string) => {
    const country = COUNTRIES.find((item) => item.name === name)
    setForm((previous) => ({
      ...previous,
      country: name,
      dialCode: previous.dialCode || (country ? country.dial : ''),
    }))
    setErrors((previous) => ({ ...previous, country: undefined }))
  }

  const completion = useMemo(() => {
    const checks = [
      form.fullName.trim() !== '',
      form.email.trim() !== '',
      form.dialCode.trim() !== '' && form.phone.trim() !== '',
      form.gender !== '' && (form.gender !== SELF_DESCRIBE || form.genderSelfDescribe.trim() !== ''),
      form.ageRange !== '',
      form.country !== '',
      form.region.trim() !== '',
      form.timeZone !== '',
      form.availability !== '',
      form.codeOfConduct,
      form.dataPrivacy,
    ]
    return Math.round((checks.filter(Boolean).length / checks.length) * 100)
  }, [form])

  const validate = (): Errors => {
    const next: Errors = {}

    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    else if (form.fullName.trim().length < 3) next.fullName = 'Please enter your first and last name.'

    if (!form.email.trim()) next.email = 'Please enter your email address.'
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = 'Please enter a valid email address.'

    if (!form.dialCode.trim()) next.dialCode = 'Select your country code.'

    if (!form.phone.trim()) next.phone = 'Please enter your WhatsApp number.'
    else if (!PHONE_PATTERN.test(form.phone.trim()))
      next.phone = 'Digits only, without the country code.'

    if (!form.gender) next.gender = 'Please choose an option.'
    else if (form.gender === SELF_DESCRIBE && !form.genderSelfDescribe.trim())
      next.genderSelfDescribe = 'Please tell us how you identify.'

    if (!form.ageRange) next.ageRange = 'Please select your age range.'

    if (!form.country) next.country = 'Please select your country of residence.'

    if (!form.region.trim()) next.region = 'Please enter your state, city or province.'

    if (!form.timeZone) next.timeZone = 'Please select your time zone.'

    if (!form.availability) next.availability = 'Please select your availability.'

    if (!form.codeOfConduct) next.codeOfConduct = 'You must accept the Code of Conduct to volunteer.'

    if (!form.dataPrivacy) next.dataPrivacy = 'We need your consent to process this application.'

    return next
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitError(null)

    const found = validate()
    if (Object.keys(found).length > 0) {
      setErrors(found)
      const firstInvalid = document.querySelector('[aria-invalid="true"]')
      firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)

    const fullName = form.fullName.trim()

    // Keys double as the field labels in the Formspree dashboard and notification
    // email, so they are written out in full. `name` and `email` are Formspree's
    // own reserved fields — it uses them for the submission title and reply-to.
    const payload = {
      name: fullName,
      email: form.email.trim(),
      'WhatsApp Number': `${form.dialCode} ${form.phone.trim()}`,
      'Gender / Pronouns':
        form.gender === SELF_DESCRIBE ? form.genderSelfDescribe.trim() : form.gender,
      'Age Range': form.ageRange,
      'Date of Birth': form.dateOfBirth || 'Not provided',
      'Country of Residence': form.country,
      'State / City / Province': form.region.trim(),
      'Time Zone': form.timeZone,
      'Availability Status': form.availability,
      'Code of Conduct Agreement': form.codeOfConduct ? 'Accepted' : 'Not accepted',
      'Data Privacy Consent': form.dataPrivacy ? 'Accepted' : 'Not accepted',
      _subject: `New global volunteer application — ${fullName}`,
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Without this Formspree replies with a redirect to its own thank-you page.
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        const detail = body?.errors?.[0]?.message
        throw new Error(detail || `Request failed with status ${response.status}`)
      }

      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message
          ? `We could not submit your application: ${error.message}`
          : 'We could not submit your application. Please try again in a moment.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-dark border-luxury-gold/20 rounded-sm p-10 sm:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-luxury-gold/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-luxury-gold/30"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 flex items-center justify-center">
            <i className="fas fa-check text-luxury-gold text-2xl"></i>
          </div>

          <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em]">
            Application Received
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl font-black text-white font-serif italic">
            Welcome to the{' '}
            <span className="text-gradient-gold not-italic font-sans uppercase">Corps</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-xl mx-auto leading-relaxed">
            Thank you, {form.fullName.split(' ')[0]}. Your application has been logged. Our
            volunteer coordination team reviews every submission and will reach out on WhatsApp at{' '}
            <span className="text-luxury-gold font-semibold">
              {form.dialCode} {form.phone}
            </span>{' '}
            with your onboarding details.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { label: 'Region', value: form.country },
              { label: 'Time Zone', value: form.timeZone },
              { label: 'Availability', value: form.availability },
            ].map((item) => (
              <div key={item.label} className="bg-deep-navy px-6 py-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setForm(INITIAL_STATE)
              setErrors({})
              setIsSubmitted(false)
            }}
            className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-luxury-gold transition-colors duration-300"
          >
            Submit another application
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      {/* Completion meter */}
      <div className="sticky top-20 z-20 mb-12 glass-dark border-luxury-gold/10 rounded-sm px-6 py-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            Application Progress
          </span>
          <span className="text-xs font-black text-luxury-gold tabular-nums">{completion}%</span>
        </div>
        <div className="h-[3px] w-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-luxury-gold to-gold-light"
            initial={false}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      <div className="space-y-20">
        {/* ── 01 · Identity ─────────────────────────────────────────── */}
        <section>
          <SectionHeading
            index="01"
            title="Who you are"
            blurb="The essentials we use to identify and reach you."
          />

          <div className="space-y-8">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={form.fullName}
                onChange={(event) => update('fullName', event.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                placeholder="e.g. Adaeze Okonkwo"
                className={inputClass(Boolean(errors.fullName))}
              />
              <FieldError message={errors.fullName} />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                placeholder="you@example.com"
                className={inputClass(Boolean(errors.email))}
              />
              <FieldError message={errors.email} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                WhatsApp Number <span className="text-luxury-gold">*</span>
              </label>
              <div className="grid grid-cols-[minmax(0,9rem)_1fr] gap-3">
                <div className="relative">
                  <select
                    id="dialCode"
                    name="dialCode"
                    aria-label="Country dialling code"
                    value={form.dialCode}
                    onChange={(event) => update('dialCode', event.target.value)}
                    aria-invalid={Boolean(errors.dialCode)}
                    className={selectClass(Boolean(errors.dialCode))}
                  >
                    <option value="" className="bg-deep-navy">
                      Code
                    </option>
                    {COUNTRIES.map((country) => (
                      <option key={country.code} value={country.dial} className="bg-deep-navy">
                        {country.dial} · {country.code}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={form.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  placeholder="803 123 4567"
                  className={inputClass(Boolean(errors.phone))}
                />
              </div>
              <p className="mt-2 text-xs text-white/30">
                Include your country code — this is how our coordinators will reach you.
              </p>
              <FieldError message={errors.dialCode ?? errors.phone} />
            </div>

            <div>
              <label htmlFor="gender" className={labelClass}>
                Gender / Pronouns <span className="text-luxury-gold">*</span>
              </label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={(event) => update('gender', event.target.value)}
                  aria-invalid={Boolean(errors.gender)}
                  className={selectClass(Boolean(errors.gender))}
                >
                  <option value="" className="bg-deep-navy">
                    Select an option
                  </option>
                  {GENDER_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-deep-navy">
                      {option}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
              <FieldError message={errors.gender} />

              {form.gender === SELF_DESCRIBE && (
                <div className="mt-4">
                  <input
                    id="genderSelfDescribe"
                    name="genderSelfDescribe"
                    type="text"
                    aria-label="How you identify"
                    value={form.genderSelfDescribe}
                    onChange={(event) => update('genderSelfDescribe', event.target.value)}
                    aria-invalid={Boolean(errors.genderSelfDescribe)}
                    placeholder="How you identify, and your pronouns"
                    className={inputClass(Boolean(errors.genderSelfDescribe))}
                  />
                  <FieldError message={errors.genderSelfDescribe} />
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ageRange" className={labelClass}>
                  Age Range <span className="text-luxury-gold">*</span>
                </label>
                <div className="relative">
                  <select
                    id="ageRange"
                    name="ageRange"
                    value={form.ageRange}
                    onChange={(event) => update('ageRange', event.target.value)}
                    aria-invalid={Boolean(errors.ageRange)}
                    className={selectClass(Boolean(errors.ageRange))}
                  >
                    <option value="" className="bg-deep-navy">
                      Select a range
                    </option>
                    {AGE_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-deep-navy">
                        {range}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
                <FieldError message={errors.ageRange} />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className={labelClass}>
                  Date of Birth <span className="text-white/25 normal-case">(optional)</span>
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  autoComplete="bday"
                  value={form.dateOfBirth}
                  onChange={(event) => update('dateOfBirth', event.target.value)}
                  className={`${inputClass(false)} [color-scheme:dark]`}
                />
              </div>
            </div>

            {form.ageRange === 'Under 18' && (
              <p className="text-xs text-luxury-gold/80 bg-luxury-gold/5 border border-luxury-gold/20 rounded-sm px-5 py-4">
                <i className="fas fa-circle-info mr-2"></i>
                Volunteers under 18 need written consent from a parent or guardian. Our team will
                send the consent form before onboarding.
              </p>
            )}
          </div>
        </section>

        {/* ── 02 · Location & availability ──────────────────────────── */}
        <section>
          <SectionHeading
            index="02"
            title="Where and when"
            blurb="So we can place you with the right regional team."
          />

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className={labelClass}>
                  Country of Residence <span className="text-luxury-gold">*</span>
                </label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={form.country}
                    onChange={(event) => handleCountryChange(event.target.value)}
                    aria-invalid={Boolean(errors.country)}
                    className={selectClass(Boolean(errors.country))}
                  >
                    <option value="" className="bg-deep-navy">
                      Select your country
                    </option>
                    {COUNTRIES.map((country) => (
                      <option key={country.code} value={country.name} className="bg-deep-navy">
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </div>
                <FieldError message={errors.country} />
              </div>

              <div>
                <label htmlFor="region" className={labelClass}>
                  State / City / Province <span className="text-luxury-gold">*</span>
                </label>
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  value={form.region}
                  onChange={(event) => update('region', event.target.value)}
                  aria-invalid={Boolean(errors.region)}
                  placeholder="e.g. Lagos State"
                  className={inputClass(Boolean(errors.region))}
                />
                <FieldError message={errors.region} />
              </div>
            </div>

            <div>
              <label htmlFor="timeZone" className={labelClass}>
                Current Time Zone <span className="text-luxury-gold">*</span>
              </label>
              <div className="relative">
                <select
                  id="timeZone"
                  name="timeZone"
                  value={form.timeZone}
                  onChange={(event) => update('timeZone', event.target.value)}
                  aria-invalid={Boolean(errors.timeZone)}
                  className={selectClass(Boolean(errors.timeZone))}
                >
                  <option value="" className="bg-deep-navy">
                    Select your time zone
                  </option>
                  {TIME_ZONES.map((zone) => (
                    <option key={zone.value} value={zone.value} className="bg-deep-navy">
                      {zone.label}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
              <p className="mt-2 text-xs text-white/30">
                We pre-fill this from your device. Change it if you are travelling.
              </p>
              <FieldError message={errors.timeZone} />
            </div>

            <div>
              <span className={labelClass}>
                Availability Status <span className="text-luxury-gold">*</span>
              </span>
              <div
                role="radiogroup"
                aria-label="Availability Status"
                aria-invalid={Boolean(errors.availability)}
                className="grid sm:grid-cols-2 gap-3"
              >
                {AVAILABILITY_OPTIONS.map((option) => {
                  const isActive = form.availability === option.value
                  return (
                    <label
                      key={option.value}
                      className={`group relative flex cursor-pointer items-start gap-4 rounded-sm border px-5 py-4 transition-all duration-300 ${
                        isActive
                          ? 'border-luxury-gold bg-luxury-gold/10'
                          : 'border-white/10 bg-white/[0.03] hover:border-luxury-gold/40 hover:bg-white/[0.06]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="availability"
                        value={option.value}
                        checked={isActive}
                        onChange={(event) => update('availability', event.target.value)}
                        className="sr-only"
                      />
                      <span
                        className={`mt-1 h-4 w-4 flex-shrink-0 rounded-full border transition-all duration-300 ${
                          isActive
                            ? 'border-luxury-gold bg-luxury-gold shadow-[0_0_0_3px_rgba(212,175,55,0.2)]'
                            : 'border-white/25 group-hover:border-luxury-gold/50'
                        }`}
                      ></span>
                      <span className="min-w-0">
                        <span
                          className={`block text-sm font-bold ${
                            isActive ? 'text-white' : 'text-white/80'
                          }`}
                        >
                          {option.value}
                        </span>
                        <span className="block text-xs text-white/40 mt-0.5">{option.detail}</span>
                      </span>
                    </label>
                  )
                })}
              </div>
              <FieldError message={errors.availability} />
            </div>
          </div>
        </section>

        {/* ── 03 · Agreements ───────────────────────────────────────── */}
        <section>
          <SectionHeading
            index="03"
            title="Agreements"
            blurb="Both are required before we can process your application."
          />

          <div className="space-y-4">
            <label
              className={`flex cursor-pointer items-start gap-4 rounded-sm border px-5 py-5 transition-all duration-300 ${
                form.codeOfConduct
                  ? 'border-luxury-gold/60 bg-luxury-gold/5'
                  : errors.codeOfConduct
                    ? 'border-red-400/60 bg-white/[0.03]'
                    : 'border-white/10 bg-white/[0.03] hover:border-luxury-gold/40'
              }`}
            >
              <input
                type="checkbox"
                name="codeOfConduct"
                checked={form.codeOfConduct}
                onChange={(event) => update('codeOfConduct', event.target.checked)}
                aria-invalid={Boolean(errors.codeOfConduct)}
                className="peer sr-only"
              />
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border transition-all duration-300 ${
                  form.codeOfConduct
                    ? 'border-luxury-gold bg-luxury-gold text-deep-navy'
                    : 'border-white/25 text-transparent'
                }`}
              >
                <i className="fas fa-check text-[10px]"></i>
              </span>
              <span className="text-sm leading-relaxed text-white/60">
                <strong className="block text-white font-bold mb-1">
                  Code of Conduct Agreement
                </strong>
                I agree to represent the Dr. Stephen Akintayo global volunteer community with
                integrity, respect and professionalism. I will treat every volunteer, participant
                and partner with dignity, protect confidential information entrusted to me, and
                refuse to use my position for personal financial gain or to solicit funds in the
                organisation&apos;s name without written authorisation.
              </span>
            </label>
            <FieldError message={errors.codeOfConduct} />

            <label
              className={`flex cursor-pointer items-start gap-4 rounded-sm border px-5 py-5 transition-all duration-300 ${
                form.dataPrivacy
                  ? 'border-luxury-gold/60 bg-luxury-gold/5'
                  : errors.dataPrivacy
                    ? 'border-red-400/60 bg-white/[0.03]'
                    : 'border-white/10 bg-white/[0.03] hover:border-luxury-gold/40'
              }`}
            >
              <input
                type="checkbox"
                name="dataPrivacy"
                checked={form.dataPrivacy}
                onChange={(event) => update('dataPrivacy', event.target.checked)}
                aria-invalid={Boolean(errors.dataPrivacy)}
                className="peer sr-only"
              />
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border transition-all duration-300 ${
                  form.dataPrivacy
                    ? 'border-luxury-gold bg-luxury-gold text-deep-navy'
                    : 'border-white/25 text-transparent'
                }`}
              >
                <i className="fas fa-check text-[10px]"></i>
              </span>
              <span className="text-sm leading-relaxed text-white/60">
                <strong className="block text-white font-bold mb-1">Data Privacy Consent</strong>I
                consent to the collection and processing of the personal details above for the
                purpose of volunteer coordination, scheduling and communication. I understand my
                data will not be sold, and that I can request access, correction or deletion at any
                time by contacting the team. See our{' '}
                <a
                  href="/privacy"
                  className="text-luxury-gold underline underline-offset-4 hover:text-gold-light"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            <FieldError message={errors.dataPrivacy} />
          </div>
        </section>
      </div>

      {submitError && (
        <p
          className="mt-10 text-sm font-semibold text-white bg-red-500/10 border border-red-400/30 rounded-sm py-4 px-5"
          role="alert"
        >
          {submitError}
        </p>
      )}

      <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-luxury disabled:opacity-50 disabled:cursor-not-allowed min-w-[260px]"
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-circle-notch fa-spin mr-3"></i>
              Submitting
            </>
          ) : (
            <>
              Submit Application
              <i className="fas fa-arrow-right ml-3"></i>
            </>
          )}
        </button>
        <p className="text-xs text-white/30 leading-relaxed max-w-sm">
          Fields marked <span className="text-luxury-gold">*</span> are required. You&apos;ll hear
          from a regional coordinator within 5 working days.
        </p>
      </div>
    </form>
  )
}
