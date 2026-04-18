"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "@phosphor-icons/react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setVisible(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("exit-popup-seen");
    if (alreadySeen) return;
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("exit-popup-seen", "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-roast/60 backdrop-blur-sm px-4"
      onClick={dismiss}
    >
      <div
        className="bg-cream rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-smoke hover:text-roast transition-colors"
          aria-label="Fermer"
        >
          <X size={22} />
        </button>

        <div className="text-center">
          <span className="text-4xl mb-4 block">☕</span>
          <h2 className="font-serif text-2xl font-black text-roast mb-3">
            Attendez — un cadeau avant de partir
          </h2>
          <p className="text-grain text-sm mb-6">
            Inscrivez-vous à notre newsletter et recevez{" "}
            <strong className="text-roast">-10% sur votre premier mois</strong>{" "}
            + notre guide des origines offertes.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
              if (email) {
                fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, source: "exit-intent" }),
                }).catch(() => {});
              }
              sessionStorage.setItem("exit-popup-seen", "1");
              setVisible(false);
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="votre@email.fr"
              className="w-full border border-foam rounded-full px-5 py-3 text-roast bg-white focus:outline-none focus:ring-2 focus:ring-lumiere text-sm"
            />
            <button
              type="submit"
              className="w-full bg-lumiere text-roast px-8 py-3 rounded-full font-bold hover:bg-lumiere/90 transition-colors text-sm"
            >
              Obtenir mon -10%
            </button>
          </form>
          <button
            onClick={dismiss}
            className="mt-4 text-xs text-smoke hover:text-grain transition-colors"
          >
            Non merci, je préfère payer plein prix
          </button>
        </div>
      </div>
    </div>
  );
}
