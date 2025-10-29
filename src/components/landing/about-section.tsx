import Image from "next/image";
import { Bus, CreditCard, Clock, ShieldCheck } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyPoints = [
  {
    icon: Bus,
    text: "Centralise les offres de transport",
  },
  {
    icon: CreditCard,
    text: "Réservation et paiement en ligne",
  },
  {
    icon: Clock,
    text: "Planification rapide et fiable",
  },
  {
    icon: ShieldCheck,
    text: "Sécurité garantie",
  },
];

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-traveler");

  return (
    <SectionWrapper id="about" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Une solution 100% béninoise pour voyager simplement
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            VoyageBJ est né de la volonté de simplifier la vie des voyageurs au Bénin. Notre mission est de rendre la réservation de billets de transport aussi simple, rapide et transparente que possible, en connectant les passagers aux meilleures compagnies de transport du pays.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-2 rounded-full">
                  <point.icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
            {aboutImage && (
                <div className="aspect-[3/4] relative">
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={aboutImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </SectionWrapper>
  );
}
