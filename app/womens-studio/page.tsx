"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, Star, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

// --- WOMEN'S STUDIO EXCLUSIVE SERVICES ---
const WOMENS_SERVICES = [
  {
    id: "hair-styling",
    title: "Haircut & Styling",
    items: [
      { name: "WELDONE Signature Cut", price: "800" },
      { name: "Advanced Layering", price: "1200" },
      { name: "Classic Trim", price: "500" },
      { name: "Premium Blow Dry", price: "600" },
      { name: "Event Hair Updo", price: "1500" },
    ]
  },
  {
    id: "hair-color",
    title: "Color & Highlights",
    items: [
      { name: "Global Hair Color (L'Oréal)", price: "3500" },
      { name: "Balayage / Ombre", price: "4500" },
      { name: "Root Touch-up", price: "1000" },
      { name: "Highlights (Per Streak)", price: "300" },
      { name: "Creative Fashion Color", price: "5000" },
    ]
  },
  {
    id: "hair-treatments",
    title: "Hair Spa & Treatments",
    items: [
      { name: "Keratin Treatment", price: "4000" },
      { name: "Hair Botox", price: "5500" },
      { name: "Moroccan Oil Spa", price: "1500" },
      { name: "Anti-Hairfall Spa", price: "1200" },
      { name: "Olaplex Bonding Treatment", price: "2500" },
    ]
  },
  {
    id: "skin-care",
    title: "Premium Skin Care",
    items: [
      { name: "Signature HydraFacial", price: "3500" },
      { name: "O3+ Radiance Facial", price: "2500" },
      { name: "Gold Illuminating Facial", price: "2000" },
      { name: "Deep Cleanse & D-Tan", price: "1000" },
      { name: "Under Eye Treatment", price: "800" },
    ]
  },
  {
    id: "bridal",
    title: "Bridal & Pre-Bridal",
    items: [
      { name: "Complete Bridal Makeup", price: "15000" },
      { name: "Pre-Bridal Package (1 Month)", price: "10000" },
      { name: "Engagement Makeup", price: "8000" },
      { name: "Party Makeup", price: "3500" },
    ]
  }
];

// --- WOMEN'S STUDIO DATA & TEAM ---
const STUDIO_DATA = {
  name: "Weldone Women's Studio",
  image: "/womensalloninside.png",
  address: "5th Block, Koramangala, Bangalore",
  phone: "+91 98765 43213",
  hours: "10:00 AM - 8:00 PM",
  artists: [
    { name: "Elena R.", role: "Master Stylist", rating: 5.0, image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
    { name: "Sophia M.", role: "Color Expert", rating: 4.9, image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" },
    { name: "Aisha K.", role: "Bridal Specialist", rating: 5.0, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
    { name: "Priya S.", role: "Skin Specialist", rating: 4.8, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
    { name: "Mia T.", role: "Hair Spa Director", rating: 4.9, image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop" },
    { name: "Zara L.", role: "Senior Stylist", rating: 5.0, image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop" }
  ]
};

export default function WomensStudioPage() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(WOMENS_SERVICES[0].id);

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Rose Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFB6C1]/5 blur-[150px] pointer-events-none z-0 mix-blend-screen rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        {/* Back Navigation */}
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
                <MapPin className="text-[#FFCC00]" size={24} /> <span className="text-lg">{STUDIO_DATA.address}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Phone className="text-[#FFCC00]" size={24} /> <span className="text-lg">{STUDIO_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Clock className="text-[#FFCC00]" size={24} /> <span className="text-lg">{STUDIO_DATA.hours}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0a0a0a]">
            <img src={STUDIO_DATA.image} alt={STUDIO_DATA.name} className="w-full h-[400px] lg:h-[500px] object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* SECTION 2: Meet The Team */}
        <div className="pt-12 border-t border-white/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Meet The <span className="text-[#FFCC00]">Stylists</span></h2>
            <p className="text-gray-400 text-lg">The elite experts stationed at our exclusive women's studio.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STUDIO_DATA.artists.map((artist, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              >
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest rounded-full">{artist.role}</span>
                    <span className="flex items-center gap-1 text-[#FFCC00] text-xs font-bold bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
                      <Star size={12} className="fill-[#FFCC00]" /> {artist.rating}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{artist.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Studio Services (Interactive Accordion) */}
        <div className="pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Studio <span className="text-[#FFCC00]">Services</span></h2>
            <p className="text-gray-400 text-lg">Premium treatments designed exclusively for women.</p>
          </motion.div>

          <div className="space-y-4">
            {WOMENS_SERVICES.map((category) => {
              const isOpen = openServiceId === category.id;
              
              return (
                <div key={category.id} className="glass-card bg-black/40 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
                  <button 
                    onClick={() => setOpenServiceId(isOpen ? null : category.id)}
                    className="w-full px-6 py-5 sm:py-6 flex justify-between items-center bg-transparent"
                  >
                    <span className={`text-lg sm:text-xl font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-[#FFCC00]" : "text-white"}`}>
                      {category.title}
                    </span>
                    <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "bg-[#FFCC00] border-[#FFCC00] text-black rotate-180" : "border-white/10 text-white bg-white/5"}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="w-full h-[1px] bg-white/10 mb-4" />
                          <div className="flex flex-col gap-2">
                            {category.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center group py-3">
                                <span className="text-base sm:text-lg text-gray-300 group-hover:text-white transition-colors">
                                  {item.name}
                                </span>
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