import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";

interface Params {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const dir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const postSlug = data.slug || file.replace(".md", "");
    if (postSlug === slug) {
      return { data, content };
    }
  }
  return null;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return { slug: data.slug || file.replace(".md", "") };
  });
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.data.title} — Cafés Lumière`,
    description: post.data.excerpt,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      images: post.data.coverImage ? [{ url: post.data.coverImage }] : [],
      siteName: "Cafés Lumière",
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description: post.data.excerpt,
    datePublished: post.data.date,
    image: post.data.coverImage,
    publisher: {
      "@type": "Organization",
      name: "Cafés Lumière",
      url: "https://cafes-lumiere.vercel.app",
    },
  };

  return (
    <main className="min-h-screen bg-cream text-roast font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <article className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-lumiere hover:underline">
            ← Blog
          </Link>
        </div>

        <span className="text-xs font-semibold text-lumiere uppercase tracking-widest">
          {post.data.category}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-black text-roast mt-3 mb-6 leading-tight">
          {post.data.title}
        </h1>
        <time className="text-sm text-smoke" dateTime={post.data.date}>
          {new Date(post.data.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        {post.data.coverImage && (
          <div className="mt-8 mb-10 rounded-2xl overflow-hidden aspect-video">
            <Image
              src={post.data.coverImage}
              alt={post.data.coverAlt || post.data.title}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-roast prose-a:text-lumiere prose-strong:text-roast"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 bg-roast rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-black text-cream mb-3">
            Découvrez nos abonnements
          </h2>
          <p className="text-smoke text-sm mb-6">
            Café de spécialité torréfié à la demande · Livré sous 72h · Dès 19€/mois
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-lumiere text-roast px-8 py-3.5 rounded-full font-bold hover:bg-lumiere/90 transition-colors"
          >
            Voir les abonnements
          </Link>
        </div>
      </article>

      <footer className="bg-roast text-smoke py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-xs">
          © {new Date().getFullYear()} Cafés Lumière. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
