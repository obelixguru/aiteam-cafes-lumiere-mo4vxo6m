import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
          Café de spécialité,<br />torréfié pour vous ce matin.
        </h1>
        <p className="text-lg text-smoke mb-8 max-w-xl mx-auto">
          Découvrez de nouveaux producteurs chaque mois. Grain frais, torréfié à la commande, livré chez vous.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-roast text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-bark transition-colors"
        >
          Découvrir dès 19 €/mois
        </Link>
        <p className="mt-4 text-sm text-smoke">Sans engagement · Livraison offerte · Torréfié en France</p>
      </section>

      {/* Social proof */}
      <section className="bg-foam/50 py-8 text-center">
        <p className="text-sm font-medium text-grain">Rejoint par +2 800 amateurs de café en France</p>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Comment ça marche</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-serif text-xl font-semibold mb-2">Origines sélectionnées</h3>
            <p className="text-smoke text-sm">Chaque mois, nous choisissons des producteurs d&apos;exception dans les meilleurs terroirs du monde.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="font-serif text-xl font-semibold mb-2">Torréfié à la commande</h3>
            <p className="text-smoke text-sm">Votre café est torréfié le jour de l&apos;expédition pour une fraîcheur maximale.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📬</div>
            <h3 className="font-serif text-xl font-semibold mb-2">Livré en boîte aux lettres</h3>
            <p className="text-smoke text-sm">Recevez votre café directement chez vous, sans avoir à vous déplacer.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 text-center bg-roast text-cream">
        <h2 className="font-serif text-3xl font-bold mb-4">Prêt à découvrir votre prochain café préféré ?</h2>
        <p className="text-cream/70 mb-8">L&apos;abonnement Découverte commence à 19 €/mois, sans engagement.</p>
        <Link
          href="/pricing"
          className="inline-block bg-lumiere text-roast px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lumiere/90 transition-colors"
        >
          Voir les abonnements
        </Link>
      </section>
    </div>
  );
}
