"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import PromoBanner from "./PromoBanner";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${isScrolled
      ? "bg-navy-dark/80 backdrop-blur-xl shadow-2xl border-b border-gold/10"
      : "bg-transparent"
      }`}>
      <PromoBanner />

      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between py-4 ${!isScrolled && "border-b border-gold/10"}`}>
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image
                  src={siteConfig.images.logo}
                  alt={`${siteConfig.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden lg:block">
                <div className="text-xl font-bold tracking-tighter leading-none">
                  <span className="gold-gradient italic">I.R.F</span>
                </div>
                <div className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-black">Turismo</div>
              </div>
            </Link>

            {/* Desktop Navigation Links - AO LADO DO LOGO */}
            <div className="hidden lg:flex items-center gap-8 border-l border-white/10 pl-10">
              <Link href="#servicos" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">Serviços</Link>
              <Link href="#van" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">Van</Link>
              <Link href="#eventos" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">Eventos</Link>
              <Link href="#galeria" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">Galeria</Link>
              <Link href="#reservas" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors">Contato</Link>
            </div>
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden lg:flex items-center gap-10">


            <motion.a
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-premium px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(229,192,91,0.2)] transition-shadow hover:shadow-[0_0_30px_rgba(229,192,91,0.4)]"
            >
              Reservar Agora
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-navy-dark/98 z-50 flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative w-12 h-12">
                <Image src={siteConfig.images.logo} alt="Logo" fill className="object-contain" />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-10 text-2xl font-bold tracking-tighter">
              <Link href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">SERVIÇOS</Link>
              <Link href="#van" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">NOSSA VAN</Link>
              <Link href="#eventos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">EVENTOS</Link>
              <Link href="#galeria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">GALERIA</Link>
              <Link href="#reservas" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">CONTATO</Link>
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <motion.a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-premium py-5 rounded-full flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black"
              >
                <Phone size={18} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
