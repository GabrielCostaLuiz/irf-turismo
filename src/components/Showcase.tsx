"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wind, Users, Shield, Accessibility } from "lucide-react";
import SectionHeader from "./SectionHeader";

const differentials = [
  {
    title: "Conforto Executivo",
    desc: "Poltronas reclináveis em couro com design ergonômico.",
    image: "/images/van-seats.png",
    icon: <Users size={20} />,
  },
  {
    title: "Iluminação LED Premium",
    desc: "Ambiente sofisticado com luzes personalizáveis.",
    image: "/images/van-led.png",
    icon: <Shield size={20} />,
  },
  {
    title: "Climatização Total",
    desc: "Ar-condicionado central para todos os passageiros.",
    image: "/images/van-interior.png",
    icon: <Wind size={20} />,
  },
  {
    title: "Acessibilidade",
    desc: "Equipada com elevador para total inclusão.",
    image: "/images/van-accessibility.png",
    icon: <Accessibility size={20} />,
  },
];

export default function Showcase() {
  return (
    <section id="van" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Sua Sala VIP sobre Rodas"
          titleNormal="Tecnologia de"
          titleHighlight="Última Geração"
          description="Diferenciais que transformam cada quilômetro em uma experiência de primeira classe."
          center
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-4xl overflow-hidden border border-white/5"
            >
              <Image
                src={diff.image}
                alt={diff.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-gold/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {diff.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{diff.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Feature Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gold/5 border border-gold/10 p-10 rounded-4xl flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative w-full md:w-1/3 aspect-video rounded-3xl overflow-hidden">
            <Image
              src="/images/van-exterior.png"
              alt="Van Exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="grow">
            <h4 className="text-2xl font-bold text-gold mb-4 uppercase tracking-widest">Capacidade e Tecnologia</h4>
            <p className="text-white/70 leading-relaxed max-w-2xl">
              Nossa frota Mercedes Sprinter é configurada para até 18 passageiros com o máximo de aproveitamento de espaço, tecnologia de ponta em segurança e um sistema de suspensão que garante suavidade absoluta em qualquer terreno.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
