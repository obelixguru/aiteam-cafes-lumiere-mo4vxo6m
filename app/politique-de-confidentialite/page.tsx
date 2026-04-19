import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — Cafés Lumière.",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <Nav />
      <article className="pt-32 pb-20 px-4 sm:px-6 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="font-serif text-4xl font-black text-roast mb-8">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-smoke mb-8">
          Dernière mise à jour : 19 avril 2026
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Cafés Lumière, société par actions simplifiée, dont le siège social est
          situé à Paris, France. Contact :{" "}
          <a href="mailto:bonjour@cafes-lumiere.fr">bonjour@cafes-lumiere.fr</a>.
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li>
            <strong>Données d&apos;identification :</strong> nom, prénom, adresse
            email, adresse postale de livraison.
          </li>
          <li>
            <strong>Données de paiement :</strong> traitées exclusivement par
            notre prestataire Stripe. Cafés Lumière ne stocke aucune donnée de
            carte bancaire.
          </li>
          <li>
            <strong>Données de navigation :</strong> cookies fonctionnels
            strictement nécessaires au fonctionnement du site. Aucun cookie
            publicitaire ou de tracking tiers n&apos;est déposé sans
            consentement explicite.
          </li>
          <li>
            <strong>Données de préférence :</strong> type de mouture, fréquence
            de livraison, origines préférées.
          </li>
        </ul>

        <h2>3. Finalités du traitement</h2>
        <p>Vos données sont traitées pour :</p>
        <ul>
          <li>La gestion de votre abonnement et la livraison de vos commandes.</li>
          <li>
            L&apos;envoi de communications relatives à votre compte (confirmation
            de commande, suivi de livraison).
          </li>
          <li>
            L&apos;envoi de la newsletter et d&apos;offres commerciales, sous
            réserve de votre consentement préalable (double opt-in).
          </li>
          <li>L&apos;amélioration de nos services et de l&apos;expérience utilisateur.</li>
        </ul>

        <h2>4. Base légale</h2>
        <p>
          Les traitements sont fondés sur l&apos;exécution du contrat
          (abonnement), le consentement (newsletter) et l&apos;intérêt légitime
          (amélioration du service), conformément au Règlement Général sur la
          Protection des Données (RGPD — Règlement UE 2016/679).
        </p>

        <h2>5. Destinataires des données</h2>
        <p>
          Vos données peuvent être transmises à nos sous-traitants techniques :
          Stripe (paiement), Vercel (hébergement), Resend (emails
          transactionnels). Aucune donnée n&apos;est vendue à des tiers. Tous
          nos sous-traitants sont conformes au RGPD et localisés dans l&apos;UE
          ou bénéficient de garanties adéquates.
        </p>

        <h2>6. Durée de conservation</h2>
        <ul>
          <li>
            <strong>Données clients actifs :</strong> pendant la durée de
            l&apos;abonnement + 3 ans après la dernière interaction.
          </li>
          <li>
            <strong>Données de facturation :</strong> 10 ans (obligation
            comptable).
          </li>
          <li>
            <strong>Données de prospection :</strong> 3 ans après le dernier
            contact.
          </li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données :
        </p>
        <ul>
          <li>
            <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
            données personnelles.
          </li>
          <li>
            <strong>Droit de rectification :</strong> corriger des données
            inexactes.
          </li>
          <li>
            <strong>Droit de suppression :</strong> demander l&apos;effacement
            de vos données.
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> recevoir vos données dans
            un format structuré.
          </li>
          <li>
            <strong>Droit d&apos;opposition :</strong> vous opposer au
            traitement à des fins de prospection commerciale.
          </li>
          <li>
            <strong>Droit de retrait du consentement :</strong> retirer votre
            consentement à tout moment pour la newsletter.
          </li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à{" "}
          <a href="mailto:bonjour@cafes-lumiere.fr">bonjour@cafes-lumiere.fr</a>.
          Nous répondrons dans un délai de 30 jours. Vous pouvez également
          introduire une réclamation auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
          ).
        </p>

        <h2>8. Cookies</h2>
        <p>
          Le site utilise uniquement des cookies strictement nécessaires au
          fonctionnement (session, préférences). Aucun cookie analytique ou
          publicitaire n&apos;est déposé sans votre consentement explicite via
          notre bandeau cookies.
        </p>

        <h2>9. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données : chiffrement TLS, accès
          restreint, audits réguliers.
        </p>

        <div className="mt-12 pt-8 border-t border-foam text-sm text-smoke">
          <p>
            Voir aussi nos{" "}
            <Link href="/cgv">Conditions Générales de Vente</Link> et nos{" "}
            <Link href="/mentions-legales">Mentions légales</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
