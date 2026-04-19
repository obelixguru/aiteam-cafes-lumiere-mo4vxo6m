import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Cafés Lumière — éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <Nav />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 prose prose-roast">
        <h1 className="font-serif text-4xl font-black mb-8">Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Cafés Lumière SAS</strong><br />
          Capital social : 10 000 €<br />
          Siège social : 10 rue de la Torréfaction, 75011 Paris, France<br />
          SIRET : 123 456 789 00012<br />
          RCS Paris B 123 456 789<br />
          Directeur de la publication : Cafés Lumière SAS
        </p>

        <h2>Hébergeur</h2>
        <p>
          <strong>Vercel Inc.</strong><br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>

        <h2>Contact</h2>
        <p>
          Email : <a href="mailto:bonjour@cafes-lumiere.fr">bonjour@cafes-lumiere.fr</a><br />
          Formulaire : <Link href="/contact">page contact</Link>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logos, marques) est la
          propriété exclusive de Cafés Lumière SAS ou de ses partenaires. Toute
          reproduction, même partielle, est interdite sans autorisation écrite
          préalable.
        </p>

        <h2>Crédits photographiques</h2>
        <p>
          Photographies : Unsplash (licence libre). Icônes : Phosphor Icons (MIT).
        </p>

        <h2>Loi applicable</h2>
        <p>
          Le présent site est soumis au droit français. En cas de litige, les
          tribunaux de Paris seront seuls compétents.
        </p>
      </article>
    </main>
  );
}
