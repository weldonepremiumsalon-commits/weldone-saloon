"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={28} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase">
              Privacy <span className="text-[#FFCC00]">Policy</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-12 border-b border-white/10 pb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">1. Information We Collect</h2>
              <p>
                At WELDONE, we collect information that you provide directly to us, such as when you contact us for support or add reviews. This may include your name, phone number, Email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services. This includes processing your  responding to your inquiries, and personalizing your grooming experience at our stations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you are posting a review on our site or try to contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">5. Contact Us</h2>
              <p>
                If there are any questions regarding this privacy policy, you may contact us directly at any of our branches or via our official contact channels.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}