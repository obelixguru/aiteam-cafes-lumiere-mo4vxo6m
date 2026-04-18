"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft } from "@phosphor-icons/react";

const steps = ["Votre email", "Adresse", "Paiement"];

const planNames: Record<string, string> = {
  découverte: "Découverte — 19€/mois",
  passion: "Passion — 29€/mois",
  expert: "Expert — 45€/mois",
};

function CheckoutInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "passion";
  const price = searchParams.get("price") || "29";

  const [step, setStep] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsPending(true);
    // Simulate payment processing
    await new Promise((r) => setTimeout(r, 1000));
    router.push(
      `/checkout/confirmation?plan=${plan}&price=${price}&email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}`
    );
  };

  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      {/* Nav */}
      <nav className="border-b border-foam bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/">
            <img src="/logo.svg" alt="Cafés Lumière" className="h-10" />
          </Link>
          <span className="text-sm text-smoke">Paiement sécurisé 🔒</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Plan recap */}
        <div className="bg-foam rounded-2xl p-5 mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs text-smoke font-medium mb-1">Votre abonnement</p>
            <p className="font-serif font-bold text-roast text-lg">
              {planNames[plan] ?? `${plan} — ${price}€/mois`}
            </p>
          </div>
          <Link href="/#pricing" className="text-xs text-grain underline">Modifier</Link>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${
                i < step ? "bg-fresh text-cream" : i === step ? "bg-roast text-cream" : "bg-foam text-smoke"
              }`}>
                {i < step ? <CheckCircle size={18} weight="fill" /> : i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${i === step ? "text-roast font-semibold" : "text-smoke"}`}>
                {s}
              </span>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-foam" />}
            </div>
          ))}
        </div>

        {/* Step 0: Email */}
        {step === 0 && (
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-black text-roast">Votre email</h1>
            <p className="text-grain">Nous vous enverrons votre confirmation et les mises à jour de livraison.</p>
            <div>
              <label className="block text-sm font-medium text-bark mb-2">Adresse email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.fr"
                className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
              />
            </div>
            <button
              onClick={handleNext}
              disabled={!email}
              className="w-full flex items-center justify-center gap-2 bg-roast text-cream py-4 rounded-full font-bold disabled:opacity-50 hover:bg-bark transition-colors"
            >
              Continuer <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        )}

        {/* Step 1: Address */}
        {step === 1 && (
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-black text-roast">Adresse de livraison</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Prénom</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Marie"
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Nom</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Dupont"
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-bark mb-2">Adresse</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="12 rue de la Paix"
                className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Code postal</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="75001"
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Ville</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Paris"
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-4 border border-foam rounded-full text-bark font-semibold hover:border-grain transition-colors"
              >
                <ArrowLeft size={18} /> Retour
              </button>
              <button
                onClick={handleNext}
                disabled={!firstName || !address || !city || !zip}
                className="flex-1 flex items-center justify-center gap-2 bg-roast text-cream py-4 rounded-full font-bold disabled:opacity-50 hover:bg-bark transition-colors"
              >
                Continuer <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Payment mock */}
        {step === 2 && (
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-black text-roast">Paiement</h1>
            <p className="text-grain text-sm">
              Ceci est une démonstration. Aucun paiement réel ne sera effectué.
            </p>
            <div>
              <label className="block text-sm font-medium text-bark mb-2">Numéro de carte</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="4242 4242 4242 4242"
                maxLength={19}
                className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Date d&apos;expiration</label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/AA"
                  maxLength={5}
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">CVC</label>
                <input
                  type="text"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  placeholder="123"
                  maxLength={3}
                  className="w-full border border-foam rounded-xl px-4 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere transition"
                />
              </div>
            </div>
            {/* Order summary */}
            <div className="bg-foam rounded-2xl p-5 space-y-2">
              <p className="font-semibold text-roast text-sm mb-3">Récapitulatif</p>
              <div className="flex justify-between text-sm">
                <span className="text-bark capitalize">Abonnement {plan}</span>
                <span className="font-semibold text-roast">{price}€/mois</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-bark">Livraison</span>
                <span className="text-fresh font-semibold">Offerte</span>
              </div>
              <div className="border-t border-foam/50 pt-2 flex justify-between">
                <span className="font-bold text-roast">Total</span>
                <span className="font-bold text-roast">{price}€/mois</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-4 border border-foam rounded-full text-bark font-semibold hover:border-grain transition-colors"
              >
                <ArrowLeft size={18} /> Retour
              </button>
              <button
                onClick={handleSubmit}
                disabled={isPending || !cardNumber}
                className="flex-1 flex items-center justify-center gap-2 bg-lumiere text-roast py-4 rounded-full font-bold disabled:opacity-50 hover:bg-lumiere/90 transition-colors"
              >
                {isPending ? "Traitement…" : `Confirmer — ${price}€/mois`}
                {!isPending && <ArrowRight size={18} weight="bold" />}
              </button>
            </div>
            <p className="text-xs text-smoke text-center">
              En confirmant, vous acceptez nos CGV. Résiliation sans frais à tout moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center text-roast font-serif text-2xl">Chargement…</div>}>
      <CheckoutInner />
    </Suspense>
  );
}
