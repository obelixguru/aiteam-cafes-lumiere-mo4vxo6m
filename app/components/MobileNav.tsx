"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/about", label: "Notre démarche" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-cream border-b border-foam shadow-lg z-50">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 hover:text-lumiere transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="bg-roast text-cream px-4 py-3 rounded-lg text-center font-semibold text-sm hover:bg-bark transition-colors"
            >
              S&apos;abonner
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
