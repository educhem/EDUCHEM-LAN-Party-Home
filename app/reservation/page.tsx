import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Banknote, Mail, Monitor, AlertTriangle, Info, QrCode, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Rezervace",
  description: "Jak probíhá rezervace místa na EDUCHEM LAN Party 2025. Krokový průvodce platbou a rezervací.",
}

const steps = [
  {
    icon: Banknote,
    title: "Zaplaťte vstupné 100 Kč",
    details: [
      "Číslo účtu: 2603033660/2010",
      "Částka: 100,00 CZK",
      "Zpráva pro příjemce: JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL",
      "Dodržujte prosím tento formát.",
      "Termín: do 4.12. 20:00",
      "Můžete zaplatit ručním zadáním, nebo pomocí QR kódu.",
    ],
  },
  {
    icon: Mail,
    title: "Obdržíte přístupové údaje",
    details: [
      "Jakmile zaplatíte, přijdou vám údaje na email, který jste uvedli ve zprávě platby.",
      "Tyto údaje použijete k přihlášení do LAN Party systému.",
    ],
  },
  {
    icon: Monitor,
    title: "Rezervujte si místo v systému",
    details: [
      "V systému na stránce /app/reservations si můžete rezervovat místo nebo počítač.",
      "Pokud si neplánujete brát sebou PC ani být na školním PC, nemusíte si místo rezervovat.",
    ],
  },
]

const faqItems = [
  {
    question: "Musím si rezervovat místo?",
    answer:
      "Pokud si neplánujete brát si sebou PC, ani být na školním PC, nemusíte si místo rezervovat.",
  },
  {
    question: "Může se moje místo změnit?",
    answer:
      "Ano, může se stát, že vaše místo bude změněno, protože kolikrát ještě proběhnou úpravy (někdo si rozmyslí, že chce sedět u svého kamaráda a pak se to musí přeskládat). Často se spolužáci dávají vedle sebe / do stejných tříd.",
  },
  {
    question: "Co když budu mít problém se systémem?",
    answer:
      "V případě jakéhokoli problému se systémem kontaktujte správce: Stanislav Škudrna (@aldiix) nebo Serhii Yavorskyi (@_.yavorskiy.s._).",
  },
  {
    question: "Mohu přijít a odejít kdykoliv?",
    answer:
      "Ano, můžete přijít/odejít kdykoliv během akce. Odchod z budovy ale musíte dát vědět někomu z učitelů.",
  },
  {
    question: "Do kdy musím zaplatit?",
    answer:
      "Vstupné 100 Kč je nutné zaplatit do 4.12. 20:00.",
  },
]

export default function ReservationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
      <div className="mb-10">
        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
          {"Rezervace"}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">{"Jak probíhá rezervace"}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {"Krokový průvodce procesem platby a rezervace místa na LAN Party."}
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="flex flex-col gap-6 mb-12">
        {steps.map((step, idx) => {
          const Icon = step.icon
          return (
            <Card key={idx} className="border-border/50 bg-card relative overflow-hidden">
              <CardContent className="flex gap-5 pt-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-lg font-bold text-primary font-mono">{idx + 1}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border/50 mt-3" />
                  )}
                </div>
                <div className="flex flex-col gap-3 pb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 text-primary/70" />
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary/40 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Warnings */}
      <div className="flex flex-col gap-4 mb-12">
        <Alert className="border-primary/30 bg-primary/5">
          <QrCode className="size-4 text-primary" />
          <AlertTitle className="text-foreground">{"Platba QR kódem"}</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            {"Vstupné můžete zaplatit pomocí QR kódu nebo ručním zadáním platebních údajů. QR kód najdete v originálním info PDF."}
          </AlertDescription>
        </Alert>

        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="size-4 text-destructive" />
          <AlertTitle className="text-foreground">{"Důležité upozornění"}</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            {"Ve zprávě pro příjemce dodržujte formát: JMÉNO PŘÍJMENÍ, TŘÍDA, EMAIL. Bez správného formátu nemusí být platba přiřazena."}
          </AlertDescription>
        </Alert>

        <Alert className="border-primary/30 bg-primary/5">
          <Users className="size-4 text-primary" />
          <AlertTitle className="text-foreground">{"Změna místa"}</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            {"Vaše místo může být změněno, pokud probíhají úpravy (přeskládání spolužáků do stejných tříd apod.). Sledujte aktuální stav v systému."}
          </AlertDescription>
        </Alert>
      </div>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Info className="size-5 text-primary" />
          {"Časté dotazy k rezervaci"}
        </h2>
        <Accordion type="single" collapsible className="rounded-lg border border-border/50 bg-card px-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-foreground">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
