import Link from "next/link";
import { CheckCircle, Package, Coffee, ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface Props {
  searchParams: Promise<{
    plan?: string;
    price?: string;
    email?: string;
    firstName?: string;
  }>;
}

export default async function ConfirmationPage({ searchParams }: Props) {
  const params = await searchParams;
  const plan = params.plan || "passion";
  const price = params.price || "29";
  const email = params.email || "votre email";
  const firstName = params.firstName || "cher client";

  // Compute a mock delivery date (today + 3 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = deliveryDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Deterministic mock ref based on email to avoid impure render
  const orderRef = `LUM-${Buffer.from(email).toString("base64").replace(/[^A-Z0-9]/gi, "").substring(0, 6).toUpperCase() || "XXXYYY"}`;

  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      {/* Nav */}
      <nav className="border-b border-foam bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/">
            <img src="/logo.svg" alt="Cafés Lumière" className="h-10" />
          </Link>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 text-center">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-fresh/10 rounded-full mb-8">
          <CheckCircle size={48} weight="fill" className="text-fresh" />
        </div>

        <h1 className="font-serif text-4xl font-black text-roast mb-4">
          Bienvenue, {firstName} !
        </h1>
        <p className="text-grain text-lg mb-8 leading-relaxed">
          Votre abonnement <strong className="text-roast capitalize">{plan}</strong> est confirmé. Un email de confirmation a été envoyé à <strong className="text-roast">{email}</strong>.
        </p>

        {/* Order recap card */}
        <div className="bg-foam rounded-2xl p-6 text-left mb-8 space-y-4">
          <div className="flex items-center justify-between border-b border-cream pb-4">
            <p className="text-sm text-smoke font-medium">Référence commande</p>
            <p className="font-bold text-roast text-sm">{orderRef}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-smoke">Abonnement</p>
            <p className="font-semibold text-roast capitalize">{plan} — {price}€/mois</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-smoke">Livraison estimée</p>
            <p className="font-semibold text-roast capitalize">{formattedDate}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-smoke">Montant mensuel</p>
            <p className="font-semibold text-roast">{price}€</p>
          </div>
        </div>

        {/* Next steps */}
        <div className="text-left mb-10">
          <h2 className="font-serif text-xl font-bold text-roast mb-5">Prochaines étapes</h2>
          <div className="space-y-4">
            {[
              {
                icon: Coffee,
                title: "Torréfaction en cours",
                desc: "Nos artisans torréfient votre café à la demande. Cela prend généralement 24h.",
              },
              {
                icon: Package,
                title: "Expédition sous 72h",
                desc: `Votre café partira d'ici ${formattedDate}. Vous recevrez un numéro de suivi par email.`,
              },
              {
                icon: CheckCircle,
                title: "Renouvellement automatique",
                desc: "Votre abonnement se renouvelle chaque mois. Modifiez ou résiliez à tout moment.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lumiere/10 rounded-xl flex items-center justify-center">
                  <Icon size={20} weight="fill" className="text-lumiere" />
                </div>
                <div>
                  <p className="font-semibold text-roast text-sm mb-0.5">{title}</p>
                  <p className="text-grain text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-roast text-cream px-8 py-4 rounded-full font-bold hover:bg-bark transition-colors"
        >
          Retour à l&apos;accueil <ArrowRight size={18} weight="bold" />
        </Link>
      </div>
    </main>
  );
}
