'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const cardLabel: React.CSSProperties = {
  fontSize: 9,
  fontFamily: 'var(--font-display), Cinzel, serif',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: 8,
}

const cardTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cinzel, serif',
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 8,
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Who I am</p>
          <h2 className="section-title">
            I&apos;m not a designer who learned social media.{' '}
            <span style={{ color: 'var(--red)' }}>It was the other way around.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 600 }}>
            Years in hospitality taught me one truth: people give you one second.
            I carried that into content and digital products — every frame, every screen
            must earn its keep. Today I build at the intersection of people experience,
            AI tools and digital marketing.
          </p>

          <div className="grid-2col" style={{ marginBottom: 16 }}>
            <div className="card-dark">
              <p style={{ ...cardLabel, color: 'rgba(255,255,255,0.4)' }}>Mindset</p>
              <p style={{ ...cardTitle, color: '#fff' }}>Aesthetics with intent</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)' }}>
                Every visual decision serves a goal. Hook first. Story second. CTA third. Always in that order.
              </p>
            </div>
            <div className="card-dark">
              <p style={{ ...cardLabel, color: 'rgba(255,255,255,0.4)' }}>Approach</p>
              <p style={{ ...cardTitle, color: '#fff' }}>AI-assisted, human-led</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)' }}>
                I use AI to go 3x faster — but the creative decision is always mine. Tools
                don&apos;t have taste. I do.
              </p>
            </div>
          </div>

          <div className="card">
            <p style={{ ...cardLabel, color: 'var(--ink-3)' }}>Focus area</p>
            <p style={{ ...cardTitle, color: 'var(--ink)' }}>
              Hospitality, local business, digital tools
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              I understand the business context behind content and software — because I worked
              in the industry. You can&apos;t learn that in a design course.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
