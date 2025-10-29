import type {Metadata} from 'next';
import { cn } from "@/lib/utils";
import './globals.css';
import { ThemeProvider } from '@/components/providers';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'VoyageBJ - Voyager n’a jamais été aussi simple au Bénin',
  description: 'Réservez vos billets de transport en quelques clics. Comparez, choisissez, et partez sereinement avec VoyageBJ.',
  openGraph: {
    title: 'VoyageBJ - Voyager n’a jamais été aussi simple au Bénin',
    description: 'Réservez vos billets de transport en quelques clics. Comparez, choisissez, et partez sereinement avec VoyageBJ.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://voyagebj.com', // Replace with actual URL
    siteName: 'VoyageBJ',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
