"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionWrapper } from "@/components/section-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marie Houngbo",
    role: "Étudiante",
    quote: "Enfin une plateforme qui facilite vraiment les déplacements au Bénin. Je recommande vivement.",
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
    <div className="flex items-center justify-center gap-1 text-primary">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400" filled={i < rating} />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Ce que disent nos utilisateurs
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Des milliers de voyageurs nous font confiance chaque jour
        </p>
      </div>
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                         {avatarImage && (
                            <Avatar className="w-20 h-20">
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint}/>
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        <Rating rating={testimonial.rating} />
                        <p className="text-lg text-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
