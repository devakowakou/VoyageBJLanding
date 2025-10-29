import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
];

const footerLinks = [
    { href: "/", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#features", label: "Fonctionnalités" },
    { href: "#testimonials", label: "Avis" },
    { href: "#contact", label: "Contact" },
];


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <Link href="/" className="mb-4 inline-block">
                    <Logo className="h-8 w-auto" />
                </Link>
                <p className="text-sm">Voyager n’a jamais été aussi simple au Bénin ✨</p>
            </div>
          
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        {footerLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-primary transition-colors text-sm">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Légal</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-primary transition-colors text-sm">Conditions d'utilisation</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors text-sm">Politique de confidentialité</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <Button key={social.name} variant="ghost" size="icon" asChild>
                                <a href={social.href} aria-label={social.name}>
                                <social.icon className="h-5 w-5" />
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p>&copy; {currentYear} VoyageBJ – Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
