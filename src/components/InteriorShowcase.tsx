"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const videos = [
  {
    src: "/video/video1.mp4",
    title: "Tour Interno",
    desc: "Conheça cada detalhe do nosso acabamento premium e tecnologia de bordo."
  },
  {
    src: "/video/video2.mp4",
    title: "Ambiente VIP",
    desc: "A iluminação e o conforto pensados para a sua melhor experiência de viagem."
  }
];

export default function InteriorShowcase() {
  return (
    <section id="experiencia" className="py-32 relative overflow-hidden bg-navy-dark">
      {/* Background Decor Elements */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-black tracking-tighter leading-none whitespace-nowrap">PREMIUM</span>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-40 right-[10%] w-px h-40 bg-linear-to-b from-transparent via-gold/20 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute bottom-40 left-[10%] w-px h-40 bg-linear-to-b from-transparent via-gold/20 to-transparent pointer-events-none hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="Experiência Imersiva"
          titleNormal="Veja a van"
          titleHighlight="por dentro"
          description="Sinta a atmosfera de exclusividade e conforto antes mesmo de embarcar. Vídeos reais da nossa frota."
          center
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-9/16 w-full max-w-[400px] mx-auto rounded-[40px] overflow-hidden border border-gold/20 shadow-2xl bg-black">
                <video 
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h3 className="text-2xl font-bold text-gold mb-2">{video.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{video.desc}</p>
                </div>

                {/* Vertical Video Indicator */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white/80">
                  Real 4K
                </div>
              </div>
              
              {/* Decoration behind */}
              <div className="absolute -inset-4 bg-gold/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
