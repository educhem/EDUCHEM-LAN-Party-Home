'use client'

import {createContext, type ReactNode, useContext, useEffect, useState} from 'react'

type Theme = 'light' | 'dark'

const THEME_COOKIE = 'theme'
const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

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

    return theme === 'light' || theme === 'dark' ? theme : null
}

function storeTheme(theme: Theme) {
    document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${THEME_COOKIE_MAX_AGE}; samesite=lax`
}

export function ThemeProvider({children}: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = getStoredTheme()
        if (stored) {
            setTheme(stored)
            document.documentElement.classList.toggle('light', stored === 'light')
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const initial = prefersDark ? 'dark' : 'light'
            setTheme(initial)
            document.documentElement.classList.toggle('light', initial === 'light')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        storeTheme(newTheme)
        document.documentElement.classList.toggle('light', newTheme === 'light')
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
