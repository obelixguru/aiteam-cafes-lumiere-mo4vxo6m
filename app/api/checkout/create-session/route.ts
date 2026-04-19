import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://cafes-lumiere.vercel.app'

// Placeholder Stripe price IDs — replace with real ones from Stripe Dashboard
const PRICE_IDS: Record<string, { priceId: string; name: string; amount: number }> = {
  decouverte: { priceId: process.env.STRIPE_PRICE_DECOUVERTE || 'price_placeholder_decouverte', name: 'Découverte', amount: 1900 },
  explorateur: { priceId: process.env.STRIPE_PRICE_EXPLORATEUR || 'price_placeholder_explorateur', name: 'Explorateur', amount: 2900 },
  connaisseur: { priceId: process.env.STRIPE_PRICE_CONNAISSEUR || 'price_placeholder_connaisseur', name: 'Connaisseur', amount: 4500 },
}

export async function POST(req: NextRequest) {
  const { plan, email } = await req.json()
  const planKey = plan?.toLowerCase() || 'decouverte'
  const planData = PRICE_IDS[planKey] || PRICE_IDS.decouverte

  const stripeKey = process.env.STRIPE_SECRET_KEY

  if (!stripeKey) {
    // Mock mode — return a fake checkout URL
    return NextResponse.json({
      mock: true,
      url: `${BASE_URL}/checkout/confirmation?plan=${planKey}&price=${planData.amount / 100}&email=${encodeURIComponent(email || '')}&mock=true`,
      message: 'Add STRIPE_SECRET_KEY to enable real payments',
    })
  }

  try {
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'line_items[0][price]': planData.priceId,
        'line_items[0][quantity]': '1',
        mode: 'subscription',
        success_url: `${BASE_URL}/checkout/confirmation?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${BASE_URL}/#pricing`,
        ...(email ? { customer_email: email } : {}),
        'metadata[plan]': planKey,
      }),
    })

    const session = await res.json()
    if (!res.ok) throw new Error(session.error?.message || 'Stripe error')

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
