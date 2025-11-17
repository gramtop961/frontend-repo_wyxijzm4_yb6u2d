import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const industries = [
  'Corporate Offices',
  'Malls & Shopping Complexes',
  'Manufacturing Industries',
  'Construction Sites',
  'Residential Apartments',
  'Hospitals & Educational Institutions',
  'Hotels & Hospitality',
]

export default function Industries() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section id="industries" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-10">Industries We Serve</motion.h2>
        <div ref={ref} className="overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6">
            {industries.map((label, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="min-w-[280px] flex-1">
                <div className="aspect-[4/3] rounded-xl bg-gray-100" />
                <h3 className="mt-3 font-semibold text-[#2F2F2F]">{label}</h3>
                <p className="text-sm text-[#2F2F2F]/70">Tailored protocols and trained personnel for this vertical.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
