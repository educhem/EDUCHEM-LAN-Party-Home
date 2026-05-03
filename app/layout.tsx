import type { Metadata, Viewport } from 'next'
import { Gabarito, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

const gabarito = Gabarito({ subsets: ["latin", "latin-ext"], variable: "--font-gabarito" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: {
    default: 'EDUCHEM LAN Party 2025',
    template: '%s | EDUCHEM LAN Party 2025',
  },
  description: 'Mikulášská LAN Party 2025 na SŠ EDUCHEM v Mostě. 5.--6. prosince, vstup 100 Kč. Přijď si zahrát!',
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
    <html lang="cs" className={`${gabarito.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
