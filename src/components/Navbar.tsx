"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useUI } from "@/context/UIContext";
import PromoBanner from "./PromoBanner";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled
      ? "bg-navy-dark/80 backdrop-blur-xl shadow-2xl border-b border-gold/10"
      : "bg-transparent"
      } ${isMobileMenuOpen ? "z-[999]" : "z-50"}`}>
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

      {/* Mobile Menu Overlay - Movido para fora do nav principal para garantir h-screen real */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 50px)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 50px)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 50px)", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-screen w-screen bg-[#071529] z-[1000] flex flex-col p-10 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative w-12 h-12">
                <Image src={siteConfig.images.logo} alt="Logo" fill className="object-contain" />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {[
                { name: "SERVIÇOS", href: "#servicos" },
                { name: "NOSSA VAN", href: "#van" },
                { name: "EVENTOS", href: "#eventos" },
                { name: "GALERIA", href: "#galeria" },
                { name: "CONTATO", href: "#reservas" },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-3xl font-bold tracking-tighter hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-10 border-t border-white/10"
            >
              <motion.a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-premium py-5 rounded-full flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black"
              >
                <Phone size={18} />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
