import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Foundation() {
  const initiatives = [
    {
      title: 'Entrepreneurship Grants',
      description: 'Providing financial support to aspiring entrepreneurs to launch and grow their businesses.',
      icon: '$'
    },
    {
      title: 'Scholarships',
      description: 'Offering educational scholarships to deserving students to pursue their academic dreams.',
      icon: '🎓'
    },
    {
      title: 'Mentorship Programs',
      description: 'Connecting individuals with experienced mentors to guide and support their personal and professional development.',
      icon: '🤝'
    },
    {
      title: 'Mercy Food Bank',
      description: 'Establishing a food bank to provide essential food supplies to those in need.',
      icon: '❤️'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Main Title */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stephen Akintayo Foundation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
              The Stephen Akintayo Foundation is dedicated to empowering individuals and communities through entrepreneurship, education, and humanitarian aid. Our vision is to create a world where everyone has the opportunity to thrive and reach their full potential.
            </p>
          </section>

          {/* Our Initiatives Section */}
          <section className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Our Initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-5xl md:text-6xl mb-4">{initiative.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Partner with Us Section */}
          <section className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner with Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
              Join us in making a difference. Your partnership and donations can help us expand our reach and impact more lives. Together, we can build a brighter future for all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center text-base md:text-lg"
              >
                Partner
              </a>
              <a
                href="/contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center text-base md:text-lg"
              >
                Donate
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

