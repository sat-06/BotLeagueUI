import React from "react";
import { Award, ShieldCheck, Briefcase, Zap } from "lucide-react";

const advantages = [
  {
    icon: <Award className="w-6 h-6 text-red-500" />,
    title: "NATIONAL RECOGNITION",
    desc: "\"Benchmark your skills on India's official robotics leaderboard.\""
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    title: "FAIR JUDGING",
    desc: "\"Compete with confidence under standardized, expert-led evaluation.\""
  },
  {
    icon: <Briefcase className="w-6 h-6 text-red-500" />,
    title: "CAREER OPS",
    desc: "\"Bridge the gap between arena victories and top-tier tech placements.\""
  },
  {
    icon: <Zap className="w-6 h-6 text-red-500" />,
    title: "HIGH - ENERGY ECO",
    desc: "\"Join a nationwide community of elite innovators and robotics athletes.\""
  }
];

const leaderboard = [
  { rank: "01", name: "Player Name", score: "22000" },
  { rank: "02", name: "Player Name", score: "20930" },
  { rank: "03", name: "Player Name", score: "19500" },
  { rank: "04", name: "Player Name", score: "15060" },
  { rank: "05", name: "Player Name", score: "13965" },
  { rank: "06", name: "Player Name", score: "10954" },
  { rank: "07", name: "Player Name", score: "9057" }
];

export default function WhyRegister() {
  return (
    <section id="why-register" className="py-20 bg-[#070707] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
              WHY REGISTER ?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider mb-10 leading-tight">
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="space-y-8">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-3 bg-[#111] border border-[#222] rounded-lg text-red-500 shrink-0 group-hover:border-red-500/50 transition-all duration-300">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base uppercase tracking-wider mb-1">
                      {adv.title}
                    </h4>
                    <p className="text-sm text-gray-400 italic font-medium">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] bg-[#111115] border border-red-500/20 rounded-2xl p-6 shadow-[0_0_50px_rgba(239,68,68,0.05)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-transparent to-red-500" />
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-transparent to-red-500" />
              
              <div className="text-center mb-6">
                <span className="text-[10px] text-red-500 font-extrabold tracking-widest uppercase block mb-1">
                  LEADERBOARD
                </span>
                <div className="flex justify-center items-center gap-1 text-white font-heading font-black text-xl tracking-wider">
                  <span>#01 Player Name</span>
                </div>
                <div className="text-2xl font-black font-heading text-red-500 tracking-wide mt-1">
                  508754
                </div>
              </div>

              <div className="space-y-2.5">
                {leaderboard.map((player, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between bg-[#15151a] border border-[#222] hover:border-red-500/30 rounded-lg py-2 px-3.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-black text-xs text-red-500 w-4">
                        {player.rank}
                      </span>
                      <span className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                        {player.name}
                      </span>
                    </div>
                    <span className="font-heading font-black text-xs text-white tracking-wider bg-red-500/10 border border-red-500/20 rounded-md px-2 py-0.5">
                      {player.score}
                    </span>
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
