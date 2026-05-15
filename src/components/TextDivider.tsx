"use client";

import { motion } from "framer-motion";

export default function TextDivider() {
  return (
    <div className="py-20 bg-navy-dark overflow-hidden select-none">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="w-px h-24 bg-linear-to-b from-transparent via-gold/50 to-transparent mb-12" />
          
          <h2 className="text-lg md:text-5xl lg:text-6xl font-black text-white/5 tracking-tight md:tracking-[0.2em] uppercase leading-none mb-4">
            Comprometimento
          </h2>
          
          <p className="text-gold/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] max-w-lg mx-auto">
            Transformando trajetos em experiências memoráveis
          </p>

          <div className="w-px h-24 bg-linear-to-b from-gold/50 via-gold/50 to-transparent mt-12" />
        </motion.div>
      </div>
    </div>
  );
}
