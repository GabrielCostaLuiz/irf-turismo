"use client";

import { motion } from "framer-motion";
import { Wifi, User, Tv, Wind, Coffee, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <Wifi size={18} />,
    title: "Wi-Fi de Alta Velocidade",
    desc: "Conexão estável e ultra veloz durante todo o seu trajeto, permitindo que você realize reuniões de trabalho, responda e-mails ou curta seu entretenimento favorito sem interrupções."
  },
  {
    icon: <User size={18} />,
    title: "Motoristas Bilíngues",
    desc: "Equipe de profissionais altamente treinados, discretos e com domínio de idiomas estrangeiros, garantindo uma comunicação fluida e um atendimento de padrão internacional para todos os passageiros."
  },
  {
    icon: <Tv size={18} />,
    title: "Entretenimento VIP",
    desc: "Equipado com sistema de áudio de alta fidelidade e telas de alta definição, transformamos seu deslocamento em uma verdadeira sala de cinema privativa com máximo conforto acústico."
  },
  {
    icon: <Wind size={18} />,
    title: "Ar Condicionado Digital",
    desc: "Sistema de climatização inteligente com controle digital individualizado, permitindo ajustar a temperatura ideal para cada zona da van e garantindo o bem-estar térmico de todos."
  },
  {
    icon: <Coffee size={18} />,
    title: "Serviço de Bordo",
    desc: "Desfrute de uma seleção premium de águas minerais, snacks finos e mimos exclusivos, pensados detalhadamente para tornar sua jornada ainda mais prazerosa e revigorante."
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Segurança Avançada",
    desc: "Monitoramento em tempo real via satélite, seguro total para passageiros e manutenção preventiva rigorosa, seguindo os mais altos padrões de segurança viária para sua total tranquilidade."
  }
];

export default function ComfortFeatures() {
  return (
    <section id="van" className="py-32 bg-white/5 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-8">
          <SectionHeader 
            subtitle="Luxo em Movimento"
            titleNormal="Descubra um novo"
            titleHighlight="nível de conforto"
            description="Cada detalhe da nossa frota foi pensado para oferecer uma experiência de primeira classe. Sua jornada será tão memorável quanto o destino."
            descriptionBelow
            className="mb-0"
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="flex-grow">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold border border-gold/20">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-4">{f.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
              </motion.div>
            ))}
          </div>

          {/* Right Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl border border-white/5"
          >
            <Image 
              src="/images/van-interior.png" 
              alt="Comfort Detail" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
