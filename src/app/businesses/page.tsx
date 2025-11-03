import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Businesses() {
  const businesses = [
    {
      name: 'Gtext Homes',
      description: 'Real estate development',
      icon: '🏠'
    },
    {
      name: 'Gtext Land',
      description: 'Land acquisition and sales',
      icon: '🌾'
    },
    {
      name: 'Stephen Akintayo Consulting',
      description: 'Business and investment coaching',
      icon: '🏢'
    },
    {
      name: 'GVest',
      description: 'Investment platform',
      icon: '📊'
    },
    {
      name: 'Gtext Media',
      description: 'Media production and content creation',
      icon: '🎬'
    },
    {
      name: 'Gtext Farms',
      description: 'Agricultural ventures',
      icon: '🌱'
    }
  ]

  const impactHighlights = [
    {
      metric: 'Homes Built',
      value: '500+'
    },
    {
      metric: 'Land Acquired',
      value: '1000+ acres'
    },
    {
      metric: 'Businesses Coached',
      value: '2000+'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* SACI Holdings Section */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SACI Holdings
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
              SACI Holdings is the parent company of a diverse portfolio of businesses, each contributing to our mission of empowering individuals and communities through innovative solutions and impactful initiatives.
            </p>

            {/* Business Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {businesses.map((business, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-5xl md:text-6xl mb-4">{business.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {business.name}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {business.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Highlights Section */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Impact Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {impactHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-amber-50 border border-amber-100 rounded-lg p-8 md:p-10 text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                    {highlight.value}
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-gray-800">
                    {highlight.metric}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

