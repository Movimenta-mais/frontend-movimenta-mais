import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ClosingSection } from "@/components/landing/ClosingSection";
import { EquipmentSection } from "@/components/landing/EquipmentSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <EquipmentSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
