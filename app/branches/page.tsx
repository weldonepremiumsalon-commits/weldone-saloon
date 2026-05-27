"use client";
import { useCategory } from "@/components/CategoryProvider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { MEN_BRANCHES, WOMEN_BRANCHES } from "@/lib/data";

export default function BranchesPage() {
  const { category } = useCategory();
  const activeBranches = category === "women" ? WOMEN_BRANCHES : MEN_BRANCHES;

  return (
    <div className="relative min-h-screen pt-40 sm:pt-48 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <AnimatePresence mode="wait">
        <motion.div key={category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
              OUR <span className="text-[#FFCC00]">STATIONS</span>
            </h1>
            <p className="text-gray-400 text-lg">Find a {category === "women" ? "women's studio" : "men's barbershop"} near you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {activeBranches.map((branch, index) => (
              <motion.div 
                key={branch.slug} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                className="glass-card bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col group hover:border-white/20"
              >
                {/* FIXED IMAGE CONTAINER: 
                  - Increased height slightly for a more premium look (h-56 sm:h-64).
                  - Removed the dark gradient overlay completely.
                  - Added a subtle inner border (ring) so the edges look crisp. 
                */}
                {/* Replace the existing image div with this */}
<div className="w-full aspect-[4/3] overflow-hidden relative bg-[#0a0a0a] flex items-center justify-center">
  <img 
    src={branch.image} 
    alt={branch.name} 
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
  />
  {/* Subtle inner border to frame the image against the dark card */}
  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
  {/* Add this just before the closing </div> of the image container */}
<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
</div>
                
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-black text-white mb-6">{branch.name}</h2>
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="text-[#FFCC00] shrink-0" size={20} />
                      <span className="text-sm font-medium">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="text-[#FFCC00] shrink-0" size={20} />
                      <span className="text-sm font-medium">{branch.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="text-[#FFCC00] shrink-0" size={20} />
                      <span className="text-sm font-medium">{branch.phone}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={category === "women" ? "/womens-studio" : `/branches/${branch.slug}`}
                    className="w-full py-4 bg-white/5 hover:bg-[#FFCC00] text-white hover:text-black font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}