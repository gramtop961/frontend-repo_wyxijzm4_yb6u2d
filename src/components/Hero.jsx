import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  useEffect(() => {
    // nothing for now
  }, [])

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2F2F2F]">
          Elite Protection. <span className="text-[#E10600]">Unmatched Reliability.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="mt-4 text-lg text-[#2F2F2F]/70 max-w-2xl">
          Professional Security Personnel for Commercial, Residential, Industrial, Corporate & Event Security.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 rounded-md bg-[#E10600] text-white font-medium hover:bg-red-700 transition-colors">Get Quote</a>
          <a href="#services" className="px-6 py-3 rounded-md border border-[#2F2F2F] text-[#2F2F2F] font-medium hover:bg-[#2F2F2F] hover:text-white transition-colors">Our Services</a>
        </motion.div>
      </div>

      <motion.div style={{ y: y2 }} className="absolute -right-20 -bottom-16 w-[420px] h-[420px] rounded-full bg-[#D2C67F]/20 blur-3xl" />
    </section>
  )
}
