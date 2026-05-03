import type { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'EDUCHEM LAN Party 2025',
    template: '%s | EDUCHEM LAN Party 2025',
  },
  description: 'Mikulášská LAN Party 2025 na SŠ EDUCHEM v Mostě. 5.-6. prosince, vstup 100 Kč. Přijď si zahrát!',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#101010' },
    { media: '(prefers-color-scheme: light)', color: '#f8f6f1' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
