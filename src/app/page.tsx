import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import StatsBanner from "@/components/StatsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumServices from "@/components/PremiumServices";
import ComfortFeatures from "@/components/ComfortFeatures";
import InteriorShowcase from "@/components/InteriorShowcase";

import WhatsAppButton from "@/components/WhatsAppButton";
import PhotoToggleButton from "@/components/PhotoToggleButton";

import ReservationForm from "@/components/ReservationForm";
import UpcomingEvents from "@/components/UpcomingEvents";
import TextDivider from "@/components/TextDivider";


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

      <WhyChooseUs />
      <InteriorShowcase />
      {/* <TextDivider /> */}

      <ReservationForm />

      <Footer />

      <WhatsAppButton />
      <PhotoToggleButton />
    </main>
  );
}
