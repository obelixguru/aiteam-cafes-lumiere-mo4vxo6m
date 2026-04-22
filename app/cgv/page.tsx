import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Cafés Lumière",
  description: "CGV de Cafés Lumière : abonnement café de spécialité, tarifs, livraison, rétractation et résiliation.",
};

export default function CGV() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-stone">
      <h1 className="font-serif">Conditions Générales de Vente</h1>
      <p className="text-sm text-smoke">Dernière mise à jour : 19 avril 2026</p>

      <h2>1. Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (CGV) régissent les ventes d&apos;abonnements mensuels de café de spécialité proposés par Cafés Lumière SAS sur le site cafes-lumiere.fr.
      </p>

      <h2>2. Produits et tarifs</h2>
      <p>Cafés Lumière propose trois formules d&apos;abonnement mensuel :</p>
      <ul>
        <li><strong>Découverte</strong> — 19 €/mois : 250 g de café en grain, torréfié à la commande, une origine sélectionnée.</li>
        <li><strong>Duo</strong> — 35 €/mois : 500 g de café en grain, torréfié à la commande, deux origines + mug céramique offert.</li>
        <li><strong>Famille</strong> — 49 €/mois : 1 kg de café en grain, torréfié à la commande, deux origines + un café surprise.</li>
      </ul>
      <p>Les abonnements annuels bénéficient d&apos;une remise de 15 % (soit 2 mois offerts).</p>

      <h2>3. Commande et paiement</h2>
      <p>
        Les paiements sont sécurisés par Stripe. Cafés Lumière ne stocke aucune donnée bancaire. Le prélèvement est effectué le 1er de chaque mois. Tout mois entamé est dû.
      </p>

      <h2>4. Livraison</h2>
      <p>
        La livraison est effectuée par Colissimo en France métropolitaine sous 3 à 5 jours ouvrés après torréfaction. Les frais de livraison sont inclus dans le prix de l&apos;abonnement. Cafés Lumière ne saurait être tenu responsable des retards liés au transporteur.
      </p>

      <h2>5. Droit de rétractation</h2>
      <p>
        Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les denrées périssables. Le café étant un produit alimentaire torréfié à la commande, il ne peut faire l&apos;objet d&apos;un retour une fois expédié. Avant expédition, vous pouvez annuler votre commande en contactant bonjour@cafes-lumiere.fr.
      </p>

      <h2>6. Résiliation</h2>
      <p>
        L&apos;abonnement est sans engagement de durée. Vous pouvez résilier à tout moment depuis votre espace client ou par email à bonjour@cafes-lumiere.fr. La résiliation prend effet à la fin du mois en cours.
      </p>

      <h2>7. Réclamations</h2>
      <p>
        Pour toute réclamation, contactez-nous à bonjour@cafes-lumiere.fr. Nous nous engageons à répondre sous 48 heures ouvrées. En cas de litige non résolu, vous pouvez saisir le médiateur de la consommation.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. Tout litige sera porté devant les tribunaux compétents de Paris.
      </p>
    </article>
  );
}
