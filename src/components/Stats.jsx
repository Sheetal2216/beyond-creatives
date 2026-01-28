import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StatsVideo from "../assets/stats/stats-video.mp4";


// ICONS
import I1 from "../assets/stats/stats-1.png";
import I2 from "../assets/stats/stats-2.png";
import I3 from "../assets/stats/stats-3.png";
import I4 from "../assets/stats/stats-4.png";

/* =======================
   STATS DATA
======================= */
const stats = [
  {
    value: 3000000000,
    label: "Total Views Generated",
    suffix: "+",
    icon: I1,
  },
  {
    value: 15000000,
    label: "Community Reach",
    suffix: "+",
    icon: I2,
  },
  {
    value: 110000000,
    label: "Instagram Views / 28 Days",
    suffix: "+",
    icon: I3,
  },
  {
    value: 60000000,
    label: "YouTube Views / 28 Days",
    suffix: "+",
    icon: I4,
  },
];

/* =======================
   COUNT UP COMPONENT
======================= */
function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(count)}
      {suffix}
    </span>
  );
}

/* =======================
   MAIN COMPONENT
======================= */
export default function Stats() {
  return (
    <section id="stats"  className="bg-black py-16 px-6 md:px-12 relative overflow-hidden">

      {/* Grain Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.6em] text-[#FF8A00] text-xs font-black mb-10"
        >
          Measurable Creativity
        </motion.p>

        {/* HEADER + IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT IMAGE */}
         <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="hidden lg:flex justify-start relative"
>
 <video
  src={StatsVideo}
  autoPlay
  loop
  muted
  playsInline
  className="w-[580px] xl:w-[580px] opacity-90 relative z-10 rounded-2xl
             [mask-image:radial-gradient(circle,white_60%,transparent_100%)]
             [-webkit-mask-image:radial-gradient(circle,white_60%,transparent_100%)]"
/>


  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#FF8A00]/20 blur-[120px]" />
</motion.div>


          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-[84px] font-black uppercase text-white leading-[0.9] tracking-tighter mb-8">
              Numbers that prove
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #FF8A00" }}
              >
                our impact
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Every metric reflects real attention, real engagement, and real
              growth — built through strategy, creativity, and execution.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[2px] bg-[#FF8A00]/40 mb-15 relative">
          <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FF8A00] rotate-45 -translate-y-1/2"></div>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      className="group relative p-5 bg-white overflow-hidden
                 border-l-4 border-t-4 border-[#FF8A00]/20
                 hover:border-[#FF8A00] transition-all"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br from-[#FF8A00]/12 to-transparent" />

      {/* Corner Bracket */}
      <div className="absolute bottom-3 right-3 w-5 h-5
                      border-r-2 border-b-2 border-[#FF8A00]/40" />

      <div className="relative z-10">

        {/* ICON */}
        <div className="relative w-[120px] h-[120px] mb-4 flex items-center justify-center">
          {/* SMALL FIXED GLOW */}
          <div className="absolute w-8 h-8 bg-[#FF8A00]/35 blur-md rounded-full"></div>

          {/* ICON IMAGE */}
          <img
            src={stat.icon}
            alt={stat.label}
            className="relative z-10 w-[120px] h-[120px] object-contain"
          />
        </div>

        {/* NUMBER */}
        <h3 className="text-4xl font-black text-black mb-1 tracking-tighter">
          <CountUp end={stat.value} suffix={stat.suffix} />
        </h3>

        {/* LINE */}
        <div className="relative h-[2px] w-12 bg-[#FF8A00]/40 mb-2 overflow-hidden">
          <span className="absolute left-0 top-0 h-full w-0 bg-[#FF8A00]
                           group-hover:w-full transition-all duration-500" />
        </div>

        {/* LABEL */}
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px]
                      group-hover:text-white transition-colors">
          {stat.label}
        </p>

      </div>
    </motion.div>
  ))}
</div>



        {/* FOOT NOTE */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-[0.4em]">
            Real metrics · Real attention · Real growth
          </p>
        </div>

      </div>
    </section>
  );
}
