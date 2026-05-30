"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MEN_TEAM } from "@/lib/data";

export default function TeamPage() {
  const activeTeam = MEN_TEAM;
  const title = "BARBERS";

  return (
    <div className="relative min-h-screen pt-40 sm:pt-48 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase">
            OUR <span className="text-[#FFCC00]">{title}</span>
          </h1>
          <p className="text-gray-400 text-lg">The elite craftsmen behind the chair.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTeam.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[4/5]"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* Dark gradient so the white text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                {/* Location Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1.5 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                    <MapPin size={14} /> {artist.location}
                  </span>
                </div>

                {/* Barber Name */}
                <h3 className="text-2xl font-black text-white">{artist.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}