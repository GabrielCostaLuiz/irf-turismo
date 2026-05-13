"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

import { useUI } from "@/context/UIContext";

export default function Hero() {
  const { isPromoVisible } = useUI();

  return (
    <section className={`relative min-h-screen w-full overflow-hidden bg-navy-dark flex flex-col transition-all duration-500 ${
      isPromoVisible ? "pt-44 lg:pt-48" : "pt-24 lg:pt-32"
    }`}>
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Version */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/images/hero-10-copy-21.png"
            alt="Van Executiva I.R.F Turismo - Desktop"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/images/van-mobile.png"
            alt="Van Executiva I.R.F Turismo - Mobile"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
        </div>

        {/* Esfumaçado Lateral (Fade para o Texto) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[75%] bg-linear-to-r from-navy-dark via-navy-dark/95 to-transparent z-10" />

        {/* Efeito de Foco / Vinheta (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,transparent_0%,rgba(7,21,41,0.5)_50%,#071529_100%)] z-10 pointer-events-none" />

        {/* Esfumaçado Inferior */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-linear-to-t from-navy-dark to-transparent z-20" />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex-1 flex flex-col justify-start">
        <div className="max-w-4xl py-6 md:py-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#e5c05b] animate-pulse" />
            <span className="text-gold uppercase tracking-[0.5em] text-[9px] font-black">Líder em Transporte Executivo</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-bold leading-[1.1] tracking-tighter mb-8 text-white"
          >
            VIAJAR BEM <br />
             <span className="gold-gradient italic pr-4">NÃO É PRIVILÉGIO</span><br />
            <span className="gold-gradient italic pr-4">DE POUCOS.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center gap-6 mb-12"
          >
            <div className="w-10 h-px bg-gold/50 hidden md:block" />
            <p className="text-base md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              {siteConfig.description} <br className="hidden md:block" />
              Sofisticação e preço acessível em uma experiência única.
            </p>
          </motion.div>

          {/* Quick Action Element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass rounded-3xl md:rounded-full max-w-3xl border-gold/10 overflow-hidden relative shadow-2xl"
          >
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-stretch md:items-center relative z-10">
              <motion.a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex-1 flex items-center gap-5 px-8 py-5 border-b md:border-b-0 md:border-r border-gold/10 transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Calendar size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-gold/60 font-black">Disponibilidade</span>
                  <span className="text-sm font-bold text-white">Agendar agora</span>
                </div>
              </motion.a>

              <div className="flex-1 flex items-center gap-5 px-8 py-5 border-b md:border-b-0 md:border-r border-gold/10 hover:bg-white/5 transition-colors cursor-default group">
                <div className="p-2.5 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Users size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-gold/60 font-black">Capacidade</span>
                  <span className="text-sm font-bold text-white">Até {siteConfig.van.capacity}</span>
                </div>
              </div>

              <motion.a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold-premium px-10 py-7.5 text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(229,192,91,0.3)] text-black"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6"
          >
            <div className="flex items-center gap-3 text-white/50 group">
              <div className="w-9 h-9 rounded-xl border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                <ShieldCheck className="text-gold/60" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold/80 leading-none mb-1">Segurança Total</span>
                <span className="text-[9px] font-medium leading-none">Veículos Monitorados</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/50 group">
              <div className="w-9 h-9 rounded-xl border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                <span className="text-gold font-black text-xs">5.0</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold/80 leading-none mb-1">Avaliação Google</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-[8px]">★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
