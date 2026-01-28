import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="connect"
      className="w-full bg-black px-6 md:px-12 py-10 relative overflow-hidden"
    >
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Accent line */}
        <div className="w-20 h-[2px] bg-[#FF8A00] mx-auto mb-10"></div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-8">
          Let’s build something <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px #FF8A00" }}
          >
            that stands out
          </span>
        </h2>

        {/* Subline */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-14">
          If you’re ready to elevate your brand, attract attention, and create
          work that actually performs — let’s start the conversation.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Primary CTA */}
         <motion.a
  href="https://forms.gle/2XYpqYUAVyP5eqcF6"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="bg-[#FF8A00] text-black px-12 py-4 rounded-full
             text-sm font-black uppercase tracking-widest
             transition-transform"
>
  Connect with us
</motion.a>


          {/* Secondary CTA */}
          <a
            href="#worked-with"
            className="text-white/70 uppercase text-xs tracking-[0.3em]
                       hover:text-white transition-colors"
          >
            View capabilities
          </a>

        </div>
      </div>
    </section>
  );
}
