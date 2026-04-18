"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Coffee,
  Package,
  Star,
  Leaf,
  Globe,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import Nav from "./components/Nav";
import { subscribeNewsletter } from "./actions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block bg-lumiere/20 text-lumiere font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Café de spécialité · Abonnement
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl font-black leading-tight text-roast mb-6">
              Le grand café,<br />
              <span className="text-lumiere">sans y penser.</span>
            </h1>
            <p className="text-lg text-grain leading-relaxed mb-4 max-w-lg">
              Chaque mois, votre café de spécialité torréfié à la demande arrive chez vous en 72h. Frais, éthique, et exactement à votre goût.
            </p>
            <p className="inline-flex items-center gap-2 text-fresh text-sm font-semibold mb-8">
              <CheckCircle size={18} weight="fill" />
              Sans engagement · Résiliation en 1 clic
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-lumiere text-roast px-8 py-4 rounded-full font-bold text-base hover:bg-lumiere/90 transition-colors shadow-lg shadow-lumiere/30"
              >
                Voir les abonnements
                <ArrowRight size={18} weight="bold" />
              </a>
              <Link
                href="/notre-demarche"
                className="inline-flex items-center justify-center gap-2 border border-foam text-bark px-8 py-4 rounded-full font-semibold text-base hover:border-grain transition-colors"
              >
                Notre démarche
              </Link>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-foam">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85"
                alt="Café fraîchement torréfié"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-foam">
              <p className="text-xs text-smoke font-medium mb-1">Prochain envoi</p>
              <p className="text-roast font-bold">Lundi · Éthiopie Yirgacheffe</p>
              <p className="text-xs text-fresh font-medium mt-1">Torréfié il y a 18h</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-smoke font-medium"
        >
          {[
            { icon: Coffee, label: "Torréfié à la demande" },
            { icon: Package, label: "Livré sous 72h" },
            { icon: Star, label: "Satisfait ou remboursé" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={20} weight="fill" className="text-lumiere" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="py-20 bg-foam">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-roast mb-4">
              Comment ça marche
            </motion.h2>
            <motion.p variants={fadeUp} className="text-grain text-lg max-w-xl mx-auto">
              En trois étapes simples, le meilleur café du monde arrive chez vous.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Choisissez votre abonnement",
                desc: "Sélectionnez la formule qui correspond à votre consommation et vos goûts.",
              },
              {
                step: "02",
                title: "On torréfie pour vous",
                desc: "Dès votre commande validée, nos artisans torréfient votre café à la demande.",
              },
              {
                step: "03",
                title: "Livré en 72h chrono",
                desc: "Votre café frais arrive en 72h, au pic de ses arômes, prêt à être dégusté.",
              },
            ].map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="bg-cream rounded-2xl p-8 border border-foam/50"
              >
                <span className="font-serif text-5xl font-black text-lumiere">{s.step}</span>
                <h3 className="font-serif text-xl font-bold text-roast mt-4 mb-2">{s.title}</h3>
                <p className="text-grain leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-roast mb-4">
            Pourquoi Lumière ?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-grain text-lg max-w-xl mx-auto">
            Nous avons repensé chaque détail pour que votre café soit toujours parfait.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Coffee,
              color: "bg-lumiere/10 text-lumiere",
              title: "Fraîcheur absolue",
              desc: "Torréfié à la demande, jamais stocké. Votre café arrive au pic de ses arômes, pas sorti d'un entrepôt.",
            },
            {
              icon: Globe,
              color: "bg-fresh/10 text-fresh",
              title: "Découverte permanente",
              desc: "Parcourez les plus belles origines : Éthiopie, Colombie, Guatemala… Chaque mois une nouvelle histoire.",
            },
            {
              icon: Leaf,
              color: "bg-grain/10 text-grain",
              title: "Éthique & traçable",
              desc: "Partenariats directs avec les producteurs. Prix justes, pratiques durables, traçabilité complète.",
            },
          ].map(({ icon: Icon, color, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group bg-foam rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl ${color} mb-5`}>
                <Icon size={28} weight="fill" />
              </div>
              <h3 className="font-serif text-xl font-bold text-roast mb-3">{title}</h3>
              <p className="text-grain leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-roast">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-cream mb-4">
              Choisissez votre formule
            </motion.h2>
            <motion.p variants={fadeUp} className="text-smoke text-lg max-w-xl mx-auto">
              Sans engagement. Modifiable à tout moment. Résiliation en un clic.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Découverte",
                price: "15",
                desc: "Parfait pour commencer l'aventure du café de spécialité.",
                features: ["150g / mois", "1 origine au choix", "Mouture personnalisée", "Livraison offerte"],
                highlight: false,
                badge: null,
              },
              {
                name: "Lumière",
                price: "19",
                desc: "L'expérience complète pour les vrais amateurs.",
                features: ["250g / mois", "2 origines sélectionnées", "Mouture personnalisée", "Livraison offerte", "Notes de dégustation"],
                highlight: true,
                badge: "Le plus choisi",
              },
              {
                name: "Prestige",
                price: "29",
                desc: "Pour les connaisseurs qui ne veulent aucun compromis.",
                features: ["500g / mois", "Sélection micro-lots", "Mouture personnalisée", "Livraison express 48h", "Notes de dégustation", "Accès aux lots rares"],
                highlight: false,
                badge: null,
              },
            ].map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-lumiere ring-4 ring-lumiere shadow-2xl shadow-lumiere/30 scale-105"
                    : "bg-bark"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-roast text-lumiere text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className={`font-serif text-2xl font-black mb-2 ${tier.highlight ? "text-roast" : "text-cream"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.highlight ? "text-bark" : "text-smoke"}`}>{tier.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-serif text-5xl font-black ${tier.highlight ? "text-roast" : "text-cream"}`}>
                      {tier.price}€
                    </span>
                    <span className={`text-sm ${tier.highlight ? "text-bark" : "text-smoke"}`}>/mois</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className={tier.highlight ? "text-roast" : "text-lumiere"}
                      />
                      <span className={`text-sm ${tier.highlight ? "text-roast" : "text-cream"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?plan=${tier.name.toLowerCase()}&price=${tier.price}`}
                  className={`block text-center py-3.5 rounded-full font-bold text-sm transition-colors ${
                    tier.highlight
                      ? "bg-roast text-cream hover:bg-bark"
                      : "bg-lumiere text-roast hover:bg-lumiere/90"
                  }`}
                >
                  Choisir cet abonnement
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-roast mb-4">
            Ce qu&apos;ils en disent
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Sophie M.",
              location: "Paris",
              text: "Je ne peux plus me passer de Lumière. Mon café du matin est devenu un vrai rituel, et la fraîcheur se sent vraiment.",
              stars: 5,
            },
            {
              name: "Thomas B.",
              location: "Lyon",
              text: "L'abonnement Passion est parfait. Deux origines par mois, c'est la bonne dose de découverte sans se perdre.",
              stars: 5,
            },
            {
              name: "Marie-Claire D.",
              location: "Bordeaux",
              text: "Les notes de dégustation m'ont aidée à comprendre pourquoi certains cafés me plaisent plus. Je suis passée à Expert !",
              stars: 5,
            },
          ].map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-foam rounded-2xl p-8 border border-foam"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="text-lumiere" />
                ))}
              </div>
              <p className="text-bark leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-grain/20 flex items-center justify-center">
                  <span className="font-serif font-bold text-grain text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-roast text-sm">{t.name}</p>
                  <p className="text-smoke text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-lumiere">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl font-black text-roast mb-6">
              Prêt à découvrir votre café idéal ?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-bark text-lg mb-8">
              Rejoignez 3 000+ amateurs de café qui ont déjà franchi le pas.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-roast text-cream px-10 py-4 rounded-full font-bold text-base hover:bg-bark transition-colors"
              >
                Voir les abonnements
                <ArrowRight size={18} weight="bold" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-foam">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-black text-roast mb-4">
            Restez dans la boucle
          </h2>
          <p className="text-grain mb-8">
            Recevez nos conseils brewing, les nouvelles origines et les offres exclusives.
          </p>
          <form action={subscribeNewsletter} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="votre@email.fr"
              className="flex-1 border border-foam rounded-full px-6 py-3.5 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
            />
            <button
              type="submit"
              className="bg-lumiere text-roast px-8 py-3.5 rounded-full font-bold hover:bg-lumiere/90 transition-colors whitespace-nowrap"
            >
              S&apos;inscrire
            </button>
          </form>
          <p className="text-xs text-smoke mt-4">Pas de spam. Désabonnement en un clic.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-roast text-smoke py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <Image src="/logo.svg" alt="Cafés Lumière" width={140} height={40} className="mb-4 brightness-200" />
              <p className="text-sm leading-relaxed max-w-xs">
                Le meilleur café de spécialité, torréfié à la demande et livré chez vous en 72h.
              </p>
            </div>
            <div>
              <h4 className="text-cream font-semibold text-sm mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#comment" className="hover:text-cream transition-colors">Comment ça marche</Link></li>
                <li><Link href="#pricing" className="hover:text-cream transition-colors">Abonnements</Link></li>
                <li><Link href="/notre-demarche" className="hover:text-cream transition-colors">Notre démarche</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cream font-semibold text-sm mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-cream transition-colors">CGV</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Politique de confidentialité</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Mentions légales</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bark pt-8 text-xs text-center">
            © {new Date().getFullYear()} Cafés Lumière. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}
