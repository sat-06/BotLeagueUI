import { useState } from 'react';
import { Trophy, Zap, History } from 'lucide-react';

type Tab = 'live' | 'upcoming' | 'results';

const eventData: Record<Tab, { name: string; desc: string; meta: string }[]> = {
  live: [{ name: 'Bengaluru Regional', desc: 'Ongoing – Round 2', meta: 'Watch Live →' }],
  upcoming: [
    { name: 'Event 1 Mumbai', desc: 'Date: 11/11/25', meta: 'BKC' },
    { name: 'Event 2 Delhi', desc: 'Date: 11/11/25', meta: 'BKC' },
  ],
  results: [
    { name: 'Bengaluru Regional', desc: 'Winner: Team Alpha', meta: 'Score: 2200' },
    { name: 'Bengaluru Regional', desc: 'Winner: Team Beta', meta: 'Score: 1950' },
    { name: 'Bengaluru Regional', desc: 'Winner: Team Gamma', meta: 'Score: 1800' },
  ],
};

const tabs = [
  { key: 'live' as Tab, icon: <Zap size={14} />, label: 'Live Now' },
  { key: 'upcoming' as Tab, icon: <Trophy size={14} />, label: 'Upcoming' },
  { key: 'results' as Tab, icon: <History size={14} />, label: 'Event Results' },
];

export default function CompetitionsEvents() {
  const [tab, setTab] = useState<Tab>('live');
  return (
    <section id="events" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-bot-red text-xs font-bold uppercase tracking-widest">{'—'} Events {'—'}</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 uppercase tracking-wide">Competitions &amp; Events</h2>
        </div>
        <div className="bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden">
          <div className="flex border-b border-[#1f1f1f]">
            {tabs.map((t) => (
              <button key={t.key} onClick={() => setTab(t.key)} className={`flex items-center gap-1.5 px-5 py-3 text-xs font-bold uppercase transition-colors border-b-2 ${tab === t.key ? 'text-bot-red border-bot-red bg-bot-red/5' : 'text-gray-500 border-transparent hover:text-gray-300'}`}>
                {t.icon}{t.label}
              </button>
            ))}
            <div className="ml-auto flex items-center pr-5">
              <a href="#" className="text-[10px] text-bot-red uppercase tracking-wider font-bold hover:underline">View Tournament {'→'}</a>
            </div>
          </div>
          <div className="p-4 sm:p-5">
            {tab === 'live' && (
              <div className="space-y-4">
                {eventData.live.map((ev, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-bot-red/10 border border-bot-red/20 flex items-center justify-center text-bot-red"><Zap size={18} /></div>
                      <div><h4 className="text-white font-bold text-sm">{ev.name}</h4><p className="text-xs text-gray-500">{ev.desc}</p></div>
                    </div>
                    <a href="#" className="text-xs text-bot-red font-bold uppercase hover:underline">{ev.meta}</a>
                  </div>
                ))}
              </div>
            )}
            {tab === 'upcoming' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventData.upcoming.map((ev, i) => (
                  <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-bot-gold/10 border border-bot-gold/20 flex items-center justify-center text-bot-gold"><Trophy size={18} /></div>
                      <div><h4 className="text-white font-bold text-sm">{ev.name}</h4><p className="text-xs text-gray-500">{ev.desc}</p></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 bg-[#222] px-2 py-0.5 rounded">{ev.meta}</span>
                      <a href="#" className="bg-bot-red hover:bg-bot-red-dark text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-md transition-colors">Register</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === 'results' && (
              <div className="space-y-3">
                {eventData.results.map((ev, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 border border-[#333] flex items-center justify-center text-gray-400"><History size={18} /></div>
                      <div><h4 className="text-white font-bold text-sm">{ev.name}</h4><p className="text-xs text-gray-500">{ev.desc}</p></div>
                    </div>
                    <span className="text-xs text-gray-400 font-bold">{ev.meta}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
