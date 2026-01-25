import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/Hero.png";

export default function Hero() {
  // Stagger variants for the text elements
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const textItemVars = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      
      {/* 1. LEFT SIDE: CONTENT AREA (50%) */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex items-center px-6 md:px-16 lg:px-24 py-20 z-20 bg-black"
      >
        <div className="w-full">
          {/* TAGLINE - POSCA ORANGE */}
          <motion.p 
            variants={textItemVars}
            className="uppercase tracking-[0.5em] text-[#FF8A00] font-black text-[10px] md:text-xs mb-6"
          >
            Elevating Brands That Dare to Stand Out
          </motion.p>

          {/* MAIN HEADLINE - ULTRA BOLD & MASKED STROKE */}
          <motion.h1 
            variants={textItemVars}
            className="text-5xl md:text-7xl lg:text-[100px] font-black uppercase leading-[0.85] tracking-tighter text-white mb-8"
          >
            We Craft <br />
            <span className="text-[#FF8A00]">Visuals</span> <br />
            That Make You <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #FF8A00' }}>
              Unforgettable
            </span>
          </motion.h1>

          {/* SUBLINE - BOLD LEFT BORDER */}
          <motion.p 
            variants={textItemVars}
            className="text-gray-400 text-lg md:text-xl max-w-md leading-tight mb-12 border-l-4 border-[#FF8A00] pl-6"
          >
            From bold branding to dynamic CGI and cutting-edge content, we design 
            experiences that set you apart and captivate your audience.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div variants={textItemVars}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF" }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-12 py-5 font-black text-black transition-colors duration-300 bg-[#FF8A00] rounded-none group overflow-hidden"
            >
              <span className="relative uppercase tracking-widest text-sm">Book a Discovery Call</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. RIGHT SIDE: IMAGE AREA (50%) */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:min-h-screen overflow-hidden">
        {/* Animated Image Reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="w-full h-full"
        >
          <img
            src={HeroImage}
            alt="Beyond Creatives Hero"
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.15] brightness-[0.95]"
          />
        </motion.div>

        {/* THE "FADE JOIN" - Blends the image into the black content area */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden md:block"></div>
        
        {/* TEXTURE OVERLAY - Poster Feel (Specific to Image side) */}
        <div className="absolute inset-0 z-[11] pointer-events-none opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* MELBOURNE DETAIL - Rotated Label */}
        <div className="absolute bottom-12 right-12 hidden lg:block z-20">
          <p className="text-white/40 font-bold text-[10px] tracking-[1.2em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Melbourne — AU — 2026
          </p>
        </div>
      </div>

    </section>
  );
}