'use client'

import { useState } from 'react'
import { Accordion, AccordionItem } from '@/components/accordion'

interface RuleCategory {
  id: string
  title: string
  rules: { title: string; content: string }[]
}

const categories: RuleCategory[] = [
  {
    id: 'bezpecnost',
    title: 'Bezpecnost a technika',
    rules: [
      { title: 'Bezpecnostni opatreni', content: 'Po celou dobu konani akce dodrzujte bezpecnostni pokyny. Nepouzivejte elektroniku nebo jine zarizeni tak, aby to ohrozilo vas nebo ostatni.' },
      { title: 'Odchazeni z budovy', content: 'Odchazeni behem akce z budovy skoly je mozne, ale ucitel musi byt informovan.' },
      { title: 'Skolni PC', content: 'Neni dovoleno menit zapojeni skolnich PC (odpojovat monitory) ci jine periferie vcetne mysi a klavesnice.' },
      { title: 'Cizi vybaveni', content: 'Prosime, nezasahujte do ciziho vybaveni bez svoleni majitele.' },
      { title: 'Vlastni setup', content: 'Ucastnici akce mohou si s sebou vzit vlastni setup. Jsou si povinni vzit s sebou vlastni monitor a vsechny veci potrebne pro chod pocitace + prodluzovak.' },
    ],
  },
  {
    id: 'majetek',
    title: 'Ochrana majetku a prostredi',
    rules: [
      { title: 'Respekt k majetku', content: 'Nepouzivejte veci ostatnich ucastniku bez jejich souhlasu. Kazdy ucastnik nese odpovednost za sve osobni veci.' },
      { title: 'Cistota a poradek', content: 'Udrzujte prostor, kde se akce kona, v cistote. Po sobe uklizejte a odstranujte neporadek. Predtim, nez budete odchazet, si po sobe uklidte.' },
    ],
  },
  {
    id: 'chovani',
    title: 'Komunikace a chovani',
    rules: [
      { title: 'Respektujte ostatni ucastniky', content: 'Budte ohleduplni a respektujte hranice a pohodli ostatnich. Neprovadejte zadne nevhodne nebo rusive chovani.' },
      { title: 'Hlucnost a klidova doba', content: 'V noci snizte hlasitost, abyste minimalizovali ruseni okolniho prostredi behem nocniho klidu.' },
    ],
  },
  {
    id: 'jidlo',
    title: 'Jidlo a napoje',
    rules: [
      { title: 'Pravidla stravovani', content: 'Dodrzujte pravidla ohledne jidla a piti stanovena skolou/poradatelem. Jezte a pijte tak, abyste neohrozili majetek ucastniku a skoly.' },
      { title: 'Cas jidla', content: 'Na jidlo neni stanoven presny cas, jist se bude dany cas, kdy to vyjde (jidlo: veci na grilovani a piti v cene).' },
    ],
  },
  {
    id: 'hry',
    title: 'Stahovani her',
    rules: [
      { title: 'Opatreni pro stahovani', content: 'Kvuli pretizeni site jsme museli udelat opatreni pro stahovani her. Pro snizeni pretizeni site si zkontrolujte a pripadne zapnete prislusne nastaveni na Steamu na skolnim pocitaci.' },
      { title: 'Doporuceni - vlastni disk', content: 'Doporucujeme mit vlastni externi HDD/SSD, na kterem mate nainstalovane hry, ktere si muzete prinest a pote vase hry spustit nainstalovane na nem.' },
    ],
  },
  {
    id: 'zaverecne',
    title: 'Zaverecne pokyny',
    rules: [
      { title: 'Pravomoc organizatoru', content: 'Organizatori maji pravo resit jakekoli problemy nebo nesrovnalosti, aby zajistili plynuly prubeh akce a pohodu vsech ucastniku.' },
    ],
  },
]

const tocItems = categories.map((cat) => ({ id: cat.id, label: cat.title }))

export default function RulesPage() {
  const [search, setSearch] = useState('')
  const query = search.toLowerCase()

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      rules: cat.rules.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.content.toLowerCase().includes(query) ||
          cat.title.toLowerCase().includes(query)
      ),
    }))
    .filter((cat) => cat.rules.length > 0)

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '80px' }}>
      <div className="page-header" style={{ paddingTop: 0, textAlign: 'left' }}>
        <span className="badge">Pravidla</span>
        <h1 className="page-title" style={{ marginTop: '16px' }}>Pravidla akce</h1>
        <p className="page-description" style={{ marginLeft: 0, textAlign: 'left' }}>
          Pravidla platna pro vsechny ucastniky Mikulasske LAN Party 2025. Prectete si je prosim pozorne.
        </p>
      </div>

      <div className="two-col">
        <aside className="sticky-sidebar">
          <nav className="toc">
            <h2 className="toc-title">Kategorie</h2>
            <ul className="toc-list">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="toc-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          <div className="search-wrapper" style={{ marginBottom: '40px' }}>
            <div className="icon-placeholder sm search-icon" aria-hidden="true" />
            <input
              type="text"
              className="input search-input"
              placeholder="Hledat v pravidlech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="alert alert-warning" style={{ marginBottom: '32px' }}>
            <div className="icon-placeholder" aria-hidden="true" />
            <div>
              <p className="alert-title">Dulezite</p>
              <p className="alert-description">
                Dodrzovani pravidel je povinne pro vsechny ucastniky. Organizatori maji pravo resit jakekoli problemy pro zajisteni plynuleho prubehu akce.
              </p>
            </div>
          </div>

          {filteredCategories.length === 0 ? (
            <p style={{ color: 'var(--text-color-darker)' }}>Zadne vysledky pro zadany hledany vyraz.</p>
          ) : (
            filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} style={{ marginBottom: '32px' }}>
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="icon-placeholder" aria-hidden="true" />
                  {cat.title}
                </h2>
                <Accordion>
                  {cat.rules.map((rule, idx) => (
                    <AccordionItem key={idx} title={rule.title} defaultOpen={idx === 0}>
                      <p>{rule.content}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
