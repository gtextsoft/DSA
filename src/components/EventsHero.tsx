import Image from 'next/image'

export default function EventsHero() {
  return (
    <section className="relative min-h-[45vh] bg-deep-navy pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      <Image
        src="/images/bgc261.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/90 via-deep-navy/80 to-deep-navy" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[rgba(10,15,50,0.6)]" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-luxury-gold"></span>
          <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.2em]">Upcoming Events</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-serif mb-4 drop-shadow-lg">
          Stephen Akintayo Events &amp; Conferences
        </h1>
        <h2 className="text-luxury-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
          SA Events Itinerary
        </h2>
        <p className="text-white/70 text-lg sm:text-xl max-w-3xl leading-relaxed">
          Join Dr. Stephen Akintayo at exclusive events designed to transform your business, leadership, and financial future.
        </p>
      </div>
    </section>
  )
}
