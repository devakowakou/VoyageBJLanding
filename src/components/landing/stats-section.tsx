"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
  { value: 1000, label: "Trajets disponibles", suffix: "+" },
  { value: 25, label: "Compagnies partenaires", suffix: "+" },
  { value: 10000, label: "Voyageurs satisfaits", suffix: "+" },
];

export function StatsSection() {
  return (
    <div className="bg-primary text-primary-foreground">
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-headline text-5xl font-bold tracking-tighter text-white">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-2 text-lg text-primary-foreground/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
