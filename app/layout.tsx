import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafés Lumière — Café de spécialité torréfié à la demande",
  description:
    "Abonnement mensuel de café de spécialité, torréfié à la commande et livré chez vous. Découvrez de nouveaux producteurs chaque mois dès 19 €.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-foam">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          Cafés <span className="text-lumiere">Lumière</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#comment-ca-marche" className="hover:text-lumiere transition-colors">Comment ça marche</Link>
          <Link href="/pricing" className="hover:text-lumiere transition-colors">Tarifs</Link>
          <Link href="/about" className="hover:text-lumiere transition-colors">Notre démarche</Link>
          <Link href="/blog" className="hover:text-lumiere transition-colors">Blog</Link>
          <Link href="/faq" className="hover:text-lumiere transition-colors">FAQ</Link>
          <Link
            href="/pricing"
            className="bg-roast text-cream px-4 py-2 rounded-lg hover:bg-bark transition-colors"
          >
            S&apos;abonner
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-roast text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg text-cream mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-lumiere transition-colors">Accueil</Link></li>
            <li><Link href="/about" className="hover:text-lumiere transition-colors">Notre démarche</Link></li>
            <li><Link href="/faq" className="hover:text-lumiere transition-colors">FAQ</Link></li>
            <li><Link href="/blog" className="hover:text-lumiere transition-colors">Blog</Link></li>
            <li><Link href="/pricing" className="hover:text-lumiere transition-colors">Tarifs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-cream mb-4">Légal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cgv" className="hover:text-lumiere transition-colors">Conditions Générales de Vente</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-lumiere transition-colors">Politique de confidentialité</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-lumiere transition-colors">Mentions légales</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-cream mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:bonjour@cafes-lumiere.fr" className="hover:text-lumiere transition-colors">bonjour@cafes-lumiere.fr</a></li>
            <li><Link href="/contact" className="hover:text-lumiere transition-colors">Formulaire de contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © 2026 Cafés Lumière · Torréfié à la demande depuis Paris.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
