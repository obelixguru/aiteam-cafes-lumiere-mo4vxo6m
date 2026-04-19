# Guide Admin — Cafés Lumière

## URLs importantes

| Ressource | URL |
|-----------|-----|
| Site production | https://cafes-lumiere.vercel.app |
| GitHub repo | https://github.com/obelixguru/aiteam-cafes-lumiere-mo4vxo6m |
| Vercel Dashboard | https://vercel.com/dashboard |

## Variables d'environnement à configurer (Vercel → Settings → Env Vars)

| Variable | Usage | Où l'obtenir |
|----------|-------|-------------|
| `RESEND_API_KEY` | Emails transactionnels + drip | resend.com → API Keys |
| `STRIPE_SECRET_KEY` | Paiements abonnements | stripe.com → Developers → API Keys |
| `STRIPE_PRICE_DECOUVERTE` | Price ID tier 19€ | Stripe → Products |
| `STRIPE_PRICE_EXPLORATEUR` | Price ID tier 29€ | Stripe → Products |
| `STRIPE_PRICE_CONNAISSEUR` | Price ID tier 45€ | Stripe → Products |
| `SOCIAL_POST_WEBHOOK` | Auto-posting Twitter/LinkedIn/Instagram | Zapier/Make/Buffer |
| `GEMINI_API_KEY` | Génération articles blog automatique | aistudio.google.com |
| `CRON_SECRET` | Sécuriser les endpoints cron | Générer une chaîne aléatoire |

## APIs disponibles

| Endpoint | Méthode | Usage |
|----------|---------|-------|
| `/api/newsletter` | POST `{email}` | Inscription newsletter + drip J0 |
| `/api/newsletter?step=j3&email=X&secret=Y` | GET | Envoyer email J3 |
| `/api/newsletter?step=j7&email=X&secret=Y` | GET | Envoyer email J7 |
| `/api/checkout/create-session` | POST `{plan, email}` | Créer session Stripe Checkout |
| `/api/cron/generate-article` | POST (Bearer token) | Générer article blog via Gemini |
| `/api/social/post` | POST `{article, platforms}` | Publier sur les réseaux sociaux |
| `/api/events` | POST `{event, properties, utm_*}` | Tracker un événement AARRR |
| `/feed.xml` | GET | RSS feed blog |
| `/sitemap.xml` | GET | Sitemap dynamique |
| `/robots.txt` | GET | Directives robots |

## Workflow hebdomadaire (sans intervention)

1. **Lundi** : Cron génère un article blog (`/api/cron/generate-article`)
2. **Lundi** : Cron poste sur Twitter (`/api/social/post` avec `platforms: ['twitter']`)
3. **Mercredi** : Cron poste sur Instagram
4. **Vendredi** : Cron poste sur LinkedIn
5. Chaque inscription newsletter → drip J0 immédiat, J3 et J7 via cron

## Activer les paiements Stripe

1. Créer 3 produits dans Stripe Dashboard avec abonnement mensuel
2. Copier les Price IDs (format `price_xxxx`)
3. Ajouter dans Vercel Env Vars : `STRIPE_PRICE_DECOUVERTE`, `STRIPE_PRICE_EXPLORATEUR`, `STRIPE_PRICE_CONNAISSEUR`
4. Ajouter `STRIPE_SECRET_KEY` (clé secrète, pas publique)
5. Redéployer sur Vercel

## Activer les campagnes Meta + Google

Les campagnes sont créées en PAUSED. Pour activer :
- Meta Ads : Tableau de bord Meta Ads Manager → Campagne "Cafés Lumière — Acquisition Abonnés" → Activer
- Google Ads : Google Ads Manager → Campagne "Cafés Lumière — Search" → Activer
- Budget recommandé : 20€/jour Meta + 15€/jour Google pour les 30 premiers jours
