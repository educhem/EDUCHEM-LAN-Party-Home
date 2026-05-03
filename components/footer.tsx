import Link from 'next/link'

const footerLinks = [
  { href: '/info', label: 'Info' },
  { href: '/reservation', label: 'Rezervace' },
  { href: '/rules', label: 'Pravidla' },
  { href: '/schedule', label: 'Harmonogram' },
  { href: '/faq', label: 'FAQ' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            <div className="icon-placeholder lg" aria-hidden="true" />
            <span>EDUCHEM LAN Party</span>
          </Link>

          <nav className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <a href="/info.pdf" download className="btn btn-secondary">
            <div className="icon-placeholder sm" aria-hidden="true" />
            Stahnout info.pdf
          </a>
        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.875rem', color: 'var(--text-color-darker)' }}>
          EDUCHEM LAN Party 2025 - SS EDUCHEM, Eduarda Basse 1142, 434 01 Most
        </p>
      </div>
    </footer>
  )
}
