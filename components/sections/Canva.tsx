'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Brand Kit',
    body: 'Fonts, colors, logo and reusable elements in one place. No more "which blue was that" halfway through a task.',
  },
  {
    title: 'Template system',
    body: 'Reels, Stories, carousel, thumbnail. Whoever on the team picks up the task — the same visual language comes out.',
  },
  {
    title: 'Canva AI',
    body: 'Magic Studio workflow: background removal, Magic Write, text-to-image. Less time on technique, more on the idea.',
  },
  {
    title: 'Video in Canva',
    body: 'Reels without Premiere. Transitions, beat sync, auto-captions, B-roll — enough for a daily posting tempo.',
  },
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
            Anyone can drag and drop. Building a system where several people post for a whole
            week and the profile looks like one hand made it — that is a different skill.
          </p>
        </motion.div>

        <div className="grid-2col">
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
                  fontFamily: 'var(--font-display), Cinzel, serif',
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
      </div>
    </section>
  )
}
