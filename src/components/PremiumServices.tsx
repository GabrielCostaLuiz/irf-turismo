"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

import SectionHeader from "./SectionHeader";

const services = [
  {
    id: "01",
    title: "Transfers Executivos",
    subtitle: "Aeroportos e Hotéis",
    image: "/images/service-airport.png",
    description: "Recepção personalizada com placa e auxílio com bagagens nos principais aeroportos.",
    size: "large"
  },
  {
    id: "02",
    title: "Eventos Sociais",
    subtitle: "Casamentos e Festas",
    image: "/images/service-wedding.png",
    description: "Transporte elegante para noivos e convidados, garantindo segurança e pontualidade.",
    size: "small"
  },
  {
    id: "03",
    title: "Logística Corporativa",
    subtitle: "Reuniões e Congressos",
    image: "/images/executive-working.png",
    description: "Coordenação completa de transporte para grandes grupos e executivos individuais.",
    size: "small"
  },
  {
    id: "04",
    title: "Turismo & City Tour",
    subtitle: "Passeios Customizados",
    image: "/images/why-choose-1.png",
    description: "Roteiros exclusivos pelos principais pontos turísticos de São Paulo e região.",
    size: "medium"
  },
  {
    id: "05",
    title: "Shows e Entretenimento",
    subtitle: "Conforto e Diversão",
    image: "/images/service-concert.png",
    description: "Vans equipadas com sistemas premium de som e iluminação para uma experiência completa.",
    size: "medium"
  },
  {
    id: "06",
    title: "Viagens Interestaduais",
    subtitle: "Longa Distância",
    image: "/images/van-exterior.png",
    description: "Transporte seguro e confortável para viagens entre cidades e estados com motoristas experientes.",
    size: "medium"
  }
];

export default function PremiumServices() {
  return (
    <section id="servicos" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Nossas Soluções"
          titleNormal="Nossos"
          titleHighlight="Serviços"
          description="Oferecemos uma gama completa de serviços de transporte premium, adaptados com elegância e eficiência para cada necessidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-[32px] overflow-hidden cursor-pointer border border-white/5 shadow-2xl ${
                service.size === "large" ? "lg:col-span-2 lg:row-span-2" : 
                ""
              }`}
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="relative z-10">
                  <div className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-0 group-hover:mb-4 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                        {service.description}
                      </p>
                      <motion.a
                        href={siteConfig.phone.whatsapp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto btn-white-gold px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-white/10"
                      >
                        Solicitar Orçamento
                        <ArrowRight size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
