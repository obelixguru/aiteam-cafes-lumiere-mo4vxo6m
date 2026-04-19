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

      {/* Pricing preview */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-4">Un abonnement pour chaque tasse</h2>
        <p className="text-center text-smoke mb-12 max-w-lg mx-auto">Sans engagement. Résiliable à tout moment. Livraison offerte.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Découverte", price: "19", desc: "250g · 1 origine · Mouture personnalisée", popular: false },
            { name: "Duo", price: "29", desc: "500g · 2 origines · Notes de dégustation", popular: true },
            { name: "Famille", price: "49", desc: "1kg · Micro-lots · Livraison express 48h", popular: false },
          ].map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl p-6 border ${tier.popular ? "border-lumiere bg-foam/30 ring-2 ring-lumiere" : "border-foam"}`}>
              {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lumiere text-roast text-xs font-bold px-3 py-1 rounded-full">Populaire</span>}
              <h3 className="font-serif text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-3xl font-bold mb-2">{tier.price} €<span className="text-sm font-normal text-smoke">/mois</span></p>
              <p className="text-sm text-smoke mb-6">{tier.desc}</p>
              <Link href="/pricing" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${tier.popular ? "bg-roast text-cream hover:bg-bark" : "bg-foam text-roast hover:bg-foam/70"}`}>
                Choisir
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-foam/30">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Ce qu&apos;en disent nos abonnés</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "Le café arrive encore tiède de la torréfaction, incroyable. Je ne reviendrai jamais au supermarché.", author: "Marc", city: "Lyon" },
            { text: "Abonnée depuis 3 mois. J'ai converti mon mari qui ne buvait que des capsules.", author: "Sophie", city: "Paris" },
            { text: "Chaque mois c'est une surprise. Les notes de dégustation m'ont appris à vraiment apprécier le café.", author: "Thomas", city: "Bordeaux" },
          ].map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-1 text-lumiere mb-3">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
              <p className="text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs font-semibold">{t.author} — {t.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 px-4 max-w-xl mx-auto text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">Restez informé</h2>
        <p className="text-smoke text-sm mb-6">Recevez nos sélections, conseils de préparation et offres exclusives.</p>
        <form action="/api/newsletter" method="POST" className="flex gap-2">
          <input
            type="email"
            name="email"
            required
            placeholder="votre@email.fr"
            className="flex-1 px-4 py-3 rounded-lg border border-foam text-sm focus:outline-none focus:ring-2 focus:ring-lumiere/30"
          />
          <button type="submit" className="bg-roast text-cream px-6 py-3 rounded-lg font-semibold text-sm hover:bg-bark transition-colors whitespace-nowrap">
            S&apos;inscrire
          </button>
        </form>
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
