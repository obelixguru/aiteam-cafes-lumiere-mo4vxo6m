"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#pricing", label: "Abonnements" },
  { href: "/blog", label: "Blog" },
  { href: "/notre-demarche", label: "Notre démarche" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-foam">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/">
          <img src="/logo.svg" alt="Cafés Lumière" className="h-10" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-bark">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-lumiere transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#pricing"
            className="hidden sm:inline-flex bg-roast text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-bark transition-colors"
          >
            Commencer
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-roast"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-foam px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-bark font-medium border-b border-foam/50 last:border-0 hover:text-lumiere transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#pricing"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-lumiere text-roast py-3 rounded-full font-bold"
          >
            Voir les abonnements
          </Link>
        </div>
      )}
    </nav>
  );
}
