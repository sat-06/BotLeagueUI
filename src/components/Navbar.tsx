import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Programs', href: '#what-is' },
  { label: 'Competitions', href: '#events' },
  { label: 'Blog', href: '#' },
  { label: 'More', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-1.5 shrink-0">
          <div className="w-8 h-8 bg-bot-red rounded flex items-center justify-center">
            <span className="text-white font-heading font-bold text-[10px]">BJ</span>
          </div>
          <span className="text-white font-heading font-bold text-lg tracking-wider leading-none">
            BOTTLE<span className="text-bot-red">JUGS</span>
          </span>
          <span className="text-[8px] text-gray-500 italic font-light ml-1 hidden sm:block">
            THE FUTURE OF ROBOTICS LEAGUE
          </span>
        </a>
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-xs text-gray-300 hover:text-white tracking-wider uppercase transition-colors font-medium">{link.label}</a>
          ))}
          <a href="#" className="text-xs text-gray-300 hover:text-white tracking-wider uppercase transition-colors font-medium border border-[#333] px-3 py-1.5 rounded-md">Sign In</a>
          <a href="#" className="bg-bot-red hover:bg-bot-red-dark text-white text-xs font-bold uppercase px-4 py-1.5 rounded-md transition-colors">Register</a>
        </div>
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1f1f1f] px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-gray-300 hover:text-white uppercase tracking-wide">{link.label}</a>
          ))}
          <div className="flex gap-2 mt-2">
            <a href="#" onClick={() => setOpen(false)} className="flex-1 border border-[#333] text-white text-xs font-bold uppercase text-center py-2 rounded-md">Sign In</a>
            <a href="#" onClick={() => setOpen(false)} className="flex-1 bg-bot-red hover:bg-bot-red-dark text-white text-xs font-bold uppercase text-center py-2 rounded-md">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}
