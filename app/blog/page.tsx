import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Blog Cafés Lumière — Guides, origines & conseils café",
  description:
    "Conseils brewing, guides des origines, actualités café de spécialité. Tout pour mieux connaître et apprécier votre café.",
  openGraph: {
    title: "Blog Cafés Lumière — Guides, origines & conseils café",
    description: "Conseils brewing, guides des origines, actualités café de spécialité.",
    siteName: "Cafés Lumière",
  },
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  coverAlt: string;
}

function getPosts(): Post[] {
  const dir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        category: data.category || "guide",
        coverImage: data.coverImage || "",
        coverAlt: data.coverAlt || "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

const CATEGORY_LABELS: Record<string, string> = {
  guide: "Guide",
  origines: "Origines",
  conseils: "Conseils",
  actualites: "Actualités",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <Nav />
      <div className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="inline-block bg-lumiere/20 text-lumiere font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Le magazine
          </span>
          <h1 className="font-serif text-5xl font-black text-roast mb-4">
            Guides & Origines
          </h1>
          <p className="text-grain text-lg max-w-xl">
            Tout ce que vous devez savoir sur le café de spécialité — chaque semaine, une nouvelle histoire.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-grain">Aucun article pour le moment. Revenez bientôt.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-foam hover:shadow-lg transition-shadow">
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold text-lumiere uppercase tracking-widest">
                    {CATEGORY_LABELS[post.category] || post.category}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-roast mt-2 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-lumiere transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-grain text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-smoke" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-lumiere hover:underline"
                    >
                      Lire →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-20 bg-roast rounded-3xl p-10 text-center">
          <h2 className="font-serif text-3xl font-black text-cream mb-4">
            Recevez les nouveaux articles
          </h2>
          <p className="text-smoke mb-6">+ les offres exclusives et les nouveautés origines.</p>
          <Link
            href="/#newsletter"
            className="inline-block bg-lumiere text-roast px-8 py-3.5 rounded-full font-bold hover:bg-lumiere/90 transition-colors"
          >
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      </div>

      <footer className="bg-roast text-smoke py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-xs">
          © {new Date().getFullYear()} Cafés Lumière. Tous droits réservés. ·{" "}
          <Link href="/" className="hover:text-cream">Accueil</Link> ·{" "}
          <Link href="/faq" className="hover:text-cream">FAQ</Link>
        </div>
      </footer>
    </main>
  );
}
