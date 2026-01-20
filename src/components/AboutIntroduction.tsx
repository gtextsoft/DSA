'use client'

import { motion } from 'framer-motion'

export default function AboutIntroduction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-16"
        >
          {/* Opening Quote */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-10 -left-10 text-luxury-gold opacity-10">
              <i className="fas fa-quote-left text-[140px]"></i>
            </div>

            <div className="relative z-10 space-y-8">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-deep-navy leading-tight">
                "I work with small companies and <span className="text-gradient-gold non-italic font-sans font-black">FORTUNE 500</span> giants to grow investments by finding overlooked opportunities and customizing the process of building wealth."
              </p>

              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-luxury-gold"></span>
                <span className="text-luxury-gold text-xs font-bold uppercase tracking-[0.3em] font-serif italic">The Mission</span>
              </div>
            </div>
          </motion.div>

          {/* Supporting Content Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 text-lg text-text-dark/80 leading-relaxed font-medium">
            <div className="space-y-6">
              <p>
                Dr. Stephen Akintayo has partnered with global entities like <span className="text-deep-navy font-bold underline decoration-luxury-gold/30">Google, Microsoft, and IBM</span> to transform their investment landscapes. As the founder of Gtext Holdings, his visionary leadership has built a $200M empire.
              </p>
              <p>
                His journey is a testament to the power of <span className="text-deep-navy font-bold">Billionaire Habits</span>—a framework he developed through decades of high-stakes real estate and investment mastery.
              </p>
            </div>
            <div className="space-y-6 md:pt-12">
              <p>
                Beyond business, Dr. Akintayo's commitment to service is unparalleled. Through the MM2050 Foundation, he is dedicated to lifting millions out of poverty and creating a legacy of global impact.
              </p>
              <div className="p-8 border-l-2 border-luxury-gold/20 bg-luxury-gold/5 italic font-serif text-deep-navy">
                "Wealth is not just a destination; it's a vehicle for transformation and service to humanity."
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

