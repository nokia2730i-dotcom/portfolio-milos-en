'use client'
import { motion } from 'framer-motion'

type Blog = { label: string; href: string }

type FeaturedProject = {
  badge: string
  url: string
  bg: string
  title: string
  sub: string
  body: string
  features?: string[]
  blogs?: Blog[]
  kpi: string
}

const featured: FeaturedProject[] = [
  {
    badge: 'WEB APP · FEATURED',
    url: 'https://fodcost-analiza.vercel.app/',
    bg: '#0f1a0f',
    title: 'FoodCost Analysis',
    sub: 'SaaS platform · Hospitality · Next.js · Vercel · Free',
    body: 'Complete restaurant business analysis platform — food cost, recipes, weekly entries and annual trends in one place. Born from experience: restaurant owners for years don\'t know exactly how much each dish costs them. This tool solves that in 5 minutes of setup.',
    features: [
      'Dashboard (real-time financial overview)',
      'Recipe calculator (food cost per portion with waste)',
      'Menu Engineering (dish profitability analysis)',
      'Annual trend (growth visualization across months)',
    ],
    kpi: 'Next.js · Auth system · Dashboard · Forever free',
  },
  {
    badge: 'WEB APP · FEATURED',
    url: 'https://bizbreak-ten.vercel.app/',
    bg: '#0d1a2e',
    title: 'BizBreak v2.0',
    sub: 'Break-even Calculator · VAT · Scenarios · PDF Export · 4 Currencies · 3 Languages',
    body: 'Professional break-even calculator for the Serbian market — the only one with full VAT analysis for registered and non-registered businesses, multi-currency support and PDF report export. Multilingual: Serbian, English, Croatian. For entrepreneurs who need the answer: "How much do I need to sell to not lose money?"',
    features: [
      'VAT analysis (registered and non-registered businesses)',
      'Scenarios (optimistic/realistic/pessimistic)',
      'PDF report export',
      '4 currencies (RSD/EUR/USD/BAM)',
      '3 languages',
      'Dynamic cost addition',
    ],
    kpi: 'Vercel · PDF Export · 4 currencies · 3 languages · VAT logic',
  },
  {
    badge: 'SEO BLOG · FEATURED',
    url: 'https://linkversity.hr/blog/author/milos/',
    bg: '#1a0a14',
    title: 'Linkversity.hr — SEO Blog Writing',
    sub: 'SEO copywriting · Croatian market · WordPress · Tourism & lifestyle',
    body: 'SEO-optimised blog posts for the Croatian market on the Linkversity platform. Topics: tourism, travel, lifestyle. Every post written to SEO standards — title tag, meta description, internal links, keyword distribution.',
    blogs: [
      { label: '"Most Beautiful National Parks of Croatia"', href: 'https://linkversity.hr/blog/nacionalni-parkovi-hrvatske-otkrijte-prirodne-ljepote/' },
      { label: '"TripAdvisor Reviews: A Travel Guide"', href: 'https://linkversity.hr/blog/tripadvisor-recenzije-vodic-za-putovanje/' },
      { label: '"Travelling with BlaBlaCar"', href: 'https://linkversity.hr/blog/blablacar-sigurnost-iskustvo-dijeljenje-voznje/' },
    ],
    kpi: 'SEO copywriting · Croatian market · WordPress · Tourism & lifestyle',
  },
]

const standard = [
  {
    badge: 'WORDPRESS',
    url: 'https://glamorous-paws.com/',
    bg: '#1a1a2e',
    title: 'Glamorous Paws',
    sub: 'Grooming salon · WordPress · Blog · SEO · Niš & Aleksinac',
    body: 'Dog grooming salon with two locations. Complete WordPress site from scratch — design, navigation, blog with SEO-optimised posts about dog care and grooming. Client got a professional-looking site they update themselves through the blog.',
    kpi: 'WordPress · 3 blog posts · SEO · 2 locations · Client self-updates',
    blogs: [
      { label: '"For All Bichon Lovers"', href: 'https://glamorous-paws.com/?p=516' },
      { label: '"Why Regular Grooming Matters"', href: 'https://glamorous-paws.com/?p=6' },
      { label: '"Tartar Removal and Hair Dyeing"', href: 'https://glamorous-paws.com/?p=780' },
    ],
  },
  {
    badge: 'WORDPRESS',
    url: 'https://tehnickipregled-xl.rs/',
    bg: '#0f1f0a',
    title: 'Tehnički Pregled XL',
    sub: 'Local service · WordPress · Registration calculator · FAQ',
    body: 'Vehicle inspection, registration and insurance service centre. Complete WordPress site with all services, registration calculator, opening hours, FAQ section and contact details. Mobile-first design that local customers can quickly scan.',
    kpi: 'WordPress · Calculator · Mobile first · FAQ · Multiple services',
  },
  {
    badge: 'AI CONTENT',
    url: 'https://www.youtube.com/@milosstamenkovic888',
    bg: '#1f0a0a',
    title: 'AI Mediterranean Music',
    sub: 'Suno AI · Original songs · Greek pop style · YouTube channel',
    body: 'Original YouTube channel with AI-generated Mediterranean music. Songs created combining Suno AI with personal ideas and lyric editing. Mediterranean sounds, Greek lyrics, romantic stories — niche channel for lovers of Greek music and the sea.',
    kpi: 'Suno AI · Shorts format · Original channel · AI + human editing',
  },
  {
    badge: 'SOCIAL MEDIA',
    url: 'https://www.instagram.com/konobarignite/',
    bg: '#1a0f1a',
    title: '@konobarignite',
    sub: 'Hospitality · Personal brand · Instagram · Short-form content',
    body: 'Instagram profile at the intersection of hospitality culture and digital marketing. Authentic voice building an audience in the hospitality niche — Reels, Stories, educational content about the industry. Personal brand built from experience, not theory.',
    kpi: 'Hospitality niche · Reels format · Personal brand · Instagram strategy',
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
          <p className="eyebrow">Selected Projects</p>
          <h2 className="section-title">
            Work that moves metrics —{' '}
            <span style={{ color: 'var(--red)' }}>not just Instagram likes.</span>
          </h2>
        </motion.div>

        {featured.map((p, i) => (
          <motion.div
            key={p.title}
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
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                fontWeight: 800,
                fontSize: 26,
                color: '#fff',
                marginBottom: 6,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.38)',
                marginBottom: 20,
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {p.sub}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)', marginBottom: 20, maxWidth: 680 }}>
              {p.body}
            </p>

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
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              {p.kpi}
            </p>
          </motion.div>
        ))}

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
              <div style={{ background: p.bg, height: 5 }} />
              <div style={{ padding: 24 }}>
                <p className="badge">{p.badge}</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
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
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
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
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
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
      </div>
    </section>
  )
}
