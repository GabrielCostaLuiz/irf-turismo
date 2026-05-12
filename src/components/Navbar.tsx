"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="relative z-50 bg-transparent py-5"
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16 logo-glow">
            <Image 
              src={siteConfig.images.logo} 
              alt={`${siteConfig.name} Logo`} 
              fill 
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-2xl font-bold tracking-tighter leading-none">
              <span className="gold-gradient">I.R.F</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-light">Turismo</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-foreground/80">
          <Link href="#servicos" className="hover:text-gold transition-colors">Serviços</Link>
          <Link href="#van" className="hover:text-gold transition-colors">Nossa Van</Link>
          <Link href="#sobre" className="hover:text-gold transition-colors">Quem Somos</Link>
          <Link 
            href={siteConfig.phone.whatsapp} 
            className="bg-gold-premium px-6 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all"
          >
            <Phone size={16} />
            <span className="font-bold">Reservar Agora</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy-dark border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <Link href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Serviços</Link>
            <Link href="#van" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Nossa Van</Link>
            <Link href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Quem Somos</Link>
            <Link 
              href={siteConfig.phone.whatsapp} 
              className="bg-gold-premium text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Reservar Agora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
