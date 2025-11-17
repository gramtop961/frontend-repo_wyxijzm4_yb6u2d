import { motion } from 'framer-motion'
import { ShieldCheck, Users, UserCheck, Building2, Home, Megaphone, MonitorSmartphone, FlameKindling } from 'lucide-react'

const services = [
  { title: 'Security Guard Services', icon: ShieldCheck },
  { title: 'Industrial Manpower (Skilled/Unskilled)', icon: Users },
  { title: 'Bouncers & Personal Security', icon: UserCheck },
  { title: 'Corporate Office Security', icon: Building2 },
  { title: 'Residential Security', icon: Home },
  { title: 'Event Security & Crowd Management', icon: Megaphone },
  { title: 'CCTV Monitoring & Surveillance', icon: MonitorSmartphone },
  { title: 'Fire Safety Personnel', icon: FlameKindling },
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-10">
          Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="group relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D2C67F]/0 to-[#D2C67F]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <s.icon className="text-[#E10600]" />
              <h3 className="mt-4 font-semibold text-[#2F2F2F]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#2F2F2F]/70">Professional personnel and processes tailored to your environment.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
