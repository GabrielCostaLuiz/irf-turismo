"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useUI } from "@/context/UIContext";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

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

const galleryImages = [
  { src: "/images/ar-2.png", title: "Ar-condicionado" },
  { src: "/images/banco.jpeg", title: "Poltronas Reclináveis" },
  { src: "/images/led.jpeg", title: "Iluminação LED" },
  { src: "/images/van-accessibility.png", title: "Acessibilidade" },
  { src: "/images/tv.jpeg", title: "Televisão" },
  { src: "/images/motorista.png", title: "Motorista Profissional" }
];

export default function InteriorShowcase() {
  const { isPhotosEnabled } = useUI();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                  title={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-2">{video.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">{video.desc}</p>
                </div>

              
              </div>
              
              {/* Decoration behind */}
              <div className="absolute -inset-4 bg-gold/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Conditional Gallery for "Text Mode" */}
        {!isPhotosEnabled && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Galeria de <span className="gold-gradient">Detalhes</span></h3>
              <p className="text-white/40 text-sm max-w-xl mx-auto">Explore as fotos dos nossos diferenciais de conforto e tecnologia mesmo com o modo de economia ativado.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedImage(img.src)}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <Maximize2 size={20} className="text-gold mb-2" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold hover:text-black transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center p-2 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Detalhe Ampliado"
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
