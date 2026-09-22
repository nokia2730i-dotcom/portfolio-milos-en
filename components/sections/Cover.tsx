'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Cover() {
  return (
    <section
      id="cover"
      style={{
        background: 'var(--paper)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 920, margin: '0 auto', width: '100%' }}>
        <motion.div {...A}>
          <p className="eyebrow">Social Media Manager & Content Strategist</p>

          <h1
            style={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 7vw, 68px)',
              lineHeight: 1.1,
              color: 'var(--ink)',
              marginBottom: 24,
              maxWidth: 700,
            }}
          >
            Design that makes{' '}
            <span style={{ color: 'var(--red)' }}>thumbs</span> stop.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: 'var(--ink-2)',
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            I create content that does the job and tools that solve problems — short-form video,
            Canva systems, Reels production, WordPress sites and web apps on Vercel.
            For brands that know attention is the most expensive currency.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            {['Short-form Video', 'Instagram Reels', 'AI Content', 'Web Apps'].map((p) => (
              <span key={p} className="pill-red">{p}</span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 56 }}>
            {['Canva Pro', 'WordPress', 'Vercel', 'Suno AI', 'Content Strategy'].map((p) => (
              <span key={p} className="pill-dark">{p}</span>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid var(--paper-3)',
              paddingTop: 32,
              marginBottom: 32,
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            {[
              ['76K', 'Views on one post'],
              ['660', 'New followers from one post'],
              ['20+', 'Years working with people'],
            ].map(([num, lbl]) => (
              <div key={lbl}>
                <div className="stat-number">{num}</div>
                <div className="stat-label">{lbl}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/milos.ugostitelj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: 'var(--ink-3)',
                textDecoration: 'none',
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              Instagram ↗
            </a>
            <a
              href="https://www.youtube.com/@milosstamenkovic888"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: 'var(--ink-3)',
                textDecoration: 'none',
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              YouTube ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
