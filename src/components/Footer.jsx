import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 md:px-8 pt-15 pb-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">

          {/* BRAND */}
          <div>
            <h3 className="text-white font-black uppercase tracking-tight text-xl mb-4">
              Beyond <span className="text-[#FF8A00]">Creatives</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A creative studio helping brands attract attention, build presence,
              and stand out in a crowded digital world.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="md:text-center">
            <p className="text-white uppercase text-xs tracking-[0.3em] mb-6">
              Explore
            </p>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#connect" className="hover:text-white transition">
                  Connect
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT / TRUST */}
          <div className="md:text-right">
            <p className="text-white uppercase text-xs tracking-[0.3em] mb-6">
              Let’s talk
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Melbourne · Australia
            </p>
            
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Beyond Creatives. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.25em]">
            Built to stand out
          </p>
        </div>

      </div>
    </footer>
  );
}
