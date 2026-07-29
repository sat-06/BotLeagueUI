export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 60% 40%, rgba(227,23,42,0.25) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 70%, rgba(37,99,235,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(234,179,8,0.08) 0%, transparent 40%),
              linear-gradient(180deg, #0a0a0a 0%, rgba(10,10,10,0.4) 30%, rgba(10,10,10,0.15) 60%, #0a0a0a 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-bot-red/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/8 blur-[100px] rounded-full" />
      </div>

      {/* Two-column content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left column: Text content */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-bot-red/15 border border-bot-red/30 text-bot-red text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-bot-red animate-pulse" />
              LIVE: Episode 14 – Bengaluru Regionals
            </div>

            <div className="mt-2 inline-flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">WATCH LIVE →</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-[1.05] max-w-3xl mt-4">
              INDIA'S ULTIMATE{' '}
              <br />
              <span className="text-bot-red">ROBOTICS</span> ARENA
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Build. Compete. Rank. The National Ecosystem for Robotics Arena.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#events"
                className="bg-bot-red hover:bg-bot-red-dark text-white font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(227,23,42,0.4)]"
              >
                Create Account
              </a>
              <a
                href="#what-is"
                className="border border-[#333] hover:border-white/50 text-white font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-lg transition-all"
              >
                Explore Events
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 sm:gap-16">
              {[
                { value: '500+', label: 'Registered Teams' },
                { value: '₹10L+', label: 'Prize Pool' },
                { value: '12', label: 'Events This Season' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Arena battle image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-bot-red/20 blur-[60px] rounded-2xl" />
              <div className="absolute -inset-2 bg-blue-600/10 blur-[40px] rounded-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2a2a] shadow-[0_0_60px_rgba(227,23,42,0.15)]">
                <img
                  src="/hero-arena.png"
                  alt="Robot battle arena – two combat robots colliding with sparks and neon lighting"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-bot-red/40 rounded-tl-lg" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-bot-red/40 rounded-br-lg" />
              </div>
              
              {/* Floating stat badge */}
              <div className="absolute -bottom-3 -left-3 bg-[#111] border border-bot-red/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-bot-red/20 border border-bot-red/30" />
                  <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-600/30" />
                  <div className="w-7 h-7 rounded-full bg-bot-gold/20 border border-bot-gold/30" />
                </div>
                <div>
                  <div className="text-white font-heading font-bold text-sm">2,450+</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider">Active Competitors</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
