# Portfolio Miloš Stamenković — English Version

Positioning: **Social Media Manager & Content Strategist** applying for in-house
marketing / social media roles — not a freelancer selling services. Copy must read
as "what I bring to a team", never as a price list. No delivery deadlines, revision
rounds, retainers or per-project availability anywhere on the site.

**Every number on the site must be verifiable.** The only stats used come from the
Instagram Insights screenshot committed at `public/case-76k.png`: 76,705 views,
98.7% non-follower reach, 660 new follows, 344 saves, 321 shares, 1,458 accounts
engaged. Do not add estimates, percentages or round figures that cannot be pointed
at in that screenshot. Serbian version uses `76.705` / `98,7%`; English uses
`76,705` / `98.7%`.

## Design System
- Fonts: Syne (700, 800) + Inter (400, 500) via next/font/google
- Ink: #0a0a0a | Ink-2: #444444 | Ink-3: #888888
- Paper: #f7f5f1 | Paper-2: #edeae4 | Paper-3: #e2dfd8
- Red accent: #c0392b | Red-light: #f9ece9
- No gradients, no shadows
- Border-radius: 4px (cards), 3px (funnel), 2px (pills/buttons)
- Font size base: 15px, line-height 1.8
- Featured card titles use `clamp(18px, 4.6vw, 26px)` — a fixed 26px overflows
  375px when the title is one unbreakable token (e.g. `@milos.ugostitelj`)

## Stack
- Next.js 14, React 18, TypeScript, Tailwind CSS
- framer-motion for scroll animations
- PDF export via window.print() + print.css
- Deployed on Vercel

## Sections (in order)
1. Cover — hero with headline, pills, stats, social links
2. About — who I am, mindset cards, focus area
3. Services — "What I bring to a team": 6 rows mapped to what the role asks for
4. Reels — short-form video method: funnel + 2 stats + format pills
5. Work — "Selected projects": 3 featured dark cards, 3 standard 2-col cards,
   then a `Bonus: tools I built for hospitality` subheading and 2 more featured cards
6. Canva — expertise section, 2x2 cards only (skill-bar percentages removed —
   unverifiable)
7. AI — AI workflow tools list
8. Process — "How I work with content": 5-step loop, no deadlines
9. Reviews — 1 hero dark quote + 1 full-width card (no stat row)
10. Contact — 5 contact cards + dark mailto CTA

Reels sits before Work on purpose: method first, then proof.

## 8 Projects (in display order)
1. **76,705 views case study** — https://www.instagram.com/milos.ugostitelj/
   (Instagram, featured, the only card carrying `FEATURED`; renders
   `public/case-76k.png` via an `onError`-hiding `<img>`)
2. @milos.ugostitelj — https://www.instagram.com/milos.ugostitelj/ (Social Media, featured)
3. Linkversity.hr SEO Blog — https://linkversity.hr/blog/author/milos/ (SEO Blog, featured)
4. Glamorous Paws — https://glamorous-paws.com/ (WordPress)
5. Tehnički Pregled XL — https://tehnickipregled-xl.rs/ (WordPress)
6. AI Mediterranean Music — https://www.youtube.com/@milosstamenkovic888 (AI Content)
7. FoodCost Analysis — https://fodcost-analiza.vercel.app/ (Web App, bonus)
8. BizBreak v2.0 — https://bizbreak-ten.vercel.app/ (Web App, bonus)

Note: the FoodCost domain really is `fodcost-analiza` (one `o`) — confirmed correct,
not a typo to "fix".

## Nav
`Nav.tsx` uses `IntersectionObserver` with `threshold: 0` and
`rootMargin: '-45% 0px -45% 0px'`. Do not go back to a plain `threshold` value:
sections taller than ~2.5 viewports (Work) never reach it, so the active pill
sticks on the previous section.

## Contact
- Instagram: https://www.instagram.com/milos.ugostitelj/
- YouTube: https://www.youtube.com/@milosstamenkovic888
- Linkversity: https://linkversity.hr/blog/author/milos/
- Email: nokia2730i@gmail.com
- Phone: +381 64 261 4867

## OG tags / link preview
`public/og.png` is the 1200x630 card shown when the link is shared on WhatsApp,
LinkedIn or Slack. It was produced by rendering HTML in this design system with the
real Syne font (not in an image editor) — regenerate it the same way rather than
editing the PNG by hand. It carries three verifiable numbers, so the same rule as
the site applies: nothing that cannot be pointed at in `case-76k.png`.

`layout.tsx` resolves an absolute `siteUrl` via `resolveSiteUrl()`:
`NEXT_PUBLIC_SITE_URL` > `VERCEL_PROJECT_PRODUCTION_URL` (Vercel sets this in
production) > a hard-coded fallback. The OG image MUST have an absolute URL or
WhatsApp and LinkedIn will not fetch it. When a custom domain is attached, set
`NEXT_PUBLIC_SITE_URL` in the Vercel env rather than editing the code.

**The hard-coded fallback is `https://portfolio-milos-en.vercel.app` and has not
been confirmed** — it is only used when neither env var is present, so Vercel
production is unaffected, but verify it if previews ever show a broken image.

## Serbian counterpart
`portfolio-milos` (portfolio-milos.vercel.app) is the same site in Serbian and is
kept structurally identical — port changes to both.
