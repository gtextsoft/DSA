import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlobalVolunteersForm from '@/components/GlobalVolunteersForm'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Global Volunteers - Join the Corps | Dr. Stephen Akintayo',
  description:
    'Apply to join the Dr. Stephen Akintayo global volunteer corps. Serve with a worldwide community driving entrepreneurship, mentorship and community impact across every time zone.',
  path: '/globalvolunteers',
})

const PILLARS = [
  {
    icon: 'fas fa-earth-africa',
    title: 'Global Reach',
    copy: 'Chapters across Africa, Europe, North America, Asia and the Middle East.',
  },
  {
    icon: 'fas fa-people-group',
    title: 'Real Impact',
    copy: 'Food banks, bursaries, business clinics and community activations.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grow With Us',
    copy: 'Direct access to mentorship, training and the wider founder network.',
  },
]

const STATS = [
  { value: '40+', label: 'Countries' },
  { value: '12K', label: 'Volunteers' },
  { value: '24/7', label: 'Coordination' },
]

export default function GlobalVolunteers() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:44px_44px]"></div>
        </div>
        <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-luxury-gold/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-52 -left-40 w-[32rem] h-[32rem] rounded-full bg-royal-blue/40 blur-[120px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <span className="w-10 h-[1px] bg-luxury-gold"></span>
              <span className="text-luxury-gold text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                Volunteer Application
              </span>
            </div>

            <h1 className="heading-hero text-white animate-slide-up">
              The Global
              <br />
              <span className="text-gradient-gold">Volunteer Corps</span>
            </h1>

            <p className="mt-10 text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed animate-slide-up">
              Lend your time, your skill and your voice to work that reaches further than any one
              city. Tell us who you are and where you are, and we will place you with the team that
              needs exactly what you bring.
            </p>

            <div className="mt-14 flex flex-wrap gap-px bg-white/10 border border-white/10 animate-fade-in">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-deep-navy px-8 sm:px-12 py-6 flex-1 min-w-[8rem]">
                  <p className="text-3xl sm:text-4xl font-black text-luxury-gold">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application ───────────────────────────────────────────── */}
      <section id="apply" className="relative pb-28 sm:pb-40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-14 lg:gap-20">
            {/* Editorial rail */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif italic mb-8">
                Why volunteer
                <span className="text-luxury-gold">?</span>
              </h2>

              <div className="space-y-px bg-white/10 border border-white/10">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="bg-deep-navy p-6 sm:p-7 group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="w-10 h-10 flex items-center justify-center rounded-sm border border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-deep-navy transition-all duration-500">
                        <i className={`${pillar.icon} text-sm`}></i>
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{pillar.copy}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 border-l-2 border-luxury-gold/40 pl-6">
                <p className="text-white/60 italic leading-relaxed">
                  &ldquo;You were not born to be poor — you were born to be great. Your wealth is a
                  service to humanity.&rdquo;
                </p>
                <cite className="mt-4 block not-italic text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold">
                  Dr. Stephen Akintayo
                </cite>
              </blockquote>

              <div className="mt-10 flex items-start gap-3 text-xs text-white/30 leading-relaxed">
                <i className="fas fa-lock mt-0.5 text-luxury-gold/60"></i>
                <p>
                  Your details are used only for volunteer coordination. Never sold, never shared
                  with third parties.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="min-w-0">
              <GlobalVolunteersForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
