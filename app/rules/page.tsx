"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SearchFilter } from "@/components/search-filter"
import { TableOfContents } from "@/components/table-of-contents"
import { ShieldCheck, Monitor, Users, Utensils, Volume2, AlertTriangle, HardDrive } from "lucide-react"

const tocItems = [
  { id: "bezpecnost", label: "Bezpečnost a technika" },
  { id: "majetek", label: "Ochrana majetku" },
  { id: "chovani", label: "Komunikace a chování" },
  { id: "jidlo", label: "Jídlo a nápoje" },
  { id: "hry", label: "Stahování her" },
  { id: "zaverecne", label: "Závěrečné pokyny" },
]

interface RuleCategory {
  id: string
  icon: React.ElementType
  title: string
  rules: { title: string; content: string }[]
}

const categories: RuleCategory[] = [
  {
    id: "bezpecnost",
    icon: ShieldCheck,
    title: "Bezpečnost a technika",
    rules: [
      {
        title: "Bezpečnostní opatření",
        content:
          "Po celou dobu konání akce dodržujte bezpečnostní pokyny. Nepoužívejte elektroniku nebo jiné zařízení tak, aby to ohrozilo vás nebo ostatní.",
      },
      {
        title: "Odcházení z budovy",
        content:
          "Odcházení během akce z budovy školy je možné, ale učitel musí být informován.",
      },
      {
        title: "Školní PC",
        content:
          "Není dovoleno měnit zapojení školních PC (odpojovat monitory) či jiné periferie včetně myší a klávesnice.",
      },
      {
        title: "Cizí vybavení",
        content:
          "Prosíme, nezasahujte do cizího vybavení bez svolení majitele.",
      },
      {
        title: "Vlastní setup",
        content:
          "Účastníci akce mohou si s sebou vzít vlastní setup. Jsou si povinni s sebou vzít vlastní monitor a veškeré věci, které jsou potřeba pro chod počítače + prodlužovák.",
      },
    ],
  },
  {
    id: "majetek",
    icon: Monitor,
    title: "Opatření k ochraně majetku a prostředí",
    rules: [
      {
        title: "Respekt k majetku",
        content:
          "Nepoužívejte věci ostatních účastníků bez jejich souhlasu. Každý účastník nese odpovědnost za své osobní věci.",
      },
      {
        title: "Čistota a pořádek",
        content:
          "Udržujte prostor, kde se akce koná, v čistotě. Po sobě uklízejte a odstraňujte nepořádek. Předtím, než budete z akce odcházet, si po sobě ukliďte.",
      },
    ],
  },
  {
    id: "chovani",
    icon: Users,
    title: "Komunikace a chování",
    rules: [
      {
        title: "Respektujte ostatní účastníky",
        content:
          "Buďte ohleduplní a respektujte hranice a pohodlí ostatních. Neprovádějte žádné nevhodné nebo rušivé chování.",
      },
      {
        title: "Hlučnost a klidová doba",
        content:
          "V noci snižte hlasitost, abyste minimalizovali rušení okolního prostředí během nočního klidu.",
      },
    ],
  },
  {
    id: "jidlo",
    icon: Utensils,
    title: "Jídlo a nápoje",
    rules: [
      {
        title: "Pravidla stravování",
        content:
          "Dodržujte pravidla ohledně jídla a pití stanovená školou/pořadatelem. Jezte a pijte tak, abyste neohrozili majetek účastníků a školy.",
      },
      {
        title: "Čas jídla",
        content:
          "Na jídlo není stanoven přesný čas, jíst se bude daný čas, kdy to vyjde (jídlo: věci na grilování a pití v ceně).",
      },
    ],
  },
  {
    id: "hry",
    icon: HardDrive,
    title: "Jakým způsobem stahovat hry",
    rules: [
      {
        title: "Opatření pro stahování",
        content:
          "Kvůli přetížení sítě jsme museli udělat opatření pro stahování her. Pro snížení přetížení sítě si zkontrolujte a popřípadě zapněte příslušné nastavení na Steamu na školním počítači.",
      },
      {
        title: "Doporučení – vlastní disk",
        content:
          "Doporučujeme mít vlastní externí HDD/SSD, na kterém máte nainstalované hry, které si můžete přinést a poté vaše hry spustit nainstalované na něm.",
      },
    ],
  },
  {
    id: "zaverecne",
    icon: AlertTriangle,
    title: "Závěrečné pokyny",
    rules: [
      {
        title: "Pravomoc organizátorů",
        content:
          "Organizátoři mají právo řešit jakékoliv problémy nebo nesrovnalosti, aby zajistili plynulý průběh akce a pohodu všech účastníků.",
      },
    ],
  },
]

export default function RulesPage() {
  const [search, setSearch] = useState("")
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
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="mb-10">
        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
          {"Pravidla"}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">{"Pravidla akce"}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {"Pravidla platná pro všechny účastníky Mikulášské LAN Party 2025. Přečtěte si je prosím pozorně."}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-8">
          <SearchFilter value={search} onChange={setSearch} placeholder="Hledat v pravidlech..." />

          {/* Important callout */}
          <Alert className="border-primary/30 bg-primary/5">
            <ShieldCheck className="size-4 text-primary" />
            <AlertTitle className="text-foreground">{"Důležité"}</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              {"Dodržování pravidel je povinné pro všechny účastníky. Organizátoři mají právo řešit jakékoliv problémy pro zajištění plynulého průběhu akce."}
            </AlertDescription>
          </Alert>

          {filteredCategories.length === 0 ? (
            <p className="text-muted-foreground text-sm">{"Žádné výsledky pro zadaný hledaný výraz."}</p>
          ) : (
            filteredCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <section key={cat.id} id={cat.id}>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    {cat.title}
                  </h2>
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={`${cat.id}-0`}
                    className="rounded-lg border border-border/50 bg-card px-4"
                  >
                    {cat.rules.map((rule, idx) => (
                      <AccordionItem key={idx} value={`${cat.id}-${idx}`}>
                        <AccordionTrigger className="text-foreground">
                          {rule.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {rule.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
