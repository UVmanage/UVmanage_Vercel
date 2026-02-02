import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'UVmanage - OnlyFans Backend Management for Creators Doing $2k+/Month',
  description: 'We help OnlyFans creators doing $2k+/month install backend systems—chatting, funnels, ops—so they grow faster without burnout. 30-day trial.',
  keywords: [
  'OnlyFans management',
  'OnlyFans backend systems',
  'OnlyFans chatting services',
  'OnlyFans funnel optimization',
  'OnlyFans creator growth',
  'OnlyFans operations management',
  'OnlyFans agency alternative',
  'scale OnlyFans income',
  'OnlyFans DM sales',
  'OnlyFans subscriber growth'
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
