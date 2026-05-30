"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Scissors, Sofa } from "lucide-react";
import { GALLERY_CUTS, GALLERY_INTERIOR } from "@/lib/data";

export default function GalleryPage() {
  // 1. Tab State
  const [activeTab, setActiveTab] = useState<"cuts" | "interior">("cuts");
  const activeGallery = activeTab === "cuts" ? GALLERY_CUTS : GALLERY_INTERIOR;
  
  // 2. Read URL for automatic tab switching
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "interior") {
      setActiveTab("interior");
    }
  }, []);
  
  // 3. Lightbox State
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // 4. Swipe Handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleNext = () => setSelectedIndex(prev => prev !== null ? (prev + 1) % activeGallery.length : null);
  const handlePrev = () => setSelectedIndex(prev => prev !== null ? (prev === 0 ? activeGallery.length - 1 : prev - 1) : null);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-12 pt-40 sm:pt-48 pb-24 flex flex-col items-center overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center z-10"
      >
        {/* Header */}
        <div className="mb-12 text-center w-full max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase">
            THE <span className="text-[#FFCC00]">LOOKBOOK</span>
          </h1>
          <p className="text-gray-400 text-lg">Curated craftsmanship and premium spaces.</p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex justify-center mb-12 sm:mb-16 w-full">
          <div className="bg-black/60 border border-white/10 p-1.5 sm:p-2 rounded-full flex flex-row gap-1 sm:gap-2 backdrop-blur-xl w-full max-w-[320px] sm:max-w-md shadow-2xl">
            <button
              onClick={() => setActiveTab("cuts")}
              className={`flex-1 flex items-center justify-center gap-2 px-2 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === "cuts"
                  ? "bg-[#FFCC00] text-black shadow-[0_0_20px_rgba(255,204,0,0.3)] scale-100"
                  : "text-gray-400 hover:text-white scale-95 hover:scale-100"
              }`}
            >
              <Scissors size={16} /> Cuts & Styles
            </button>
            <button
              onClick={() => setActiveTab("interior")}
              className={`flex-1 flex items-center justify-center gap-2 px-2 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === "interior"
                  ? "bg-[#FFCC00] text-black shadow-[0_0_20px_rgba(255,204,0,0.3)] scale-100"
                  : "text-gray-400 hover:text-white scale-95 hover:scale-100"
              }`}
            >
              <Sofa size={16} /> The Space
            </button>
          </div>
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl"
          >
            {activeGallery.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 ${
                  activeTab === "cuts" ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0" />
                
                {/* FIX: Dark gradient is now permanently visible at opacity-90 so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* FIX: Removed opacity-0 and transform animations from the text so it sits permanently at the bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  
                  {/* The hover zoom icon (kept hidden until hover) */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                    <Maximize2 size={18} className="text-[#FFCC00]" />
                  </div>

                  {/* Always-visible text */}
                  <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedIndex(null)} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 touch-none">
            <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 text-white/50 hover:text-[#FFCC00] p-3 z-50"><X size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#FFCC00] hidden sm:block p-3 z-50"><ChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#FFCC00] hidden sm:block p-3 z-50"><ChevronRight size={40} /></button>

            <motion.div 
              key={selectedIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full flex flex-col items-center pb-20 sm:pb-0"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); }}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={onTouchEnd}
            >
              <img src={activeGallery[selectedIndex].image} alt={activeGallery[selectedIndex].title} className="w-full h-full max-h-[55vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl pointer-events-none" />
              <div className="mt-4 text-center z-10 relative">
                <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-2 block">{activeGallery[selectedIndex].category}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white px-4">{activeGallery[selectedIndex].title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}