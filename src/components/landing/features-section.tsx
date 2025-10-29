import { Search, PenTool, CreditCard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "../section-wrapper";

const features = [
  {
    icon: Search,
    title: "Recherche intelligente",
    description: "Trouvez votre trajet idéal en un clin d'œil grâce à notre moteur de recherche puissant et intuitif.",
  },
  {
    icon: PenTool,
    title: "Réservation simplifiée",
    description: "Quelques clics suffisent pour réserver votre place. Choisissez même vos sièges sur certains trajets.",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description: "Payez en toute confiance via Mobile Money (MTN, Moov), carte bancaire ou virement.",
  },
  {
    icon: Smartphone,
    title: "E-billet instantané",
    description: "Recevez votre billet électronique par SMS et e-mail. Plus besoin de l'imprimer !",
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Conçu pour vous simplifier le voyage
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Découvrez les fonctionnalités qui font de VoyageBJ votre meilleur allié pour tous vos déplacements au Bénin.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <feature.icon className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
