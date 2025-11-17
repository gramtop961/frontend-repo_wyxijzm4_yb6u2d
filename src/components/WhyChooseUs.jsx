import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Headset, Clock, Medal } from 'lucide-react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [counts, setCounts] = useState({ years: 0, guards: 0, clients: 0, verticals: 0 })

  useEffect(() => {
    if (!inView) return

    const targets = { years: 12, guards: 850, clients: 320, verticals: 14 }
    const duration = 1600
    const start = performance.now()

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setCounts({
        years: Math.floor(targets.years * p),
        guards: Math.floor(targets.guards * p),
        clients: Math.floor(targets.clients * p),
        verticals: Math.floor(targets.verticals * p),
      })
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView])

  const features = [
    { icon: ShieldCheck, title: 'Reliability', desc: 'Disciplined operations and rigorous SOPs.' },
    { icon: Medal, title: 'Professional Training', desc: 'Trained, vetted and uniformed personnel.' },
    { icon: Headset, title: '24/7 Support', desc: 'Always-on command center and supervision.' },
    { icon: Clock, title: 'Quick Deployment', desc: 'Agile mobilization to meet urgent needs.' },
  ]

  return (
    <section id="why" className="relative bg-white">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#D2C67F] blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-[#2F2F2F]">
          Why Choose Us
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Years of Experience" value={counts.years} />
          <Stat label="Trained Guards" value={counts.guards} />
          <Stat label="Clients Served" value={counts.clients} />
          <Stat label="Industry Verticals" value={counts.verticals} />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-xl border border-gray-200 bg-white">
              <f.icon className="text-[#E10600]" />
              <h3 className="mt-4 font-semibold text-[#2F2F2F]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#2F2F2F]/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#2F2F2F]/70">We operate with full compliance and certifications, ensuring seamless onboarding, statutory adherence, and transparent reporting.</p>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white">
      <div className="text-3xl font-extrabold text-[#2F2F2F]">{value}<span className="text-[#E10600]">+</span></div>
      <div className="text-sm text-[#2F2F2F]/70">{label}</div>
    </div>
  )
}
