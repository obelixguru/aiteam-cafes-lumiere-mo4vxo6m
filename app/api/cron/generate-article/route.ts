import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const TOPICS = [
  'café éthiopien Yirgacheffe : guide complet des arômes floraux',
  'comment choisir son moulin à café : burr vs lame',
  'torréfaction légère vs foncée : quelle différence dans la tasse ?',
  'café de Colombie Huila : notes caramel et agrumes',
  'méthode V60 pour débutants : recette étape par étape',
  'café rwandais : les producteurs du lac Kivu',
  'l\'importance du terroir dans le café de spécialité',
  'comment conserver son café torréfié frais',
  'abonnement café : pourquoi la fraîcheur change tout',
  'score SCA et café de spécialité : comprendre la notation',
]

export async function POST(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const today = new Date().toISOString().split('T')[0]
  const topicIndex = new Date().getDate() % TOPICS.length
  const topic = TOPICS[topicIndex]
  const slug = `cafe-specialite-${today}`

  // Check if article already exists for today
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const filePath = path.join(dir, `${slug}.md`)
  if (fs.existsSync(filePath)) {
    return NextResponse.json({ message: 'Article already exists for today', slug })
  }

  // Generate article content (template when no Gemini key)
  const geminiKey = process.env.GEMINI_API_KEY
  let content = ''

  if (geminiKey) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Écris un article de blog SEO en français sur le thème : "${topic}".
Structure : titre H1, introduction (150 mots), 3 sections H2 avec contenu (200 mots chacune), conclusion avec CTA vers abonnement café.
Format : Markdown. Ton : expert mais accessible, pour amateurs de café 25-45 ans urbains.
Inclus des mots-clés naturels : café de spécialité, torréfié à la demande, abonnement café.`
              }]
            }]
          }),
        }
      )
      const data = await res.json()
      content = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    } catch {
      content = ''
    }
  }

  if (!content) {
    content = `# ${topic.charAt(0).toUpperCase() + topic.slice(1)}

Découvrez tout ce que vous devez savoir sur ${topic}. En tant qu'amateur de café de spécialité, comprendre les origines et les subtilités de votre boisson préférée transforme chaque tasse en une véritable expérience sensorielle.

## L'origine et le terroir

Le café de spécialité se distingue par son terroir unique. Chaque région productrice imprime ses caractéristiques dans le grain, du sol volcanique aux variations d'altitude, en passant par les méthodes de traitement post-récolte.

## Les arômes et saveurs

Un café torréfié à la demande préserve tous les composés aromatiques volatils qui disparaissent rapidement après la torréfaction. C'est pourquoi chez Cafés Lumière, nous torréfions au moment de votre commande.

## Comment l'apprécier pleinement

Pour tirer le meilleur de votre café de spécialité, quelques règles simples s'imposent : eau filtrée à 92-96°C, mouture fraîche juste avant extraction, et respect du ratio café/eau recommandé.

---

*Envie de découvrir de nouveaux cafés de spécialité torréfiés à la demande ? [Découvrez notre abonnement mensuel](https://cafes-lumiere.vercel.app/pricing) — 19€/mois, sans engagement.*`
  }

  const frontmatter = `---
title: "${topic.charAt(0).toUpperCase() + topic.slice(1)}"
slug: "${slug}"
date: "${today}"
category: "guide"
excerpt: "Tout ce que vous devez savoir sur ${topic} — guide complet pour les amateurs de café de spécialité."
coverImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop"
coverAlt: "Café de spécialité"
---

`

  fs.writeFileSync(filePath, frontmatter + content)

  return NextResponse.json({
    success: true,
    slug,
    topic,
    generated: !!geminiKey,
  })
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to trigger article generation' })
}
