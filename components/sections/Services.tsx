'use client'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Short-form Video Production',
    body: 'Reels, TikTok, Shorts — from concept to delivery. Hook design, pacing, sound, captions. Content that gets shown and gets remembered.',
    meta: '3–10 videos/week · 48h delivery',
  },
  {
    num: '02',
    title: 'Canva Brand System',
    body: 'Complete brand kit + 20–50 custom templates. Built once, used forever. Consistency without a designer on permanent call.',
    meta: 'Brand kit · Templates · Style guide',
  },
  {
    num: '03',
    title: 'AI Content Strategy',
    body: 'Monthly content plan with AI — hooks, series concepts, captions, competitor analysis. Strategy before production, always.',
    meta: '30-day plan · Hook bank · Caption copy',
  },
  {
    num: '04',
    title: 'Instagram Visual Refresh',
    body: 'Grid, Highlights, Stories system, bio. One week — a profile that looks 10x more premium.',
    meta: 'Profile audit · Grid system · Stories kit',
  },
  {
    num: '05',
    title: 'WordPress Websites',
    body: 'Professional websites for local business — from zero to live. SEO basics, blog, mobile-first design.',
    meta: 'WordPress · SEO · Blog · Canva',
  },
  {
    num: '06',
    title: 'Web Apps & Digital Tools',
    body: 'Business web tools deployed on Vercel — calculators, analytics systems, SaaS micro-products for specific industries. See: FoodCost Analysis and BizBreak.',
    meta: 'Next.js · Vercel · React · Hospitality & business',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Services</p>
          <h2 className="section-title">
            Six things I do{' '}
            <span style={{ color: 'var(--red)' }}>exceptionally well.</span>
          </h2>
        </motion.div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                display: 'flex',
                gap: 32,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 28,
                  color: 'var(--paper-3)',
                  minWidth: 52,
                  lineHeight: 1,
                  paddingTop: 3,
                }}
              >
                {s.num}
              </span>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 17,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 10 }}>
                  {s.body}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                  }}
                >
                  {s.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
