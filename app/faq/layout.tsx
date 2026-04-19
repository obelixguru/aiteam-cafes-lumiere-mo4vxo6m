import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes",
  description:
    "Toutes les réponses à vos questions sur l'abonnement Cafés Lumière : livraison, résiliation, grain/moulu, cadeaux et plus encore.",
  openGraph: {
    title: "FAQ Cafés Lumière — Questions fréquentes",
    description:
      "Abonnement café de spécialité torréfié à la demande. Réponses rapides sur la livraison, la résiliation et la qualité.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment fonctionne l'abonnement Cafés Lumière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque mois, nous sélectionnons un café de spécialité auprès d'un producteur d'exception, nous le torréfions à la commande et vous le livrons sous 72h.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je résilier mon abonnement à tout moment ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, sans engagement ni frais. Résiliez en un clic depuis votre espace client avant le 25 du mois pour ne pas être prélevé le mois suivant.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le délai de livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le café est torréfié puis expédié sous 48h. Comptez 72h au total pour une livraison en France métropolitaine.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je choisir entre grain et moulu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Au moment de votre inscription, vous choisissez grain entier ou moulu (espresso, filtre, cafetière à piston).",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
