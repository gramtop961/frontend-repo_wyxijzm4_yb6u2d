import { useEffect, useState } from 'react'
import { Shield, Phone, Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-[#E10600]"><Shield size={18} className="text-white" /></div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-wide text-[#2F2F2F]">The Golden Sentinel</span>
              <span className="text-[11px] text-[#777] -mt-1">Security Services</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-[#2F2F2F] hover:text-[#E10600] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#E10600] text-white text-sm font-medium px-3 py-2 rounded-md shadow-sm hover:bg-red-700 transition-colors">
              <Phone size={16} /> Get Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block text-sm text-[#2F2F2F] hover:text-[#E10600]">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#E10600] text-white text-sm font-medium px-3 py-2 rounded-md">
              <Phone size={16} /> Get Quote
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
