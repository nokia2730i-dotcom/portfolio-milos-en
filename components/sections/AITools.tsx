'use client'
import { motion } from 'framer-motion'

const tools = [
  {
    dot: 'C',
    dotBg: '#c0392b',
    title: 'Claude / ChatGPT — Strategy & Copy',
    body: 'Content calendars, hook writing, app development. AI generates options, I finalise.',
  },
  {
    dot: 'MJ',
    dotBg: '#0a0a0a',
    title: 'Midjourney — Visual Concepts',
    body: 'Mood boards, thumbnail visuals, background generation. Prompt engineering as a skill.',
  },
  {
    dot: 'S',
    dotBg: '#c0392b',
    title: 'Suno AI — Original Music',
    body: 'Custom background music for Reels and YouTube. Royalty-free. See: youtube.com/@milosstamenkovic888',
  },
  {
    dot: '+',
    dotBg: '#0a0a0a',
    title: 'ElevenLabs · CapCut AI · Canva Magic',
    body: 'AI voiceover, auto-captions, background removal. Complete pipeline from idea to delivery.',
  },
]

export default function AITools() {
  return (
    <section id="ai" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">AI Workflow</p>
          <h2 className="section-title">
            AI doesn&apos;t replace creatives.{' '}
            <span style={{ color: 'var(--red)' }}>It reveals who the real ones are.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            I use AI to go faster and think wider. The creative decision is always mine —
            AI executes, I decide.
          </p>
        </motion.div>

        <div>
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: 'flex',
                gap: 20,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: t.dotBg,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display), Cinzel, serif',
                    fontWeight: 800,
                    fontSize: 11,
                    color: '#fff',
                  }}
                >
                  {t.dot}
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Cinzel, serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: 'var(--ink)',
                    marginBottom: 6,
                  }}
                >
                  {t.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
