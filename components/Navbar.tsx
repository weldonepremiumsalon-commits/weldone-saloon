"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Added Image import
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { MEN_BRANCHES } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // --- Mobile (floating card) states ---
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const [phoneBranchOpen, setPhoneBranchOpen] = useState(false);

  // --- Tablet / Desktop (full‑width) states ---
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [tabletBranchOpen, setTabletBranchOpen] = useState(false);

  // Scroll effect for the tablet navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setIsPhoneMenuOpen(false);
    setPhoneBranchOpen(false);
    setIsTabletMenuOpen(false);
    setTabletBranchOpen(false);
  }, [pathname]);

  // Build branch sub‑links from MEN_BRANCHES
  const branchSubLinks = MEN_BRANCHES.map((b) => ({
    name: b.name,
    path: `/branches/${b.slug}`,
  }));

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "Branches",
      path: "/branches",
      subLinks: branchSubLinks,
    },
    { name: "Barbers", path: "/barbers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ==================== PHONE NAV (floating card) – visible only on small screens ==================== */}
      <div className="md:hidden">
        {/* Overlay to close the menu */}
        {isPhoneMenuOpen && (
          <div
            className="fixed inset-0 z-[90]"
            onClick={() => setIsPhoneMenuOpen(false)}
          />
        )}

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-black/80 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-2xl flex flex-col"
        >
          <div className="flex justify-between items-center px-6 py-4 w-full relative z-10">
            <Link href="/" className="group flex-shrink-0">
              {/* 2. Upgraded Mobile Logo */}
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={48}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <button
              onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
              className="text-[#FFCC00] p-2 bg-white/5 rounded-lg border border-white/10"
            >
              {isPhoneMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile expand menu */}
          <AnimatePresence>
            {isPhoneMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-white/10 mx-4 bg-black/50"
              >
                <div className="flex flex-col gap-2 py-6">
                  {links.map((link) => {
                    const isActive = pathname === link.path;

                    if (link.subLinks) {
                      return (
                        <div key={link.name} className="flex flex-col items-center">
                          <div className="flex items-center gap-4 py-2">
                            <Link
                              href={link.path}
                              className={`text-base font-bold uppercase tracking-wider ${
                                isActive ? "text-[#FFCC00]" : "text-gray-400"
                              }`}
                            >
                              {link.name}
                            </Link>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setPhoneBranchOpen(!phoneBranchOpen);
                              }}
                              className="p-2 bg-white/5 rounded-full border border-white/10"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform text-[#FFCC00] ${
                                  phoneBranchOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {phoneBranchOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden w-full px-8"
                              >
                                <div className="flex flex-col bg-white/5 rounded-2xl py-2 my-2">
                                  {link.subLinks.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.path}
                                      className="py-4 text-sm font-bold text-gray-300 hover:text-[#FFCC00] text-center uppercase tracking-widest"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`text-base font-bold uppercase tracking-wider block text-center py-2 ${
                          isActive ? "text-[#FFCC00]" : "text-gray-400"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* ==================== TABLET / DESKTOP NAV (full‑width) – visible on md and above ==================== */}
      <div className="hidden md:block">
        <nav
          className={`fixed w-full z-50 transition-all duration-300 border-b ${
            scrolled
              ? "bg-black/90 backdrop-blur-md border-white/10 py-4 shadow-2xl"
              : "bg-transparent border-transparent py-6"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              {/* 3. Upgraded Desktop Logo */}
              <Image
                src="/logo.png"
                alt="WELDONE"
                width={160}
                height={48}
                priority
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop links (lg and up) */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => {
                const isActive =
                  pathname === link.path ||
                  (link.subLinks && pathname.startsWith(link.path));

                if (link.subLinks) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Link
                          href={link.path}
                          className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                            isActive
                              ? "text-[#FFCC00]"
                              : "text-gray-400 group-hover:text-white"
                          }`}
                        >
                          {link.name}
                        </Link>
                        <ChevronDown
                          size={14}
                          className="text-gray-400 group-hover:text-white group-hover:rotate-180 transition-transform"
                        />
                      </div>

                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl flex flex-col gap-1">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              className="px-4 py-3 text-xs font-bold text-gray-400 hover:bg-[#FFCC00] hover:text-black rounded-lg transition-all uppercase tracking-widest"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors relative py-2 ${
                      isActive
                        ? "text-[#FFCC00]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navline"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FFCC00] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Tablet hamburger (md to lg) */}
            <button
              onClick={() => setIsTabletMenuOpen(true)}
              className="lg:hidden text-white hover:text-[#FFCC00] transition-colors z-50"
            >
              <Menu size={32} />
            </button>
          </div>
        </nav>

        {/* Tablet Drawer (slide from right) */}
        <AnimatePresence>
          {isTabletMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsTabletMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
              />

              {/* Drawer panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[350px] bg-[#050505] border-l border-white/10 z-[101] lg:hidden flex flex-col shadow-2xl"
              >
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsTabletMenuOpen(false)}
                    className="text-white/50 hover:text-[#FFCC00] transition-colors p-2"
                  >
                    <X size={32} />
                  </button>
                </div>

                <div className="flex flex-col gap-6 px-10 pt-4 overflow-y-auto pb-20">
                  {links.map((link) => {
                    const isActive = pathname === link.path;

                    if (link.subLinks) {
                      return (
                        <div key={link.name}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={link.path}
                              className={`text-xl sm:text-2xl font-black uppercase tracking-widest ${
                                isActive ? "text-[#FFCC00]" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              {link.name}
                            </Link>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setTabletBranchOpen(!tabletBranchOpen);
                              }}
                              className="p-2 bg-white/5 rounded-full border border-white/10"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform text-[#FFCC00] ${
                                  tabletBranchOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {tabletBranchOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col mt-2 bg-white/5 rounded-2xl py-2">
                                  {link.subLinks.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.path}
                                      className="py-4 text-sm font-bold text-gray-300 hover:text-[#FFCC00] text-center uppercase tracking-widest"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`text-xl sm:text-2xl font-black uppercase tracking-widest transition-colors ${
                          isActive ? "text-[#FFCC00]" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom branding inside the drawer */}
                <div className="mt-auto p-10 border-t border-white/5">
                  {/* 4. Upgraded Tablet Drawer Logo */}
                  <Image
                    src="/logo.png"
                    alt="WELDONE"
                    width={120}
                    height={32}
                    className="h-6 w-auto object-contain mb-4 opacity-50"
                  />
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                    The Ultimate Standard
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}