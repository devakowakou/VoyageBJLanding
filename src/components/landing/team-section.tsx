import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function TeamSection() {
    const teamImage = {
        imageUrl: "https://c.animaapp.com/mhbrpyo27hCoB0/img/ai_4.png",
        description: "L'équipe de VoyageBJ",
        imageHint: "team office"
    };

  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Une équipe passionnée au service de votre mobilité
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            VoyageBJ est née de la volonté de jeunes entrepreneurs béninois de faciliter les déplacements à travers le pays. Notre équipe multidisciplinaire combine expertise technologique et connaissance approfondie du secteur du transport.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous croyons en l'innovation locale et en la création de solutions adaptées aux réalités béninoises. Rejoignez-nous dans cette aventure pour transformer la mobilité au Bénin.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="mailto:carrieres@voyagebj.com">
                Rejoindre l’équipe
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        <div>
            <Image
              src={teamImage.imageUrl}
              alt={teamImage.description}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={teamImage.imageHint}
            />
        </div>
      </div>
    </SectionWrapper>
  );
}
