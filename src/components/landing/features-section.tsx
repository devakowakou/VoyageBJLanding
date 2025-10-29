import { Search, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "../section-wrapper";

const features = [
  {
    icon: Search,
    title: "Recherche simplifiée",
    description: "Trouvez rapidement les meilleurs trajets disponibles selon vos critères.",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    description: "Transactions protégées avec les standards de sécurité les plus élevés.",
  },
  {
    icon: Clock,
    title: "Réservation instantanée",
    description: "Confirmez votre billet en quelques secondes, sans attente.",
  },
  {
    icon: MapPin,
    title: "Couverture nationale",
    description: "Accédez à toutes les destinations à travers le Bénin.",
  },
];

export function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Fonctionnalités clés
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Découvrez comment VoyageBJ simplifie votre expérience de voyage.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-left bg-card p-4 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
            <CardHeader className="p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="p-2">
              <CardTitle className="font-headline text-lg font-semibold text-foreground mb-2">{feature.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
