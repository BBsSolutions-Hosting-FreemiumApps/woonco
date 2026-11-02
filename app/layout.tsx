import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Schibsted_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const schibsted = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-schibsted' })

export const metadata: Metadata = {
  title: {
    default: 'Samenhuis.nl – Nieuws en aanbod over ecodorpen en woongroepen',
    template: '%s | Samenhuis.nl',
  },
  description:
    'Het laatste nieuws over ecodorpen, eco-communities en woongroepen in Nederland. Vind een woongroep, een vrije plek of medebouwers voor je initiatief.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f3a2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${schibsted.variable} bg-background`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
