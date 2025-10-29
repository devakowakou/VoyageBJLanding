import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function PartnersSection() {
  const dashboardImage = PlaceHolderImages.find((img) => img.id === "partners-dashboard");

  return (
    <SectionWrapper id="partners" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-1">
          {dashboardImage && (
            <Image
              src={dashboardImage.imageUrl}
              alt={dashboardImage.description}
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint={dashboardImage.imageHint}
            />
          )}
        </div>
        <div className="order-2">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Vous êtes une compagnie de transport ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rejoignez VoyageBJ et développez votre activité. Accédez à des milliers de voyageurs, gérez vos réservations en temps réel, et bénéficiez d'outils d'analyse performants pour optimiser vos opérations.
          </p>
          <ul className="mt-6 space-y-3 text-foreground">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Tableau de bord intuitif</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Gestion des horaires et tarifs</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Statistiques et rapports détaillés</span>
            </li>
          </ul>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="mailto:partenaires@voyagebj.com">
                Devenir partenaire
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
