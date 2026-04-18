import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://cafes-lumiere-qi6okvehs-nueve9.vercel.app'

function getPosts() {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: data.slug || f.replace('.md', ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        content: content.slice(0, 500),
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function GET() {
  const posts = getPosts()

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cafés Lumière — Blog Café de Spécialité</title>
    <link>${BASE_URL}/blog</link>
    <description>Guides, origines et conseils café de spécialité — torréfié à la demande.</description>
    <language>fr</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
