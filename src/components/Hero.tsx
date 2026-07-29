export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(227,23,42,0.25) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(234,179,8,0.08) 0%, transparent 40%), linear-gradient(180deg, #0a0a0a 0%, rgba(10,10,10,0.4) 30%, rgba(10,10,10,0.15) 60%, #0a0a0a 100%)" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-bot-red/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/8 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gray-500 text-xs tracking-widest uppercase font-medium mb-2">THE FUTURE OF ROBOTICS LEAGUE</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-[1.05] max-w-xl">
              INDIA\'S <br />ULTIMATE<br />
              <span className="text-bot-red">ROBOTICS</span> ARENA
            </h1>
            <p className="mt-5 text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
              Build. Compete. Earn. Rise.<br />
              <span className="text-gray-600 text-xs">Robot combat simulations and real-world inspired leagues for aspiring creators and robot enthusiasts.</span>
            </p>
            <div className="mt-6 flex items-center gap-2 bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 max-w-md">
              <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Look for the next competitions" className="bg-transparent border-none outline-none text-sm text-gray-400 placeholder-gray-600 w-full" />
            </div>
            <a href="#events" className="inline-block mt-6 bg-bot-red hover:bg-bot-red-dark text-white font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(227,23,42,0.4)]">Register Now</a>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-bot-red/15 blur-[60px] rounded-2xl" />
              <div className="absolute -inset-2 bg-blue-600/8 blur-[40px] rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2a2a] bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
                <img src="/hero-bot.png" alt="Combat robot on reflective arena floor" className="w-full h-auto object-contain max-h-[350px]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#111] border border-bot-red/30 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bot-red animate-pulse" />
                  <span className="text-white font-heading font-bold text-sm">LIVE</span>
                </div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Episode 14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
