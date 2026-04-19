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
        text: "Choisissez votre formule (Découverte, Passion ou Expert), et recevez chaque mois votre café de spécialité torréfié à la demande. Vous pouvez modifier ou annuler à tout moment, sans frais.",
      },
    },
    {
      "@type": "Question",
      name: "Quand est torréfié mon café ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Votre café est torréfié uniquement après votre commande. Jamais de stock, jamais de café qui s'oxyde. Torréfié le lundi, expédié le mardi, chez vous en 72h.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je choisir entre grain et moulu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui ! Lors de votre inscription, indiquez votre préférence de mouture : grain entier, filtre, espresso, AeroPress, ou cafetière italienne.",
      },
    },
    {
      "@type": "Question",
      name: "Comment résilier mon abonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En un clic depuis votre espace client. Sans engagement, sans frais de résiliation, sans appel obligatoire. Votre abonnement se termine à la fin de la période en cours.",
      },
    },
    {
      "@type": "Question",
      name: "D'où viennent vos cafés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous travaillons avec 12 producteurs dans 8 pays (Éthiopie, Colombie, Guatemala, Kenya, Brésil, Costa Rica, Rwanda, Indonésie). Chaque lot est tracé de la plantation à votre tasse.",
      },
    },
    {
      "@type": "Question",
      name: "Livrez-vous partout en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, en France métropolitaine. Livraison offerte sur tous les abonnements. Livraison express 24h disponible sur l'abonnement Expert.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est votre politique de remboursement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Satisfait ou remboursé sur votre première livraison. Si le café ne vous convient pas, contactez-nous et nous vous remboursons intégralement.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je offrir un abonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument ! Nous proposons des cartes cadeaux de 1, 3, 6 ou 12 mois. Le destinataire choisit sa formule et ses préférences.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous du décaféiné ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons régulièrement des origines décaféinées au procédé Swiss Water (sans solvant chimique). Mentionnez votre préférence et nous vous en inclurons dans vos envois.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle quantité de café vais-je recevoir ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Découverte : 250g/mois (environ 15 tasses). Passion : 500g/mois (environ 30 tasses). Expert : 1kg/mois (environ 60 tasses).",
      },
    },
    {
      "@type": "Question",
      name: "Comment sont sélectionnés vos cafés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre équipe de torréfacteurs goûte plus de 100 lots par mois. Seuls les cafés notés 84+ sur l'échelle SCA sont retenus. Chaque mois, une nouvelle sélection de terroirs d'exception.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je modifier ma formule en cours de route ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, à tout moment depuis votre espace client. Le changement prend effet dès le prochain cycle de livraison.",
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
