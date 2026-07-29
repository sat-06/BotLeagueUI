export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
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

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full py-24 sm:py-32">
        <div className="inline-block bg-bot-red/15 border border-bot-red/30 text-bot-red text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider mb-6">
          🔴 Registrations Open
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-[1.05] max-w-3xl">
          INDIA'S ULTIMATE{' '}
          <br />
          <span className="text-bot-red">ROBOTICS</span> ARENA
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
          Where next-gen bots battle for glory. Compete, innovate, and rise through the ranks in
          India's most electrifying robotics combat league.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#events"
            className="bg-bot-red hover:bg-bot-red-dark text-white font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(227,23,42,0.4)]"
          >
            Register Now
          </a>
          <a
            href="#what-is"
            className="border border-[#333] hover:border-white/50 text-white font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-lg transition-all"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 sm:gap-16">
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
    </section>
  );
}
