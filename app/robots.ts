import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/'],
    },
    sitemap: 'https://cafes-lumiere.vercel.app/sitemap.xml',
  }
}
