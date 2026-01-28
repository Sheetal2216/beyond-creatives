import React, { useEffect, useState } from "react";

import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import C4 from "../assets/c4.png";
import C5 from "../assets/c5.png";
import C6 from "../assets/c6.png";
import C7 from "../assets/c7.png";

const clients = [
  { name: "Arvind Arora (A2 Motivation)", role: "Entrepreneur & Motivational Speaker", audience: "25M+ followers", img: C1 },
  { name: "Astro Arun Pandit", role: "Celebrity Astrologer", audience: "2.4M IG · 2.75M YT · 1.2L+ clients", img: C2 },
  { name: "The Awaara Musaafir Show", role: "Travel & Talk Show", audience: "540K+ followers", img: C3 },
  { name: "Mansie Y. Thakkar", role: "Leadership Coach · TEDx Speaker", audience: "600K+ followers", img: C4 },
  { name: "Astro Ankit Sharma", role: "Vedic Astrologer", audience: "94.1K+ subscribers", img: C5 },
  { name: "Astro Anand Sharma", role: "Astrologer & Creator", audience: "52.3K+ followers", img: C6 },
  { name: "Hiten Daxini", role: "Financial Consultant", audience: "Investment advisory audience", img: C7 },
];

export default function Clients() {
  const [active, setActive] = useState(0);
  const total = clients.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getOffset = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="worked-with" className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-1">
          <p className="uppercase tracking-[0.45em] text-[#FF8A00] text-xs font-black mb-4">
            Collaborations
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-slate-900 leading-none tracking-tighter mb-6">
            Trusted by <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF8A00" }}>
              creators
            </span>{" "}
            & <span className="text-[#FF8A00]">leaders</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We’ve collaborated with voices that influence millions.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative h-[420px] flex items-center justify-center perspective-[1200px]">
          {clients.map((client, index) => {
            const offset = getOffset(index);
            if (Math.abs(offset) > 2) return null;

            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="absolute transition-all duration-700 ease-out cursor-pointer hover:-translate-y-2"
                style={{
                  transform: `
                    translateX(${offset * 320}px)
                    scale(${offset === 0 ? 1.15 : 0.85})
                    rotateY(${offset * -18}deg)
                  `,
                  zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                  opacity: offset === 0 ? 1 : 0.55,
                }}
              >
                {/* CARD */}
                <div
                  className={`
                    relative w-[300px] p-1 rounded-2xl text-center overflow-hidden
                    ${offset === 0
                      ? "bg-white border border-[#FF8A00]/30 shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"}
                  `}
                >
                  {/* ORANGE GLOW */}
                  {offset === 0 && (
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF8A00]/25 blur-[90px]" />
                  )}

                  {/* AVATAR */}
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#FF8A00]/30 blur-md" />
                    <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <img
                        src={client.img}
                        alt={client.name}
                        className={`w-full h-full object-cover transition duration-700 ${
                          offset === 0 ? "scale-105 grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <h3 className="text-slate-900 font-black uppercase text-sm tracking-wide mb-1">
                    {client.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    {client.role}
                  </p>
                  <span className="inline-block text-[#FF8A00] text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF8A00]/10">
                    {client.audience}
                  </span>

                  {/* SUBTLE GRAIN */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
