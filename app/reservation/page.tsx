'use client'

import { Accordion, AccordionItem } from '@/components/accordion'

const steps = [
  {
    title: 'Zaplazte vstupne 100 Kc',
    details: [
      'Cislo uctu: 2603033660/2010',
      'Castka: 100,00 CZK',
      'Zprava pro prijemce: JMENO PRIJMENI, TRIDA, EMAIL',
      'Dodrzujte prosim tento format.',
      'Termin: do 4.12. 20:00',
      'Muzete zaplatit rucnim zadanim, nebo pomoci QR kodu.',
    ],
  },
  {
    title: 'Obdrzite pristupove udaje',
    details: [
      'Jakmile zaplatite, prijdou vam udaje na email, ktery jste uvedli ve zprave platby.',
      'Tyto udaje pouzijete k prihlaseni do LAN Party systemu.',
    ],
  },
  {
    title: 'Rezervujte si misto v systemu',
    details: [
      'V systemu na strance /app/reservations si muzete rezervovat misto nebo pocitac.',
      'Pokud si neplanujete brat sebou PC ani byt na skolnim PC, nemusite si misto rezervovat.',
    ],
  },
]

const faqItems = [
  {
    question: 'Musim si rezervovat misto?',
    answer: 'Pokud si neplanujete brat si sebou PC, ani byt na skolnim PC, nemusite si misto rezervovat.',
  },
  {
    question: 'Muze se moje misto zmenit?',
    answer: 'Ano, muze se stat, ze vase misto bude zmeneno, protoze kolikrat jeste probehnou upravy (nekdo si rozmysli, ze chce sedet u sveho kamarada a pak se to musi preskladat). Casto se spoluzaci davaji vedle sebe / do stejnych trid.',
  },
  {
    question: 'Co kdyz budu mit problem se systemem?',
    answer: 'V pripade jakehokoli problemu se systemem kontaktujte spravce: Stanislav Skudrna (@aldiix) nebo Serhii Yavorskyi (@_.yavorskiy.s._).',
  },
  {
    question: 'Mohu prijit a odejit kdykoliv?',
    answer: 'Ano, muzete prijit/odejit kdykoliv behem akce. Odchod z budovy ale musite dat vedet nekomu z ucitelu.',
  },
  {
    question: 'Do kdy musim zaplatit?',
    answer: 'Vstupne 100 Kc je nutne zaplatit do 4.12. 20:00.',
  },
]

export default function ReservationPage() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '80px', maxWidth: '800px' }}>
      <div className="page-header" style={{ paddingTop: 0, textAlign: 'left' }}>
        <span className="badge">Rezervace</span>
        <h1 className="page-title" style={{ marginTop: '16px' }}>Jak probiha rezervace</h1>
        <p className="page-description" style={{ marginLeft: 0, textAlign: 'left' }}>
          Krokovy pruvodce procesem platby a rezervace mista na LAN Party.
        </p>
      </div>

      {/* Steps */}
      <div className="steps" style={{ marginBottom: '48px' }}>
        {steps.map((step, idx) => (
          <div key={idx} className="step">
            <div className="step-number">{idx + 1}</div>
            <div className="step-content">
              <h3 className="step-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="icon-placeholder sm" aria-hidden="true" />
                {step.title}
              </h3>
              <ul style={{ marginTop: '8px' }}>
                {step.details.map((detail, i) => (
                  <li key={i} className="step-description" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ marginTop: '8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', flexShrink: 0 }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
        <div className="alert alert-warning">
          <div className="icon-placeholder" aria-hidden="true" />
          <div>
            <p className="alert-title">Platba QR kodem</p>
            <p className="alert-description">
              Vstupne muzete zaplatit pomoci QR kodu nebo rucnim zadanim platebnich udaju. QR kod najdete v originalnim info PDF.
            </p>
          </div>
        </div>

        <div className="alert alert-error">
          <div className="icon-placeholder" aria-hidden="true" />
          <div>
            <p className="alert-title">Dulezite upozorneni</p>
            <p className="alert-description">
              Ve zprave pro prijemce dodrzujte format: JMENO PRIJMENI, TRIDA, EMAIL. Bez spravneho formatu nemusi byt platba prirazena.
            </p>
          </div>
        </div>

        <div className="alert alert-warning">
          <div className="icon-placeholder" aria-hidden="true" />
          <div>
            <p className="alert-title">Zmena mista</p>
            <p className="alert-description">
              Vase misto muze byt zmeneno, pokud probihaji upravy (preskladani spoluzaku do stejnych trid apod.). Sledujte aktualni stav v systemu.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section>
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="icon-placeholder" aria-hidden="true" />
          Caste dotazy k rezervaci
        </h2>
        <Accordion>
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} title={item.question}>
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
