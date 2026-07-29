'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--paper-2)', padding: '80px 24px 100px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Let&apos;s work</p>
          <h2 className="section-title">
            Your brand deserves to be seen by{' '}
            <span style={{ color: 'var(--red)' }}>the right people.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Available for 2–3 new projects monthly. I work long-term — websites, web apps,
            content systems. Discovery call is free, 30 minutes, and by the end we&apos;ll know
            if it makes sense.
          </p>
        </motion.div>

        <div className="grid-2col" style={{ marginBottom: 16 }}>
          {[
            { label: 'Instagram', val: '@milos.ugostitelj', href: 'https://www.instagram.com/milos.ugostitelj/' },
            { label: 'YouTube', val: '@milosstamenkovic888', href: 'https://www.youtube.com/@milosstamenkovic888' },
            { label: 'Linkversity Blog', val: 'linkversity.hr/blog/author/milos', href: 'https://linkversity.hr/blog/author/milos/' },
            { label: 'Response time', val: 'Within 24h on business days', href: null },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card">
                    <p
                      style={{
                        fontSize: 9,
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-3)',
                        marginBottom: 8,
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 800,
                        fontSize: 14,
                        color: 'var(--red)',
                      }}
                    >
                      {c.val}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="card">
                  <p
                    style={{
                      fontSize: 9,
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-3)',
                      marginBottom: 8,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 14,
                      color: 'var(--ink)',
                    }}
                  >
                    {c.val}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid-2col" style={{ marginBottom: 24 }}>
          {[
            {
              title: 'What to send',
              sub: 'One paragraph. That\'s it.',
              body: 'What the project needs to do, rough deadline, budget if you have it. If there\'s a fit — we build the brief together.',
            },
            {
              title: 'Not available for',
              sub: 'One-off logos and spec work',
              body: 'I\'m focused on projects that make sense long-term.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 15,
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 10,
                  color: 'var(--ink-3)',
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: 10,
                }}
              >
                {c.sub}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://www.instagram.com/milos.ugostitelj/"
          target="_blank"
          rel="noopener noreferrer"
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
            instagram.com/milos.ugostitelj
          </span>
        </motion.a>

        <p
          style={{
            textAlign: 'center',
            fontSize: 11,
            color: 'var(--ink-3)',
            marginTop: 60,
            fontStyle: 'italic',
          }}
        >
          Portfolio · Miloš Stamenković · Social Media Designer & Digital Product Builder · 2025
        </p>
      </div>
    </section>
  )
}
