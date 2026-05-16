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
  title: 'Miloš Stamenković — Social Media Designer & Digital Product Builder',
  description:
    'Portfolio: short-form video, Canva systems, Reels production, WordPress sites and web apps on Vercel. For brands that know attention is the most expensive currency.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
