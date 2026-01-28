import React from "react";
import { motion } from "framer-motion";

// Assuming imports remain the same
import S1 from "../assets/s1.png"; 
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S5 from "../assets/s5.png";
import S6 from "../assets/s6.png";
import S7 from "../assets/s7.png";
import S8 from "../assets/s8.png";
import S9 from "../assets/s9.png";
import ServicesHero from "../assets/services-1.png";

const services = [
  { id: "01", title: "Social Media Management", desc: "Consistency and growth across platforms.", sticker: "GROWTH", img: S1 },
  { id: "02", title: "Branding", desc: "Distinctive identities that command attention.", sticker: "ELITE", img: S2 },
  { id: "03", title: "CGI Videos", desc: "Hyper-realistic visuals for high-end campaigns.", sticker: "NEW", img: S3 },
  { id: "04", title: "Content Shoot", desc: "Professional production tailored to your vision.", sticker: "LIVE", img: S4 },
  { id: "05", title: "3D & Animation", desc: "Dynamic motion that brings stories to life.", sticker: "3D", img: S5 },
  { id: "06", title: "Web Development", desc: "High-performance digital experiences.", sticker: "UX", img: S6 },
  { id: "07", title: "P    erformance Marketing", desc: "Data-driven results and ROI scaling.", sticker: "ROI", img: S7 },
  { id: "08", title: "Public Relations", desc: "Strategic visibility and brand authority.", sticker: "PR", img: S8 },
  { id: "09", title: "Digital Marketing", desc: "Holistic strategies for the modern market.", sticker: "AD-LAB", img: S9 },
];

export default function Services() {
  return (
    // 1. Changed bg-black to bg-white
<section id="services" className="w-full bg-white py-10 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Texture - Adjusted opacity for white bg */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 TOP CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.45em] text-[#FF8A00] text-xs font-black mb-6">
              What we do
            </p>

            {/* 2. Changed text-white to text-slate-900 */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-slate-900 leading-tight mb-8">
              We help brands <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF8A00" }}>
                stand out
              </span>{" "}
              and scale
            </h2>

            {/* 3. Changed text-gray-400 to text-gray-600 */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Beyond Creatives works with brands and creators to attract the right
              audience, elevate their visual presence, and turn ideas into
              high-impact content. From strategy to execution, we guide you
              through every step.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={ServicesHero}
              alt="Creative services visual"
              className="w-full h-full object-cover transition duration-500"
            />
            {/* 4. Changed gradient from black to white */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>

          </div>
        </div>

        {/* 🔥 EXISTING HEADER */}
        <div className="mb-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-[0.5em] text-[#FF8A00] font-black text-xs "
          >
            Capabilities
          </motion.p>

          {/* 5. Changed text-white to text-slate-900 */}
          <h2 className="text-6xl md:text-8xl font-black uppercase text-slate-900 tracking-tighter leading-none">
            Our{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF8A00" }}>
              Toolkit
            </span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotate: index % 2 === 0 ? 0.5 : -0.5, scale: 1.01 }}
              viewport={{ once: true }}
              // 6. Border changed to light gray, added shadow
              className="group relative h-[400px] flex flex-col justify-end overflow-hidden border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* IMAGE BACKGROUND */}
              <img 
                src={service.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100" 
                alt={service.title} 
              />
              
              {/* 7. Changed Vignette from black to white/gray gradient for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent z-10 transition-all duration-500"></div>


              {/* SERVICE ID */}
              {/* 8. Changed text-white/20 to slate-900/10 */}
              <span className="absolute top-6 left-8 text-5xl font-black text-slate-900/10 z-20 group-hover:text-[#FF8A00] transition-colors">
                {service.id}
              </span>

              {/* POSCA STICKER */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-[#FF8A00] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest -rotate-2 group-hover:rotate-3 transition-transform shadow-lg">
                  {service.sticker}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-20 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                {/* 9. Changed title to slate-900, desc to gray-600 */}
               <h3 className="text-2xl font-white uppercase tracking-tighter text-white mb-2 leading-none">

                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}