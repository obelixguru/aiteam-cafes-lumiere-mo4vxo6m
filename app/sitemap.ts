import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://cafes-lumiere.vercel.app'

function getBlogSlugs(): string[] {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8')
      const { data } = matter(raw)
      return data.slug || f.replace('.md', '')
    })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly', lastModified: new Date() },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: 'weekly', lastModified: new Date() },
    { url: `${BASE_URL}/notre-demarche`, priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE_URL}/faq`, priority: 0.6, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: 'daily', lastModified: new Date() },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...blogRoutes]
}
