import { Users, IdCard, BarChart3, Briefcase } from 'lucide-react';

const features = [
  { num: '1', icon: <Users size={16} />, title: 'Structured Events', desc: 'From one-off events to a year-round competitive season.' },
  { num: '2', icon: <IdCard size={16} />, title: 'Digital Identity', desc: 'Your professional robotics legacy, tracked and verified.' },
  { num: '3', icon: <BarChart3 size={16} />, title: 'National Ranking', desc: 'Benchmark your skills against the best engineers in India.' },
  { num: '4', icon: <Briefcase size={16} />, title: 'Career Pathway', desc: 'Turning arena victories into real-world industry opportunities.' },
];

export default function WhatIsBotleague() {
  return (
    <section id="what-is" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-10">What is <span className="text-bot-red">BottleJugs</span>?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.num} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 flex gap-4 items-start hover:border-bot-red/30 transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-bot-red/10 border border-bot-red/20 flex items-center justify-center text-bot-red shrink-0 font-heading font-bold text-sm group-hover:bg-bot-red group-hover:text-white transition-all">{f.num}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-bot-red">{f.icon}</span>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{f.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
