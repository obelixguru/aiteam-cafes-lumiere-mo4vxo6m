"use server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cafes-lumiere.vercel.app";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Email invalide" };
  }

  const res = await fetch(`${SITE_URL}/api/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "homepage_footer" }),
  });

  if (!res.ok) {
    return { error: "Erreur serveur" };
  }

  return { success: true };
}
