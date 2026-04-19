import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de Cafés Lumière — abonnement café de spécialité torréfié à la demande.",
};

export default function CGV() {
  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <Nav />
      <article className="pt-32 pb-20 px-4 sm:px-6 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="font-serif text-4xl font-black text-roast mb-8">
          Conditions Générales de Vente
        </h1>
        <p className="text-sm text-smoke mb-8">
          Dernière mise à jour : 19 avril 2026
        </p>

        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les
          relations contractuelles entre Cafés Lumière (ci-après « le Vendeur »)
          et toute personne physique ou morale effectuant un achat sur le site
          cafes-lumiere.fr (ci-après « le Client »). Toute commande implique
          l&apos;acceptation sans réserve des présentes CGV.
        </p>

        <h2>Article 2 — Produits et abonnements</h2>
        <p>
          Cafés Lumière propose des abonnements mensuels de café de spécialité
          torréfié à la demande. Trois formules sont disponibles :
        </p>
        <ul>
          <li>
            <strong>Découverte</strong> — 19 €/mois : 250 g, 1 origine
            sélectionnée, mouture personnalisée, livraison offerte.
          </li>
          <li>
            <strong>Passionné</strong> — 29 €/mois : 500 g, 2 origines
            sélectionnées, mouture personnalisée, livraison offerte, notes de
            dégustation.
          </li>
          <li>
            <strong>Expert</strong> — 39 €/mois : 1 kg, sélection micro-lots,
            mouture personnalisée, livraison express 48 h, notes de
            dégustation, accès aux lots rares.
          </li>
        </ul>
        <p>
          Les abonnements sont sans engagement et résiliables à tout moment
          depuis l&apos;espace client, avant la date de renouvellement mensuel.
        </p>

        <h2>Article 3 — Prix et paiement</h2>
        <p>
          Les prix sont indiqués en euros TTC (TVA incluse au taux en vigueur).
          Le paiement s&apos;effectue par carte bancaire via la plateforme
          sécurisée Stripe. Le prélèvement est réalisé à la souscription puis à
          chaque renouvellement mensuel.
        </p>

        <h2>Article 4 — Livraison</h2>
        <p>
          Les commandes sont expédiées sous 72 heures ouvrées après torréfaction.
          La livraison est effectuée en France métropolitaine par Colissimo ou
          tout transporteur partenaire. Cafés Lumière ne saurait être tenu
          responsable des retards imputables au transporteur.
        </p>

        <h2>Article 5 — Droit de rétractation</h2>
        <p>
          Conformément à l&apos;article L221-28 du Code de la consommation, le
          droit de rétractation ne s&apos;applique pas aux denrées alimentaires
          périssables. Toutefois, si le produit reçu est défectueux ou ne
          correspond pas à la commande, le Client peut contacter le service
          client dans un délai de 14 jours pour obtenir un remplacement ou un
          remboursement.
        </p>

        <h2>Article 6 — Garantie « Satisfait ou remboursé »</h2>
        <p>
          Pour le premier envoi uniquement, si le Client n&apos;est pas
          satisfait, Cafés Lumière s&apos;engage à rembourser intégralement la
          commande sur simple demande adressée à{" "}
          <a href="mailto:bonjour@cafes-lumiere.fr">bonjour@cafes-lumiere.fr</a>{" "}
          dans les 30 jours suivant la réception.
        </p>

        <h2>Article 7 — Résiliation</h2>
        <p>
          L&apos;abonnement peut être résilié à tout moment depuis l&apos;espace
          client ou par email. La résiliation prend effet à la fin de la période
          en cours. Aucun frais de résiliation n&apos;est appliqué.
        </p>

        <h2>Article 8 — Protection des données</h2>
        <p>
          Le traitement des données personnelles est décrit dans notre{" "}
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
          . Le Client dispose d&apos;un droit d&apos;accès, de rectification et
          de suppression de ses données.
        </p>

        <h2>Article 9 — Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du site (textes, images, logos, marques) est
          protégé par le droit de la propriété intellectuelle. Toute
          reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>

        <h2>Article 10 — Droit applicable et litiges</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, le
          Client peut recourir à un médiateur de la consommation conformément aux
          articles L611-1 et suivants du Code de la consommation. À défaut
          d&apos;accord amiable, les tribunaux français seront seuls compétents.
        </p>

        <div className="mt-12 pt-8 border-t border-foam text-sm text-smoke">
          <p>
            Pour toute question relative à ces conditions, contactez-nous à{" "}
            <a href="mailto:bonjour@cafes-lumiere.fr">
              bonjour@cafes-lumiere.fr
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
