'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Blog = { label: string; href: string }

type Project = {
  badge: string
  url: string
  bg: string
  title: string
  sub: string
  body: string
  features?: string[]
  blogs?: Blog[]
  image?: string
  kpi: string
}

/* ── Featured: case study + personal brand + SEO blog ───────────── */
const featured: Project[] = [
  {
    badge: 'INSTAGRAM · CASE STUDY · FEATURED',
    url: 'https://www.instagram.com/milos.ugostitelj/',
    bg: '#0a0a0a',
    title: '76,705 views. One post. 660 new followers.',
    sub: 'Organic reach · DM strategy · Hospitality · No paid promotion',
    body: 'The goal was not virality — it was getting the content in front of hospitality people who do not follow me yet. The post hit a problem every waiter recognizes, offered something concrete, and closed with one clear ask: send a keyword in DM. Result: 76,705 views, 98.7% of them from people who were not following me, and 660 new followers — from one post, with zero budget.',
    features: [
      'Hook: "If you are a waiter — you need this."',
      'Value: The Waiter\'s Manifesto — a professional code for top-tier service, free document',
      'CTA: DM the keyword "MANIFEST" (offer limited to 3 days)',
      'The rule I apply: one problem, one value, one CTA — never two calls to action in the same post.',
    ],
    image: '/case-76k.png',
    kpi: 'January 25, 2026 · €0 budget · 344 saves · 321 shares',
  },
  {
    badge: 'SOCIAL MEDIA',
    url: 'https://www.instagram.com/milos.ugostitelj/',
    bg: '#1a0f1a',
    title: '@milos.ugostitelj',
    sub: 'Hospitality · Personal brand · Instagram · Short-form content',
    body: 'An Instagram profile at the intersection of hospitality culture and digital marketing. An authentic voice building an audience in the hospitality niche — Reels, Stories, educational content about the industry. A personal brand built from experience, not theory.',
    kpi: 'Hospitality niche · Reels format · Personal brand · Instagram strategy',
  },
  {
    badge: 'SEO BLOG',
    url: 'https://linkversity.hr/blog/author/milos/',
    bg: '#1a0a14',
    title: 'Linkversity.hr — SEO Blog Writing',
    sub: 'SEO copywriting · Croatian market · WordPress · Tourism & lifestyle',
    body: 'SEO-optimized blog posts for the Croatian market, written for the Linkversity platform. Topics: tourism, travel, lifestyle. Every post written to SEO rules — title tag, meta description, internal links, keyword distribution.',
    blogs: [
      { label: '"The most beautiful national parks of Croatia"', href: 'https://linkversity.hr/blog/nacionalni-parkovi-hrvatske-otkrijte-prirodne-ljepote/' },
      { label: '"TripAdvisor reviews: a travel guide"', href: 'https://linkversity.hr/blog/tripadvisor-recenzije-vodic-za-putovanje/' },
      { label: '"Travelling with BlaBlaCar"', href: 'https://linkversity.hr/blog/blablacar-sigurnost-iskustvo-dijeljenje-voznje/' },
    ],
    kpi: 'SEO copywriting · Croatian market · WordPress · Tourism & lifestyle',
  },
]

/* ── Standard 2-col grid ────────────────────────────────────────── */
const standard: Project[] = [
  {
    badge: 'WORDPRESS',
    url: 'https://glamorous-paws.com/',
    bg: '#1a1a2e',
    title: 'Glamorous Paws',
    sub: 'Grooming salon · WordPress · Blog · SEO · Niš & Aleksinac',
    body: 'A dog grooming salon with two locations. A complete WordPress site from scratch — design, navigation, blog with SEO-optimized articles about dog care and grooming. The client got a site that looks professional and that they update themselves through the blog.',
    kpi: 'WordPress · 3 blog posts · SEO · 2 locations · Client self-updates',
    blogs: [
      { label: '"For all Bichon lovers"', href: 'https://glamorous-paws.com/?p=516' },
      { label: '"Why grooming your pet matters"', href: 'https://glamorous-paws.com/?p=6' },
      { label: '"Tartar removal and fur colouring"', href: 'https://glamorous-paws.com/?p=780' },
    ],
  },
  {
    badge: 'WORDPRESS',
    url: 'https://tehnickipregled-xl.rs/',
    bg: '#0f1f0a',
    title: 'Tehnički Pregled XL',
    sub: 'Local service · WordPress · Registration calculator · FAQ',
    body: 'A vehicle inspection, registration and insurance service. A complete WordPress site with all services, a registration calculator, opening hours, an FAQ section and contact details. Mobile-first design that local customers can scan quickly.',
    kpi: 'WordPress · Calculator · Mobile first · FAQ · Multiple services',
  },
  {
    badge: 'AI CONTENT',
    url: 'https://www.youtube.com/@milosstamenkovic888',
    bg: '#1f0a0a',
    title: 'AI Mediterranean Music',
    sub: 'Suno AI · Original songs · Greek pop style · YouTube channel',
    body: 'An original YouTube channel with AI-generated Mediterranean music. Songs created by combining Suno AI with my own ideas and lyric editing. Mediterranean sounds, Greek verses, romantic stories — a niche channel for lovers of Greek music and the sea.',
    kpi: 'Suno AI · Shorts format · Originalni kanal · AI + human editing',
  },
]

