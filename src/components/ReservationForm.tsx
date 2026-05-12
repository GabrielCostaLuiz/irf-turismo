"use client";

import { motion } from "framer-motion";
import { Calendar, Users, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Solicitação enviada com sucesso! Entraremos em contato via WhatsApp.");
    }, 2000);
  };

  return (
    <section id="reservas" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sparkle opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-sparkle opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Info */}
            <div className="p-8 md:p-16 bg-linear-to-br from-white/5 to-transparent">
              <div className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6">Agendamento Online</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Reserve sua <span className="gold-gradient">Experiência VIP</span>
              </h2>
              <p className="text-white/50 mb-12 text-lg">
                Preencha os detalhes da sua viagem e nossa equipe entrará em contato em poucos minutos para confirmar sua reserva.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Atendimento Imediato</h4>
                    <p className="text-white/40 text-sm">Via WhatsApp ou E-mail</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Flexibilidade</h4>
                    <p className="text-white/40 text-sm">Cancelamento gratuito até 24h</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 rounded-3xl bg-gold/5 border border-gold/10">
                <p className="text-gold text-sm italic font-medium">
                  "Comprometidos com a pontualidade e segurança em cada km percorrido."
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder={siteConfig.phone.display}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Data do Serviço</label>
                    <div className="relative">
                      <input 
                        required
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all appearance-none"
                      />
                      <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Passageiros</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all appearance-none">
                        <option value="1-5" className="bg-navy-dark">1 a 5 pessoas</option>
                        <option value="6-10" className="bg-navy-dark">6 a 10 pessoas</option>
                        <option value="11-15" className="bg-navy-dark">11 a 15 pessoas</option>
                        <option value="15+" className="bg-navy-dark">Mais de 15</option>
                      </select>
                      <Users className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Local de Origem</label>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="Endereço de partida ou Aeroporto"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                    <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Destino</label>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="Endereço de destino"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                    <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-gold-premium py-5 rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar Orçamento Agora"}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-widest">
                    Prometemos não enviar spam. Seus dados estão seguros.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
