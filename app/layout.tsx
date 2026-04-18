import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Cafés Lumière — Abonnement café de spécialité",
  description:
    "Recevez chaque mois un café de spécialité torréfié à la demande, livré sous 72h. Abonnement flexible, qualité barista, satisfaction garantie.",
  openGraph: {
    title: "Cafés Lumière — Abonnement café de spécialité",
    description: "Torréfié à la demande · Livré sous 72h · Satisfait ou remboursé",
    siteName: "Cafés Lumière",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
