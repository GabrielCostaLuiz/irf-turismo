import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import StatsBanner from "@/components/StatsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumServices from "@/components/PremiumServices";
import ComfortFeatures from "@/components/ComfortFeatures";
import EventGallery from "@/components/EventGallery";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";
import ReservationForm from "@/components/ReservationForm";
import UpcomingEvents from "@/components/UpcomingEvents";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="grow overflow-x-hidden bg-navy-dark text-foreground bg-sparkle">
      <PromoBanner />
      <Navbar />
      <Hero />
      <StatsBanner />
      <PremiumServices />
      <UpcomingEvents />
      <ComfortFeatures />
      <Showcase />
      <EventGallery />
      <WhyChooseUs />
      <Testimonials />
      <ReservationForm />

      {/* Footer / Contact Section */}
      <footer id="sobre" className="pt-24 pb-12 bg-navy-dark border-t border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-sparkle opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 logo-glow">
                  <Image 
                    src={siteConfig.images.logo} 
                    alt={`${siteConfig.name} Logo`} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tighter leading-none">
                    <span className="text-gold">I.R.F</span>
                  </div>
                  <div className="w-full h-px bg-gold/20 my-1" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70 font-light">Turismo</div>
                </div>
              </div>
              <p className="text-blue-100/70 text-lg mb-10 max-w-md">
                Conectando pessoas a experiências transformadoras, criando memórias que duram para a vida toda.
              </p>
              <div className="flex gap-4">
                <a 
                  href={siteConfig.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-8">Contato</h4>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-blue-100/70">
                    <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold"><Phone size={18} /></div>
                    <span className="font-medium">{siteConfig.phone.display}</span>
                  </li>
                  <li className="flex items-center gap-4 text-blue-100/70">
                    <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold"><Mail size={18} /></div>
                    <span className="font-medium">{siteConfig.email}</span>
                  </li>
                  <li className="flex items-center gap-4 text-blue-100/70">
                    <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold"><MapPin size={18} /></div>
                    <span className="font-medium">São Paulo - SP</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-8">Navegação</h4>
                <ul className="space-y-4 font-medium text-blue-100/70">
                  <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
                  <li><a href="#van" className="hover:text-gold transition-colors">Nossa Van</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Sobre Nós</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gold/10 text-center text-sm text-blue-100/30">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
