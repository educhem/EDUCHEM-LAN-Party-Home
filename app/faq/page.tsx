import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Často kladené otázky k Mikulášské LAN Party 2025 na SŠ EDUCHEM.",
}

const faqItems = [
  {
    question: "Kolik stojí vstupné a jak zaplatit?",
    answer:
      "Vstupné je 100 Kč. Zaplaťte převodem na účet 2603033660/2010 se zprávou: JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL. Můžete také použít QR kód z info PDF. Termín platby: do 4.12. 20:00.",
  },
  {
    question: "Musím si rezervovat místo?",
    answer:
      "Pokud si neplánujete brát sebou PC, ani být na školním PC, nemusíte si místo rezervovat. Rezervace je jen pro ty, kteří chtějí mít jistotu místa u PC.",
  },
  {
    question: "Mohu přijít a odejít kdykoliv?",
    answer:
      "Ano, můžete přijít/odejít kdykoliv během akce. Odchod z budovy ale musíte nahlásit někomu z učitelů.",
  },
  {
    question: "Mohu si přinést vlastní PC/setup?",
    answer:
      "Ano, můžete si vzít vlastní setup. Musíte si ale vzít vlastní monitor a veškeré věci potřebné pro chod počítače + prodlužovák.",
  },
  {
    question: "Jak funguje stahování her?",
    answer:
      "Kvůli přetížení sítě doporučujeme mít vlastní externí HDD/SSD s nainstalovanými hrami. Na Steamu na školním PC zkontrolujte a popřípadě zapněte příslušné nastavení pro snížení zátěže sítě.",
  },
  {
    question: "Bude nějaké jídlo?",
    answer:
      "Ano, jídlo (věci na grilování) a pití je v ceně vstupného. Na jídlo není stanoven přesný čas, jíst se bude, kdy to vyjde.",
  },
  {
    question: "Může se moje rezervované místo změnit?",
    answer:
      "Ano, může se stát, že vaše místo bude změněno kvůli úpravám (přeskládání spolužáků vedle sebe / do stejných tříd).",
  },
  {
    question: "Na koho se obrátit s problémy?",
    answer:
      "Kontaktujte organizátory osobně nebo na školním Discordu. Problémy se systémem řeší správci: Stanislav Škudrna (@aldiix) a Serhii Yavorskyi (@_.yavorskiy.s._). Učitelé: Michaela Mudrochová (+420 777 131 303) a Michal Mudroch Bureš (+420 777 116 567).",
  },
  {
    question: "Mohu používat školní periferie?",
    answer:
      "Školní PC můžete používat, ale není dovoleno měnit jejich zapojení (odpojovat monitory), měnit myši a klávesnice ani zasahovat do cizího vybavení bez svolení.",
  },
  {
    question: "Platí noční klid?",
    answer:
      "V noci snižte hlasitost, abyste minimalizovali rušení okolního prostředí.",
  },
]

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
      <div className="mb-10">
        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
          {"FAQ"}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <HelpCircle className="size-8 text-primary" />
          {"Často kladené otázky"}
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {"Odpovědi na nejčastější otázky o LAN Party. Všechny informace vycházejí z oficiálního info PDF."}
        </p>
      </div>

      <Accordion type="single" collapsible className="rounded-lg border border-border/50 bg-card px-4">
        {faqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger className="text-foreground text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
