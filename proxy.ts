import {NextResponse, type NextRequest} from 'next/server'
import {isTheme, THEME_COOKIE, THEME_COOKIE_MAX_AGE} from '@/lib/theme'

function withThemeCookie(cookieHeader: string | null, theme: string) {
    const nextCookie = `${THEME_COOKIE}=${theme}`
    return cookieHeader ? `${cookieHeader}; ${nextCookie}` : nextCookie
}

export function proxy(request: NextRequest) {
    const storedTheme = request.cookies.get(THEME_COOKIE)?.value

    if (isTheme(storedTheme)) {
        const response = NextResponse.next()
        response.headers.set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme')
        response.headers.set('Critical-CH', 'Sec-CH-Prefers-Color-Scheme')
        return response
    }

    const hintedTheme = request.headers.get('sec-ch-prefers-color-scheme')?.replaceAll('"', '')

    if (!isTheme(hintedTheme)) {
        const response = NextResponse.next()
        response.headers.set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme')
        response.headers.set('Critical-CH', 'Sec-CH-Prefers-Color-Scheme')
        return response
    }

    const theme = hintedTheme
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('cookie', withThemeCookie(requestHeaders.get('cookie'), theme))

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    response.headers.set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme')
    response.headers.set('Critical-CH', 'Sec-CH-Prefers-Color-Scheme')
    response.cookies.set(THEME_COOKIE, theme, {
        path: '/',
        maxAge: THEME_COOKIE_MAX_AGE,
        sameSite: 'lax',
    })

    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
