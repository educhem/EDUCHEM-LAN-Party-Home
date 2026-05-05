'use client'

import {createContext, type ReactNode, useContext, useEffect, useState} from 'react'
import {DEFAULT_THEME, isTheme, type Theme, THEME_COOKIE, THEME_COOKIE_MAX_AGE} from '@/lib/theme'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    mounted: boolean
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {
    },
    mounted: false,
})

function getStoredTheme(): Theme | null {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${THEME_COOKIE}=`))

    const theme = cookie?.split('=')[1]

    return isTheme(theme) ? theme : null
}

function applyTheme(theme: Theme, persist: boolean) {
    document.documentElement.dataset.theme = theme

    if (persist) {
        document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${THEME_COOKIE_MAX_AGE}; samesite=lax`
    }
}

function getInitialTheme(initialTheme: Theme): Theme {
    if (typeof document === 'undefined') {
        return initialTheme
    }

    const htmlTheme = document.documentElement.dataset.theme
    if (isTheme(htmlTheme)) {
        return htmlTheme
    }

    return getStoredTheme() ?? initialTheme
}

export function ThemeProvider({children, initialTheme = DEFAULT_THEME}: { children: ReactNode; initialTheme?: Theme }) {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme(initialTheme))
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        applyTheme(theme, getStoredTheme() === null)
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        applyTheme(newTheme, true)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, mounted}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
