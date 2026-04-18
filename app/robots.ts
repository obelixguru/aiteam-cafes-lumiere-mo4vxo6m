import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/'],
    },
    sitemap: 'https://cafes-lumiere-qi6okvehs-nueve9.vercel.app/sitemap.xml',
  }
}
