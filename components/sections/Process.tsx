'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '1',
    title: 'Goal and audience',
    time: 'before any idea',
    body: 'What the post needs to achieve and who it speaks to. Reach, DMs, profile visits, sales — every goal needs a different format. Without this you are shooting blind.',
  },
  {
    num: '2',
    title: 'Hook and angle',
    time: 'the first second',
    body: 'Which problem the audience recognizes instantly and which words hit it. Several hook versions for the same idea, then the one with the most concrete promise wins.',
  },
  {
    num: '3',
    title: 'Production in batches',
    time: 'batch, not one by one',
    body: 'Same setup, more posts. Captions, pacing and sound on the same system — that is why the profile stays consistent when the tempo goes up.',
  },
  {
    num: '4',
    title: 'Publishing and CTA',
    time: 'one ask, not two',
    body: 'Caption, hashtag set, posting time and one clear next step. Two calls to action in the same post split attention and both lose.',
  },
  {
    num: '5',
    title: 'Reading the numbers',
    time: 'input for the next loop',
    body: 'What held attention, what earned saves and DMs. I extract the rule, write it into the plan — and the loop starts again.',
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
          <p className="eyebrow">How I work with content</p>
          <h2 className="section-title">
            Content is not inspiration.{' '}
            <span style={{ color: 'var(--red)' }}>It is a loop that repeats.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            The same path for every brand — from the goal to the next post. That is why it does
            not depend on whether today was a good day for ideas.
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
