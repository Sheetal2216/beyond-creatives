import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    // Total duration of the intro before it slides out
    const timer = setTimeout(onFinish, 4500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden flex flex-col items-center justify-center"
   exit={{
  y: "-100%",
  scale: 0.97,
  opacity: 0.9,
  filter: "blur(10px)",
  transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
}}

    >
      {/* 1. ANIMATED VERTICAL BARS (The "Visualizer" Effect) */}
    {/* 1. ANIMATED VERTICAL BARS (Enhanced Glow Visualizer) */}
<div className="absolute inset-0 flex items-center justify-around px-4 opacity-50">
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ height: "25%", opacity: 0.15 }}
      animate={{
        height: ["25%", "100%", "45%", "85%", "25%"],
        opacity: [0.15, 0.6, 0.3, 0.8, 0.15],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        delay: i * 0.08,
        ease: "easeInOut",
      }}
      className="
        relative
        w-[6px] md:w-[10px]
        rounded-full
        bg-gradient-to-t
        from-[#FF8A00]
        via-[#FFB347]
        to-[#FF8A00]
      "
    >
      {/* INNER CORE GLOW */}
      <div className="absolute inset-0 bg-[#FF8A00] blur-[6px] opacity-70" />

      {/* OUTER SOFT HALO */}
      <div className="absolute -inset-2 bg-[#FF8A00] blur-[18px] opacity-40" />
    </motion.div>
  ))}
</div>


      {/* 2. CENTER CONTENT (TEXT BUILD) */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* TITLE: BEYOND (Kinetic Expansion) */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%", letterSpacing: "1.5em", opacity: 0 }}
            animate={{ 
              y: 0, 
              letterSpacing: "0.4em", 
              opacity: 1 
            }}
            transition={{ 
              duration: 1.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3 
            }}
            className="text-white text-5xl md:text-8xl font-black uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            BEYOND
          </motion.h1>
        </div>

        {/* SUBTITLE: CREATIVES (Orange Glow Build) */}
        <div className="relative overflow-hidden py-2">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-[#FF8A00] text-xl md:text-2xl font-black uppercase tracking-[1em] ml-[1em]"
          >
            CREATIVE
          </motion.h2>
          
          {/* Futuristic Scanning Line */}
          <motion.div 
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 1.8, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_#FF8A00] z-20"
          />
        </div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-gray-400 uppercase tracking-[0.5em] text-[10px] mt-8"
        >
          Crafting Attention
        </motion.p>

        {/* LOADING LINE */}
        <div className="relative mt-6 w-48 h-[1px] bg-white/10 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[#FF8A00]"
          />
        </div>
      </div>

      {/* 3. FINAL FLASH OVERLAY */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 3.8, duration: 0.4 }}
        className="absolute inset-0 bg-white z-[100] pointer-events-none"
      />

      {/* 4. POSTER GRAIN (The Posca Look) */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </motion.div>
  );
}