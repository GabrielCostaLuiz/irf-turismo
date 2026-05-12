"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center pt-32 pb-12 overflow-hidden bg-navy-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      
      {/* Abstract Design Elements (Lines) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-gold/40 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-linear-to-b from-gold/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-linear-to-b from-gold/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-black">Transporte Executivo de Alto Padrão</span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-8 text-white max-w-6xl"
        >
          Luxo em cada <br />
          <span className="gold-gradient">Movimento.</span>
        </motion.h1>
        
        {/* Subtext and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8 mb-16"
        >
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-light italic">
            "Redefinindo o padrão de transporte executivo com sofisticação, <br className="hidden md:block" /> segurança e pontualidade absoluta."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <motion.a
              href={siteConfig.phone.whatsapp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-white-gold px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </motion.a>

            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-dark bg-navy-light overflow-hidden">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Confiança e Excelência</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integrated Product Visual (The Van) */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-7xl aspect-21/9 mt-4 group"
        >
          <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-transparent z-10" />
          <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <Image 
            src="/images/van-exterior.png" 
            alt="Van Executiva I.R.F Turismo" 
            fill 
            className="object-contain relative z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            priority
          />
          
          {/* Floating Info Tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-1/4 right-[10%] z-30 hidden lg:block"
          >
            <div className="glass p-6 rounded-3xl border-gold/20 flex flex-col gap-2">
              <div className="h-px w-12 bg-gold" />
              <p className="text-xl font-bold text-white max-w-[180px]">Frota Mercedes-Benz Sprinter 2024</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Padrão VIP</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
