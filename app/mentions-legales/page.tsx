import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Cafés Lumière",
  description: "Mentions légales de Cafés Lumière : éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-stone">
      <h1 className="font-serif">Mentions légales</h1>
      <p className="text-sm text-smoke">Dernière mise à jour : 19 avril 2026</p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>Cafés Lumière SAS</strong><br />
        Société par Actions Simplifiée au capital de 10 000 €<br />
        Siège social : 10 rue de la Torréfaction, 75011 Paris, France<br />
        SIRET : 123 456 789 00012<br />
        RCS Paris B 123 456 789<br />
        TVA intracommunautaire : FR 12 123456789<br />
        Directeur de publication : Équipe Cafés Lumière<br />
        Contact : bonjour@cafes-lumiere.fr
      </p>

      <h2>Hébergeur</h2>
      <p>
        <strong>Vercel Inc.</strong><br />
        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
        Site : vercel.com
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, logo, design) est la propriété exclusive de Cafés Lumière SAS ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
      </p>

      <h2>Crédits</h2>
      <p>
        Photographies : Unsplash (libres de droits).<br />
        Icônes : Phosphor Icons (licence MIT).<br />
        Typographies : Google Fonts (licence Open Font).
      </p>

      <h2>Médiation</h2>
      <p>
        En cas de litige, le consommateur peut recourir gratuitement au service de médiation. Médiateur de la consommation : conformément aux articles L611-1 et R612-1 du Code de la consommation, vous pouvez saisir le médiateur via la plateforme européenne de règlement en ligne des litiges.
      </p>
    </article>
  );
}
