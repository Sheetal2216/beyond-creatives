import React from "react";
import { motion } from "framer-motion";
import WhiteLogo from "../assets/white-logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[100vw] mx-auto px-6 md:px-12 py-2 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img
            src={WhiteLogo}
            alt="Beyond Creatives Logo"
            className="h-20 md:h-20 w-auto brightness-125"
          />
        </motion.div>

        {/* CENTER: NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.3em] font-black text-white">
          {["Home", "Services"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#FF8A00] transition-colors duration-200 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF8A00] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT: CTA */}
        <motion.a
          href="#connect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF8A00] text-black px-6 py-2 text-[12px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,138,0,0.3)] hover:bg-white transition-all"
        >
          Connect
        </motion.a>

      </div>
    </header>
  );
}
