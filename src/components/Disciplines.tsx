const disciplines = [
  { name: 'Robo Race', img: '/disciplines/robo-race.png' },
  { name: 'Line Follower', img: '/disciplines/line-follower.png' },
  { name: 'RC Racing', img: '/disciplines/rc-racing.png' },
  { name: 'FPV Drone Racing & Simulation', img: '/disciplines/fpv-drone.png' },
  { name: 'Robo Hockey', img: '/disciplines/robo-hockey.png' },
  { name: 'Robo War', img: '/disciplines/robo-war.png' },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-bot-red text-xs font-bold uppercase tracking-widest">Sports</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 uppercase tracking-wide">Competition Disciplines</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {disciplines.map((d) => (
            <div key={d.name} className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer bg-[#111] border border-[#2a2a2a]">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <span className="text-white font-heading text-sm sm:text-base font-bold uppercase tracking-wide leading-tight">{d.name}</span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-bot-red/50 rounded-xl transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
