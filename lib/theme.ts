export type Theme = 'light' | 'dark'

export const THEME_COOKIE = 'theme'
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365
export const DEFAULT_THEME: Theme = 'dark'

export function isTheme(value: unknown): value is Theme {
    return value === 'light' || value === 'dark'
}
