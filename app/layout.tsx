import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noishi Dev',
  description: 'Noishi Dev',
  icons: {
    icon: '/koishi_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
