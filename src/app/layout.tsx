import './globals.css'
import type { Metadata } from 'next'
import { Zen_Kurenaido } from 'next/font/google'

const zen = Zen_Kurenaido ({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={zen.className}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

