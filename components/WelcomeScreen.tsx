"use client";
import { motion } from "framer-motion";
import { Sparkles, Scissors } from "lucide-react";

export default function WelcomeScreen({ onSelect }: { onSelect: (cat: "men" | "women") => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col md:flex-row bg-[#050505] overflow-hidden">
      
      {/* MEN'S SELECTION PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        onClick={() => onSelect("men")}
        className="flex-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 overflow-hidden"
      >
        <img 
          src="/men.png" 
          alt="Men's Barbershop" 
          className="absolute inset-0 w-full h-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
          <Scissors size={32} className="text-[#FFCC00] mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">Men</h2>
          <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-sm">Premium Barbershop</p>
        </div>
      </motion.div>

      {/* WOMEN'S SELECTION PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        onClick={() => onSelect("women")}
        className="flex-1 relative group cursor-pointer overflow-hidden"
      >
        <img 
          src="/women.png" 
          alt="Women's Studio" 
          className="absolute inset-0 w-full h-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
          <Sparkles size={32} className="text-[#FFCC00] mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">Women</h2>
          <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-sm">Exclusive Studio</p>
        </div>
      </motion.div>

      {/* CENTER LOGO BADGE */}
      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
  <div className="relative">

    <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl scale-150"></div>

    <div className="relative bg-black/80 backdrop-blur-md border border-white/10 px-8 py-6 rounded-full shadow-2xl">
      <img
        src="/logo.png"
        alt="Weldone"
        className="h-20 w-auto object-contain"
      />
    </div>

  </div>
</div>

    </div>
  );
}