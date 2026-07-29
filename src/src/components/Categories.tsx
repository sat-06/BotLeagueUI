import { Bot, Puzzle, Wrench, Cpu } from 'lucide-react';

const categoryCards = [
  { icon: <Bot size={24} />, title: 'Mini Warriors', age: 'Ages 8–12', desc: 'Introduction to robotics with simple build-and-battle challenges for young minds.' },
  { icon: <Puzzle size={24} />, title: 'Junior Innovators', age: 'Ages 13–15', desc: 'Intermediate level with sensor-based bots and autonomous programming tasks.' },
  { icon: <Wrench size={24} />, title: 'Young Engineers', age: 'Ages 16–18', desc: 'Advanced combat robotics with custom fabrication and real-time control systems.' },
  { icon: <Cpu size={24} />, title: 'Robot Masters', age: 'Ages 19+', desc: 'Open category — no holds barred. The ultimate test of engineering and strategy.' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-12">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryCards.map((cat) => (
            <div key={cat.title} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center hover:border-bot-gold/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-bot-gold/10 border-2 border-bot-gold/40 flex items-center justify-center text-bot-gold mb-4">{cat.icon}</div>
              <span className="text-[10px] text-bot-gold font-bold uppercase tracking-wider mb-1">{cat.age}</span>
              <h4 className="text-white font-bold text-base uppercase tracking-wide mb-2">{cat.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{cat.desc}</p>
              <a href="#" className="text-bot-red hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Register →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
