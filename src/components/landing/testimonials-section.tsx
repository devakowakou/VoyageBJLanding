import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "@/components/icons";

const testimonials = [
  {
    name: "Amina D.",
    role: "Étudiante",
    quote: "J’ai réservé mon billet Cotonou → Parakou en 2 minutes depuis mon téléphone. Super pratique, je recommande vivement VoyageBJ !",
    avatarId: "testimonial-avatar-1",
    rating: 5,
  },
  {
    name: "Jean E.",
    role: "Commerçant",
    quote: "Le service client est très réactif. J'avais fait une erreur sur ma date, et ils ont réglé ça en moins de 5 minutes. Expérience fluide et rassurante.",
    avatarId: "testimonial-avatar-2",
    rating: 5,
  },
  {
      name: "Fatima B.",
      role: "Fonctionnaire",
      quote: "Enfin une plateforme qui centralise tout ! Fini de devoir appeler 10 compagnies différentes. C'est un gain de temps énorme.",
      avatarId: "testimonial-avatar-3",
      rating: 4,
  }
];

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-primary">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5" filled={i < rating} />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Ils nous font confiance
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Découvrez ce que nos utilisateurs pensent de VoyageBJ.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
          return (
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Rating rating={testimonial.rating} />
                <p className="mt-4 text-foreground flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center space-x-4">
                  {avatarImage && (
                    <Avatar>
                      <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint}/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
