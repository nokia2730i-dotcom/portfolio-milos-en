'use client'
import { useState, useEffect } from 'react'

const sections = ['cover', 'about', 'services', 'reels', 'work', 'canva', 'ai', 'process', 'reviews', 'contact']
const labels   = ['Intro', 'About', 'What I bring', 'Reels', 'Projects', 'Canva', 'AI', 'Method', 'Reviews', 'Contact']

export default function Nav() {
  const [active, setActive] = useState('cover')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      // narrow band mid-viewport: whichever section crosses it is active.
      // threshold 0.4 never fired for sections taller than 2.5 screens (Projects).
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: '#0a0a0a',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display), Cinzel, serif',
          fontWeight: 800,
          fontSize: 15,
          color: '#f7f5f1',
          flexShrink: 0,
        }}
      >
        MS<span style={{ color: '#c0392b' }}>.</span>
      </span>

      <div className="nav-links">
        {sections.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontFamily: 'var(--font-display), Cinzel, serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: 2,
              border: '1px solid',
              cursor: 'pointer',
              transition: 'all .18s',
              background: active === id ? '#c0392b' : 'transparent',
              color: active === id ? '#fff' : 'rgba(255,255,255,0.5)',
              borderColor: active === id ? '#c0392b' : 'rgba(255,255,255,0.15)',
            }}
          >
            {labels[i]}
          </button>
        ))}
      </div>

      <button
        onClick={() => window.print()}
        style={{
          fontFamily: 'var(--font-display), Cinzel, serif',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '5px 14px',
          borderRadius: 2,
          border: '1px solid #c0392b',
          background: '#c0392b',
          color: '#fff',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        PDF ↓
      </button>
    </nav>
  )
}
