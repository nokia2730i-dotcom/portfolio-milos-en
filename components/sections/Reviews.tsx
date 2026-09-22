'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">What clients say</p>
          <h2 className="section-title">
            Results are the only presentation{' '}
            <span style={{ color: 'var(--red)' }}>that actually works.</span>
          </h2>
        </motion.div>

        <motion.div
          {...A}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: 'var(--ink)',
            borderRadius: 4,
            padding: '44px 40px',
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#fff',
              fontStyle: 'italic',
              marginBottom: 24,
              maxWidth: 640,
            }}
          >
            &quot;He understood our brand before we finished explaining. The site looks
            professional, clients compliment it — and most importantly, we update it ourselves.&quot;
          </p>
          <p
            style={{
              fontSize: 9,
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
            }}
          >
            Client — Glamorous Paws, Niš
          </p>
        </motion.div>

        <div>
          {[
            {
              type: 'Web project',
              quote: '"The site is easy to update and looks exactly how we wanted."',
              body: 'The blog works, customers find us — that\'s all we need. — Tehnički Pregled XL',
            },
          ].map((r, i) => (
            <motion.div
              key={r.type}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginBottom: 12,
                }}
              >
                {r.type}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 14,
                  color: 'var(--ink)',
                  marginBottom: 10,
                  lineHeight: 1.5,
                }}
              >
                {r.quote}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{r.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