/* ── Bonus: tools built for hospitality ─────────────────────────── */
const bonus: Project[] = [
  {
    badge: 'WEB APP',
    url: 'https://fodcost-analiza.vercel.app/',
    bg: '#0f1a0f',
    title: 'FoodCost Analysis',
    sub: 'SaaS platform · Hospitality · Next.js · Vercel · Free',
    body: 'A complete platform for restaurant business analysis — food cost, recipes, weekly entries and annual trends in one place. Born from experience: restaurant owners go years without knowing exactly what each dish costs them. This tool solves that in 5 minutes of setup.',
    features: [
      'Dashboard (real-time financial overview)',
      'Recipe calculator (food cost per portion including waste)',
      'Menu Engineering (dish profitability analysis)',
      'Annual trend (growth visualization across months)',
    ],
    kpi: 'Next.js · Auth system · Dashboard · Forever free',
  },
  {
    badge: 'WEB APP',
    url: 'https://bizbreak-ten.vercel.app/',
    bg: '#0d1a2e',
    title: 'BizBreak v2.0',
    sub: 'Break-even calculator · VAT · Scenarios · PDF Export · 4 currencies · 3 languages',
    body: 'A professional break-even calculator for the Serbian market — the only one with full VAT analysis for both registered and non-registered businesses, multi-currency support and PDF report export. Multilingual: Serbian, English, Croatian. For entrepreneurs who need one answer: "How much do I have to sell to stop losing money?"',
    features: [
      'VAT analysis (registered and non-registered)',
      'Scenarios (optimistic/realistic/pessimistic)',
      'PDF report export',
      '4 currencies (RSD/EUR/USD/BAM)',
      '3 languages',
      'Dynamic cost entry',
    ],
    kpi: 'Vercel · PDF Export · 4 currencies · 3 languages · VAT logic',
  },
]

const featuredCardStyle = (bg: string): React.CSSProperties => ({
  display: 'block',
  background: bg,
  borderRadius: 4,
  padding: '36px 32px',
  marginBottom: 16,
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'border-color 0.2s',
})

/* Case-study screenshot. Renders only if the file exists in /public —
   if it's missing, onError hides the slot and the card stays clean. */
function CaseImage({ src, alt }: { src: string; alt: string }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setVisible(false)}
      onClick={(e) => e.stopPropagation()}
      style={{
        display: 'block',
        width: '100%',
        maxWidth: 420,
        height: 'auto',
        borderRadius: 4,
        border: '1px solid rgba(255,255,255,0.12)',
        marginBottom: 20,
      }}
    />
  )
}

function FeaturedCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ borderColor: '#c0392b' }}
      style={featuredCardStyle(p.bg)}
      onClick={() => window.open(p.url, '_blank')}
    >
      <p className="badge">{p.badge}</p>
      <h3
        style={{
          fontFamily: 'var(--font-display), Cinzel, serif',
          fontWeight: 800,
          fontSize: 'clamp(18px, 4.6vw, 26px)',
          color: '#fff',
          marginBottom: 6,
          overflowWrap: 'anywhere',
        }}
      >
        {p.title}
      </h3>
      <p
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.38)',
          marginBottom: 20,
          fontFamily: 'var(--font-display), Cinzel, serif',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {p.sub}
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)', marginBottom: 20, maxWidth: 680 }}>
        {p.body}
      </p>

      {/* Case-study screenshot slot */}
      {p.image && <CaseImage src={p.image} alt={p.title} />}

      {/* Bullet features */}
      {p.features && p.features.length > 0 && (
        <ul style={{ marginBottom: 20, paddingLeft: 0, listStyle: 'none' }}>
          {p.features.map((f) => (
            <li
              key={f}
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.52)',
                marginBottom: 5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
              }}
            >
              <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>·</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Blog post links (clickable, stop propagation so they don't trigger card click) */}
      {p.blogs && p.blogs.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          {p.blogs.map((b) => (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                marginBottom: 8,
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <span style={{ color: 'var(--red)' }}>·</span>
              {b.label} ↗
            </a>
          ))}
        </div>
      )}

      <p
        style={{
          fontSize: 9,
          fontFamily: 'var(--font-display), Cinzel, serif',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
        }}
      >
        {p.kpi}
      </p>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Selected projects</p>
          <h2 className="section-title">
            Work that moves metrics —{' '}
            <span style={{ color: 'var(--red)' }}>not just Instagram likes.</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        {featured.map((p, i) => (
          <FeaturedCard key={p.title} p={p} i={i} />
        ))}

        {/* Standard 2-col grid */}
        <div className="grid-2col">
          {standard.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: 'block',
                background: 'var(--paper)',
                border: '1px solid var(--paper-3)',
                borderRadius: 4,
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              whileHover={{ borderColor: '#c0392b' }}
            >
              {/* Color accent strip */}
              <div style={{ background: p.bg, height: 5 }} />
              <div style={{ padding: 24 }}>
                <p className="badge">{p.badge}</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Cinzel, serif',
                    fontWeight: 800,
                    fontSize: 17,
                    color: 'var(--ink)',
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 10,
                    color: 'var(--ink-3)',
                    marginBottom: 14,
                    fontFamily: 'var(--font-display), Cinzel, serif',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.sub}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                  {p.body}
                </p>
                {p.blogs && (
                  <div style={{ marginBottom: 14 }}>
                    {p.blogs.map((b) => (
                      <a
                        key={b.href}
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'block',
                          fontSize: 11,
                          color: 'var(--red)',
                          marginBottom: 4,
                          textDecoration: 'none',
                        }}
                      >
                        {b.label} ↗
                      </a>
                    ))}
                  </div>
                )}
                <p
                  style={{
                    fontSize: 9,
                    fontFamily: 'var(--font-display), Cinzel, serif',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-3)',
                  }}
                >
                  {p.kpi}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bonus: tools built for hospitality */}
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ marginTop: 56 }}
        >
          Bonus: tools I built for hospitality
        </motion.p>

        {bonus.map((p, i) => (
          <FeaturedCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}
