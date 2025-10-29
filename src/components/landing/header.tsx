"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/icons";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#features", label: "Fonctionnalités" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end flex-1 space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="outline" className="border-accent hover:bg-accent/10">
              <Link href="#partners">Devenir partenaire</Link>
            </Button>
            <ThemeToggle />
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-8">
                   <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="h-6 w-auto" />
                   </Link>
                   <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <X/>
                        <span className="sr-only">Fermer le menu</span>
                    </Button>
                   </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-4 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col space-y-4">
                  <Button asChild variant="outline" className="border-accent hover:bg-accent/10">
                    <Link href="#partners">Devenir partenaire</Link>
                  </Button>
                  <div className="flex justify-between items-center rounded-md border p-2">
                    <span>Changer de thème</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
