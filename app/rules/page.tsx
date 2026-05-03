'use client'

import { useState } from 'react'
import { Accordion, AccordionItem } from '@/components/accordion'
import shell from '../page-shell.module.scss'

interface RuleCategory {
  id: string
  title: string
  rules: { title: string; content: string }[]
}

const categories: RuleCategory[] = [
  {
    id: 'bezpecnost',
    title: 'Bezpečnost a technika',
    rules: [
      { title: 'Bezpečnostní opatření', content: 'Po celou dobu konání akce dodržujte bezpečnostní pokyny. Nepoužívejte elektroniku nebo jiná zařízení tak, aby to ohrozilo vás nebo ostatní.' },
      { title: 'Odcházení z budovy', content: 'Odcházení během akce z budovy školy je možné, ale učitel musí být informován.' },
      { title: 'Školní PC', content: 'Není dovoleno měnit zapojení školních PC (odpojovat monitory) či jiné periferie včetně myší a klávesnic.' },
      { title: 'Cizí vybavení', content: 'Prosíme, nezasahujte do cizího vybavení bez svolení majitele.' },
      { title: 'Vlastní setup', content: 'Účastníci akce si mohou s sebou vzít vlastní setup. Jsou povinni vzít si s sebou vlastní monitor a všechny věci potřebné pro chod počítače + prodlužovák.' },
    ],
  },
  {
    id: 'majetek',
    title: 'Ochrana majetku a prostředí',
    rules: [
      { title: 'Respekt k majetku', content: 'Nepoužívejte věci ostatních účastníků bez jejich souhlasu. Každý účastník nese odpovědnost za své osobní věci.' },
      { title: 'Čistota a pořádek', content: 'Udržujte prostor, kde se akce koná, v čistotě. Po sobě uklízejte a odstraňujte nepořádek. Předtím, než budete odcházet, si po sobě ukliďte.' },
    ],
  },
  {
    id: 'chovani',
    title: 'Komunikace a chování',
    rules: [
      { title: 'Respektujte ostatní účastníky', content: 'Buďte ohleduplní a respektujte hranice a pohodlí ostatních. Neprovádějte žádné nevhodné nebo rušivé chování.' },
      { title: 'Hlučnost a klidová doba', content: 'V noci snižte hlasitost, abyste minimalizovali rušení okolního prostředí během nočního klidu.' },
    ],
  },
  {
    id: 'jidlo',
    title: 'Jídlo a nápoje',
    rules: [
      { title: 'Pravidla stravování', content: 'Dodržujte pravidla ohledně jídla a pití stanovená školou/pořadatelem. Jezte a pijte tak, abyste neohrozili majetek účastníků a školy.' },
      { title: 'Čas jídla', content: 'Na jídlo není stanoven přesný čas, jíst se bude v daný čas, kdy to vyjde (jídlo: věci na grilování a pití v ceně).' },
    ],
  },
  {
    id: 'hry',
    title: 'Stahování her',
    rules: [
      { title: 'Opatření pro stahování', content: 'Kvůli přetížení sítě jsme museli udělat opatření pro stahování her. Pro snížení přetížení sítě si zkontrolujte a případně zapněte příslušné nastavení na Steamu na školním počítači.' },
      { title: 'Doporučení - vlastní disk', content: 'Doporučujeme mít vlastní externí HDD/SSD, na kterém máte nainstalované hry, které si můžete přinést a poté je spustit přímo z něj.' },
    ],
  },
  {
    id: 'zaverecne',
    title: 'Závěrečné pokyny',
    rules: [
      { title: 'Pravomoc organizátorů', content: 'Organizátoři mají právo řešit jakékoli problémy nebo nesrovnalosti, aby zajistili plynulý průběh akce a pohodu všech účastníků.' },
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
    <div className={shell.page}>
      <div className={shell.pageHeader}>
        <span className={shell.eyebrow}>Pravidla</span>
        <h1 className={shell.title}>Pravidla akce</h1>
        <p className={shell.description}>
          Pravidla platná pro všechny účastníky Mikulášské LAN Party 2025. Přečtěte si je prosím pozorně.
        </p>
      </div>

      <div className={shell.twoCol}>
        <aside className={shell.stickySidebar}>
          <nav className={shell.toc}>
            <h2 className={shell.tocTitle}>Kategorie</h2>
            <ul className={shell.tocList}>
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={shell.tocLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          <div className={shell.search}>
            <span className={shell.searchIcon} aria-hidden="true" />
            <input
              type="text"
              className={shell.input}
              placeholder="Hledat v pravidlech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={`${shell.alert} ${shell.leadAlert}`}>
            <div className={shell.alertIcon} aria-hidden="true">!</div>
            <div>
              <p className={shell.alertTitle}>Důležité</p>
              <p className={shell.alertDescription}>
                Dodržování pravidel je povinné pro všechny účastníky. Organizátoři mají právo řešit jakékoli problémy pro zajištění plynulého průběhu akce.
              </p>
            </div>
          </div>

          {filteredCategories.length === 0 ? (
            <p className={shell.empty}>Žádné výsledky pro zadaný hledaný výraz.</p>
          ) : (
            filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className={shell.section}>
                <h2 className={shell.sectionTitle}>
                  <span className={shell.sectionMark} aria-hidden="true" />
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
