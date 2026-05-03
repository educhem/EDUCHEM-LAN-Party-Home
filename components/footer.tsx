import Link from 'next/link'
import styles from './footer.module.scss'

const footerLinks = [
    {href: '/info', label: 'Info'},
    {href: '/reservation', label: 'Rezervace'},
    {href: '/rules', label: 'Pravidla'},
    {href: '/schedule', label: 'Harmonogram'},
    {href: '/faq', label: 'FAQ'},
]

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoMark} aria-hidden="true"/>
                        <span>EDUCHEM LAN Party</span>
                    </Link>

                    <nav className={styles.links}>
                        {footerLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <a href="/app/" className={styles.systemLink}>
                            Vstup do systému
                        </a>
                        <a href="/info.pdf" download className={styles.download}>
                            Stáhnout info.pdf
                        </a>
                    </div>
                </div>

                <p className={styles.note}>
                    Summer LAN Party 2026 - SŠ EDUCHEM, Eduarda Basse 1142, 434 01 Most
                </p>
            </div>
        </footer>
    )
}
