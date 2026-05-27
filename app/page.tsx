"use client";
import { motion } from "framer-motion";
import { useCategory } from "@/components/CategoryProvider";
import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ── Import data from your existing data.ts ──
import {
  MEN_GALLERY_PREVIEW,
  WOMEN_GALLERY_PREVIEW,
  MEN_REVIEWS,
  WOMEN_REVIEWS,
} from "@/lib/data"; // adjust path if needed

export default function HomePage() {
  const { category, setCategory } = useCategory();
  const isWomen = category === "women";

  // ── Video background state ──
  const videoSrc = isWomen ? "/heroin.mp4" : "/hero.mp4";
  const posterImage =
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2000&auto=format&fit=crop";
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVideoLoaded(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [category]);

  // ── Dynamic content ──
  const marqueeText = isWomen
    ? "BALAYAGE • KERATIN SPA • BRIDAL STYLING • CREATIVE COLOR • PRECISION CUTS • SIGNATURE BLOWOUTS • "
    : "PRECISION FADES • HOT TOWEL SHAVES • BEARD SCULPTING • CLASSIC POMPADOURS • SCALP TREATMENTS • ";

  const galleryData = isWomen ? WOMEN_GALLERY_PREVIEW : MEN_GALLERY_PREVIEW;
  const reviewsData = isWomen ? WOMEN_REVIEWS : MEN_REVIEWS;

  // Duplicate for infinite scroll
  const infiniteGalleryRow1 = [...galleryData, ...galleryData];
  const infiniteGalleryRow2 = [...galleryData.slice().reverse(), ...galleryData.slice().reverse()];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden w-full">
      
      {/* =========================================
          SECTION 1: HERO (100vh) – VIDEO BACKGROUND
          ========================================= */}
      <div className="relative min-h-[100dvh] flex flex-col overflow-hidden pt-24 sm:pt-32 w-full">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={posterImage}
            className={`w-full h-full object-cover grayscale transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-70" : "opacity-0"
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
        </div>
        
        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#FFCC00]/5 blur-[100px] sm:blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

        {/* Hero Content - Added pb-28 to safeguard against marquee overlap on short screens */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center flex-grow text-center pb-28">
          
          <motion.div
            key={`icon-${category}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-[#FFCC00]"
          >
            {isWomen ? <Sparkles size={24} className="sm:w-7 sm:h-7" /> : <Scissors size={24} className="sm:w-7 sm:h-7" />}
          </motion.div>

          {/* ── RESPONSIVE HEADLINE (Fluid Typography for perfect fit) ── */}
          <motion.div
            key={`title-${category}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center w-full"
          >
            <div className="font-black text-white uppercase tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] sm:leading-[0.85]">
              DOMINANCE
            </div>
            <div className="font-black text-white uppercase tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] sm:leading-[0.85]">
              EXPRESSED IN
            </div>
            {/* Fluid sizing (vw) ensures the massive text never breaks the screen edges on mobile */}
            <div className="font-black uppercase tracking-tighter text-[16vw] sm:text-8xl md:text-9xl lg:text-[10rem] text-[#FFCC00] leading-[0.8] mt-2 sm:mt-1">
              STYLE
            </div>
          </motion.div>

          <motion.p
            key={`desc-${category}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-300 text-xs sm:text-base md:text-xl max-w-2xl mt-6 mb-8 px-2 sm:px-4 leading-relaxed"
          >
            {isWomen
              ? "Experience the pinnacle of luxury styling, premium color, and aesthetic treatments exclusively for women."
              : "Experience the ultimate standard in modern barbering, precision fades, and timeless style."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full px-4 sm:px-0 flex justify-center"
          >
            {/* max-w-sm ensures button doesn't stretch too long on tablets */}
            <Link
              href="/services"
              className="px-8 py-4 sm:py-5 bg-[#FFCC00] text-black font-black uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(255,204,0,0.3)] flex items-center justify-center gap-2 w-full max-w-sm sm:w-auto"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Category Toggle (Forced to flex-row for App-like side-by-side layout on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 sm:mt-12 flex flex-col items-center w-full px-4 sm:px-6"
          >
            <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Personalize Your Experience
            </p>
            <div className="bg-black/60 border border-white/10 p-1 sm:p-2 rounded-full flex flex-row gap-1 sm:gap-2 backdrop-blur-xl w-full max-w-[320px] sm:max-w-lg shadow-2xl">
              <button
                onClick={() => setCategory("men")}
                className={`flex-1 px-2 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  !isWomen
                    ? "bg-[#FFCC00] text-black shadow-[0_0_20px_rgba(255,204,0,0.3)] scale-100"
                    : "text-gray-400 hover:text-white scale-95 hover:scale-100"
                }`}
              >
                Men's Grooming
              </button>
              <button
                onClick={() => setCategory("women")}
                className={`flex-1 px-2 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  isWomen
                    ? "bg-[#FFCC00] text-black shadow-[0_0_20px_rgba(255,204,0,0.3)] scale-100"
                    : "text-gray-400 hover:text-white scale-95 hover:scale-100"
                }`}
              >
                Women's Studio
              </button>
            </div>
          </motion.div>
        </div>

        {/* Fixed Marquee at absolute bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#FFCC00] py-3 sm:py-4 z-20 shadow-[0_-10px_30px_rgba(255,204,0,0.15)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            <div className="flex whitespace-nowrap">
              <span className="text-black font-black uppercase tracking-[0.2em] text-xs sm:text-sm mx-2">
                {marqueeText} {marqueeText}
              </span>
            </div>
            <div className="flex whitespace-nowrap">
              <span className="text-black font-black uppercase tracking-[0.2em] text-xs sm:text-sm mx-2">
                {marqueeText} {marqueeText}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: ABOUT PREVIEW
          ========================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#FFCC00] mb-4">
            The Weldone Philosophy
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
            Crafting Confidence Through <br className="hidden sm:block" />{" "}
            <span className="text-white/50">Precision & Artistry</span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            More than just a haircut or a color treatment. WELDONE is an
            institution dedicated to the highest echelons of modern grooming and
            styling. Step into a world of uncompromising quality and leave
            feeling like the best version of yourself.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:text-[#FFCC00] transition-colors border-b-2 border-[#FFCC00] pb-1"
          >
            Read Our Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =========================================
          SECTION 3: INFINITE GALLERY
          ========================================= */}
      <section className="py-10 sm:py-12 overflow-hidden bg-black/50 border-y border-white/5 relative">
        {/* Soft edge fades for desktop */}
        <div className="absolute top-0 right-0 w-16 sm:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-16 sm:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Row 1: Left to Right */}
          <motion.div
            className="flex w-max gap-3 sm:gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {infiniteGalleryRow1.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-48 sm:w-64 md:w-80 h-40 sm:h-48 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-white/5 relative group"
              >
                <img
                  src={src}
                  alt="Gallery Preview"
                  className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Right to Left */}
          <motion.div
            className="flex w-max gap-3 sm:gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {infiniteGalleryRow2.map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-48 sm:w-64 md:w-80 h-40 sm:h-48 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-white/5 relative group"
              >
                <img
                  src={src}
                  alt="Gallery Preview"
                  className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-10 sm:mt-12 px-4">
          <Link
            href="/gallery"
            className="px-8 py-4 w-full max-w-sm mx-auto sm:w-auto bg-white/5 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 hover:text-[#FFCC00] transition-colors border border-white/10 inline-flex justify-center items-center gap-2 text-xs sm:text-sm"
          >
            View Full Lookbook
          </Link>
        </div>
      </section>

      {/* =========================================
          SECTION 4: TESTIMONIALS – YELLOW ACCENT CARDS
          ========================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="text-center sm:text-left">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#FFCC00] mb-2">
                Client Feedback
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">
                The <span className="text-white/50">Verdict</span>
              </h3>
            </div>
            <Link
              href="/reviews"
              className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:text-[#FFCC00] transition-colors border-b-2 border-[#FFCC00] pb-1"
            >
              View All Reviews <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid with yellow‑accent cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reviewsData.map((review, idx) => (
              <motion.div
                key={`${category}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl cursor-default
                           bg-gradient-to-br from-[#FFCC00]/10 to-transparent
                           border border-[#FFCC00]/20
                           hover:border-[#FFCC00]/60 hover:shadow-[0_0_30px_rgba(255,204,0,0.25)]
                           transition-all duration-500 ease-out"
              >
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#FFCC00]/0 group-hover:bg-[#FFCC00]/5 transition-all duration-500" />
                <Quote
                  size={40}
                  className="text-[#FFCC00] opacity-20 absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10"
                />
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#FFCC00] text-[#FFCC00] sm:w-4 sm:h-4"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic pr-4">
                  &quot;{review.text}&quot;
                </p>
                <div className="text-[#FFCC00] font-bold uppercase tracking-widest text-xs sm:text-sm">
                  — {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}