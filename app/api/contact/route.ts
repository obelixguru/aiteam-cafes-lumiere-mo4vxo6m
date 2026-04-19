import { NextRequest, NextResponse } from "next/server";

const FOUNDER_EMAIL = process.env.FOUNDER_EMAIL || "bonjour@cafes-lumiere.fr";
const FROM = "Cafés Lumière Contact <noreply@cafes-lumiere.fr>";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1A120B;padding:32px">
      <h2 style="color:#C84B31">Nouveau message de contact — Cafés Lumière</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      <hr style="border:none;border-top:1px solid #F3E8E0;margin:24px 0">
      <p><strong>Message :</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    </div>
  `;

  if (!resendKey) {
    console.log(`[mock:contact] From: ${email} — ${message.slice(0, 100)}`);
    return NextResponse.json({ mock: true, message: "Contact form received (mock — add RESEND_API_KEY)" });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: FOUNDER_EMAIL,
      reply_to: email,
      subject: `[Contact] Message de ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
