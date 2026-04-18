import { NextRequest, NextResponse } from 'next/server'

type AARRRStage = 'acquisition' | 'activation' | 'retention' | 'revenue' | 'referral'

const EVENT_STAGES: Record<string, AARRRStage> = {
  page_view: 'acquisition',
  cta_click: 'activation',
  newsletter_signup: 'activation',
  checkout_start: 'revenue',
  subscription_created: 'revenue',
  article_read: 'retention',
  share: 'referral',
  referral_click: 'referral',
}

interface EventPayload {
  event: string
  properties?: Record<string, unknown>
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  page?: string
  referrer?: string
  timestamp?: string
}

export async function POST(req: NextRequest) {
  try {
    const body: EventPayload = await req.json()
    const { event, properties, utm_source, utm_medium, utm_campaign, utm_content, utm_term, page, referrer } = body

    if (!event || typeof event !== 'string') {
      return NextResponse.json({ error: 'event required' }, { status: 400 })
    }

    const stage: AARRRStage = EVENT_STAGES[event] || 'acquisition'
    const now = new Date().toISOString()

    const enrichedEvent = {
      event,
      stage,
      properties: properties || {},
      utm: { utm_source, utm_medium, utm_campaign, utm_content, utm_term },
      page: page || req.headers.get('referer') || '',
      referrer: referrer || req.headers.get('referer') || '',
      ip: req.headers.get('x-forwarded-for') || 'unknown',
      ua: req.headers.get('user-agent') || '',
      timestamp: now,
    }

    // Log all events (replace with Supabase insert when available)
    console.log('[analytics]', JSON.stringify(enrichedEvent))

    // Supabase integration (optional)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/analytics_events`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(enrichedEvent),
      }).catch((e) => console.error('[analytics] supabase insert failed:', e))
    }

    return NextResponse.json({ ok: true, stage })
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }
}

// GET — simple dashboard summary (last 24h from logs — real implementation needs DB)
export async function GET() {
  return NextResponse.json({
    message: 'Analytics API active',
    stages: Object.keys(EVENT_STAGES),
    utmConventions: {
      acquisition: 'utm_source=google|meta|twitter, utm_medium=cpc|organic|email',
      activation: 'utm_source=site, utm_medium=cta',
      newsletter: 'utm_source=site, utm_campaign=newsletter_[date]',
      launch: 'utm_source=producthunt|press, utm_campaign=launch_2026',
    },
  })
}
