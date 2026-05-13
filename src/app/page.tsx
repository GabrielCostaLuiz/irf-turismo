import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import StatsBanner from "@/components/StatsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumServices from "@/components/PremiumServices";
import ComfortFeatures from "@/components/ComfortFeatures";
import InteriorShowcase from "@/components/InteriorShowcase";
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

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grow overflow-x-hidden bg-navy-dark text-foreground bg-sparkle">
      <Navbar />
      <Hero />
      <StatsBanner />
      <PremiumServices />
      <ComfortFeatures />
      <UpcomingEvents />
      <EventGallery />
      <WhyChooseUs />
      <InteriorShowcase />
      {/* <Testimonials /> */}
      {/* <Showcase /> */}

      <ReservationForm />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
