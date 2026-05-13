"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const galleryItems = [
  {
    id: 1,
    title: "Shows & Concertos",
    location: "Allianz Parque / Morumbi",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format",
    size: "large"
  },
  {
    id: 2,
    title: "Litoral Paulista",
    location: "Guarujá / Maresias",
    category: "Viagens",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format",
    size: "small"
  },
  {
    id: 3,
    title: "Transfer Executivo",
    location: "Guarulhos / Congonhas",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format",
    size: "small"
  },
  {
    id: 4,
    title: "Casamentos de Luxo",
    location: "Espaços de Eventos",
    category: "Social",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format",
    size: "small"
  },
  {
    id: 5,
    title: "Festivais de Inverno",
    location: "Campos do Jordão",
    category: "Turismo",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format",
    size: "large"
  },
  {
    id: 6,
    title: "Praias do Nordeste",
    location: "Viagens Longas",
    category: "Lazer",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format",
    size: "small"
  }
];

export default function EventGallery() {
  return (
    <section id="galeria" className="py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Galeria de Destinos"
          titleNormal="Momentos que"
          titleHighlight="ficam na memória"
          description="De transfers pontuais a viagens de lazer inesquecíveis. Veja onde já estivemos com nossos clientes."
          descriptionBelow
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-[40px] overflow-hidden border border-white/5 ${
                item.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                  <MapPin size={14} className="text-gold" />
                  {item.location}
                </div>
              </div>

              {/* Default overlay for visibility */}
              <div className="absolute inset-0 bg-navy-dark/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
