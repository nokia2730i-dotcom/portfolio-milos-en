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

export const metadata: Metadata = {
  title: 'Miloš Stamenković — Social Media Manager & Content Strategist',
  description:
    'Instagram and TikTok strategy, short-form production and analytics turned into action. 76,705 views and 660 new followers from one organic post.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
