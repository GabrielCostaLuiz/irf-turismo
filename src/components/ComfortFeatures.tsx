"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, Wind, Sparkles, Accessibility, UserCheck, Armchair, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import SectionHeader from "./SectionHeader";

/* 
Antigo array de features mantido conforme solicitado:
const oldFeatures = [
  {
    icon: <Wifi size={18} />,
    title: "Wi-Fi de Alta Velocidade",
    desc: "Conexão estável e ultra veloz durante todo o seu trajeto..."
  },
  {
    icon: <User size={18} />,
    title: "Motoristas Bilíngues",
    desc: "Equipe de profissionais altamente treinados..."
  },
  // ... rest of the code here
];
*/

const features = [
  {
    icon: <Wind size={20} />,
    title: "Ar-condicionado",
    desc: "Climatização digital inteligente com dutos individuais, garantindo temperatura ideal e renovação do ar total.",
    image: "/images/ar-2.png"
  },
  {
    icon: <Armchair size={20} />,
    title: "Poltronas Reclináveis",
    desc: "Interior em couro legítimo com poltronas ergonômicas ultra confortáveis e múltiplos níveis de reclinação total.",
    image: "/images/banco.jpeg"
  },
  {
    icon: <Sparkles size={20} />,
    title: "Iluminação LED Premium",
    desc: "Ambiente sofisticado com cromoterapia e luzes indiretas projetadas para o relaxamento e bem-estar visual total.",
    image: "/images/led.jpeg"
  },
  {
    icon: <Accessibility size={20} />,
    title: "Acessibilidade Total",
    desc: "Frota equipada com sistemas modernos de acesso para cadeirantes, garantindo segurança e inclusão premium total.",
    image: "/images/van-accessibility.png"
  },
  {
    icon: <Tv size={20} />,
    title: "Televisão",
    desc: "Sistema de entretenimento com telas de alta definição e som surround para uma jornada premium muito prazerosa.",
    image: "/images/tv.jpeg"
  },
  {
    icon: <UserCheck size={20} />,
    title: "Motorista Profissional",
    desc: "Condutores especialistas em atendimento executivo, treinados para garantir uma jornada pontual e segura total.",
    image: "/images/motorista.png"
  }
];

export default function ComfortFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="van" className="py-32 bg-white/5 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Area Area mantida intacta */}
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center mb-24 gap-8">
          <SectionHeader
            subtitle="Luxo em Movimento"
            titleNormal="Descubra um novo"
            titleHighlight="nível de conforto"
            description="Cada detalhe da nossa frota foi pensado para oferecer uma experiência de primeira classe. Sua jornada será tão memorável quanto o destino."
            descriptionBelow
            className="mb-0!"
          />

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Sua Sala VIP sobre Rodas
            </div>
            <a
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 btn-white-gold px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg"
            >
              Consultar Disponibilidade
              <div className="w-8 h-8 rounded-full bg-gold group-hover:bg-black group-hover:text-gold flex items-center justify-center transition-all">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Content Grid Interativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Fixed Photo for Mobile (Always show now) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden w-full h-64 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl mb-8"
          >
            <Image
              src="/images/van2.png"
              alt="Nossa Van Premium"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Features Selector */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((f, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-start text-left group relative  md:p-8 rounded-[40px] transition-all duration-500  md:border! h-full  border-white/10 md:bg-transparent md:border-transparent ${activeIndex === i
                  ? "md:bg-gold/10! md:border-gold/30! md:shadow-[0_30px_60px_rgba(0,0,0,0.3)] md:scale-[1.02] md:z-20"
                  : "md:bg-transparent md:border-transparent md:hover:bg-white/5 md:z-10"
                  }`}
              >
                <div className="grow">
                  <div className={`w-12 h-12 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border transition-all duration-500 overflow-hidden ${activeIndex === i
                    ? "bg-gold text-navy-dark border-gold shadow-[0_0_20px_rgba(229,192,91,0.3)]"
                    : "bg-gold/10 text-gold border-gold/20"
                    }`}>
                    {f.icon}
                  </div>
                  <h4 className={`font-bold text-xl mb-4 transition-colors duration-500 text-white ${activeIndex === i ? "md:text-gold" : ""
                    }`}>
                    {f.title}
                  </h4>
                  <p className={`text-xs leading-relaxed mb-8 transition-colors duration-500 text-white/60 ${activeIndex === i ? "md:text-white/80" : "md:text-white/40"
                    }`}>
                    {f.desc}
                  </p>
                </div>
                <div className={`w-full h-px transition-colors duration-500 mt-auto bg-white/10 ${activeIndex === i ? "md:bg-gold/40" : ""
                  }`} />
              </motion.button>
            ))}
          </div>

          {/* Right Side Image Display (Always show fixed-van) */}
          <div className="hidden md:block lg:col-span-4">
            <motion.div
              layout
              className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/van2.png"
                  alt="Nossa Van Premium"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
