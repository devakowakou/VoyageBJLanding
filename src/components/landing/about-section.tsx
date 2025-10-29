import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyPoints = [
  {
    icon: CheckCircle,
    text: "Offres centralisées de toutes les compagnies",
  },
  {
    icon: CheckCircle,
    text: "Paiement sécurisé et fiable",
  },
  {
    icon: CheckCircle,
    text: "Planification rapide de vos voyages",
  },
  {
    icon: CheckCircle,
    text: "Service client réactif et disponible",
  },
];

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-bus-traveler");

  return (
    <SectionWrapper id="about" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Une solution 100% béninoise pour voyager simplement
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            VoyageBJ révolutionne la réservation de billets de transport au Bénin. Notre plateforme connecte les voyageurs avec les meilleures compagnies de transport, offrant transparence, simplicité et sécurité.
          </p>
          <div className="mt-8 space-y-4">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 text-accent">
                  <point.icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
            {aboutImage && (
                <div className="relative">
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={450}
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint={aboutImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </SectionWrapper>
  );
}
