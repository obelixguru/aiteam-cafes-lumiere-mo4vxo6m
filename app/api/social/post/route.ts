import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://cafes-lumiere.vercel.app'

interface ArticlePost {
  title: string
  slug: string
  excerpt: string
  category: string
}

function generateTwitterPost(article: ArticlePost): string {
  return `☕ ${article.title}

${article.excerpt.slice(0, 120)}...

→ ${BASE_URL}/blog/${article.slug}

#CaféSpécialité #Torréfaction #CaféDeSpécialité #AbonnementCafé`
}

function generateLinkedInPost(article: ArticlePost): string {
  return `𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗹𝗲 𝗰𝗮𝗳é 𝗱𝗲 𝘀𝗽é𝗰𝗶𝗮𝗹𝗶𝘁é 𝗿𝗲𝗱é𝗳𝗶𝗻𝗶𝘁 𝘃𝗼𝘁𝗿𝗲 𝗺𝗮𝘁𝗶𝗻 🌅

${article.title}

${article.excerpt}

Ce que beaucoup ignorent sur le café torréfié à la demande :
→ Les arômes s'évaporent dès les 2 premières semaines
→ Un café fraîchement torréfié contient 2x plus de composés aromatiques
→ La différence est immédiatement perceptible dans la tasse

Chez Cafés Lumière, chaque grain est torréfié le jour de votre commande.

Lire l'article complet : ${BASE_URL}/blog/${article.slug}

#CaféSpécialité #Torréfaction #QualitéArtisanale #AbonnementCafé #FoodTech`
}

function generateInstagramPost(article: ArticlePost): string {
  return `☕ ${article.title} ✨

${article.excerpt.slice(0, 200)}

🔗 Article complet en bio

.
.
.
#cafespecialite #torrefaction #cafedulundi #specialtycoffee #cafefrancais #barista #coffeelovers #abonnementcafe #cafedelasemaine #origins #terroir #coffeetime #cafematin #frenchcoffee #specialtycoffeeassociation`
}

async function postToWebhook(platform: string, content: string, link: string): Promise<{ success: boolean; id: string }> {
  const webhookUrl = process.env.SOCIAL_POST_WEBHOOK

  if (!webhookUrl) {
    console.log(`[mock:${platform}] ${content.slice(0, 100)}...`)
    return { success: true, id: `mock_${platform}_${Date.now()}` }
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, content, link }),
    })
    const data = await res.json()
    return { success: res.ok, id: data.id || `${platform}_${Date.now()}` }
  } catch {
    return { success: false, id: '' }
  }
}

// POST /api/social/post — triggered by cron or manually
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret')
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const article: ArticlePost = body.article || {
    title: 'Découvrez votre prochain café de spécialité',
    slug: '',
    excerpt: 'Torréfié à la demande, livré frais en 72h. Abonnement Cafés Lumière — 19€/mois, sans engagement.',
    category: 'guide',
  }

  // Determine which platform to post to based on day of week
  const day = new Date().getDay() // 0=Sun, 1=Mon, ..., 6=Sat
  const schedule: Record<number, string[]> = {
    1: ['twitter'],       // Monday
    3: ['instagram'],     // Wednesday
    5: ['linkedin'],      // Friday
  }

  const platforms = schedule[day] || (body.platforms as string[]) || ['twitter']
  const results: Record<string, { success: boolean; id: string }> = {}
  const link = article.slug ? `${BASE_URL}/blog/${article.slug}` : BASE_URL

  for (const platform of platforms) {
    let content = ''
    if (platform === 'twitter') content = generateTwitterPost(article)
    else if (platform === 'linkedin') content = generateLinkedInPost(article)
    else if (platform === 'instagram') content = generateInstagramPost(article)

    if (content) {
      results[platform] = await postToWebhook(platform, content, link)
    }
  }

  return NextResponse.json({ success: true, platforms, results, mock: !process.env.SOCIAL_POST_WEBHOOK })
}

export async function GET() {
  return NextResponse.json({
    schedule: 'Monday=Twitter, Wednesday=Instagram, Friday=LinkedIn',
    nextPost: 'Configure SOCIAL_POST_WEBHOOK to enable auto-posting',
  })
}
