'use client'

import { Accordion, AccordionItem } from '@/components/accordion'

const faqItems = [
  { question: 'Kolik stoji vstupne a jak zaplatit?', answer: 'Vstupne je 100 Kc. Zaplazte prevodem na ucet 2603033660/2010 se zpravou: JMENO PRIJMENI, TRIDA, EMAIL. Muzete take pouzit QR kod z info PDF. Termin platby: do 4.12. 20:00.' },
  { question: 'Musim si rezervovat misto?', answer: 'Pokud si neplanujete brat sebou PC, ani byt na skolnim PC, nemusite si misto rezervovat. Rezervace je jen pro ty, kteri chteji mit jistotu mista u PC.' },
  { question: 'Mohu prijit a odejit kdykoliv?', answer: 'Ano, muzete prijit/odejit kdykoliv behem akce. Odchod z budovy ale musite nahlasit nekomu z ucitelu.' },
  { question: 'Mohu si prinest vlastni PC/setup?', answer: 'Ano, muzete si vzit vlastni setup. Musite si ale vzit vlastni monitor a vsechny veci potrebne pro chod pocitace + prodluzovak.' },
  { question: 'Jak funguje stahovani her?', answer: 'Kvuli pretizeni site doporucujeme mit vlastni externi HDD/SSD s nainstalovanymi hrami. Na Steamu na skolnim PC zkontrolujte a pripadne zapnete prislusne nastaveni pro snizeni zateze site.' },
  { question: 'Bude nejake jidlo?', answer: 'Ano, jidlo (veci na grilovani) a piti je v cene vstupneho. Na jidlo neni stanoven presny cas, jist se bude, kdy to vyjde.' },
  { question: 'Muze se moje rezervovane misto zmenit?', answer: 'Ano, muze se stat, ze vase misto bude zmeneno kvuli upravam (preskladani spoluzaku vedle sebe / do stejnych trid).' },
  { question: 'Na koho se obratit s problemy?', answer: 'Kontaktujte organizatory osobne nebo na skolnim Discordu. Problemy se systemem resi spravci: Stanislav Skudrna (@aldiix) a Serhii Yavorskyi (@_.yavorskiy.s._). Ucitele: Michaela Mudrochova (+420 777 131 303) a Michal Mudroch Bures (+420 777 116 567).' },
  { question: 'Mohu pouzivat skolni periferie?', answer: 'Skolni PC muzete pouzivat, ale neni dovoleno menit jejich zapojeni (odpojovat monitory), menit mysi a klavesnice ani zasahovat do ciziho vybaveni bez svoleni.' },
  { question: 'Plati nocni klid?', answer: 'V noci snizte hlasitost, abyste minimalizovali ruseni okolniho prostredi.' },
]

export default function FAQPage() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '80px', maxWidth: '800px' }}>
      <div className="page-header" style={{ paddingTop: 0, textAlign: 'left' }}>
        <span className="badge">FAQ</span>
        <h1 className="page-title" style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="icon-placeholder lg" aria-hidden="true" />
          Casto kladene otazky
        </h1>
        <p className="page-description" style={{ marginLeft: 0, textAlign: 'left' }}>
          Odpovedi na nejcastejsi otazky o LAN Party. Vsechny informace vychazeji z oficialniho info PDF.
        </p>
      </div>

      <Accordion>
        {faqItems.map((item, idx) => (
          <AccordionItem key={idx} title={item.question}>
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
