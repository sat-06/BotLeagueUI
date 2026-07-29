import { useState } from 'react';

const formCards = [
  { title: 'Become an Judge' },
  { title: 'Volunteer' },
  { title: 'Community Member' },
];

function SignupCard({ title }: { title: string }) {
  const [data, setData] = useState({ name: '', email: '', phone: '', city: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${title} — Signed Up!`);
    setData({ name: '', email: '', phone: '', city: '' });
  };

  return (
    <div className="flex-1 min-w-[260px] bg-[#111] border border-[#2a2a2a] rounded-2xl p-5 hover:border-bot-red/30 transition-all">
      <h3 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider mb-5">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" required placeholder="Name" value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-bot-red/50 transition-colors" />
        <input type="email" required placeholder="Email" value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-bot-red/50 transition-colors" />
        <input type="text" required placeholder="Phone" value={data.phone}
          onChange={e => setData({ ...data, phone: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-bot-red/50 transition-colors" />
        <input type="text" required placeholder="City" value={data.city}
          onChange={e => setData({ ...data, city: e.target.value })}
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-bot-red/50 transition-colors" />
        <button type="submit" className="w-full bg-bot-red hover:bg-bot-red-dark text-white text-[10px] font-black uppercase tracking-wider py-3 rounded-lg transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default function JoinEcosystem() {
  return (
    <section id="join" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider mb-10 text-center sm:text-left">
          Join the Ecosystem
        </h2>
        <div className="flex flex-wrap gap-5 justify-between">
          {formCards.map(c => <SignupCard key={c.title} title={c.title} />)}
        </div>
      </div>
    </section>
  );
}
