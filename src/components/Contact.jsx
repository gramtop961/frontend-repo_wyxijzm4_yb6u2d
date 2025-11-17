import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-[#2F2F2F]">Contact Us</motion.h2>
          <p className="mt-4 text-[#2F2F2F]/70">Reach out for quotes, deployments, or consultations.</p>

          <form className="mt-8 grid grid-cols-1 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E10600]" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E10600]" />
            <input required type="tel" placeholder="Phone" className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E10600]" />
            <textarea rows="4" placeholder="Message" className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E10600]" />
            <button type="submit" className="mt-2 inline-flex justify-center px-6 py-3 rounded-md bg-[#E10600] text-white font-medium hover:bg-red-700">Send Message</button>
          </form>

          <div className="mt-8 text-sm text-[#2F2F2F]/80">
            <p className="font-medium text-[#2F2F2F]">The Golden Sentinel Security Services</p>
            <p>123 Corporate Park, Business District</p>
            <p>Phone: +91 98765 43210 | Email: info@goldensentinel.com</p>
          </div>
        </div>

        <div className="min-h-[360px] rounded-xl bg-gray-100 flex items-center justify-center text-[#2F2F2F]/60">
          Google Map Placeholder
        </div>
      </div>
    </section>
  )
}
