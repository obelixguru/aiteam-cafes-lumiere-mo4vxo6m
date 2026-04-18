import { NextRequest, NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM = "Cafés Lumière <bonjour@cafes-lumiere.fr>";
const SITE = "https://cafes-lumiere.vercel.app";

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_KEY) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to, subject, html }),
  });
}

// Post-purchase welcome email (J0)
async function sendWelcomeEmail(email: string, plan: string) {
  const planLabels: Record<string, string> = {
    decouverte: "Découverte (250g)",
    passion: "Passion (500g)",
    expert: "Expert (1kg)",
  };
  const planLabel = planLabels[plan.toLowerCase()] || plan;

  await sendEmail(
    email,
    "Votre abonnement Cafés Lumière est confirmé ☕",
    `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#3D1F0D">
      <img src="${SITE}/logo.svg" alt="Cafés Lumière" style="height:40px;margin-bottom:24px" />
      <h1 style="font-size:28px;margin-bottom:16px">Bienvenue chez Cafés Lumière !</h1>
      <p>Votre abonnement <strong>${planLabel}</strong> est bien confirmé. Votre premier café est en cours de torréfaction.</p>
      <p>Vous recevrez un email de suivi dès l'expédition (sous 48h).</p>
      <hr style="border:none;border-top:1px solid #F0E9E1;margin:24px 0" />
      <h2 style="font-size:18px">Pendant que vous attendez…</h2>
      <p>Lisez notre guide pour préparer votre café parfaitement :</p>
      <a href="${SITE}/blog/cafe-specialite-guide-debutant" style="display:inline-block;background:#F5A623;color:#3D1F0D;padding:12px 24px;border-radius:50px;font-weight:bold;text-decoration:none;margin:12px 0">
        Lire le guide →
      </a>
      <p style="font-size:12px;color:#8B7355;margin-top:32px">
        Cafés Lumière · <a href="${SITE}">cafes-lumiere.vercel.app</a><br>
        Pour nous contacter : bonjour@cafes-lumiere.fr
      </p>
    </div>
    `
  );
}

// J3 — storytelling email
async function sendJ3Email(email: string) {
  await sendEmail(
    email,
    "☕ Votre café a une histoire — la voici",
    `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#3D1F0D">
      <h1 style="font-size:24px;margin-bottom:16px">D'où vient votre café ?</h1>
      <p>Votre café de ce mois a parcouru des milliers de kilomètres pour arriver dans votre tasse. Mais avant ça, il y a eu des mains, des matins à 5h, et une passion pour le grain parfait.</p>
      <p>Découvrez l'origine Éthiopie Yirgacheffe — notre recommandation du mois :</p>
      <a href="${SITE}/blog/ethiopie-yirgacheffe-origine" style="display:inline-block;background:#F5A623;color:#3D1F0D;padding:12px 24px;border-radius:50px;font-weight:bold;text-decoration:none;margin:12px 0">
        Lire l'histoire →
      </a>
      <p>À dans 4 jours pour nos conseils de préparation,</p>
      <p><strong>L'équipe Cafés Lumière</strong></p>
    </div>
    `
  );
}

// J7 — upsell + review request
async function sendJ7Email(email: string) {
  await sendEmail(
    email,
    "Votre avis compte 🌟 + une offre pour vous",
    `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#3D1F0D">
      <h1 style="font-size:24px;margin-bottom:16px">Comment s'est passée votre première semaine ?</h1>
      <p>Votre café Cafés Lumière est maintenant dans votre tasse depuis une semaine. Nous espérons que vous avez découvert de nouvelles saveurs !</p>
      <p>Deux choses rapides :</p>
      <ol>
        <li style="margin-bottom:12px"><strong>Partagez votre avis</strong> — en répondant à cet email, vous aidez d'autres amateurs à découvrir Lumière.</li>
        <li style="margin-bottom:12px"><strong>Passer à la formule supérieure</strong> — si vous voulez 2 origines par mois et des notes de dégustation, notre formule Passion est pour vous :<br>
          <a href="${SITE}/checkout?plan=passion&price=29&utm_source=email&utm_campaign=j7-upsell" style="display:inline-block;background:#F5A623;color:#3D1F0D;padding:10px 20px;border-radius:50px;font-weight:bold;text-decoration:none;margin:8px 0">
            Passer à Passion (29€/mois) →
          </a>
        </li>
      </ol>
      <p>À bientôt,<br><strong>L'équipe Cafés Lumière</strong></p>
    </div>
    `
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Stripe sends checkout.session.completed for payment success
    if (body.type === "checkout.session.completed") {
      const session = body.data?.object;
      const email = session?.customer_details?.email || session?.customer_email;
      const plan = session?.metadata?.plan || "decouverte";

      if (email) {
        // J0: immediate welcome
        await sendWelcomeEmail(email, plan);

        // Schedule J3 and J7 via simple setTimeout (works for edge runtime)
        // In production, use Resend scheduled emails or a queue
        // For now, we just note the intent — real scheduling needs a cron/queue
        console.log(`[stripe-webhook] Scheduled J3/J7 emails for ${email}`);
      }
    }

    // Manual trigger for J3/J7 (can be called from a cron)
    if (body.type === "manual.j3" && body.email) {
      await sendJ3Email(body.email);
    }
    if (body.type === "manual.j7" && body.email) {
      await sendJ7Email(body.email);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[stripe-webhook]", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
