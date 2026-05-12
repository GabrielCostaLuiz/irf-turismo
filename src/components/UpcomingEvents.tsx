"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Ticket } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

import SectionHeader from "./SectionHeader";

const upcomingEvents = [
  {
    id: 1,
    title: "Victor & Leo - Turnê 2024",
    date: "28 de Maio",
    location: "Allianz Parque, SP",
    status: "Vagas Limitadas",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format",
    seatsLeft: 4
  },
  {
    id: 2,
    title: "João Gomes & Convidados",
    date: "12 de Junho",
    location: "Espaço Unimed, SP",
    status: "Inscrições Abertas",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format",
    seatsLeft: 12
  },
  {
    id: 3,
    title: "Festival de Inverno",
    date: "15 de Julho",
    location: "Campos do Jordão, SP",
    status: "Lote Antecipado",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format",
    seatsLeft: 8
  }
];

export default function UpcomingEvents() {
  return (
    <section id="agenda" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Garanta seu Lugar"
          titleNormal="Agenda de"
          titleHighlight="Eventos"
          description="Reserve sua vaga para os principais shows e festivais. Transporte com conforto e segurança."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
                  <div className="px-4 py-1.5 bg-gold/90 backdrop-blur-md text-navy-dark text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {event.status}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  <Calendar size={14} />
                  {event.date}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <Users size={16} />
                    {event.seatsLeft} vagas restantes
                  </div>
                </div>

                <a 
                  href={siteConfig.phone.whatsapp}
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
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/30 text-sm">
            Tem um evento específico e não encontrou aqui? <a href="#reservas" className="text-gold font-bold hover:underline">Solicite um orçamento personalizado.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
