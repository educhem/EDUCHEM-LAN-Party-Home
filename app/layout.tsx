import type {Metadata, Viewport} from 'next'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'
import {BackToTop} from '@/components/back-to-top'
import {ThemeProvider} from '@/components/theme-provider'
import {siteConfig} from '@/data/site'
import './globals.scss'

export const metadata: Metadata = {
    title: {
        default: siteConfig.currentEvent.title,
        template: `%s » ${siteConfig.currentEvent.title}`,
    },
    description: `${siteConfig.currentEvent.title} na ${siteConfig.currentEvent.venueFull}. ${siteConfig.currentEvent.dateLong}, vstup ${siteConfig.currentEvent.fee}.`,
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export const viewport: Viewport = {
    themeColor: [
        {media: '(prefers-color-scheme: dark)', color: '#101010'},
        {media: '(prefers-color-scheme: light)', color: '#f8f6f1'},
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
            <Navbar/>
            <main>{children}</main>
            <Footer/>
            <BackToTop/>
        </ThemeProvider>
        </body>
        </html>
    )
}
