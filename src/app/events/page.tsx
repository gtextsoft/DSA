import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Events() {
  const events = [
    {
      title: 'Global Wealth Festival',
      description: 'Annual wealth creation event',
      imageText: 'SOH TILIH',
      imageBg: 'bg-teal-700'
    },
    {
      title: 'Global Property Festival',
      description: 'Annual property investment event',
      imageText: '',
      imageBg: 'bg-teal-700'
    },
    {
      title: 'Past Collaborations',
      description: 'Past collaborations and partnerships',
      imageText: 'Jesfiserace',
      imageBg: 'bg-teal-700',
      subtitle: 'NHERRMYONMRIRE HIERAL SAFE BARE WORK'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
            Events
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Image/Header Section */}
                <div className={`${event.imageBg} h-48 flex flex-col items-center justify-center text-white p-6`}>
                  {event.imageText && (
                    <div className="text-2xl md:text-3xl font-bold mb-2">
                      {event.imageText}
                    </div>
                  )}
                  {event.subtitle && (
                    <div className="text-sm md:text-base text-white/90 mt-2 text-center">
                      {event.subtitle}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg mb-6">
                    {event.description}
                  </p>

                  {/* Register Button */}
                  <button className="w-full bg-amber-100 hover:bg-amber-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-base md:text-lg">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

