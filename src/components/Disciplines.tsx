const disciplines = [
  { name: 'Robo Race', gradient: 'from-cyan-900/80 to-blue-900/80' },
  { name: 'Line Follower', gradient: 'from-emerald-900/80 to-green-900/80' },
  { name: 'RC Racing', gradient: 'from-orange-900/80 to-red-900/80' },
  { name: 'Robo Soccer', gradient: 'from-violet-900/80 to-purple-900/80' },
  { name: 'Robo Hockey', gradient: 'from-rose-900/80 to-pink-900/80' },
  { name: 'Robo War', gradient: 'from-red-900/80 to-red-950/80' },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-bot-red text-xs font-bold uppercase tracking-widest">— Compete In —</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 uppercase tracking-wide">Competition Disciplines</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {disciplines.map((d) => (
            <div key={d.name} className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient}`} />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%)`, backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }} />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/10" />
              <div className="absolute bottom-4 left-4 w-8 h-8 rotate-45 border border-white/10" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wide">{d.name}</span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-bot-red/50 rounded-xl transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
