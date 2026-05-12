"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Clientes Felizes que confiaram em nós", value: "25K+" },
  { label: "Dos clientes concordam com nossa pontualidade", value: "99%" },
  { label: "Veículos revisados e com seguro total", value: "100%" },
  { label: "Km rodados com segurança e conforto", value: "1M+" }
];

export default function StatsBanner() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white"
          >
            Por mais de uma década, 
            <span className="inline-flex items-center gap-2 px-3 mx-2 border border-gold/30 rounded-full bg-gold/5">
               <Image src="/images/logo.png" width={32} height={32} alt="Logo" className="object-contain" />
            </span>
            temos oferecido o melhor serviço de 
            <span className="inline-block relative w-12 h-6 md:w-20 md:h-10 align-middle mx-2 rounded-full overflow-hidden border border-gold/30">
               <Image src="/images/van-exterior.png" fill alt="Van" className="object-cover" />
            </span>
            transporte executivo & logística para eventos.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <a 
              href="#servicos" 
              className="inline-flex items-center gap-3 bg-gold text-navy-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gold-light transition-all group"
            >
              Nossas Soluções
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl md:text-5xl font-black gold-gradient mb-3">{stat.value}</div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
