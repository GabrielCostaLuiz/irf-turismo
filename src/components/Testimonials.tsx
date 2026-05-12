"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Diretor Executivo - TechCorp",
    content: "O serviço da I.R.F é impecável. Pontualidade britânica e veículos de um padrão que raramente encontramos em São Paulo. Essencial para nossa logística corporativa.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format"
  },
  {
    name: "Juliana Mendes",
    role: "Noiva - Evento Social",
    content: "Minha experiência no dia do meu casamento foi mágica. A van estava linda, o motorista foi extremamente gentil e o conforto para meus pais foi o diferencial.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format"
  },
  {
    name: "Marcos Paulo",
    role: "Agente de Turismo Receptivo",
    content: "Trabalho com grupos estrangeiros exigentes e a I.R.F é minha parceira de confiança. Nunca tive um problema em 5 anos de parceria. Altamente recomendados.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format"
  },
  {
    name: "Ana Beatriz",
    role: "Coordenadora de Eventos",
    content: "Excelente atendimento e suporte. As vans são novas e muito bem cuidadas. Facilitou muito a logística dos nossos palestrantes.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format"
  },
  {
    name: "Carlos Eduardo",
    role: "Turista",
    content: "Fizemos um city tour por SP e foi fantástico. O guia/motorista conhecia tudo e a van era super confortável. Recomendo!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format"
  }
];

export default function Testimonials() {
  // Duplicando para o efeito infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-20 pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="px-6 relative z-10">
        <SectionHeader 
          subtitle="Relatos Reais"
          titleNormal="A voz de quem"
          titleHighlight="viaja conosco"
          center
          className="mb-16"
        />

        {/* Mobile View: Grid (Static) */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="relative group h-full">
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] p-10 flex flex-col justify-between">
                <Quote className="text-gold opacity-20 mb-8" size={48} />
                <p className="text-lg text-white/80 italic leading-relaxed mb-10">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gold text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Infinite Scroll */}
        <div className="hidden md:block relative">
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              className="flex gap-8 py-4 pr-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-[450px] shrink-0">
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] p-10 flex flex-col justify-between transition-all duration-500 hover:bg-white/8 hover:border-gold/30 hover:-translate-y-2">
                    <Quote className="text-gold opacity-20 mb-8" size={48} />
                    
                    <p className="text-lg text-white/80 italic leading-relaxed mb-10 relative z-10">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-gold text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className="fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 rounded-full border border-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-dark overflow-hidden bg-navy-light relative">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/60 font-medium text-sm md:text-base">
              Junte-se a mais de <span className="text-white font-bold">25.000 clientes</span> satisfeitos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
