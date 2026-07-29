import { Cog, Swords, TrendingUp, Crown } from 'lucide-react';

const steps = [
  { icon: <Cog size={20} />, title: 'Build', desc: 'Design & Fabricate' },
  { icon: <Swords size={20} />, title: 'Compete', desc: 'Regional Qualifiers' },
  { icon: <TrendingUp size={20} />, title: 'EARN', desc: 'National Ranking' },
  { icon: <Crown size={20} />, title: 'Rise', desc: 'Join the League' },
];

export default function PathToLeague() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="text-center text-gray-500 text-[10px] uppercase tracking-widest mb-2">From Gear to Glory</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center uppercase tracking-wide mb-12">Your Path to the League</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center text-center max-w-[180px] px-3">
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-3 ${step.title === 'EARN' ? 'border-bot-gold/40 bg-bot-gold/10 text-bot-gold' : 'border-bot-red/40 bg-[#0f0f0f] text-bot-red'}`}>{step.icon}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">{step.title}</h4>
                <p className="text-[10px] text-gray-500 mt-1">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center py-3 md:py-0 md:px-1">
                  <div className="w-0.5 h-6 md:w-10 md:h-0.5 bg-[#2a2a2a]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
