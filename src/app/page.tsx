import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TeamSection } from "@/components/landing/team-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PartnersSection />
        <TestimonialsSection />
        <StatsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
