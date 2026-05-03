import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DoorOpen, Flame, Gamepad2, Moon, Sun, LogOut } from "lucide-react"

export const metadata: Metadata = {
  title: "Harmonogram",
  description: "Orientační harmonogram Mikulášské LAN Party 2025 na SŠ EDUCHEM.",
}

const timelineItems = [
  {
    time: "Pátek 5.12. – 12:00",
    title: "Příchod a setup",
    description: "Otevření budovy, příchod účastníků, zapojení vlastních setupů a přihlášení ke školním PC.",
    icon: DoorOpen,
  },
  {
    time: "Pátek 5.12. – odpoledne",
    title: "Hraní a akce",
    description: "Volné hraní, turnaje a společné aktivity. Můžete přijít/odejít kdykoliv (nahlaste učiteli).",
    icon: Gamepad2,
  },
  {
    time: "Pátek 5.12. – večer",
    title: "Grilování",
    description: "Jídlo na grilování a pití v ceně vstupného. Přesný čas bude upřesněn na místě.",
    icon: Flame,
  },
  {
    time: "Pátek 5.12. – noc",
    title: "Noční hraní",
    description: "Pokračování v hraní přes noc. Snižte prosím hlasitost během nočního klidu.",
    icon: Moon,
  },
  {
    time: "Sobota 6.12. – ráno",
    title: "Pokračování",
    description: "Ranní hraní a poslední šance si zahrát s kamarády.",
    icon: Sun,
  },
  {
    time: "Sobota 6.12. – 14:00",
    title: "Konec akce",
    description: "Ukončení akce, odpojení setupů, úklid prostoru. Po sobě si ukliďte!",
    icon: LogOut,
  },
]

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
      <div className="mb-10">
        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
          {"Harmonogram"}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">{"Orientační harmonogram"}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {"Časový přehled průběhu akce. Přesné časy jsou orientační a mohou se měnit."}
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-8 bottom-8 w-px bg-border/50 hidden sm:block" />

        <div className="flex flex-col gap-4">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card key={idx} className="border-border/50 bg-card relative">
                <CardContent className="flex gap-5 pt-6">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <Clock className="size-3.5 text-primary/60" />
                      <span className="text-xs font-medium text-primary font-mono">{item.time}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
