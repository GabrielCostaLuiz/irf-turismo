"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Star, CheckCircle2, ChevronRight, Award as AwardIcon } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Rigorosa",
    description: "Nossa van conta com todas as vistorias em dia e manutenções preventivas rigorosas. Garantimos uma viagem tranquila com seguro total para todos os passageiros.",
    details: ["Vistorias ANTT em dia", "Manutenção preventiva mensal", "Seguro passageiro completo"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Pontualidade Britânica",
    description: "Entendemos o valor do seu tempo. Planejamos rotas inteligentes para garantir que você chegue ao seu destino sem atrasos e com máximo conforto.",
    details: ["Monitoramento de rotas", "Check-in antecipado", "Compromisso com o horário"]
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Atendimento Cordial",
    description: "Motorista profissional dedicado a oferecer um serviço de excelência. Conte com total discrição, cordialidade e auxílio completo com suas bagagens.",
    details: ["Motorista experiente", "Auxílio com bagagens", "Discrição e pontualidade"]
  }
];

export default function WhyChooseUs() {
  return (
    <section id="faq" className="py-24 bg-white/5 relative overflow-hidden border-y border-white/10">
      {/* Background Decor - Mantido conforme solicitado */}
      <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-navy-light/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Compromisso com a Excelência"
          titleNormal="A Diferença que Apenas a"
          titleHighlight="I.R.F Oferece"
          center
          className="mb-0!"
        />

        <div className="mt-16 flex flex-col">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group py-16 border-b border-white/5 last:border-0 relative ${
                index % 2 === 0 ? "text-left" : "text-left lg:text-right"
              }`}
            >
              {/* Large ID Background */}
              <div className={`absolute top-1/2 -translate-y-1/2 text-[120px] font-black text-white/2 group-hover:text-gold/5 transition-colors pointer-events-none select-none ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}>
                0{index + 1}
              </div>

              <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-12 relative z-10 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
                
                {/* Icon & Title Block */}
                <div className="flex-1 space-y-4">
                  <div className={`flex items-center gap-4 ${index % 2 !== 0 && "lg:flex-row-reverse"}`}>
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                      {reason.icon}
                    </div>
                    <span className="text-gold text-xs font-bold uppercase tracking-[0.4em]">Motivo 0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-gold transition-colors duration-500">
                    {reason.title}
                  </h3>
                </div>

                {/* Description Block */}
                <div className="flex-1 space-y-8">
                  <p className={`text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl ${
                    index % 2 !== 0 && "lg:ml-auto"
                  }`}>
                    {reason.description}
                  </p>
                  
                  {/* Details Tags */}
                  <div className={`flex flex-wrap gap-4 ${index % 2 !== 0 && "lg:justify-end"}`}>
                    {reason.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gold/60 group-hover:border-gold/30 transition-colors"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Impact Phrase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className=" text-center"
        >
          <p className="text-white/20 text-sm md:text-base font-light italic tracking-[0.3em] md:mt-10">
            "Sua jornada merece a exclusividade e o padrão de excelência I.R.F Turismo."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
