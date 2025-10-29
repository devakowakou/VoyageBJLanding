import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export function PartnersSection() {
  const dashboardImage = PlaceHolderImages.find((img) => img.id === "partners-dashboard");

  return (
    <SectionWrapper id="partners" className="bg-primary/5 dark:bg-primary/10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Vous êtes une compagnie de transport ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rejoignez la plateforme VoyageBJ et propulsez votre activité. Gagnez en visibilité, optimisez la gestion de vos trajets et accédez à de nouveaux clients.
          </p>
          <ul className="mt-6 space-y-3 text-foreground">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Augmentez votre visibilité et vos revenus.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Simplifiez la gestion de vos réservations.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Utilisez nos outils analytiques pour grandir.</span>
            </li>
          </ul>
          <Button size="lg" className="mt-8" asChild>
            <a href="mailto:partenaires@voyagebj.com">Devenir partenaire</a>
          </Button>
        </div>
        <div>
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
      </div>
    </SectionWrapper>
  );
}
