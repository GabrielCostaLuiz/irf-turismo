"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Clientes Felizes que confiaram em nós", value: "25K+" },
  { label: "Dos clientes concordam com nossa pontualidade", value: "99%" },
  { label: "Veículos revisados e com seguro total", value: "100%" },
  { label: "Km rodados com segurança e conforto", value: "1M+" }
];

export default function StatsBanner() {
  return (
    // <section className="py-32 bg-white/5 border-y border-gold/10 relative overflow-hidden">
    <section className="py-32  relative overflow-hidden ">
      {/* Background Image - LG and up only */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Image
          src="/images/bg-irf-10.png"
          alt="Background Texture"
          fill
          className="object-fill"
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </div>

      {/* Mobile/Tablet Decoration - Below LG */}
      <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-20" />
        <div className="absolute top-30 -left-32 w-40 h-40 bg-gold/30 rounded-full blur-[70px] animate-pulse" />
        <div className="absolute bottom-30 -right-32 w-70 h-70 bg-gold/10 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gold/2 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10"
          >
            <Sparkles size={12} className="animate-pulse" />
            Excelência Comprovada
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-white flex flex-wrap items-center justify-center gap-x-4 gap-y-6"
          >
            <span>Nesta</span>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold border border-gold/20 shadow-[0_0_20px_rgba(229,192,91,0.2)]">
              <Star size={28} fill="currentColor" />
            </span>
            <span>jornada de</span>
            <span className="inline-flex items-center gap-3 px-1 py-1 border border-gold/30 rounded-3xl bg-gold/5 backdrop-blur-sm overflow-hidden w-24 h-12 relative">
               <Image src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="Destino IRF" className="object-cover" />
            </span>
            <span>excelência,</span>
            <br className="hidden lg:block" />
            <span>elevamos o padrão</span>
            <span className="inline-block relative w-20 h-10 md:w-28 md:h-14 align-middle rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="Viajante IRF" className="object-cover" />
            </span>
            <span>com máxima</span>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-gold border border-gold/20 shadow-[0_0_20px_rgba(229,192,91,0.2)]">
              <Shield size={28} fill="currentColor" />
            </span>
            <span className="gold-gradient italic pr-4">segurança.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-14"
          >
            <a
              href="#servicos"
              className="inline-flex items-center gap-4 bg-gold-premium px-12 py-5 rounded-full font-heading font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(229,192,91,0.3)] hover:scale-105 transition-all group text-navy-dark"
            >
              Nossas Soluções
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-gold/30">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left group bg-white/3 backdrop-blur-md p-8 rounded-[32px] border border-white/5 hover:border-gold/20 transition-all"
            >
              <div className="text-5xl md:text-6xl font-black gold-gradient mb-4 group-hover:scale-110 transition-transform origin-left duration-500 tracking-tighter drop-shadow-2xl">
                {stat.value}
              </div>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed max-w-[180px] max-lg:mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
