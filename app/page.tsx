import Link from 'next/link'
import shell from './page-shell.module.scss'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src="/images/hero-bg.jpg" alt="" />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={shell.eyebrow}>5.-6. prosince 2025</span>
          <h1 className={styles.heroTitle}>
            Mikulášská
            <span className={styles.heroAccent}>LAN Party</span>
          </h1>
          <p className={styles.heroDescription}>
            SŠ EDUCHEM, Eduarda Basse 1142, 434 01 Most. Přijď si zahrát, grilovat a užít skvělou atmosféru s kamarády!
          </p>
          <div className={styles.heroButtons}>
            <Link href="/reservation" className={`${shell.button} ${shell.primaryButton}`}>
              <span className={shell.buttonDot} aria-hidden="true" />
              Rezervovat místo
            </Link>
            <Link href="/info" className={`${shell.button} ${shell.secondaryButton}`}>
              Zjistit více
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={`${shell.card} ${styles.infoCard}`}>
              <p className={styles.infoKicker}>Datum</p>
              <p className={styles.infoValue}>5.-6. 12. 2025</p>
            </div>
            <div className={`${shell.card} ${styles.infoCard}`}>
              <p className={styles.infoKicker}>Místo</p>
              <p className={styles.infoValue}>SS EDUCHEM</p>
            </div>
            <div className={`${shell.card} ${styles.infoCard}`}>
              <p className={styles.infoKicker}>Čas</p>
              <p className={styles.infoValue}>12:00 - 14:00</p>
            </div>
            <div className={`${shell.card} ${styles.infoCard}`}>
              <p className={styles.infoKicker}>Vstupné</p>
              <p className={styles.infoValue}>100 Kč</p>
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/images/lan-party.jpg" alt="Herni zázemí LAN party" />
            <div className={styles.featureCaption}>
              <strong>Jedna noc, jedna síť, hodně her.</strong>
              <span>Školní PC, vlastní setupy, společný prostor a večerní grilování.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Jak to funguje</h2>
          <div className={styles.processGrid}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div>
                  <h3 className={styles.stepTitle}>Zaplatit vstupné</h3>
                  <p className={styles.stepText}>
                    Převodem 100 Kč na účet 2603033660/2010. Do zprávy napište JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div>
                  <h3 className={styles.stepTitle}>Obdržet přístup</h3>
                  <p className={styles.stepText}>
                    Po zaplacení vám přijde email s přístupovými údaji do našeho rezervačního systému.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div>
                  <h3 className={styles.stepTitle}>Rezervovat místo</h3>
                  <p className={styles.stepText}>
                    V systému si můžete rezervovat PC nebo místo pro vlastní setup.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div>
                  <h3 className={styles.stepTitle}>Přijít a užít si!</h3>
                  <p className={styles.stepText}>
                    5. prosince od 12:00 dorazte na SŠ EDUCHEM a užijte si skvělou akci!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.setupImage}>
              <img src="/images/gaming-setup.jpg" alt="Herní setup s počítačem" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
