"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return;
  }

  // In production, this would call Supabase + Resend
  // For now, log and return success
  console.log(`[Newsletter] New subscriber: ${email}`);

  return;
}
