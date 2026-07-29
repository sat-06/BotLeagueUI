import { Award, ShieldCheck, Briefcase, Zap } from 'lucide-react';

const advantages = [
  { icon: <Award size={18} />, title: 'National Recognition', desc: "Benchmark your skills on India's official robotics leaderboard." },
  { icon: <ShieldCheck size={18} />, title: 'Fair Judging', desc: 'Compete with confidence under standardized, expert-led evaluation.' },
  { icon: <Briefcase size={18} />, title: 'Career Ops', desc: 'Bridge the gap between arena victories and top-tier tech placements.' },
  { icon: <Zap size={18} />, title: 'High-Energy Ecos', desc: 'Join a nationwide community of elite innovators and robotics athletes.' },
];

const leaderboard = [
  { rank: '1', name: 'Player Name', score: '22000', gold: true },
  { rank: '2', name: 'Player Name', score: '20930' },
  { rank: '3', name: 'Player Name', score: '19500' },
  { rank: '4', name: 'Player Name', score: '15060' },
  { rank: '5', name: 'Player Name', score: '13965' },
  { rank: '6', name: 'Player Name', score: '10954' },
  { rank: '7', name: 'Player Name', score: '9057' },
  { rank: '8', name: 'Player Name', score: '8240' },
];

export default function WhyRegister() {
  return (
    <section id="why-register" className="py-20 sm:py-28 bg-[#070707] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <span className="text-bot-red text-xs font-bold uppercase tracking-widest">Why Register ?</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider mt-2 mb-10 leading-tight">The League Advantage</h2>
            <div className="space-y-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-2.5 bg-[#111] border border-[#222] rounded-lg text-bot-red shrink-0 group-hover:border-bot-red/50 transition-all">{adv.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">{adv.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#111115] border border-bot-red/20 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-bot-red via-transparent to-bot-red" />
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider text-center mb-4">Leaderboard</h3>
              <div className="space-y-1.5">
                {leaderboard.map((p, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${p.gold ? 'bg-bot-gold/10 border border-bot-gold/20' : 'border border-transparent hover:bg-[#1a1a1a]'}`}>
                    <span className={`w-5 text-center font-heading font-bold text-xs ${p.gold ? 'text-bot-gold' : 'text-gray-500'}`}>{p.rank}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold ${p.gold ? 'bg-bot-gold/20 text-bot-gold' : 'bg-[#222] text-gray-500'}`}>{p.name.substring(0, 2)}</div>
                    <span className="flex-1 text-xs text-gray-300">{p.name}</span>
                    <span className={`text-xs font-heading font-bold ${p.gold ? 'text-bot-gold' : 'text-gray-400'}`}>{p.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
