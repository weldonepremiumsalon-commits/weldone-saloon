"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, ArrowLeft, Sparkles, Map } from "lucide-react";
import Link from "next/link";
import { WOMEN_SERVICES, WOMEN_TEAM, WOMEN_BRANCHES } from "@/lib/data";

export default function WomensStudioPage() {
  const studio = WOMEN_BRANCHES[0];
  const [openServiceId, setOpenServiceId] = useState<string | null>(WOMEN_SERVICES[0]?.id || null);

  if (!studio) return <div className="py-40 text-center text-white">Studio data not found.</div>;

  return (
    <div className="relative min-h-screen pt-40 sm:pt-48 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFB6C1]/5 blur-[150px] pointer-events-none z-0 mix-blend-screen rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFCC00] transition-colors -mb-16">
          <ArrowLeft size={18} /> Back to Main Site
        </Link>
        
        {/* SECTION 1: Studio Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <Sparkles size={14} className="text-[#FFCC00]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">The Exclusive Portal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-white leading-[0.9]">
              Weldone <br/> <span className="text-[#FFCC00]">Women's</span> <br/> Studio
            </h1>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <MapPin className="text-[#FFCC00]" size={24} /> <span className="text-lg">{studio.address}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Phone className="text-[#FFCC00]" size={24} /> <span className="text-lg">{studio.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Clock className="text-[#FFCC00]" size={24} /> <span className="text-lg">{studio.hours}</span>
              </div>
            </div>

            
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#050505]">
             {/* FIXED IMAGE: Object-cover handles mixed aspect ratios, removed dark gradient, added premium inner ring */}
            <img src={studio.image} alt={studio.name} className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover object-center" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>
        </div>

        {/* SECTION 2: Interactive Live Google Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12 border-t border-white/10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3">
              <Map size={14} className="text-[#FFCC00]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Navigation Portal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">Find <span className="text-[#FFCC00]">Us On Map</span></h2>
          </div>
          <div className="w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 relative group">
            <iframe src={studio.mapUrl} className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 color-scheme-dark" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </motion.div>

        {/* SECTION 3: Meet The Team (Minimalist Layout) */}
        {WOMEN_TEAM && WOMEN_TEAM.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Meet The <span className="text-[#FFCC00]">Stylists</span></h2>
              <p className="text-gray-400 text-lg">The elite experts stationed at our exclusive women's studio.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {WOMEN_TEAM.map((artist, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1.5 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                        <MapPin size={14} /> {artist.location || studio.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{artist.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: Studio Services (Interactive Accordion) */}
        <div className="pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Studio <span className="text-[#FFCC00]">Services</span></h2>
            <p className="text-gray-400 text-lg">Premium treatments designed exclusively for women.</p>
          </motion.div>
          <div className="space-y-4">
            {WOMEN_SERVICES.map((category) => {
              const isOpen = openServiceId === category.id;
              return (
                <div key={category.id} className="glass-card bg-black/40 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
                  <button onClick={() => setOpenServiceId(isOpen ? null : category.id)} className="w-full px-6 py-5 sm:py-6 flex justify-between items-center bg-transparent">
                    <span className={`text-lg sm:text-xl font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-[#FFCC00]" : "text-white"}`}>{category.title}</span>
                    <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "bg-[#FFCC00] border-[#FFCC00] text-black rotate-180" : "border-white/10 text-white bg-white/5"}`}><ChevronDown size={20} /></div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2">
                          <div className="w-full h-[1px] bg-white/10 mb-4" />
                          <div className="flex flex-col gap-2">
                            {category.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center group py-3">
                                <span className="text-base sm:text-lg text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                                <div className="flex-grow border-b-2 border-dotted border-white/10 mx-4 group-hover:border-[#FFCC00]/30 transition-colors" />
                                <div className="flex items-start gap-1">
                                  <span className="text-[#FFCC00] text-xs font-bold mt-1">₹</span>
                                  <span className="text-[#FFCC00] font-black text-xl">{item.price}</span>
                                  <span className="text-gray-500 text-xs font-bold mt-1">/-</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}