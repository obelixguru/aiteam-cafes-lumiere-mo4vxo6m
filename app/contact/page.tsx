"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-playfair text-4xl font-black text-[#1A120B] mb-3">
              Nous contacter
            </h1>
            <p className="text-[#1A120B]/60 mb-8">
              Une question sur votre abonnement, une suggestion, ou simplement envie de parler café ?
              On vous répond sous 24h.
            </p>

            {status === "sent" ? (
              <div className="bg-[#F3E8E0] rounded-2xl p-8 text-center">
                <p className="text-2xl mb-2">☕</p>
                <p className="font-semibold text-[#1A120B]">Message envoyé !</p>
                <p className="text-[#1A120B]/60 mt-2">On vous répond d&apos;ici 24h.</p>
                <Link href="/" className="mt-6 inline-block text-[#C84B31] font-semibold hover:underline">
                  Retour à l&apos;accueil →
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A120B] mb-1">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F3E8E0] bg-white text-[#1A120B] focus:outline-none focus:ring-2 focus:ring-[#C84B31]/30"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A120B] mb-1">
                    Votre email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F3E8E0] bg-white text-[#1A120B] focus:outline-none focus:ring-2 focus:ring-[#C84B31]/30"
                    placeholder="jean@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A120B] mb-1">
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F3E8E0] bg-white text-[#1A120B] focus:outline-none focus:ring-2 focus:ring-[#C84B31]/30 resize-none"
                    placeholder="Bonjour, j'ai une question sur..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Une erreur s&apos;est produite. Réessayez ou écrivez directement à{" "}
                    <a href="mailto:bonjour@cafes-lumiere.fr" className="underline">
                      bonjour@cafes-lumiere.fr
                    </a>
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#C84B31] text-white font-bold py-4 rounded-full text-lg hover:bg-[#a83825] transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Envoi en cours..." : "Envoyer mon message →"}
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-[#F3E8E0]">
              <p className="text-sm text-[#1A120B]/50 text-center">
                Vous pouvez aussi nous écrire directement :{" "}
                <a href="mailto:bonjour@cafes-lumiere.fr" className="text-[#C84B31] hover:underline">
                  bonjour@cafes-lumiere.fr
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
