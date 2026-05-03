'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './theme-provider'

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
      <header className="header">
        <Link href="/" className="header-logo">
          <div className="icon-placeholder lg" aria-hidden="true" />
          <span>LAN Party</span>
        </Link>

        <nav className="header-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-nav-link${pathname === link.href ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Prepnout na svetly rezim' : 'Prepnout na tmavy rezim'}
          >
            <div className="icon-placeholder" aria-hidden="true" />
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Zavrit menu' : 'Otevrit menu'}
            aria-expanded={open}
          >
            <div className="icon-placeholder" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="mobile-menu-link"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
