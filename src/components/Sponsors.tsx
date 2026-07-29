import React from "react";

const sponsorsList = [
  { name: "NIT DELHI", logo: "🏛️" },
  { name: "INDIAN IOT", logo: "📡" },
  { name: "NIT SILCHAR", logo: "🏛️" },
  { name: "ROBO COMPANY", logo: "🤖" },
  { name: "IIT BOMBAY", logo: "🏛️" },
  { name: "General Robotics", logo: "⚙️" },
  { name: "ROBO COMPANY", logo: "🔩" }
];

export default function Sponsors() {
  return (
    <section className="py-16 bg-[#070707] border-t border-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h3 className="text-gray-500 text-[10px] font-extrabold uppercase tracking-widest text-center mb-10">
          SPONSORS & PARTNERS
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-60">
          {sponsorsList.map((sponsor, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center text-center p-4 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="text-3xl mb-2 filter grayscale brightness-120">
                {sponsor.logo}
              </div>
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
