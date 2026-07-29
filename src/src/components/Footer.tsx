import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#111] py-16 text-gray-500 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          
          <div className="col-span-2">
            <span className="text-white font-heading font-black text-lg tracking-wider block mb-4">
              BOT<span className="text-red-500">LEAGUE</span>
            </span>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              India's ultimate robotics competition and innovation arena. Compete with top minds and showcase your engineering prowess.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">The Arena</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Episodes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">National Rankings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rulebooks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Join the Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-[#111] border border-[#222] hover:border-red-500/40 hover:text-red-500 rounded-lg transition-all duration-200">
                <span className="font-bold">YT</span>
              </a>
              <a href="#" className="p-2.5 bg-[#111] border border-[#222] hover:border-red-500/40 hover:text-red-500 rounded-lg transition-all duration-200">
                <span className="font-bold">IG</span>
              </a>
              <a href="#" className="p-2.5 bg-[#111] border border-[#222] hover:border-red-500/40 hover:text-red-500 rounded-lg transition-all duration-200">
                <span className="font-bold">FB</span>
              </a>
              <a href="#" className="p-2.5 bg-[#111] border border-[#222] hover:border-red-500/40 hover:text-red-500 rounded-lg transition-all duration-200">
                <span className="font-bold">TW</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#111] flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <p>© {new Date().getFullYear()} BotLeague India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
