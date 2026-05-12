"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative z-10 bg-white/5 border-b border-white/10 text-white px-4 py-3"
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gold/10 text-gold items-center justify-center">
                <Calendar size={18} />
              </div>
              <p className="text-xs md:text-sm font-medium tracking-tight">
                <span className="text-gold font-bold uppercase tracking-widest mr-2">Aviso:</span>
                Agenda de Eventos 2024 aberta! <span className="hidden md:inline text-white/50">— Garanta sua data com condições exclusivas.</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.phone.whatsapp}
                className="text-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Consultar <ArrowRight size={14} />
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/30 hover:text-white"
                aria-label="Fechar anúncio"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
