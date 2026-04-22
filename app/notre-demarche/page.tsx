"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, HandHeart, MagnifyingGlass, ArrowRight } from "@phosphor-icons/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function NotreDemarche() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
          <motion.span variants={fadeUp} className="inline-block bg-fresh/10 text-fresh font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Notre démarche
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl font-black text-roast mb-6 leading-tight">
            Du grain à la tasse,<br />
            <span className="text-lumiere">avec amour et rigueur.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-grain max-w-2xl mx-auto leading-relaxed">
            Cafés Lumière est née d&apos;une conviction simple : le meilleur café du monde mérite d&apos;être accessible à tous, sans compromis sur la fraîcheur, la qualité ou l&apos;éthique.
          </motion.p>
        </motion.div>
      </section>

      {/* Story image */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden aspect-[21/9]"
        >
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1400&q=85"
            alt="Torréfaction artisanale Cafés Lumière"
            width={1400}
            height={600}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-black text-roast mb-6">
            Notre mission
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-5 text-grain leading-relaxed text-lg">
            <p>
              Tout a commencé dans un petit atelier de torréfaction à Lyon, en 2021. Fatigués des cafés industriels sans âme, nos fondateurs ont décidé de repenser l&apos;abonnement café de A à Z.
            </p>
            <p>
              La règle d&apos;or : <strong className="text-roast">ne jamais torréfier à l&apos;avance.</strong> Chaque commande déclenche une torréfaction fraîche. Pas de stock, pas de café qui s&apos;oxyde dans un entrepôt. Juste des grains au sommet de leurs arômes, expédiés dans les 24h.
            </p>
            <p>
              Aujourd&apos;hui, nous travaillons avec 12 producteurs dans 8 pays, tous sélectionnés pour leur engagement envers la qualité et le développement durable. Chaque lot est tracé, chaque partenariat est direct.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 bg-foam">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-black text-roast mb-12 text-center">
              Nos engagements
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  color: "bg-fresh/10 text-fresh",
                  title: "Durabilité",
                  desc: "Emballages compostables, partenariats équitables, bilan carbone compensé. L'environnement n'est pas une option pour nous.",
                },
                {
                  icon: HandHeart,
                  color: "bg-lumiere/10 text-lumiere",
                  title: "Commerce équitable",
                  desc: "Nous payons nos producteurs 30% au-dessus du prix du marché. Leur prospérité garantit la qualité de votre tasse.",
                },
                {
                  icon: MagnifyingGlass,
                  color: "bg-grain/10 text-grain",
                  title: "Transparence totale",
                  desc: "Chaque lot est tracé de la plantation à votre porte. Scannez le QR code sur votre sachet pour tout savoir.",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="bg-cream rounded-2xl p-8">
                  <div className={`inline-flex p-3 rounded-xl ${color} mb-5`}>
                    <Icon size={28} weight="fill" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-roast mb-3">{title}</h3>
                  <p className="text-grain leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "12", label: "Producteurs partenaires" },
            { value: "8", label: "Pays d'origine" },
            { value: "3 000+", label: "Abonnés satisfaits" },
            { value: "72h", label: "De la torréfaction à votre porte" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <p className="font-serif text-4xl sm:text-5xl font-black text-lumiere mb-2">{s.value}</p>
              <p className="text-smoke text-sm leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-roast">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-cream mb-6">
              Rejoignez l&apos;aventure Lumière
            </motion.h2>
            <motion.p variants={fadeUp} className="text-smoke text-lg mb-8">
              Chaque tasse raconte une histoire. La vôtre commence ici.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-lumiere text-roast px-10 py-4 rounded-full font-bold text-base hover:bg-lumiere/90 transition-colors"
              >
                Voir les abonnements
                <ArrowRight size={18} weight="bold" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
