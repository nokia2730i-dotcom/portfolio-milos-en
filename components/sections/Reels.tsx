'use client'
import { motion } from 'framer-motion'

const funnel = [
  { time: '0–2 sec', label: 'Pattern interrupt', sub: 'Stop the scroll', bg: '#1a1a1a', dark: false },
  { time: '2–8 sec', label: 'Build tension', sub: 'Create a reason to stay', bg: '#2d2d2d', dark: false },
  { time: '8–25 sec', label: 'Deliver the promise', sub: 'Earn the watch', bg: '#c0392b', dark: false },
  { time: 'Outro', label: 'Loop or CTA', sub: 'Watch time or action', bg: 'var(--paper-2)', dark: true },
]

export default function Reels() {
  return (
    <section id="reels" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Short-form Video</p>
          <h2 className="section-title">
            One second to earn the next.{' '}
            <span style={{ color: 'var(--red)' }}>That&apos;s the brief.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            I don&apos;t make &quot;content&quot;. I engineer attention sequences. Hook, build, payoff —
            every Reel is a micro-story with a job to do.
          </p>
        </motion.div>

        <div style={{ marginBottom: 48 }}>
          {funnel.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: f.bg,
                border: f.dark ? '1px solid var(--paper-3)' : 'none',
                padding: '20px 28px',
                marginBottom: 3,
                borderRadius: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: f.dark ? 'var(--ink-3)' : 'rgba(255,255,255,0.4)',
                    minWidth: 68,
                  }}
                >
                  {f.time}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: f.dark ? 'var(--ink)' : '#fff',
                  }}
                >
                  {f.label}
                </span>
              </div>
              <span
                style={{
                  fontSize: 13,
                  color: f.dark ? 'var(--ink-3)' : 'rgba(255,255,255,0.55)',
                }}
              >
                {f.sub}
              </span>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            borderTop: '1px solid var(--paper-3)',
            paddingTop: 32,
            marginBottom: 36,
          }}
        >
          {[
            ['98.7%', 'Reach beyond my followers'],
            ['344', 'Saves on one post'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
          {['Talking Head', 'B-roll Montage', 'POV Format', 'Text-on-video'].map((p) => (
            <span key={p} className="pill-dark">{p}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Ambient/Mood', 'Tutorial', 'Day-in-the-life', 'Before/After'].map((p) => (
            <span key={p} className="pill-outline">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
