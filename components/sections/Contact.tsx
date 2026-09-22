'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const contacts = [
  { label: 'Instagram', val: '@milos.ugostitelj', href: 'https://www.instagram.com/milos.ugostitelj/', external: true },
  { label: 'YouTube', val: '@milosstamenkovic888', href: 'https://www.youtube.com/@milosstamenkovic888', external: true },
  { label: 'Linkversity Blog', val: 'linkversity.hr/blog/author/milos', href: 'https://linkversity.hr/blog/author/milos/', external: true },
  { label: 'Email', val: 'nokia2730i@gmail.com', href: 'mailto:nokia2730i@gmail.com', external: false },
  { label: 'Phone', val: '+381 64 261 4867', href: 'tel:+381642614867', external: false },
]

const cardLabel: React.CSSProperties = {
  fontSize: 9,
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-3)',
  marginBottom: 8,
}

const cardValue: React.CSSProperties = {
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontWeight: 800,
  fontSize: 14,
  color: 'var(--red)',
  overflowWrap: 'anywhere',
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--paper-2)', padding: '80px 24px 100px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            I am looking for a team,{' '}
            <span style={{ color: 'var(--red)' }}>not just a project.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            I am open to a full-time role on a marketing or social media team. I bring a method
            for content that stops the scroll, experience with real results, and two decades of
            working with people — where customer experience is everything.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid-2col" style={{ marginBottom: 24 }}>
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ minWidth: 0 }}
            >
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="card">
                  <p style={cardLabel}>{c.label}</p>
                  <p style={cardValue}>{c.val}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Dark CTA */}
        <motion.a
          href="mailto:nokia2730i@gmail.com"
          {...A}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ borderColor: '#c0392b' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--ink)',
            borderRadius: 4,
            padding: '52px 24px',
            textDecoration: 'none',
            cursor: 'pointer',
            border: '1px solid transparent',
            transition: 'border-color 0.2s',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 800,
              fontSize: 22,
              color: '#fff',
              marginBottom: 8,
            }}
          >
            Send a message →
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>
            nokia2730i@gmail.com
          </span>
        </motion.a>

        {/* Footer */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 11,
            color: 'var(--ink-3)',
            marginTop: 60,
            fontStyle: 'italic',
          }}
        >
          Portfolio · Miloš Stamenković · Social Media Manager &amp; Content Strategist · 2026
        </p>
      </div>
    </section>
  )
}
