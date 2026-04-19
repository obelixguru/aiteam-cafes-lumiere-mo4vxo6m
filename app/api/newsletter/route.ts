import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://cafes-lumiere.vercel.app'
const FROM = 'Cafés Lumière <bonjour@cafes-lumiere.fr>'

const EMAIL_J0 = (email: string) => ({
  from: FROM,
  to: email,
  subject: '☕ Bienvenue chez Cafés Lumière — votre café vous attend',
  html: `<!DOCTYPE html><html lang="fr"><body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A120B;background:#FAFAFA;padding:32px">
<h1 style="color:#C84B31;font-size:28px;margin-bottom:8px">Bienvenue chez Cafés Lumière ✨</h1>
<p style="font-size:16px;line-height:1.6">Merci de nous rejoindre ! Vous faites maintenant partie d'une communauté d'amateurs de café de spécialité qui refusent le café ordinaire.</p>
<p style="font-size:16px;line-height:1.6">Chaque mois, nous sélectionnons un café de spécialité torréfié <strong>à la demande</strong> — livré sous 72h, frais et parfumé.</p>
<div style="background:#F3E8E0;border-radius:12px;padding:24px;margin:24px 0;text-align:center">
  <p style="margin:0;font-size:18px;font-weight:bold">Votre code de bienvenue</p>
  <p style="margin:8px 0 0;font-size:32px;font-weight:900;color:#C84B31;letter-spacing:4px">BIENVENUE10</p>
  <p style="margin:8px 0 0;font-size:14px;color:#666">-10% sur votre premier mois</p>
</div>
<a href="${BASE_URL}/pricing" style="display:inline-block;background:#C84B31;color:#fff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;font-size:16px">Choisir mon abonnement →</a>
<p style="margin-top:32px;font-size:14px;color:#888">Des questions ? Répondez directement à cet email.<br>— L'équipe Cafés Lumière</p>
</body></html>`,
})

const EMAIL_J3 = (email: string) => ({
  from: FROM,
  to: email,
  subject: '🌍 D\'où vient votre prochain café ? (on vous montre)',
  html: `<!DOCTYPE html><html lang="fr"><body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A120B;background:#FAFAFA;padding:32px">
<h1 style="font-size:24px;margin-bottom:8px">Le voyage commence au grain</h1>
<p style="font-size:16px;line-height:1.6">Saviez-vous qu'un café Éthiopien Yirgacheffe pousse à plus de 2 000m d'altitude et développe naturellement des notes de jasmin et de bergamote ?</p>
<p style="font-size:16px;line-height:1.6">Chez Cafés Lumière, chaque mois c'est une nouvelle origine, un nouveau producteur, une nouvelle histoire dans votre tasse.</p>
<a href="${BASE_URL}/blog/ethiopie-yirgacheffe-origine" style="display:inline-block;background:#1A120B;color:#fff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;font-size:15px">Découvrir l'origine du mois →</a>
<hr style="margin:32px 0;border:none;border-top:1px solid #F3E8E0">
<p style="font-size:13px;color:#888">Cafés Lumière · <a href="${BASE_URL}" style="color:#C84B31">cafes-lumiere.fr</a></p>
</body></html>`,
})

const EMAIL_J7 = (email: string) => ({
  from: FROM,
  to: email,
  subject: '⏰ Dernière chance — votre code expire dans 48h',
  html: `<!DOCTYPE html><html lang="fr"><body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A120B;background:#FAFAFA;padding:32px">
<h1 style="color:#C84B31;font-size:24px;margin-bottom:8px">Votre café vous attend encore</h1>
<p style="font-size:16px;line-height:1.6">Votre code <strong>BIENVENUE10</strong> expire dans <strong>48h</strong>. Ne passez pas à côté de votre premier mois à -10%.</p>
<div style="background:#1A120B;border-radius:12px;padding:24px;margin:24px 0;color:#FAFAFA">
  <p style="margin:0;font-size:16px;font-weight:bold">🎯 Formule Découverte — 19€/mois</p>
  <p style="margin:8px 0 0;font-size:14px;opacity:0.8">250g de café de spécialité torréfié à la demande</p>
  <p style="margin:4px 0 0;font-size:14px;opacity:0.8">Livraison incluse · Sans engagement</p>
</div>
<a href="${BASE_URL}/pricing?code=BIENVENUE10" style="display:inline-block;background:#C84B31;color:#fff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;font-size:16px">Activer mon abonnement →</a>
<p style="margin-top:32px;font-size:13px;color:#888">Cafés Lumière · <a href="${BASE_URL}" style="color:#C84B31">cafes-lumiere.fr</a></p>
</body></html>`,
})

async function sendViaResend(email: object, apiKey: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })
  return res.ok
}

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    console.log(`[newsletter] signup: ${email} via ${source || 'direct'}`)

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      // J0 — immediate welcome
      await sendViaResend(EMAIL_J0(email), resendKey)

      // J3 + J7 would be sent via Resend Sequences / Cron in production
      // For now, log for scheduling
      console.log(`[drip] scheduled J3 + J7 for ${email}`)
    } else {
      console.log(`[mock] Welcome drip queued for ${email}:`, {
        j0: EMAIL_J0(email).subject,
        j3: EMAIL_J3(email).subject,
        j7: EMAIL_J7(email).subject,
      })
    }

    return NextResponse.json({ success: true, drip: 'scheduled' })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// Endpoint to send drip emails (called by cron)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const step = searchParams.get('step') // 'j3' | 'j7'
  const email = searchParams.get('email')
  const secret = searchParams.get('secret')

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!email || !step) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return NextResponse.json({ mock: true, step, email })
  }

  const emailData = step === 'j3' ? EMAIL_J3(email) : EMAIL_J7(email)
  const ok = await sendViaResend(emailData, resendKey)
  return NextResponse.json({ success: ok, step, email })
}
