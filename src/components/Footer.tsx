"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-navy-dark/10 backdrop-blur-xl shadow-2xl  pt-32 pb-12 overflow-hidden border-t border-white/5 lg:rounded-t-[10rem]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 logo-glow group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={siteConfig.images.logo} 
                    alt={`${siteConfig.name} Logo`} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tighter leading-none mb-2">
                    <span className="gold-gradient italic">I.R.F</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-black">Turismo Executivo</div>
                </div>
              </div>
            </Link>

            <p className="text-white/50 text-xl font-light leading-relaxed max-w-md italic">
              "Redefinindo o padrão de transporte executivo com sofisticação, 
              segurança e a exclusividade que você merece."
            </p>

            <div className="flex items-center gap-6">
              <motion.a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
              >
                <InstagramIcon size={24} />
              </motion.a>
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                Siga nossa jornada <br /> no Instagram
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50" />
                Contato Direto
              </h4>
              
              <div className="space-y-6">
                <a href={`tel:${siteConfig.phone.display}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Telefone</span>
                    <span className="text-white font-bold tracking-widest group-hover:text-gold transition-colors">{siteConfig.phone.display}</span>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">E-mail</span>
                    <span className="text-white font-bold tracking-widest group-hover:text-gold transition-colors break-all text-sm md:text-base">{siteConfig.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Localização</span>
                    <span className="text-white font-bold tracking-widest">São Paulo - SP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-8">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50" />
                Navegação
              </h4>
              
              <ul className="space-y-4">
                {[
                  { label: 'Serviços', href: '#servicos' },
                  { label: 'Van', href: '#van' },
                  { label: 'Eventos', href: '#eventos' },
                  { label: 'Galeria', href: '#galeria' },
                  { label: 'Contato', href: '#reservas' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center gap-3 text-white/40 hover:text-gold transition-all duration-300"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <button 
                  onClick={scrollToTop}
                  className="group flex items-center gap-4 text-white/20 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <ArrowUpRight size={16} className="-rotate-45" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Voltar ao topo</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Final Line */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a 
              href="https://gabrielcostaluiz.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-widest text-white/10 font-black hover:text-gold transition-colors"
            >
              Desenvolvido por Gabriel Costa Luiz
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className="absolute bottom-[-5%] right-[-5%] text-[20vw] font-black text-white/2 leading-none pointer-events-none select-none">
        IRF
      </div>
    </footer>
  );
}
