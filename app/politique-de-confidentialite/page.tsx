import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Cafés Lumière",
  description: "Comment Cafés Lumière collecte, utilise et protège vos données personnelles conformément au RGPD.",
};

export default function PolitiqueConfidentialite() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-stone">
      <h1 className="font-serif">Politique de confidentialité</h1>
      <p className="text-sm text-smoke">Dernière mise à jour : 19 avril 2026</p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Cafés Lumière SAS, 10 rue de la Torréfaction, 75011 Paris, France.<br />
        Contact : bonjour@cafes-lumiere.fr
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données nécessaires à la gestion de votre abonnement :</p>
      <ul>
        <li><strong>Identité :</strong> nom, prénom, adresse email.</li>
        <li><strong>Livraison :</strong> adresse postale complète.</li>
        <li><strong>Paiement :</strong> les transactions sont traitées par Stripe. Nous ne stockons aucune donnée bancaire (numéro de carte, CVV, etc.).</li>
        <li><strong>Navigation :</strong> données anonymisées de navigation pour améliorer le site (analytics self-hosted, aucun cookie tiers).</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <ul>
        <li>Gestion et expédition de votre abonnement café.</li>
        <li>Communication relative à votre commande (confirmation, expédition, suivi).</li>
        <li>Newsletter et offres commerciales (uniquement avec votre consentement explicite).</li>
        <li>Amélioration de nos services et de l&apos;expérience utilisateur.</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Le traitement de vos données repose sur l&apos;exécution du contrat d&apos;abonnement (article 6.1.b du RGPD) et sur votre consentement pour les communications marketing (article 6.1.a du RGPD).
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant la durée de votre abonnement, puis 3 ans après la résiliation pour les obligations légales (facturation, comptabilité). Les données de navigation anonymisées sont conservées 13 mois.
      </p>

      <h2>6. Vos droits (RGPD)</h2>
      <p>Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Accès :</strong> obtenir une copie de vos données personnelles.</li>
        <li><strong>Rectification :</strong> corriger des données inexactes.</li>
        <li><strong>Suppression :</strong> demander l&apos;effacement de vos données.</li>
        <li><strong>Portabilité :</strong> recevoir vos données dans un format structuré.</li>
        <li><strong>Opposition :</strong> vous opposer au traitement à des fins de prospection.</li>
      </ul>
      <p>
        Pour exercer vos droits, contactez-nous à bonjour@cafes-lumiere.fr. Nous répondons sous 30 jours. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
      </p>

      <h2>7. Cookies</h2>
      <p>
        Notre site utilise uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé. Nos analytics sont auto-hébergés et ne transmettent aucune donnée à des tiers.
      </p>

      <h2>8. Sous-traitants</h2>
      <ul>
        <li><strong>Stripe</strong> (paiement) — certifié PCI DSS Level 1.</li>
        <li><strong>Vercel</strong> (hébergement) — serveurs en Europe.</li>
        <li><strong>Resend</strong> (emails transactionnels) — conforme RGPD.</li>
      </ul>
    </article>
  );
}
