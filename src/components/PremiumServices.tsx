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
    description: "Recepção personalizada com placa e auxílio com bagagens nos principais aeroportos de SP.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format",
    featured: true
  },
  {
    id: "02",
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Eventos Sociais",
    subtitle: "Casamentos e Festas",
    description: "Transporte elegante para noivos e convidados, garantindo segurança e pontualidade total.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format",
    featured: false
  },
  {
    id: "03",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Logística Corporativa",
    subtitle: "Reuniões e Congressos",
    description: "Coordenação completa de transporte para grandes grupos e executivos individuais com discrição.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format",
    featured: false
  },
  {
    id: "04",
    icon: <Navigation className="w-8 h-8" />,
    title: "Viagens Interestaduais",
    subtitle: "Longa Distância",
    description: "Transporte seguro e confortável para viagens entre cidades e estados com motoristas experientes.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format",
    featured: true
  },
  {
    id: "05",
    icon: <Music className="w-8 h-8" />,
    title: "Shows e Entretenimento",
    subtitle: "Conforto e Diversão",
    description: "Vans equipadas com sistemas premium de som e iluminação para uma experiência de bordo única.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format",
    featured: false
  },
  {
    id: "06",
    icon: <Map className="w-8 h-8" />,
    title: "Turismo & City Tour",
    subtitle: "Passeios Customizados",
    description: "Roteiros exclusivos pelos principais pontos turísticos de São Paulo e região metropolitana.",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format",
    featured: false
  }
];

export default function PremiumServices() {
  return (
    <section id="servicos" className="py-24 bg-navy-dark relative overflow-hidden lg:scroll-mt-[133px]">


      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Nossas Soluções"
          titleNormal="Nossos"
          titleHighlight="Serviços"
          descriptionBelow
          description="Oferecemos uma gama completa de serviços de transporte premium, focados em pontualidade, segurança e o máximo conforto."
        />

        <div className="mt-20 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 relative overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gold/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

              <div className="relative z-10 py-12 md:py-16 px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                {/* ID & Photo */}
                <div className="flex items-center gap-8 md:w-1/4">
                  <span className="text-4xl md:text-5xl font-black text-white/5 group-hover:text-gold/20 transition-colors leading-none tracking-tighter shrink-0">
                    {service.id}
                  </span>
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 transition-all duration-500 shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="md:w-1/3">
                  <span className="text-gold/60 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description & Action */}
                <div className="md:w-5/12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <p className="text-white/40 text-sm leading-relaxed flex-1 group-hover:text-white/60 transition-colors max-w-sm">
                    {service.description}
                  </p>

                  <a
                    href={siteConfig.phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-widest group/link"
                  >
                    Solicitar Orçamento
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover/link:bg-gold group-hover/link:text-black transition-all">
                      <ChevronRight size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href={siteConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-premium px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] flex items-center justify-center text-black shadow-2xl shadow-gold/20 whitespace-nowrap"
          >
            Ver Detalhes Adicionais
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}