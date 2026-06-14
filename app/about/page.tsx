"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // 1. Added Image import

const stats = [
  { value: "2002", label: "Founded" },
  { value: "3", label: "Branches" },
  { value: "10K+", label: "Happy Clients" },
  { value: "10+", label: "Expert Stylists" },
];

const timeline = [
  {
    year: "2002",
    title: "Men Saloon Basava Nagar",
    desc: "Weldone opened its doors in Byatarayanapura, Bangalore — a single chair, a bold vision, and an obsession with precision grooming.",
  },
  {
    year: "2019",
    title: "Men Saloon Kuvempu Road",
    desc: "Demand exploded. Two new branches launched across Bangalore, each designed as a premium experience space — not just a salon.",
  },
  {
    year: "2024",
    title: "Men Saloon Vignan Nagar",
    desc: "Weldone expanded its vision beyond barbering, launching dedicated women's studios to bring the same premium experience to all.",
  },
];

const values = [
  {
    icon: "✦",
    title: "Precision Over Speed",
    desc: "Every cut is treated like a craft. We don't rush. We don't cut corners. We obsess over details most people never notice — but always feel.",
  },
  {
    icon: "◈",
    title: "Environment Matters",
    desc: "Walk in and the atmosphere does half the work. Our spaces are designed to decompress you — dark, minimal, intentional.",
  },
  {
    icon: "◉",
    title: "Consistency is King",
    desc: "Whether it's your first visit or your fiftieth, you leave looking and feeling the same level of sharp. That's the Weldone promise.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-40 sm:pt-48 pb-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[#FFCC00]/5 blur-[180px] pointer-events-none z-0 rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#FFCC00]/3 blur-[150px] pointer-events-none z-0 rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Hero Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
          <p className="text-[#FFCC00] font-bold tracking-[0.3em] uppercase text-sm mb-4">Est. 2022 · Bangalore</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            NOT JUST A<br />
            <span className="text-[#FFCC00]">BARBERSHOP.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            Weldone was born from a refusal to accept mediocrity in men's grooming. We built something different.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-24"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-black/60 p-8 text-center">
              <div className="text-4xl font-black text-[#FFCC00] mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black tracking-tighter mb-6">
              THE <span className="text-[#FFCC00]">STORY</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              It started with a frustration. Founder Babu walked into yet another average salon in Bangalore, sat in a dingy chair under flickering lights, and decided: <span className="text-white font-semibold">enough.</span>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2002, the first Weldone branch opened in Byatarayanapura — a small space with an enormous attitude. No clutter, no chaos. Just clean lines, skilled hands, and a soundtrack that hits right.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The city noticed. Within months, the waitlist was full. Within a year, new branches were demanded. Today, Weldone has become the benchmark for premium grooming in Bangalore — and we're only getting started.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card" // 2. Added relative here
          >
            {/* 3. Replaced img with Next.js Image */}
            <Image
              src="/vision.avif"
              alt="Weldone Interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain bg-[#0a0a0a] transition-all duration-700 lg:grayscale lg:opacity-80 lg:hover:opacity-100 lg:hover:grayscale-0"
            />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
            WHAT WE <span className="text-[#FFCC00]">STAND FOR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-[#FFCC00]/30 transition-colors"
              >
                <div className="text-[#FFCC00] text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-black text-lg mb-3 tracking-tight">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
            THE <span className="text-[#FFCC00]">JOURNEY</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-[calc(50%-20px)] md:-translate-x-5 bg-black border-2 border-[#FFCC00] rounded-full flex items-center justify-center shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#FFCC00]" />
                  </div>
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] bg-black/40 border border-white/10 rounded-2xl p-6 ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <span className="text-[#FFCC00] font-black text-sm tracking-widest">{item.year}</span>
                    <h3 className="text-white font-black text-xl mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}