import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3000000000, label: "Total Views Generated", suffix: "+", icon: "👁️" },
  { value: 15000000, label: "Community Reach", suffix: "+", icon: "👥" },
  { value: 110000000, label: "Instagram Views / 28d", suffix: "+", icon: "📸" },
  { value: 60000000, label: "YouTube Views / 28d", suffix: "+", icon: "▶️" },
];

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000; 
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOutExpo * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-black py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Grain Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-24">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="uppercase tracking-[0.6em] text-[#FF8A00] text-xs font-black mb-6"
          >
            Creative Impact [2026]
          </motion.p>

        {/* STATS HEADER */}
<div className="max-w-3xl mb-20">
 

  {/* MAIN HEADLINE */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight tracking-tight mb-6">
    Numbers that prove{" "}
    <span
      className="text-transparent"
      style={{ WebkitTextStroke: "2px #FF8A00" }}
    >
      our impact
    </span>
  </h2>

  {/* SUBLINE */}
  <p className="text-gray-400 text-lg leading-relaxed">
    Every metric reflects real attention, real engagement, and real growth —
    built through strategy, creativity, and execution.
  </p>
</div>




          <div className="w-full h-[2px] bg-[#FF8A00] mb-8 relative">
             <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF8A00] -translate-y-1/2 rotate-45" />
          </div>
        </div>

        {/* STATS GRID WITH CUSTOM BORDERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-black overflow-hidden transition-all duration-300 border-l-4 border-t-4 border-[#FF8A00]/20 hover:border-[#FF8A00]"
            >
              {/* POSCA HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FF8A00]/20 to-transparent z-0" />

              {/* CARD DECORATION: BRACKETS */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FF8A00] opacity-30 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all flex justify-between items-center">
                    {stat.icon}
                    <span className="text-[10px] font-mono text-[#FF8A00] opacity-0 group-hover:opacity-100 uppercase tracking-widest">Live_Data</span>
                </div>
                
                <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                
                {/* ORANGE LINE UNDER NUMBER */}
                <div className="w-12 h-1 bg-[#FF8A00] mb-4 group-hover:w-full transition-all duration-500" />
                
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}