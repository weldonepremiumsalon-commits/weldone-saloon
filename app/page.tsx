"use client";
import { motion } from "framer-motion";
import { useCategory } from "@/components/CategoryProvider";
import Link from "next/link";
import { ArrowRight, Scissors, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const { category, setCategory } = useCategory();
  const isWomen = category === "women";

  // Video source based on category
  const videoSrc = isWomen ? "/heroin.mp4" : "/hero.mp4";

  // Track video load state to avoid flicker
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset load state when category changes
    setIsVideoLoaded(false);
    // Attempt to reload the video element (if exists) with new source
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [category]);

  const marqueeText = isWomen
    ? "BALAYAGE • KERATIN SPA • BRIDAL STYLING • CREATIVE COLOR • PRECISION CUTS • SIGNATURE BLOWOUTS • "
    : "PRECISION FADES • HOT TOWEL SHAVES • BEARD SCULPTING • CLASSIC POMPADOURS • SCALP TREATMENTS • ";

  // Poster image (high quality, salon-appropriate)
  const posterImage =
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2000&auto=format&fit=crop";

  return (
    <div
      className="relative flex flex-col w-full bg-[#050505]"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
      {/* ── CINEMATIC VIDEO BACKGROUND ── */}
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
          {/* Fallback text (rarely seen) */}
          Your browser does not support the video tag.
        </video>

        {/* Luxury dark gradient overlay – same as old code's gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
      </div>

      {/* ── Soft centre glow (preserved from old code) ── */}
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          background:
            "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Navbar spacer ── */}
      <div className="flex-shrink-0" style={{ height: "clamp(60px, 7vh, 88px)" }} />

      {/* ══════════════════════════════════════
          MAIN CONTENT (unchanged logic, only class/style kept)
      ══════════════════════════════════════ */}
      <div
        className="flex-1 flex flex-col items-center justify-center z-10 min-h-0"
        style={{
          padding: "0 clamp(16px, 5vw, 48px)",
          gap: "clamp(10px, 1.8vh, 20px)",
        }}
      >
        {/* Icon badge */}
        <motion.div
          key={`icon-${category}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{
            padding: "clamp(10px, 1.2vh, 16px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "9999px",
            backdropFilter: "blur(12px)",
            color: "#FFCC00",
            display: "flex",
          }}
        >
          {isWomen ? (
            <Sparkles
              style={{
                width: "clamp(18px,2.5vw,28px)",
                height: "clamp(18px,2.5vw,28px)",
              }}
            />
          ) : (
            <Scissors
              style={{
                width: "clamp(18px,2.5vw,28px)",
                height: "clamp(18px,2.5vw,28px)",
              }}
            />
          )}
        </motion.div>

        {/* Headline */}
        <motion.div
          key={`title-${category}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ lineHeight: 1 }}
        >
          <div
            className="font-black text-white uppercase tracking-tighter"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 5.5rem)", whiteSpace: "nowrap" }}
          >
            DOMINANCE 
          </div>
          <div
            className="font-black text-white uppercase tracking-tighter"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 5.5rem)", whiteSpace: "nowrap" }}
          >
            EXPRESSED IN 
          </div>
          <div
            className="font-black uppercase tracking-tighter"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 7rem)",
              color: "#FFCC00",
              marginTop: "-0.05em",
              whiteSpace: "nowrap",
            }}
          >
            STYLE
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          key={`desc-${category}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-gray-400 text-center leading-relaxed"
          style={{
            fontSize: "clamp(0.75rem, 1.4vw + 0.1rem, 1rem)",
            maxWidth: "min(560px, 88vw)",
          }}
        >
          {isWomen
            ? "Experience the pinnacle of luxury styling, premium color, and aesthetic treatments exclusively for women."
            : "Experience the ultimate standard in modern barbering, precision fades, and timeless style."}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <Link
            href="/services"
            className="flex items-center gap-2 font-black uppercase tracking-widest rounded-xl transition-all active:scale-95 group"
            style={{
              padding: "clamp(11px, 1.5vh, 18px) clamp(28px, 3.5vw, 48px)",
              fontSize: "clamp(0.65rem, 1vw + 0.1rem, 0.8rem)",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(16px)",
              color: "#ffffff",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            Explore Services
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
          style={{ gap: "clamp(6px, 0.8vh, 10px)" }}
        >
          <p
            className="text-gray-500 font-bold uppercase tracking-widest"
            style={{ fontSize: "clamp(0.55rem, 0.8vw + 0.1rem, 0.68rem)" }}
          >
            Personalize Your Experience
          </p>

          <div
            className="flex"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "9999px",
              padding: "clamp(4px, 0.5vh, 6px)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              gap: "clamp(4px, 0.4vw, 6px)",
              width: "min(380px, 90vw)",
            }}
          >
            {[
              { key: "men", label: "Men's Grooming" },
              { key: "women", label: "Women's Studio" },
            ].map(({ key, label }) => {
              const active = category === key;
              return (
                <button
                  key={key}
                  onClick={() => setCategory(key as "men" | "women")}
                  className="flex-1 font-black uppercase tracking-wider transition-all duration-300"
                  style={{
                    padding: "clamp(9px, 1.3vh, 14px) clamp(10px, 2vw, 20px)",
                    fontSize: "clamp(0.6rem, 0.9vw + 0.1rem, 0.75rem)",
                    borderRadius: "9999px",
                    background: active ? "#FFCC00" : "transparent",
                    color: active ? "#000000" : "rgba(255,255,255,0.38)",
                    boxShadow: active ? "0 0 20px rgba(255,204,0,0.25)" : "none",
                    transform: active ? "scale(1)" : "scale(0.97)",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          MARQUEE (exactly as old code)
      ══════════════════════════════════════ */}
      <div
        className="w-full overflow-hidden z-20 flex-shrink-0"
        style={{
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "clamp(8px, 1.2vh, 14px)",
          paddingBottom: "clamp(8px, 1.2vh, 14px)",
          boxShadow: "0 -1px 40px rgba(0,0,0,0.6)",
        }}
      >
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex whitespace-nowrap">
              <span
                className="font-black uppercase"
                style={{
                  fontSize: "clamp(0.6rem, 1vw + 0.1rem, 0.78rem)",
                  letterSpacing: "0.22em",
                  color: "#C9960C",
                  margin: "0 8px",
                }}
              >
                {marqueeText.repeat(4)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}