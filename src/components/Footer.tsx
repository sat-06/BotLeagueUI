const quickLinks1 = ['Home', 'Programs', 'Events', 'Tournaments'];
const quickLinks2 = ['Robotics', 'Blog', 'Login', 'Legal'];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#111] py-14 text-xs text-gray-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <span className="text-white font-heading font-black text-lg tracking-wider block mb-3">
              BOTTLE<span className="text-bot-red">JUGS</span>
            </span>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
              India's ultimate robotics competition and innovation arena.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks1.map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">&nbsp;</h4>
            <ul className="space-y-1.5">
              {quickLinks2.map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Social Media</h4>
          <div className="flex gap-3">
            {['YT', 'IG', 'FB', 'TW'].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center text-gray-500 hover:text-bot-red hover:border-bot-red/30 transition-all text-[10px] font-bold">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#111] text-gray-700 text-[10px]">
          © {new Date().getFullYear()} BottleJugs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
