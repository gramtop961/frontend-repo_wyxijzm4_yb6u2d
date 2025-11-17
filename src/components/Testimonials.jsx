import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  { quote: 'Their deployment was swift and professional. We felt secure from day one.', author: 'Head of Facilities, Tech Corp' },
  { quote: 'Reliable guards and proactive supervision. Excellent service overall.', author: 'Admin Manager, Residential Society' },
  { quote: 'Top-notch event security with precise crowd control and VIP handling.', author: 'Event Director, Live Productions' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 4000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F]">What Our Clients Say</h2>
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.blockquote key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="text-xl text-[#2F2F2F]/80">
              “{t.quote}”
              <footer className="mt-4 text-sm text-[#2F2F2F]/60">— {t.author}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
