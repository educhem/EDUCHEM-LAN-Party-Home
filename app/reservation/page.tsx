import {Accordion, AccordionItem} from '@/components/accordion'
import {siteConfig} from '@/data/site'
import shell from '../page-shell.module.scss'
import styles from './reservation.module.scss'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Rezervace',
    description: `Jak rezervovat místo na ${siteConfig.currentEvent.title}, jak zaplatit vstupné a další důležité informace.`,
}

const event = siteConfig.currentEvent;

const steps = [
    {
        title: `Zaplaťte vstupné ${event.fee}`,
        details: [
            `Číslo účtu: ${event.bankAccount}`,
            `Částka: ${event.feeDecimal}`,
            `Zpráva pro příjemce: ${event.paymentMessage}`,
            'Dodržujte prosím tento formát.',
            `Termín: do ${event.paymentDeadline}`,
            'Můžete zaplatit ručním zadáním, nebo pomocí QR kódu.',
        ],
    },
    {
        title: 'Obdržíte přístupové údaje',
        details: [
            'Jakmile zaplatíte, budete mít možnost rezervovat své místo v LAN Party systému.',
            'Přístupové údaje vám přijdou do emailu, který jste uvedli ve zprávě platby.',
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
        answer: 'Kvůli velkému počtu účastníků je ideální rezervovat si počítač nebo místo pro vlastní setup. Pokud si neplánujete brát s sebou PC ani být na školním PC, nemusíte si místo rezervovat.',
    },
    {
        question: 'Může se moje místo změnit?',
        answer: 'Ano, může se stát, že vaše místo bude změněno, protože ještě mohou proběhnout úpravy. Často dáváme spolužáky vedle sebe nebo do stejných tříd.',
    },
    {
        question: 'Co když budu mít problém se systémem?',
        answer: 'V případě jakéhokoli problému se systémem kontaktujte správce: Stanislav Škudrna (@aldiix) nebo Serhii Yavorskyi (@_.yavorskiy.s._).',
    },
    {
        question: 'Mohu přijít a odejít kdykoliv?',
        answer: 'Ano, můžete přijít/odejít kdykoliv během akce. Odchod ale musíte dát vědět někomu z učitelů, ideálně napsat na školní Discord.',
    },
    {
        question: 'Do kdy musím zaplatit?',
        answer: `Vstupné ${event.fee} je nutné zaplatit do ${event.paymentDeadline}.`,
    },
]

export default function ReservationPage() {
    return (
        <div className={`${shell.page} ${shell.narrow}`}>
            <div className={shell.pageHeader}>
                <span className={shell.eyebrow}>Rezervace</span>
                <h1 className={shell.title}>Systém LAN Party</h1>
                <p className={shell.description}>
                    Rezervace je určená pro účastníky, kteří chtějí mít jistotu školního PC nebo místa pro vlastní
                    setup.
                </p>
                <a href="/app/" className={`${shell.button} ${shell.primaryButton}`}>
                    Vstup do rezervačního systému
                </a>
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
                                        <span className={styles.bullet} aria-hidden="true"/>
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
                            Vstupné můžete zaplatit pomocí QR kódu nebo ručním zadáním platebních údajů. Údaje jsou
                            uvedené v originálním info PDF.
                        </p>
                    </div>
                </div>

                <div className={`${shell.alert} ${shell.alertError}`}>
                    <div className={shell.alertIcon} aria-hidden="true">!</div>
                    <div>
                        <p className={shell.alertTitle}>Důležité upozornění</p>
                        <p className={shell.alertDescription}>
                            Ve zprávě pro příjemce dodržujte formát: {event.paymentMessage}. Bez správného formátu
                            nemusí být platba přiřazena.
                        </p>
                    </div>
                </div>

                <div className={shell.alert}>
                    <div className={shell.alertIcon} aria-hidden="true">!</div>
                    <div>
                        <p className={shell.alertTitle}>Změna místa</p>
                        <p className={shell.alertDescription}>
                            Vaše místo může být změněno kvůli úpravám rozložení, například když někdo chce sedět u
                            kamaráda nebo když dáváme spolužáky vedle sebe.
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <h2 className={shell.sectionTitle}>
                    <span className={shell.sectionMark} aria-hidden="true"/>
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
