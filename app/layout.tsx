import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ExitIntentPopup from "./components/ExitIntentPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://cafes-lumiere-qi6okvehs-nueve9.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cafés Lumière — Abonnement café de spécialité",
    template: "%s — Cafés Lumière",
  },
  description:
    "Recevez chaque mois un café de spécialité torréfié à la demande, livré sous 72h. Abonnement flexible, qualité barista, satisfaction garantie.",
  openGraph: {
    title: "Cafés Lumière — Abonnement café de spécialité",
    description: "Torréfié à la demande · Livré sous 72h · Satisfait ou remboursé",
    siteName: "Cafés Lumière",
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafés Lumière — Abonnement café de spécialité",
    description: "Torréfié à la demande · Livré sous 72h · Satisfait ou remboursé",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cafés Lumière",
  url: siteUrl,
  description:
    "Abonnement café de spécialité torréfié à la demande. Livré sous 72h, dès 19€/mois.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
