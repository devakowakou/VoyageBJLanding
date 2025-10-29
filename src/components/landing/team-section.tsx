import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/section-wrapper";

export function TeamSection() {
  return (
    <SectionWrapper className="bg-card">
      <div className="max-w-4xl mx-auto text-center bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Une équipe passionnée par l'innovation
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Derrière VoyageBJ, il y a une équipe de développeurs, designers et stratèges béninois déterminés à transformer la mobilité dans notre pays grâce à la technologie. Notre vision est de connecter chaque ville et chaque village, en rendant le voyage accessible à tous.
        </p>
        <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
          <a href="mailto:carrieres@voyagebj.com">Rejoindre l’équipe</a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
