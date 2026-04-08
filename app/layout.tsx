import type { Metadata } from 'next'
import { Cinzel, Cinzel_Decorative, Lato } from 'next/font/google'

import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'La Bella Caf\u00e8 & Resto Bar - Villa Kathreyna',
  description: 'La Bella Caf\u00e8 & Resto Bar at Villa Kathreyna Event Place & Resort',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${cinzelDecorative.variable} ${lato.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
