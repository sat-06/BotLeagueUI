import { Bot, Swords, Crown } from 'lucide-react';

const steps = [
  { icon: <Bot size={22} />, title: 'Build Your Bot', desc: 'Design and fabricate your combat robot to league specifications.' },
  { icon: <Swords size={22} />, title: 'Compete & Qualify', desc: 'Battle through regional qualifiers and prove your mettle.' },
  { icon: <Crown size={22} />, title: 'Join the League', desc: 'Earn your spot in the national BotLeague rankings.' },
];

export default function PathToLeague() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-bot-red text-xs font-bold uppercase tracking-widest">The Journey</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 uppercase tracking-wide">Your Path to the League</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center text-center max-w-[200px] px-4">
                <div className="w-16 h-16 rounded-full border-2 border-bot-red/40 bg-[#0f0f0f] flex items-center justify-center text-bot-red mb-4">{step.icon}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wide">{step.title}</h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center py-4 md:py-0 md:px-2">
                  <div className="w-0.5 h-8 md:w-12 md:h-0.5 bg-[#2a2a2a]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
