import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { EXTERNAL_LINKS } from '@/lib/links'

const pressFeatures = [
  {
    title: 'Diversification: The Key to Building Transgenerational Wealth',
    source: 'Forbes Business Council',
    year: '2023',
    href: 'https://www.forbes.com/sites/forbesbusinesscouncil/2023/06/20/diversification-the-key-to-building-transgenerational-wealth/',
  },
  {
    title: 'Long-Term Success: Getting Your Business to the 10-Year Mark',
    source: 'Forbes Business Council',
    year: '2023',
    href: 'https://www.forbes.com/sites/forbesbusinesscouncil/2023/08/31/long-term-success-getting-your-business-to-the-10-year-mark/',
  },
  {
    title: 'Leadership and Mentorship: Guiding Aspiring Entrepreneurs in Africa',
    source: 'Forbes Business Council',
    year: '2023',
    href: 'https://www.forbes.com/sites/forbesbusinesscouncil/2023/12/22/leadership-and-mentorship-guiding-aspiring-entrepreneurs-in-africa/',
  },
  {
    title: 'Guiding the Next Generation of African Entrepreneurs',
    source: 'Forbes Business Council',
    year: '2024',
    href: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/09/13/leadership-and-mentorship-guiding-the-next-generation-of-african-entrepreneurs/',
  },
  {
    title: 'Lessons Learned on Navigating Global Real Estate Investments',
    source: 'Forbes Business Council',
    year: '2025',
    href: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/03/31/lessons-learned-on-navigating-global-real-estate-investments/',
  },
  {
    title: 'Why Integrity Is Your Biggest Asset When Scaling Up',
    source: 'Forbes Business Council',
    year: '2025',
    href: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/05/09/why-integrity-is-your-biggest-asset-when-scaling-up/',
  },
]

const awards = [
  'Forbes Best of Africa Leading Investment Coach and Real Estate Mogul',
  'Chairman & CEO, Gtext Holdings',
  'Author of 45+ books on wealth-building and real estate',
  'Founder, Stephen Akintayo Foundation',
]

export default function Media() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Media Kit &amp; Press Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mb-16">
            Press coverage, Forbes features, awards, and media resources for journalists and event organizers covering Dr. Stephen Akintayo.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards &amp; Recognition</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award) => (
                <li
                  key={award}
                  className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-lg p-5 text-gray-800"
                >
                  <i className="fas fa-award text-luxury-gold mt-1" aria-hidden="true"></i>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Forbes &amp; Press Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressFeatures.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-luxury-gold/40 transition-all duration-300 group"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-2">
                    {article.source} · {article.year}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gray-600 group-hover:text-gray-900">
                    Read article <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="bg-deep-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Media &amp; Speaking Inquiries</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              For interview requests, press kits, high-resolution photos, and speaking bookings, contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/speaking"
                className="inline-block bg-luxury-gold hover:bg-gold-dark text-deep-navy font-bold py-3 px-8 rounded-sm transition-colors"
              >
                Book Speaking Engagement
              </a>
              <a
                href={EXTERNAL_LINKS.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/30 hover:border-luxury-gold text-white font-bold py-3 px-8 rounded-sm transition-colors"
              >
                Read the Blog
              </a>
            </div>
            <p className="mt-8 text-white/50 text-sm">
              Email:{' '}
              <a href="mailto:ea@stephenakintayo.com" className="text-luxury-gold hover:underline">
                ea@stephenakintayo.com
              </a>{' '}
              · Phone: +1 (443) 790-3925
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
