'use client'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Instagram and TikTok strategy',
    body: 'A content plan that starts from the goal, not the idea. Who the audience is, which problem they recognize instantly, and which format stops them. An idea without a goal is just content.',
    meta: 'Content plan · Posting calendar · Format per goal',
  },
  {
    num: '02',
    title: 'Scroll-stopping ideas and hooks',
    body: 'A hook is not a headline — it is a promise the first second has to pay off. I write several versions of the same idea, pick the one that promises something concrete, then test it on a real audience.',
    meta: 'Hook bank · Pattern interrupt · Tested on audience',
  },
  {
    num: '03',
    title: 'Short-form production',
    body: 'Reels, TikTok and Shorts from concept to finished video — shooting, editing, pacing, sound, captions. An idea does not wait for someone else to free up.',
    meta: 'Shooting · Editing · Captions · CapCut & Canva',
  },
  {
    num: '04',
    title: 'Analytics turned into action',
    body: 'Reach, engagement and saves are not a report — they are instructions for the next post. I read what held attention, extract the rule, and write it into the plan.',
    meta: 'Insights · What to repeat · What to drop',
  },
  {
    num: '05',
    title: 'Client communication',
    body: 'Two decades at the table with a guest mean I know how to talk to an owner, take criticism without defending, and explain a decision without jargon. A client who understands why approves faster.',
    meta: 'Brief · Pitching ideas · Feedback without drama',
  },
  {
    num: '06',
    title: 'Visual systems and AI speed',
    body: 'Canva brand kit and templates so the whole team posts consistently, without a designer on every task. AI for speed — Claude, Suno, ElevenLabs, CapCut. The creative call stays human.',
    meta: 'Canva Pro · Brand kit · AI workflow',
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
          <p className="eyebrow">What I bring to a team</p>
          <h2 className="section-title">
            Six things a team gets{' '}
            <span style={{ color: 'var(--red)' }}>on day one.</span>
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
                  fontFamily: 'var(--font-display), Cinzel, serif',
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
                    fontFamily: 'var(--font-display), Cinzel, serif',
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
                    fontFamily: 'var(--font-display), Cinzel, serif',
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
