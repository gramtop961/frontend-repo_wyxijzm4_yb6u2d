export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold text-[#2F2F2F]">The Golden Sentinel</div>
          <p className="mt-2 text-sm text-[#2F2F2F]/70">Elite protection with a modern, disciplined approach.</p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-[#2F2F2F]">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-[#E10600]" href="#about">About</a></li>
            <li><a className="hover:text-[#E10600]" href="#services">Services</a></li>
            <li><a className="hover:text-[#E10600]" href="#industries">Industries</a></li>
            <li><a className="hover:text-[#E10600]" href="#why">Why Us</a></li>
            <li><a className="hover:text-[#E10600]" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium text-[#2F2F2F]">Connect</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-[#E10600]" href="#">LinkedIn</a></li>
            <li><a className="hover:text-[#E10600]" href="#">Facebook</a></li>
            <li><a className="hover:text-[#E10600]" href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-4 text-xs text-[#2F2F2F]/60">
        © {new Date().getFullYear()} The Golden Sentinel Security Services. All rights reserved.
      </div>
    </footer>
  )
}
