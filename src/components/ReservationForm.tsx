"use client";

import { motion } from "framer-motion";
import { Calendar, Users, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    data: "",
    passageiros: "1",
    origem: "",
    destino: "",
    tipo: "Ida e Volta"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split("-");
      return `${day}/${month}/${year}`;
    };

    const message = `Olá meu nome é ${formData.nome} e gostaria de solicitar um orçamento:\n\n` +
      `Data: ${formatDate(formData.data)}\n` +
      `Passageiros: ${formData.passageiros}\n` +
      `Origem: ${formData.origem}\n` +
      `Destino: ${formData.destino}\n` +
      `Tipo: ${formData.tipo}\n\n` +
      `Aguardo o retorno!`;

    const whatsappUrl = `https://wa.me/5511977674215?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.nome.trim() !== "" &&
    formData.data !== "" &&
    formData.passageiros !== "" &&
    formData.origem.trim() !== "" &&
    formData.destino.trim() !== "";

  return (
    <section id="reservas" className="py-24 bg-navy-dark relative overflow-hidden lg:scroll-mt-[133px]">


      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-16 bg-linear-to-br from-white/5 to-transparent"
            >
              <div className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6">Agendamento Online</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Reserve sua <span className="gold-gradient">Experiência VIP</span>
              </h2>
              <p className="text-white/50 mb-12 text-lg">
                Preencha os detalhes da sua viagem e nossa equipe entrará em contato em poucos minutos para confirmar sua reserva.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg leading-tight">Atendimento Imediato</h4>
                    <p className="text-white/40 text-xs md:text-sm mt-1 leading-tight">Via WhatsApp ou E-mail</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 rounded-3xl bg-gold/5 border border-gold/10">
                <p className="text-gold text-sm italic font-medium">
                  &quot;Comprometidos com a pontualidade e segurança em cada km percorrido.&quot;
                </p>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-8 md:p-16"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Nome Completo <span className="text-gold">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Tipo de Viagem</label>
                    <div className="relative">
                      <select
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all appearance-none"
                      >
                        <option value="Só Ida" className="bg-navy-dark">Só Ida</option>
                        <option value="Só Volta" className="bg-navy-dark">Só Volta</option>
                        <option value="Ida e Volta" className="bg-navy-dark">Ida e Volta</option>
                      </select>
                      <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Data do Serviço <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        name="data"
                        value={formData.data}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all appearance-none"
                      />
                      <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Passageiros <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="number"
                        min="1"
                        max="20"
                        name="passageiros"
                        value={formData.passageiros}
                        onChange={handleChange}
                        placeholder="Ex: 15"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all appearance-none"
                      />
                      <Users className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                    Local de Origem <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="origem"
                      value={formData.origem}
                      onChange={handleChange}
                      placeholder="Endereço de partida ou Aeroporto"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                    <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                    Destino Final <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="destino"
                      value={formData.destino}
                      onChange={handleChange}
                      placeholder="Endereço de destino"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                    />
                    <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    disabled={isSubmitting || !isFormValid}
                    type="submit"
                    className="w-full bg-gold-premium py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed group transition-all"
                  >
                    <span className="font-bold text-sm md:text-base">
                      {isSubmitting ? "Enviando..." : "Solicitar Orçamento Agora"}
                    </span>
                    {!isSubmitting && <Send size={18} className="hidden md:block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                  <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-widest">
                    * Preenchimento obrigatório para orçamento.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
