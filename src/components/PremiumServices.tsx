"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plane, PartyPopper, Briefcase, Map, Music, Navigation, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeader from "./SectionHeader";

const services = [
  {
    id: "01",
    icon: <Plane className="w-8 h-8" />,
    title: "Transfers Executivos",
    subtitle: "Aeroportos e Hotéis",
    description: "Recepção personalizada com placa e auxílio com bagagens nos principais aeroportos de SP."
  },
  {
    id: "02",
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Eventos Sociais",
    subtitle: "Casamentos e Festas",
    description: "Transporte elegante para noivos e convidados, garantindo segurança e pontualidade total."
  },
  {
    id: "03",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Logística Corporativa",
    subtitle: "Reuniões e Congressos",
    description: "Coordenação completa de transporte para grandes grupos e executivos individuais com discrição."
  },
  {
    id: "04",
    icon: <Map className="w-8 h-8" />,
    title: "Turismo & City Tour",
    subtitle: "Passeios Customizados",
    description: "Roteiros exclusivos pelos principais pontos turísticos de São Paulo e região metropolitana."
  },
  {
    id: "05",
    icon: <Music className="w-8 h-8" />,
    title: "Shows e Entretenimento",
    subtitle: "Conforto e Diversão",
    description: "Vans equipadas com sistemas premium de som e iluminação para uma experiência de bordo única."
  },
  {
    id: "06",
    icon: <Navigation className="w-8 h-8" />,
    title: "Viagens Interestaduais",
    subtitle: "Longa Distância",
    description: "Transporte seguro e confortável para viagens entre cidades e estados com motoristas experientes."
  }
];

export default function PremiumServices() {
  return (
    <section id="servicos" className="py-24 bg-navy-dark relative overflow-hidden scroll-mt-[133px]">

      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Nossas Soluções"
          titleNormal="Nossos"
          titleHighlight="Serviços"
          description="Oferecemos uma gama completa de serviços de transporte premium, focados em pontualidade, segurança e o máximo conforto."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] p-10 flex flex-col transition-all duration-500 hover:border-gold/30 hover:bg-white/10">
                
                {/* Header: Icon & ID */}
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-gold/10 transition-colors">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Action */}
                <motion.a
                  href={siteConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gold text-xs font-black uppercase tracking-widest group/link"
                >
                  Solicitar Orçamento
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href={siteConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-premium px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 text-black shadow-2xl shadow-gold/20"
          >
            Ver Detalhes Adicionais
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}