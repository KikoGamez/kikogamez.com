import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kiko Gámez | Senior Digital Executive & AI Transformation',
  description: '25+ años transformando empresas con tecnología. Executive Director, Founder y Advisor especializado en transformación digital e inteligencia artificial.',
  generator: 'v0.app',
  keywords: ['Kiko Gámez', 'transformación digital', 'AI', 'inteligencia artificial', 'executive', 'consultoría'],
  authors: [{ name: 'Kiko Gámez' }],
  openGraph: {
    title: 'Kiko Gámez | Senior Digital Executive & AI Transformation',
    description: '25+ años transformando empresas con tecnología.',
    type: 'website',
    locale: 'es_ES',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#080808] text-[#f0ece4]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
