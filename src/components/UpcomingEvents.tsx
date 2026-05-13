"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Ticket } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

import SectionHeader from "./SectionHeader";

const upcomingEvents = [
  {
    id: 1,
    title: "Zé Neto e Cristiano & Simone Mendes",
    date: "05 de Junho",
    location: "Rodeio de Americana 2026",
    status: "Vagas Disponíveis",
    price: "R$ 170,00",
    boarding: "Itaquera, Tatuapé e Barra Funda",
    image: "/images/bg-irf.jpeg",
    description: "Transporte executivo ida e volta em Van Mercedes Sprinter com ar-condicionado e poltronas reclináveis.",
    seatsLeft: 18
  },
  {
    id: 2,
    title: "Gusttavo Lima & João Bosco e Vinícius",
    date: "06 de Junho",
    location: "Rodeio de Americana 2026",
    status: "Vagas Disponíveis",
    price: "R$ 170,00",
    boarding: "Itaquera, Tatuapé e Barra Funda",
    image: "/images/bg-irf.jpeg",
    description: "Transporte executivo ida e volta em Van Mercedes Sprinter com ar-condicionado e poltronas reclináveis.",
    seatsLeft: 14
  },
  {
    id: 3,
    title: "Henrique e Juliano & Gustavo Mioto",
    date: "12 de Junho",
    location: "Rodeio de Americana 2026",
    status: "Lote Promocional",
    price: "R$ 170,00",
    boarding: "Itaquera, Tatuapé e Barra Funda",
    image: "/images/bg-irf.jpeg",
    description: "Transporte executivo ida e volta em Van Mercedes Sprinter com ar-condicionado e poltronas reclináveis.",
    seatsLeft: 12
  },
  {
    id: 4,
    title: "Luan Santana, Nattanzinho & Bruno e Marrone",
    date: "13 de Junho",
    location: "Rodeio de Americana 2026",
    status: "Inscrições Abertas",
    price: "R$ 170,00",
    boarding: "Itaquera, Tatuapé e Barra Funda",
    image: "/images/bg-irf.jpeg",
    description: "Transporte executivo ida e volta em Van Mercedes Sprinter com ar-condicionado e poltronas reclináveis.",
    seatsLeft: 18
  }
];

export default function UpcomingEvents() {
  const [showAll, setShowAll] = useState(false);
  const displayedEvents = showAll ? upcomingEvents : upcomingEvents.slice(0, 3);

  return (
    <section id="eventos" className="py-24 bg-navy-dark relative overflow-hidden lg:scroll-mt-[133px]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Garanta seu Lugar"
          titleNormal="Agenda de"
          titleHighlight="Eventos"
          description="Reserve sua vaga para os principais shows e festivais. Transporte com conforto e segurança."
          className="mb-0!"
        />
        <div className="mt-2 text-left">
          <p className="text-white/30 text-sm">
            Tem um evento específico e não encontrou aqui? <a href="#reservas" className="text-gold font-bold hover:underline">Solicite um orçamento personalizado.</a>
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence mode="popLayout">
            {displayedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-1.5 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2 ${event.seatsLeft > 0
                      ? "bg-gold/90 text-navy-dark"
                      : "bg-white/20 text-white/60"
                      }`}>
                      {event.seatsLeft > 0 ? "Vagas Disponíveis" : "Esgotado"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                    <Calendar size={14} />
                    {event.date}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-white/40 text-xs mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <MapPin size={16} className="text-gold/50" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-xs">
                      <Users size={16} className="text-gold/50" />
                      Embarque: {event.boarding}
                    </div>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Valor por pessoa</span>
                      <span className="text-lg font-black text-gold">{event.price}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/5511977674215?text=${encodeURIComponent(
                      `Olá! Gostaria de fazer uma reserva para o próximo evento. \n\nEvento: ${event.title}\nData: ${event.date}\nLocal: ${event.location}\nValor: ${event.price}\n\nPode me passar mais informações?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 btn-hover-gold border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest group/btn"
                  >
                    Reservar Agora
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative Corner Icon */}
                <div className="absolute -bottom-6 -right-6 text-white/3 rotate-12 pointer-events-none">
                  <Ticket size={120} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {upcomingEvents.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy-dark transition-all duration-500 shadow-lg shadow-gold/5"
            >
              {showAll ? "Ver menos shows" : "Ver mais shows"}
            </button>
          </div>
        )}


      </div>
    </section>
  );
}
