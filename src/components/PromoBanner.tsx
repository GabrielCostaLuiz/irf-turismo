"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useUI } from "@/context/UIContext";

export default function PromoBanner() {
  const { isPromoVisible, setIsPromoVisible } = useUI();

  return (
    <AnimatePresence>
      {isPromoVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative z-10 bg-gold-premium text-navy-dark px-4 py-2.5 shadow-lg"
        >
          <div className="container mx-auto px-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex w-9 h-9 rounded-full bg-black/10 text-navy-dark items-center justify-center">
                <Calendar size={18} />
              </div>
              <p className="text-[10px] md:text-sm font-bold tracking-tight leading-tight">
                <span className="uppercase tracking-widest mr-1 opacity-60">Aviso:</span>
                Agenda Rodeio de Americana 2026 aberta! <span className="hidden md:inline opacity-60 font-medium">— Garanta sua vaga com transporte VIP.</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="#eventos"
                className="bg-black/10 hover:bg-black/20 px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-navy-dark transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span className="sm:hidden">Ver</span> 
                <span className="hidden sm:block">Consultar</span> <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
              </a>
              <button 
                onClick={() => setIsPromoVisible(false)}
                className="p-1 hover:bg-black/10 rounded-full transition-colors text-black/30 hover:text-navy-dark shrink-0"
                aria-label="Fechar anúncio"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
