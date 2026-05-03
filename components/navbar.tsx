'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './theme-provider'
import styles from './navbar.module.scss'

const links = [
  { href: '/', label: 'Home' },
  { href: '/info', label: 'Info' },
  { href: '/reservation', label: 'Rezervace' },
  { href: '/rules', label: 'Pravidla' },
  { href: '/schedule', label: 'Harmonogram' },
  { href: '/faq', label: 'FAQ' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true">
            <img src="/images/logo/logo.svg" alt="" className={styles.logoImage} />
          </span>
          <span>LAN Party</span>
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink}${pathname === link.href ? ` ${styles.active}` : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="/app/" className={styles.systemLink}>
            Vstup do systému
          </a>
          <button
            onClick={toggleTheme}
            className={styles.iconButton}
            aria-label={theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
          >
            <span className={styles.themeIcon} aria-hidden="true" />
          </button>
          <button
            className={`${styles.iconButton} ${styles.mobileButton}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu}${open ? ` ${styles.mobileMenuOpen}` : ''}`}>
        <a href="/app/" className={styles.mobileSystemLink}>
          Vstup do systému
        </a>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`${styles.mobileLink}${pathname === link.href ? ` ${styles.active}` : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
