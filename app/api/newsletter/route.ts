import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Log for now; wire to Resend when RESEND_API_KEY is set
    console.log(`[newsletter] signup: ${email} via ${source || "direct"}`);

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Cafés Lumière <bonjour@cafes-lumiere.fr>",
          to: email,
          subject: "Bienvenue chez Cafés Lumière ☕",
          html: `<p>Bonjour,</p><p>Merci pour votre inscription ! Votre code -10% : <strong>BIENVENUE10</strong></p><p>Valable sur votre premier mois d'abonnement sur <a href="https://cafes-lumiere.vercel.app">cafes-lumiere.vercel.app</a>.</p><p>À très vite,<br>L'équipe Cafés Lumière</p>`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
