"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, ArrowLeft, Map, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { MEN_SERVICES, MEN_BRANCHES, MEN_TEAM } from "@/lib/data";

export default function BranchClient({ slug }: { slug: string }) {
  const branch = MEN_BRANCHES.find((b) => b.slug === slug);
  const branchArtists = MEN_TEAM.filter((artist) => artist.location === branch?.name);
  const [openServiceId, setOpenServiceId] = useState<string | null>(MEN_SERVICES[0]?.id || null);

  if (!branch) return <div className="py-40 text-center text-white text-2xl font-bold">Branch Not Found</div>;

  const displayName = branch.name.replace(/\s+branch$/i, '');

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 mix-blend-screen rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        <Link href="/branches" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFCC00] transition-colors -mb-16">
          <ArrowLeft size={18} /> Back to all locations
        </Link>
        
        {/* SECTION 1: Branch Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          
          {/* FIX 3: Added min-w-0 here to prevent grid column blowout */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="min-w-0">
            
            {/* FIX 1 & 2: Added break-words, and tweaked lg/xl sizing so it shrinks slightly when splitting into 2 columns */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tighter mb-6 uppercase text-white break-words">
              {displayName} <br/> <span className="text-[#FFCC00]">Branch</span>
            </h1>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <MapPin className="text-[#FFCC00] shrink-0" size={24} /> <span className="text-lg truncate">{branch.address}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Phone className="text-[#FFCC00] shrink-0" size={24} /> <span className="text-lg">{branch.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Clock className="text-[#FFCC00] shrink-0" size={24} /> <span className="text-lg">{branch.hours}</span>
              </div>
            </div>
         
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#050505]">
  <div className="w-full aspect-video">
    <img src={branch.image} alt={branch.name} className="w-full h-full object-cover object-center" />
  </div>
  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
</motion.div>
        </div>

        {/* SECTION 3: Interactive Live Google Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12 border-t border-white/10">
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3">
              <Map size={14} className="text-[#FFCC00]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Navigation Portal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">Find <span className="text-[#FFCC00]">Us On Map</span></h2>
          </div>
          <div className="w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 relative group">
            <iframe src={branch.mapUrl} className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 color-scheme-dark" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </motion.div>
        
        {/* SECTION 2: The Space (Interior Gallery) */}
        {branch.interiorImages && branch.interiorImages.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12 border-t border-white/10">
            <div className="mb-10 text-center sm:text-left">
              <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3">
                <ImageIcon size={14} className="text-[#FFCC00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">The <span className="text-[#FFCC00]">Space</span></h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {branch.interiorImages.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: idx * 0.1 }} 
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] relative group shadow-lg"
                >
                  <img 
                    src={img} 
                    alt={`${branch.name} interior ${idx + 1}`} 
                    className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SECTION 4: Meet The Team */}
        {branchArtists && branchArtists.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Meet The <span className="text-[#FFCC00]">Artists</span></h2>
              <p className="text-gray-400 text-lg">The elite craftsmen stationed at {branch.name}.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {branchArtists.map((artist, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1.5 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                        <MapPin size={14} /> {artist.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{artist.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: Standard Branch Services */}
        <div className="pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Branch <span className="text-[#FFCC00]">Services</span></h2>
            <p className="text-gray-400 text-lg">Standardized premium treatments available at all WELDONE locations.</p>
          </motion.div>
          <div className="space-y-4">
            {MEN_SERVICES.map((category) => {
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