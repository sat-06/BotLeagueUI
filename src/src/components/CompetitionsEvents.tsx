import { useState } from 'react';
import { Trophy, Zap } from 'lucide-react';

type Tab = 'live' | 'upcoming';

interface Event {
  icon: React.ReactNode;
  name: string;
  status: string;
  stat: string;
  statLabel: string;
}

const events: Record<Tab, Event[]> = {
  live: [
    {
      icon: <Zap size={18} className="text-bot-red" />,
      name: 'Robo War Championship',
      status: 'LIVE – Round 3 in progress',
      stat: '24',
      statLabel: 'Bots competing',
    },
    {
      icon: <Zap size={18} className="text-bot-red" />,
      name: 'Line Follower Sprint',
      status: 'LIVE – Finals underway',
      stat: '8',
      statLabel: 'Finalists',
    },
  ],
  upcoming: [
    {
      icon: <Trophy size={18} className="text-yellow-500" />,
      name: 'RC Racing League',
      status: 'Registrations closing in 3 days',
      stat: '45',
      statLabel: 'Registered',
    },
    {
      icon: <Trophy size={18} className="text-yellow-500" />,
      name: 'Robo Soccer Showdown',
      status: 'Starts in 2 weeks',
      stat: '32',
      statLabel: 'Teams',
    },
  ],
};

export default function CompetitionsEvents() {
  const [tab, setTab] = useState<Tab>('live');

  return (
    <section id="events" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-bot-red text-xs font-bold uppercase tracking-widest">
              — Events —
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 uppercase tracking-wide">
              Competitions &amp; Events
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-semibold uppercase mr-1">
              Prize Pool: <span className="text-bot-gold">₹10,00,000</span>
            </span>
            <div className="flex rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] p-0.5">
              <button
                onClick={() => setTab('live')}
                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-md transition-colors ${
                  tab === 'live'
                    ? 'bg-bot-red text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Live Now
              </button>
              <button
                onClick={() => setTab('upcoming')}
                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-md transition-colors ${
                  tab === 'upcoming'
                    ? 'bg-bot-red text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden">
          {events[tab].map((event, i) => (
            <div
              key={event.name}
              className={`flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-5 ${
                i > 0 ? 'border-t border-[#1f1f1f]' : ''
              }`}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                  {event.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm sm:text-base truncate">
                    {event.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{event.status}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="text-right">
                  <div className="text-lg font-heading font-bold text-white">
                    {event.stat}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase">{event.statLabel}</div>
                </div>
                <div className="hidden sm:block w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-bot-red rounded-full"
                    style={{
                      width: `${Math.min(100, parseInt(event.stat) * 2)}%`,
                    }}
                  />
                </div>
              </div>

              <a
                href="#"
                className="bg-bot-red hover:bg-bot-red-dark text-white text-xs font-bold uppercase px-5 py-2.5 rounded-lg transition-colors shrink-0 self-start sm:self-center"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
