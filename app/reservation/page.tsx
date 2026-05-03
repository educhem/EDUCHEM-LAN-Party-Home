'use client'

import { Accordion, AccordionItem } from '@/components/accordion'
import shell from '../page-shell.module.scss'
import styles from './reservation.module.scss'

const steps = [
  {
    title: 'Zaplaťte vstupné 100 Kč',
    details: [
      'Číslo účtu: 2603033660/2010',
      'Částka: 100,00 CZK',
      'Zpráva pro příjemce: JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL',
      'Dodržujte prosím tento formát.',
      'Termín: do 4.12. 20:00',
      'Můžete zaplatit ručním zadáním, nebo pomocí QR kódu.',
    ],
  },
  {
    title: 'Obdržíte přístupové údaje',
    details: [
      'Jakmile zaplatíte, přijdou vám údaje na email, který jste uvedli ve zprávě platby.',
      'Tyto údaje použijete k přihlášení do LAN Party systému.',
    ],
  },
  {
    title: 'Rezervujte si místo v systému',
    details: [
      'V systému na stránce /app/reservations si můžete rezervovat místo nebo počítač.',
      'Pokud si neplánujete brát s sebou PC ani být na školním PC, nemusíte si místo rezervovat.',
    ],
  },
]

const faqItems = [
  {
    question: 'Musím si rezervovat místo?',
    answer: 'Pokud si neplánujete brát si s sebou PC, ani být na školním PC, nemusíte si místo rezervovat.',
  },
  {
    question: 'Může se moje místo změnit?',
    answer: 'Ano, může se stát, že vaše místo bude změněno, protože kolikrát ještě proběhnou úpravy (někdo si rozmyslí, že chce sedět u svého kamaráda a pak se to musí přeskládat). Často se spolužáci dávají vedle sebe / do stejných tříd.',
  },
  {
    question: 'Co když budu mít problém se systémem?',
    answer: 'V případě jakéhokoli problému se systémem kontaktujte správce: Stanislav Škudrna (@aldiix) nebo Serhii Yavorskyi (@_.yavorskiy.s._).',
  },
  {
    question: 'Mohu přijít a odejít kdykoliv?',
    answer: 'Ano, můžete přijít/odejít kdykoliv během akce. Odchod z budovy ale musíte dát vědět někomu z učitelů.',
  },
  {
    question: 'Do kdy musím zaplatit?',
    answer: 'Vstupné 100 Kč je nutné zaplatit do 4.12. 20:00.',
  },
]

export default function ReservationPage() {
  return (
    <div className={`${shell.page} ${shell.narrow}`}>
      <div className={shell.pageHeader}>
        <span className={shell.eyebrow}>Rezervace</span>
        <h1 className={shell.title}>Jak probíhá rezervace</h1>
        <p className={shell.description}>
          Krokový průvodce procesem platby a rezervace místa na LAN Party.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <div key={idx} className={`${shell.card} ${styles.step}`}>
            <div className={styles.number}>{idx + 1}</div>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <ul className={styles.details}>
                {step.details.map((detail, i) => (
                  <li key={i} className={styles.detail}>
                    <span className={styles.bullet} aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.alerts}>
        <div className={shell.alert}>
          <div className={shell.alertIcon} aria-hidden="true">!</div>
          <div>
            <p className={shell.alertTitle}>Platba QR kódem</p>
            <p className={shell.alertDescription}>
              Vstupné můžete zaplatit pomocí QR kódu nebo ručním zadáním platebních údajů. QR kód najdete v originálním info PDF.
            </p>
          </div>
        </div>

        <div className={`${shell.alert} ${shell.alertError}`}>
          <div className={shell.alertIcon} aria-hidden="true">!</div>
          <div>
            <p className={shell.alertTitle}>Důležité upozornění</p>
            <p className={shell.alertDescription}>
              Ve zprávě pro příjemce dodržujte formát: JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL. Bez správného formátu nemusí být platba přiřazena.
            </p>
          </div>
        </div>

        <div className={shell.alert}>
          <div className={shell.alertIcon} aria-hidden="true">!</div>
          <div>
            <p className={shell.alertTitle}>Změna místa</p>
            <p className={shell.alertDescription}>
              Vaše místo může být změněno, pokud probíhají úpravy (přeskládání spolužáků do stejných tříd apod.). Sledujte aktuální stav v systému.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h2 className={shell.sectionTitle}>
          <span className={shell.sectionMark} aria-hidden="true" />
          Časté dotazy k rezervaci
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
