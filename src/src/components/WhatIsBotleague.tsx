import { Users, IdCard, BarChart3, Briefcase } from 'lucide-react';

const features = [
  { icon: <Users size={20} />, title: 'Structured Events', desc: 'Professionally organized tournaments with clear rules, categories, and judging criteria.' },
  { icon: <IdCard size={20} />, title: 'Digital Identity', desc: 'Every participant gets a unique BotLeague ID with stats, rank, and event history.' },
  { icon: <BarChart3 size={20} />, title: 'National Ranking', desc: 'Compete for leaderboard positions with a transparent ELO-based ranking system.' },
  { icon: <Briefcase size={20} />, title: 'Career Pathway', desc: 'Top performers get scouted by robotics companies and research labs across India.' },
];

export default function WhatIsBotleague() {
  return (
    <section id="what-is" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-12">
          What is <span className="text-bot-red">BotLeague</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 flex gap-4 items-start hover:border-bot-red/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-bot-red/10 border border-bot-red/20 flex items-center justify-center text-bot-red shrink-0">{f.icon}</div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1.5">{f.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
