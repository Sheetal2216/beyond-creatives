import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhiteLogo from "../assets/white-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[100vw] mx-auto px-6 md:px-12 py-2 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <img
            src={WhiteLogo}
            alt="Beyond Creatives Logo"
            className="h-16 md:h-20 w-auto brightness-125"
          />
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.3em] font-black text-white">
          {["Home", "Services", "Stats"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#FF8A00] transition-colors relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF8A00] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* CTA (always visible) */}
          <motion.a
  href="https://forms.gle/2XYpqYUAVyP5eqcF6"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-[#FF8A00] text-black px-5 py-2 text-[11px] md:text-[12px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,138,0,0.3)] hover:bg-white transition-all"
>
  Connect
</motion.a>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl font-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10"
          >
            <nav className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-[0.35em] font-black text-white">
              {["Home", "Services", "Stats"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#FF8A00] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
