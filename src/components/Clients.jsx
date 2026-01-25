import React, { useEffect, useRef, useState } from "react";

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

// duplicate list for infinite loop
const loopClients = [...clients, ...clients];

export default function Clients() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      slider.scrollLeft += 1;

      // seamless loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const togglePause = () => {
    setPaused(prev => !prev);
  };

  return (
    <section className="bg-black px-6 md:px-12 py-15 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[0.45em] text-[#FF8A00] text-xs font-black mb-4">
            Collaborations
          </p>
         <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-none tracking-tighter mb-6">
  Trusted by
  <br />
  <span
    className="text-transparent"
    style={{ WebkitTextStroke: "2px #FF8A00" }}
  >
    creators
  </span>{" "}
  &
  <span className="text-[#FF8A00]"> leaders</span>
</h2>

          <p className="text-gray-400 text-lg">
            We’ve collaborated with voices that influence millions, supporting
            growth, clarity, and stronger digital presence.
          </p>
        </div>

        {/* AUTOPLAY STRIP */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-hidden cursor-pointer select-none"
        >
          {loopClients.map((client, index) => (
            <div
              key={index}
              onClick={togglePause}
              className="min-w-[260px] bg-black border border-white/10 p-6 flex flex-col items-center text-center"
            >
               {/* IMAGE WITH ORANGE CIRCLE */}
              <div className="w-28 h-28 rounded-full border-4 border-[#FF8A00] flex items-center justify-center mb-6">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition"
                />
              </div>


              {/* TEXT */}
              <h3 className="text-white font-black uppercase text-sm mb-2">
                {client.name}
              </h3>
              <p className="text-gray-400 text-xs mb-2">
                {client.role}
              </p>
              <p className="text-[#FF8A00] text-xs font-bold">
                {client.audience}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
