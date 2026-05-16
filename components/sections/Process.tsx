'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '1',
    title: 'Discovery',
    time: '1 to 2 days',
    body: 'Deep dive into the brand or project: goals, audience, competitors, tone. We don\'t touch production before alignment.',
  },
  {
    num: '2',
    title: 'Strategy',
    time: '2 to 3 days',
    body: 'Content plan or application architecture. Approved before a single pixel of design or line of code is touched.',
  },
  {
    num: '3',
    title: 'Production',
    time: '3 to 7 days',
    body: 'Canva brand kit, video editing, WordPress site or web application. Batch production for content.',
  },
  {
    num: '4',
    title: 'Review',
    time: '1 to 2 days',
    body: '2 rounds of revisions included. Hard deadlines on both sides — this is not an infinite loop.',
  },
  {
    num: '5',
    title: 'Delivery + Optimisation',
    time: '',
    body: 'Files, deploy, caption copy, hashtag strategy, posting schedule. Monthly report on retainer.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">How I work</p>
          <h2 className="section-title">
            No surprises. No ghost edits.{' '}
            <span style={{ color: 'var(--red)' }}>Just clean delivery.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Every project goes through the same 5 steps. Clear scope, clear deadlines, zero ambiguity.
          </p>
        </motion.div>

        <div>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: 'flex',
                gap: 24,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: 'var(--red)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 14,
                    color: '#fff',
                  }}
                >
                  {s.num}
                </span>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 12,
                    flexWrap: 'wrap',
                    marginBottom: 6,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 16,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.title}
                  </h3>
                  {s.time && (
                    <span
                      style={{
                        fontSize: 11,
                        color: 'var(--red)',
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      — {s.time}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
