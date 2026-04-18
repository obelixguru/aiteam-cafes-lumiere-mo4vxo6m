import { MetadataRoute } from 'next'

const BASE_URL = 'https://cafes-lumiere-qi6okvehs-nueve9.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/notre-demarche`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: 'daily' as const },
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
