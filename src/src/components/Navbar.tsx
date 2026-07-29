import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Events', href: '#events' },
  { label: 'Categories', href: '#categories' },
  { label: 'Disciplines', href: '#disciplines' },
  { label: 'Leaderboard', href: '#why-register' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-bot-red rounded flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">BL</span>
          </div>
          <span className="text-white font-heading font-bold text-xl tracking-wider">
            BOT<span className="text-bot-red">LEAGUE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="bg-bot-red hover:bg-bot-red-dark text-white text-xs font-bold uppercase px-4 py-2 rounded-md transition-colors"
          >
            Register / Login
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1f1f1f] px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-white uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 bg-bot-red hover:bg-bot-red-dark text-white text-xs font-bold uppercase px-4 py-2 rounded-md"
          >
            Register / Login
          </a>
        </div>
      )}
    </nav>
  );
}
