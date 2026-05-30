"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen pt-32 sm:pt-40 pb-24 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFCC00] transition-colors mb-8 sm:mb-12">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-full text-[#FFCC00]">
              <FileText size={28} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase">
              Terms of <span className="text-[#FFCC00]">Service</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-12 border-b border-white/10 pb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">1. Acceptance of Terms</h2>
              <p>
                By accessing our website and trying to contact us, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

          
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">2. Pricing & Services</h2>
              <p>
                All prices listed on our menu are subject to change without prior notice. While we strive for accuracy, the final price of your service will be confirmed during your in-chair consultation based on your specific grooming requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">3. Shop Etiquette</h2>
              <p>
                WELDONE is a premium grooming space. We ask that all clients maintain respectful conduct toward our staff and other patrons. We reserve the right to refuse service to anyone who violates this standard of conduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">4. Liability</h2>
              <p>
                WELDONE is not liable for any personal items lost or damaged during your visit. Any allergic reactions to products must be communicated prior to your service starting.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}