"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedCounter } from "@/components/animated-counter";
import { Users, Bus, MapPin, Award } from "lucide-react";

const stats = [
  { value: 15000, label: "Utilisateurs actifs", suffix: "+", icon: Users },
  { value: 50, label: "Compagnies partenaires", suffix: "+", icon: Bus },
  { value: 120, label: "Destinations couvertes", suffix: "+", icon: MapPin },
  { value: 98, label: "Satisfaction client", suffix: "%", icon: Award },
];

export function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white">
      <SectionWrapper>
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Notre impact en chiffres
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
                Des résultats qui témoignent de notre engagement
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <span className="font-headline text-5xl font-bold tracking-tighter text-white">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-2 text-lg text-primary-foreground/90">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
