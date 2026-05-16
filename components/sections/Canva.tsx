'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Brand Kit',
    body: 'Built once, useful forever. Fonts, colours, logo, reusable elements. Your brand stays locked — no more "which blue was that?"',
  },
  {
    title: 'Template System',
    body: '20–50 custom templates. Reels, Stories, Carousel, Thumbnail. Clients edit them without a designer.',
  },
  {
    title: 'Canva AI',
    body: 'Magic Studio workflow. Background removal, Magic Write, text-to-image. 3x faster delivery.',
  },
  {
    title: 'Video in Canva',
    body: 'Reels without Premiere. Transitions, beat sync, auto-captions, B-roll.',
  },
]

const skills = [
  { label: 'Visual design & layout', pct: 95 },
  { label: 'Brand system architecture', pct: 90 },
  { label: 'Video & animation', pct: 80 },
  { label: 'Canva AI features', pct: 88 },
]

export default function Canva() {
  return (
    <section id="canva" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Canva Expertise</p>
          <h2 className="section-title">
            Canva isn&apos;t a tool. In the right hands —{' '}
            <span style={{ color: 'var(--red)' }}>a system.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Anyone can drag and drop. Building a brand system that works across 50 templates,
            stays consistent and actually saves time — that&apos;s a different skill.
          </p>
        </motion.div>

        <div className="grid-2col" style={{ marginBottom: 48 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 15,
                  color: 'var(--ink)',
                  marginBottom: 8,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{c.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="divider" />

        <div>
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ marginBottom: 18 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 14, color: 'var(--ink)' }}>{s.label}</span>
                <span
                  style={{
                    fontSize: 13,
                    color: 'var(--ink-3)',
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {s.pct}%
                </span>
              </div>
              <div style={{ height: 3, background: 'var(--paper-3)', borderRadius: 2 }}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
                  style={{ height: 3, background: 'var(--ink)', borderRadius: 2, width: `${s.pct}%`, transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
