import { motion } from 'framer-motion'

export default function About() {
  const points = [
    'Highly trained and vetted personnel',
    'Strict compliance with regulatory standards',
    'Professional supervision and rapid response',
  ]

  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-[#2F2F2F]"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-[#2F2F2F]/70"
          >
            The Golden Sentinel Security Services brings years of experience delivering reliable, high-visibility security for businesses and residences. Our ethos centers on integrity, discipline, and meticulous attention to detail—ensuring every assignment is executed to the highest standards.
          </motion.p>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#E10600]" />
                <span className="text-[#2F2F2F]">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-lg bg-gray-100"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-lg bg-gray-100"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-lg bg-gray-100 col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
