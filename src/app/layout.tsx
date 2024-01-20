import './globals.css'
import type { Metadata } from 'next'
import { Klee_One } from 'next/font/google'

const klee = Klee_One({
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
    <html lang="en" className={klee.className}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | 2023年度1-4',
  },
  description: 'OMUCT 1年4組の時間割と連絡事項・提出物等の共有ページです。',
}

