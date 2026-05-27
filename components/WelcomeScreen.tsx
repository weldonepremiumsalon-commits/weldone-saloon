"use client";
import { motion } from "framer-motion";
import { Sparkles, Scissors, MousePointer2 } from "lucide-react";

export default function WelcomeScreen({ onSelect }: { onSelect: (cat: "men" | "women") => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col md:flex-row bg-[#050505] overflow-hidden">
      
      {/* 1. GLOBAL INSTRUCTIONAL BANNER */}
      <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full text-center px-4">
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="inline-block"
         >
           <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] bg-black/60 backdrop-blur-xl py-3 px-6 rounded-full border border-[#FFCC00]/50 shadow-[0_0_30px_rgba(255,204,0,0.2)] animate-pulse">
             Select your preference to enter
           </p>
         </motion.div>
      </div>

      {/* MEN'S SELECTION PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        onClick={() => onSelect("men")}
        className="flex-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex flex-col justify-center"
      >
        <img 
          src="/men.png" 
          alt="Men's Barbershop" 
          className="absolute inset-0 w-full h-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity group-hover:opacity-80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 pt-16">
          <Scissors size={32} className="text-[#FFCC00] mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden md:block" />
          <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">Men</h2>
          <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-sm mb-8 drop-shadow-md">Premium Barbershop</p>

          {/* 2. EXPLICIT CTA BUTTON */}
          <div className="flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:bg-[#FFCC00] group-hover:text-black group-hover:border-[#FFCC00] transition-all duration-300 shadow-xl">
            <span>Tap to Enter</span>
            <MousePointer2 size={16} className="md:hidden animate-bounce" />
          </div>
        </div>
      </motion.div>

      {/* WOMEN'S SELECTION PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        onClick={() => onSelect("women")}
        className="flex-1 relative group cursor-pointer overflow-hidden flex flex-col justify-center"
      >
        <img 
          src="/women.png" 
          alt="Women's Studio" 
          className="absolute inset-0 w-full h-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity group-hover:opacity-80" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 pt-16">
          <Sparkles size={32} className="text-[#FFCC00] mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden md:block" />
          <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">Women</h2>
          <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-sm mb-8 drop-shadow-md">Exclusive Studio</p>

          {/* 2. EXPLICIT CTA BUTTON */}
          <div className="flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:bg-[#FFCC00] group-hover:text-black group-hover:border-[#FFCC00] transition-all duration-300 shadow-xl">
            <span>Tap to Enter</span>
            <MousePointer2 size={16} className="md:hidden animate-bounce" />
          </div>
        </div>
      </motion.div>

      {/* CENTER LOGO BADGE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="bg-black border border-white/10 p-3 sm:p-4 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <img src="/logo.png" alt="Weldone" className="h-8 sm:h-12 w-auto object-contain" />
        </div>
      </div>

    </div>
  );
}