import type {Metadata, Viewport} from 'next'
import {cookies} from 'next/headers'
import Script from 'next/script'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'
import {BackToTop} from '@/components/back-to-top'
import {ThemeProvider} from '@/components/theme-provider'
import {siteConfig} from '@/data/site'
import {DEFAULT_THEME, isTheme, type Theme, THEME_COOKIE, THEME_COOKIE_MAX_AGE} from '@/lib/theme'
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

function themeInitScript(defaultTheme: Theme) {
    return `
(function () {
    var cookieName = ${JSON.stringify(THEME_COOKIE)};
    var maxAge = ${THEME_COOKIE_MAX_AGE};
    var match = document.cookie.match(new RegExp('(?:^|; )' + cookieName + '=([^;]*)'));
    var stored = match && decodeURIComponent(match[1]);
    var theme = stored === 'light' || stored === 'dark'
        ? stored
        : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : ${JSON.stringify(defaultTheme)});

    document.documentElement.dataset.theme = theme;

    if (!stored) {
        document.cookie = cookieName + '=' + theme + '; path=/; max-age=' + maxAge + '; samesite=lax';
    }
})();`
}

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    const cookieStore = await cookies()
    const cookieTheme = cookieStore.get(THEME_COOKIE)?.value
    const theme = isTheme(cookieTheme) ? cookieTheme : DEFAULT_THEME

    return (
        <html lang="cs" data-theme={theme} suppressHydrationWarning>
        <head>
        <Script
            id="theme-init"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{__html: themeInitScript(theme)}}
        />
        </head>
        <body>
        <ThemeProvider initialTheme={theme}>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
            <BackToTop/>
        </ThemeProvider>
        </body>
        </html>
    )
}
