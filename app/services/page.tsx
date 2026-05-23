"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategory } from "@/components/CategoryProvider";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { MEN_SERVICES, WOMEN_SERVICES } from "@/lib/data";

export default function ServicesPage() {
  // --- GLOBAL CATEGORY STATE ---
  const { category } = useCategory();
  
  // Choose which data set to display
  const serviceCategories = category === "women" ? WOMEN_SERVICES : MEN_SERVICES;
  const pageTitle = category === "women" ? "STUDIO SERVICES" : "BARBERSHOP SERVICES";

  // Local state: currently active category (by id) inside the selected data set
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  // Reset the active sub‑category when the global category (men/women) changes
  useEffect(() => {
    setActiveCategory(serviceCategories[0].id);
  }, [category, serviceCategories]);

  const currentData = serviceCategories.find(cat => cat.id === activeCategory);

  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll centering on mobile
  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];
    const container = scrollContainerRef.current;
    if (activeButton && container && window.innerWidth < 768) {
      const containerCenter = container.offsetWidth / 2;
      const buttonCenter = activeButton.offsetLeft + activeButton.offsetWidth / 2;
      const scrollPos = buttonCenter - containerCenter;
      container.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <div className="relative container mx-auto px-4 sm:px-6 pt-40 sm:pt-48 pb-24 min-h-screen overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">
          OUR <span className="text-[#FFCC00]">{pageTitle.split(" ")[0]}</span> {pageTitle.split(" ")[1]}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {category === "women"
            ? "Luxury treatments, precision colour, and indulgent care."
            : "Comprehensive grooming and wellness treatments."}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-10">
        {/* LEFT COLUMN: Category Navigation */}
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
          <div
            ref={scrollContainerRef}
            className="sticky top-32 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar border-b md:border-b-0 border-white/10 md:border-l border-white/10 md:pl-6 relative"
          >
            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  ref={(el) => {
                    buttonRefs.current[cat.id] = el;
                  }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative whitespace-nowrap text-left px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm flex-shrink-0 ${
                    isActive
                      ? "text-black bg-[#FFCC00] shadow-[0_0_20px_rgba(255,204,0,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.title}
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFCC00] hidden md:block"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Cinematic Image Banner + Price List */}
        <div className="md:w-2/3 lg:w-3/4 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}   // key change triggers animation only on sub‑category switch
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-64 lg:h-72">
                <img
                  src={currentData?.image}
                  alt={currentData?.title}
                  className="w-full h-full object-cover lg:grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10">
                  <span className="text-[#FFCC00] text-xs font-bold tracking-widest uppercase mb-2 block drop-shadow-md">
                    WELDONE Signature
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
                    {currentData?.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col gap-2">
                {currentData?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    key={index}
                    className="flex justify-between items-center group py-4 border-b border-white/5 hover:border-[#FFCC00]/30 transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <div className="flex-grow border-b-2 border-dotted border-white/10 mx-6 group-hover:border-[#FFCC00]/30 transition-colors hidden sm:block" />
                    <div className="flex items-start gap-1">
                      <span className="text-[#FFCC00] text-sm font-bold mt-1">₹</span>
                      <span className="text-[#FFCC00] font-black text-xl sm:text-2xl">{item.price}</span>
                      <span className="text-gray-500 text-sm font-bold mt-1">/-</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      {/* DIRECT BOOKING CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full flex justify-center mt-16 relative z-10"
      >
        <Link 
          href="/branches"
          className="px-8 py-5 bg-[#FFCC00] text-black font-black uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(255,204,0,0.3)] flex items-center gap-3"
        >
          <MapPin size={20} />
          Find Your Nearest Station
        </Link>
      </motion.div>

    </div>
  );
}