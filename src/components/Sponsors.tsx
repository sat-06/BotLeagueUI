const sponsors = ['NEXT OLIVE', 'ROBO IT', 'REGAIN NT', 'MTI SOLAR', 'BTI', 'NIT BOKHAR', 'NIT SACHAR', 'ROBO MINDS', 'ROBO WHALE'];

export default function Sponsors() {
  return (
    <section className="py-16 bg-[#070707] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h3 className="text-gray-500 text-[10px] font-extrabold uppercase tracking-widest text-center mb-10">Sponsors</h3>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-50">
          {sponsors.map((s, i) => (
            <span key={i} className="text-gray-400 font-extrabold text-xs uppercase tracking-wider hover:opacity-100 transition-opacity">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
