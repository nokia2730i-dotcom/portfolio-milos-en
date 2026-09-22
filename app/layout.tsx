import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import './print.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

// Absolute site URL — the OG image must be absolute for WhatsApp, LinkedIn
// and Slack to fetch it. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set
// automatically in production; NEXT_PUBLIC_SITE_URL overrides it (e.g. once a
// custom domain is attached). The literal below is only a local fallback.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return 'https://portfolio-milos-en.vercel.app'
}

const siteUrl = resolveSiteUrl()
const title = 'Miloš Stamenković — Social Media Manager & Content Strategist'
const description =
  'Instagram and TikTok strategy, short-form production and analytics turned into action. 76,705 views and 660 new followers from one organic post.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Miloš Stamenković — Portfolio',
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
