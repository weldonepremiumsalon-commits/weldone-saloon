"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { MEN_BRANCHES } from "@/lib/data";

export default function BranchesPage() {
  return (
    <div className="relative min-h-screen pt-40 sm:pt-48 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
            OUR <span className="text-[#FFCC00]">STATIONS</span>
          </h1>
          <p className="text-gray-400 text-lg">Find a premium barbershop near you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {MEN_BRANCHES.map((branch, index) => (
            <motion.div 
              key={branch.slug} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1 }} 
              className="glass-card bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col group hover:border-white/20"
            >
              {/* Image container: fixed 16:9 ratio, image fits fully inside without cropping */}
              <div className="w-full h-[220px] relative overflow-hidden">
  <img 
    src={branch.image} 
    alt={branch.name} 
    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
  />
  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-t-3xl" />
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
                  href={`/branches/${branch.slug}`}
                  className="w-full py-4 bg-white/5 hover:bg-[#FFCC00] text-white hover:text-black font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}