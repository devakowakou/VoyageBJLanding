"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, MapPin, ArrowRight, Search } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const searchSchema = z.object({
  departure: z.string().min(1, "La ville de départ est requise."),
  arrival: z.string().min(1, "La ville d'arrivée est requise."),
  date: z.date({
    required_error: "Une date est requise.",
  }),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export function HeroSection() {
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bus");

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      departure: "",
      arrival: "",
    },
  });

  function onSubmit(data: SearchFormValues) {
    toast({
      title: "Recherche en cours...",
      description: `Trajet de ${data.departure} à ${data.arrival} le ${format(data.date, "PPP", { locale: fr })}.`,
    });
  }

  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>

      <div className="container relative z-10 text-center text-primary-foreground">
        <div className="flex flex-col items-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Réservez vos billets de transport en <span className="text-emerald-300">quelques clics</span> 🚍
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Comparez, choisissez, et partez sereinement avec VoyageBJ. Voyager n’a jamais été aussi simple au Bénin ✨
            </p>
        </div>

        <div className="mt-10 mx-auto max-w-4xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl border"
            >
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-start">
                <div className="md:col-span-3">
                  <FormField
                    control={form.control}
                    name="departure"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input
                              placeholder="Ville de départ"
                              className="pl-10"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-left"/>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="hidden md:flex justify-center items-center h-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground"/>
                </div>

                <div className="md:col-span-3">
                  <FormField
                    control={form.control}
                    name="arrival"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input
                              placeholder="Ville d'arrivée"
                              className="pl-10"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-left"/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "PPP", { locale: fr })
                                ) : (
                                  <span>Date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                              initialFocus
                              locale={fr}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage className="text-left"/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-1">
                  <Button type="submit" className="w-full" size="lg">
                    <Search className="h-5 w-5 md:hidden mr-2" />
                    <span className="hidden md:inline">Trouver</span>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
