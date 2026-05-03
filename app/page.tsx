import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="image-placeholder" style={{ width: '100%', height: '100%', borderRadius: 0 }}>
            Hero Background Image
          </div>
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="badge">5.-6. prosince 2025</span>
          <h1 className="hero-title">
            Mikulasska
            <span className="hero-title-accent">LAN Party</span>
          </h1>
          <p className="hero-description">
            SS EDUCHEM, Eduarda Basse 1142, 434 01 Most. Prijd si zahrat, grilovat a uzit skvelou atmosferu s kamarady!
          </p>
          <div className="hero-buttons">
            <Link href="/reservation" className="btn btn-primary">
              <div className="icon-placeholder sm" aria-hidden="true" />
              Rezervovat misto
            </Link>
            <Link href="/info" className="btn btn-secondary">
              <div className="icon-placeholder sm" aria-hidden="true" />
              Zjistit vice
            </Link>
          </div>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div className="card info-card">
              <div className="icon-placeholder xl info-card-icon" aria-hidden="true" />
              <p className="info-card-title">Datum</p>
              <p className="info-card-value">5.-6. 12. 2025</p>
            </div>
            <div className="card info-card">
              <div className="icon-placeholder xl info-card-icon" aria-hidden="true" />
              <p className="info-card-title">Misto</p>
              <p className="info-card-value">SS EDUCHEM</p>
            </div>
            <div className="card info-card">
              <div className="icon-placeholder xl info-card-icon" aria-hidden="true" />
              <p className="info-card-title">Cas</p>
              <p className="info-card-value">12:00 - 14:00</p>
            </div>
            <div className="card info-card">
              <div className="icon-placeholder xl info-card-icon" aria-hidden="true" />
              <p className="info-card-title">Vstupne</p>
              <p className="info-card-value">100 Kc</p>
            </div>
          </div>

          <div className="image-placeholder" style={{ width: '100%', height: '300px', marginTop: '40px' }}>
            Featured Image
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ backgroundColor: 'var(--element-bg)' }}>
        <div className="container">
          <h2 className="section-title">Jak to funguje</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Zaplatit vstupne</h3>
                  <p className="step-description">
                    Prevodem 100 Kc na ucet 2603033660/2010. Do zpravy napiste JMENO PRIJMENI, TRIDA, EMAIL.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Obdrzet pristup</h3>
                  <p className="step-description">
                    Po zaplaceni vam prijde email s pristupovymi udaji do naseho rezervacniho systemu.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Rezervovat misto</h3>
                  <p className="step-description">
                    V systemu si muzete rezervovat PC nebo misto pro vlastni setup.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Prijit a uzit si!</h3>
                  <p className="step-description">
                    5. prosince od 12:00 dorazte na SS EDUCHEM a uzijte si skvelou akci!
                  </p>
                </div>
              </div>
            </div>
            <div className="image-placeholder" style={{ width: '100%', height: '400px' }}>
              Gaming Setup Image
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
