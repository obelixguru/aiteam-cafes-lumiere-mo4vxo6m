"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaretDown, ArrowRight } from "@phosphor-icons/react";

const faqs = [
  {
    q: "Comment fonctionne l'abonnement ?",
    a: "Choisissez votre formule (Découverte, Duo ou Famille), et recevez chaque mois votre café de spécialité torréfié à la demande. Vous pouvez modifier ou annuler à tout moment, sans frais.",
  },
  {
    q: "Quand est torréfié mon café ?",
    a: "Votre café est torréfié uniquement après votre commande. Jamais de stock, jamais de café qui s'oxyde. Torréfié le lundi, expédié le mardi, chez vous en 72h.",
  },
  {
    q: "Puis-je choisir entre grain et moulu ?",
    a: "Oui ! Lors de votre inscription, indiquez votre préférence de mouture : grain entier, filtre, espresso, AeroPress, ou cafetière italienne.",
  },
  {
    q: "Comment résilier mon abonnement ?",
    a: "En un clic depuis votre espace client. Sans engagement, sans frais de résiliation, sans appel obligatoire. Votre abonnement se termine à la fin de la période en cours.",
  },
  {
    q: "D'où viennent vos cafés ?",
    a: "Nous travaillons avec 12 producteurs dans 8 pays (Éthiopie, Colombie, Guatemala, Kenya, Brésil, Costa Rica, Rwanda, Indonésie). Chaque lot est tracé de la plantation à votre tasse.",
  },
  {
    q: "Livrez-vous partout en France ?",
    a: "Oui, en France métropolitaine. Livraison offerte sur tous les abonnements. Livraison express 48h disponible sur l'abonnement Famille.",
  },
  {
    q: "Quelle est votre politique de remboursement ?",
    a: "Satisfait ou remboursé sur votre première livraison. Si le café ne vous convient pas, contactez-nous et nous vous remboursons intégralement.",
  },
  {
    q: "Puis-je offrir un abonnement ?",
    a: "Absolument ! Nous proposons des cartes cadeaux de 1, 3, 6 ou 12 mois. Le destinataire choisit sa formule et ses préférences.",
  },
  {
    q: "Proposez-vous du décaféiné ?",
    a: "Nous proposons régulièrement des origines décaféinées au procédé Swiss Water (sans solvant chimique). Mentionnez votre préférence et nous vous en inclurons dans vos envois.",
  },
  {
    q: "Quelle quantité de café vais-je recevoir ?",
    a: "Découverte : 250g/mois (environ 15 tasses). Duo : 500g/mois (environ 30 tasses). Famille : 1kg/mois (environ 60 tasses).",
  },
  {
    q: "Comment sont sélectionnés vos cafés ?",
    a: "Notre équipe de torréfacteurs goûte plus de 100 lots par mois. Seuls les cafés notés 84+ sur l'échelle SCA sont retenus. Chaque mois, une nouvelle sélection de terroirs d'exception.",
  },
  {
    q: "Puis-je modifier ma formule en cours de route ?",
    a: "Oui, à tout moment depuis votre espace client. Le changement prend effet dès le prochain cycle de livraison.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foam">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-roast pr-4">{q}</span>
        <CaretDown
          size={20}
          weight="bold"
          className={`text-grain shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-grain leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div>
      <section className="pt-16 pb-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-roast mb-4 text-center">
            Questions fréquentes
          </h1>
          <p className="text-grain text-lg text-center mb-12 max-w-xl mx-auto">
            Tout ce que vous devez savoir sur Cafés Lumière. Une question non résolue ? Écrivez-nous à bonjour@cafes-lumiere.fr
          </p>
        </motion.div>
        <div>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-lumiere text-roast px-8 py-4 rounded-full font-bold hover:bg-lumiere/90 transition-colors"
          >
            Voir les abonnements <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
}
