import { Bot, Puzzle, Wrench, Cpu } from 'lucide-react';

const categoryCards = [
  { icon: <Bot size={22} />, title: 'Mini Wars', desc: 'Where Creativity Meets Logic.' },
  { icon: <Puzzle size={22} />, title: 'Junior Inventors', desc: 'Engineering & Strategy Fundamentals.' },
  { icon: <Wrench size={22} />, title: 'Young Engineers', desc: 'Advanced Wireless & Autonomous Control.' },
  { icon: <Cpu size={22} />, title: 'Robo Minds', desc: 'Elite Professional Sports & Robotics.' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#0a0a0a] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-10">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryCards.map((cat) => (
            <div key={cat.title} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center hover:border-bot-gold/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-bot-gold/10 border-2 border-bot-gold/40 flex items-center justify-center text-bot-gold mb-4 group-hover:bg-bot-gold group-hover:text-black transition-all">{cat.icon}</div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{cat.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{cat.desc}</p>
              <a href="#" className="text-bot-red hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors border border-bot-red/20 hover:border-bot-red rounded-full px-4 py-1.5">Learn More {'→'}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
