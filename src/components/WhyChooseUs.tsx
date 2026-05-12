"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Star, CheckCircle2, ChevronRight, Award as AwardIcon } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Certificada",
    description: "Nossa frota passa por manutenções rigorosas e todos os passageiros contam com seguro total. Monitoramento em tempo real em todas as viagens.",
    details: ["Seguro passageiro APP", "Manutenção preventiva quinzenal", "Rastreamento via satélite"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Pontualidade Britânica",
    description: "Entendemos o valor do seu tempo. Planejamos rotas inteligentes para garantir que você chegue ao seu destino sem atrasos.",
    details: ["Monitoramento de tráfego em tempo real", "Check-in antecipado", "Rotas alternativas otimizadas"]
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Atendimento Premium",
    description: "Motoristas treinados para oferecer um serviço de concierge. Discrição, cordialidade e auxílio completo com bagagens.",
    details: ["Motoristas bilíngues sob demanda", "Treinamento em direção defensiva", "Concierge de bordo"]
  }
];

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sparkle opacity-20 pointer-events-none" />
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-navy-light/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Padrão I.R.F de Qualidade"
          titleNormal="Por que somos a escolha de"
          titleHighlight="quem exige o melhor?"
          center
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reasons List */}
          <div className="lg:col-span-5 space-y-4">
            {reasons.map((reason, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveReason(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 flex items-center gap-6 group ${
                  activeReason === index 
                  ? "bg-white/10 border-gold/30 shadow-2xl shadow-gold/5" 
                  : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeReason === index ? "bg-gold text-navy-dark scale-110" : "bg-white/5 text-gold"
                }`}>
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 transition-colors ${
                    activeReason === index ? "text-white" : "text-white/60"
                  }`}>
                    {reason.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-opacity ${
                    activeReason === index ? "text-gold" : "opacity-0"
                  }`}>
                    Explorar <ChevronRight size={12} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Detail Display */}
          <motion.div 
            key={activeReason}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-16 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Compromisso com Excelência</span>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-white">{reasons[activeReason].title}</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              {reasons[activeReason].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons[activeReason].details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium">{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                  <div className="absolute inset-0 bg-gold/20 animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-bold">Logística Certificada</p>
                  <p className="text-white/40 text-xs">Padrão Executivo IRF</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
