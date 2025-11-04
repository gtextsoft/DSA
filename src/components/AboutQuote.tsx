'use client'

export default function AboutQuote() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black mb-4 sm:mb-5 md:mb-6 uppercase tracking-tight leading-[1.1] sm:leading-tight px-2">
            SUCCESS IS YOUR
            <span className="block text-red-600 border-b-2 md:border-b-4 border-red-600 inline-block pb-1 sm:pb-2 mt-1 sm:mt-2">
              DUTY, OBLIGATION, RESPONSIBILITY
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700 uppercase tracking-wider px-2">
            — Dr. Stephen Akintayo
          </p>
        </div>
      </div>
    </section>
  )
}

