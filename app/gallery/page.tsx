"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { MEN_GALLERY } from "@/lib/data";

export default function GalleryPage() {
  const activeGallery = MEN_GALLERY;
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Swipe Handlers
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
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-12 pt-40 sm:pt-48 pb-24 flex flex-col items-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center z-10"
      >
        <div className="mb-16 text-center w-full max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase">
            THE <span className="text-[#FFCC00]">LOOKBOOK</span>
          </h1>
          <p className="text-gray-400 text-lg">Curated craftsmanship for men.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
          {activeGallery.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-white/5"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  <Maximize2 size={18} className="text-[#FFCC00]" />
                </div>
                <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform">{item.category}</p>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
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