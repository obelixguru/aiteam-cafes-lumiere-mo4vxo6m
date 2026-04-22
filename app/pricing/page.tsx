import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs — Abonnement café de spécialité",
  description:
    "Choisissez votre abonnement café de spécialité : Découverte (19 €), Duo (35 €) ou Famille (49 €). Sans engagement, livraison offerte.",
};

const tiers = [
  {
    name: "Découverte",
    price: 19,
    desc: "L'essentiel pour commencer",
    features: [
      "250g de café de spécialité",
      "1 origine par mois",
      "Mouture personnalisée",
      "Fiche producteur détaillée",
      "Livraison offerte",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Duo",
    price: 35,
    desc: "Notre choix populaire",
    features: [
      "500g de café de spécialité",
      "2 origines par mois",
      "Mouture personnalisée",
      "Fiche producteur détaillée",
      "Mug céramique offert (1er mois)",
      "Notes de dégustation",
      "Livraison offerte",
    ],
    cta: "Choisir cette box",
    popular: true,
  },
  {
    name: "Famille",
    price: 49,
    desc: "L'expérience complète",
    features: [
      "1kg de café de spécialité",
      "Micro-lots exclusifs",
      "Mouture personnalisée",
      "Fiche producteur détaillée",
      "Mug céramique offert (1er mois)",
      "Visite virtuelle du torréfacteur",
      "Livraison express 48h",
    ],
    cta: "Devenir VIP",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
        Un café d&apos;exception, sans engagement.
      </h1>
      <p className="text-center text-smoke mb-12 max-w-lg mx-auto">
        Résiliable à tout moment. Satisfait ou remboursé 30 jours.
        Livraison offerte en France métropolitaine.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 border flex flex-col ${
              tier.popular
                ? "border-lumiere bg-foam/30 ring-2 ring-lumiere"
                : "border-foam"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lumiere text-cream text-xs font-bold px-3 py-1 rounded-full">
                Choix Populaire
              </span>
            )}
            <h2 className="font-serif text-xl font-semibold mb-1">
              {tier.name}
            </h2>
            <p className="text-sm text-smoke mb-4">{tier.desc}</p>
            <p className="text-4xl font-bold mb-6">
              {tier.price} €
              <span className="text-base font-normal text-smoke">/mois</span>
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-lumiere mt-0.5 shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/checkout"
              className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                tier.popular
                  ? "bg-roast text-cream hover:bg-bark"
                  : "bg-foam text-roast hover:bg-foam/70"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Comparatif */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-2xl font-bold text-center mb-8">
          Pourquoi Cafés Lumière ?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foam">
                <th className="text-left py-3 pr-4"></th>
                <th className="py-3 px-4 font-semibold text-lumiere">
                  Cafés Lumière
                </th>
                <th className="py-3 px-4 font-semibold text-smoke">Coffao</th>
                <th className="py-3 px-4 font-semibold text-smoke">Autres</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foam/50">
              {[
                ["Torréfié à la commande", true, false, false],
                ["Sans engagement", true, true, false],
                ["Mug céramique offert", true, false, false],
                ["Fiche producteur détaillée", true, false, false],
                ["Livraison offerte", true, true, false],
                ["Dès 19 €/mois", true, true, false],
              ].map(([label, us, coffao, others]) => (
                <tr key={label as string}>
                  <td className="py-3 pr-4">{label as string}</td>
                  <td className="py-3 px-4 text-center">
                    {us ? (
                      <span className="text-lumiere font-bold">&#10003;</span>
                    ) : (
                      <span className="text-smoke">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {coffao ? (
                      <span className="text-fresh">&#10003;</span>
                    ) : (
                      <span className="text-smoke">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {others ? (
                      <span className="text-fresh">&#10003;</span>
                    ) : (
                      <span className="text-smoke">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust */}
      <section className="text-center">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-smoke">
          <span>&#128274; Paiement sécurisé via Stripe</span>
          <span>&#x21A9; Satisfait ou remboursé 30j</span>
          <span>&#128246; Annulation en 1 clic</span>
          <span>&#127466;&#127482; Conforme RGPD</span>
        </div>
      </section>
    </div>
  );
}
