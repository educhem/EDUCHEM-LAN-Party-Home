import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Clock, Banknote } from "lucide-react"

const infoItems = [
  {
    icon: CalendarDays,
    title: "Datum",
    description: "5.\u20136. prosince 2025",
  },
  {
    icon: MapPin,
    title: "M\u00edsto",
    description: "S\u0160 EDUCHEM, Eduarda Basse 1142, Most",
  },
  {
    icon: Clock,
    title: "\u010cas",
    description: "Od 5.12. 12:00 do 6.12. 14:00 (orienta\u010dn\u00ed)",
  },
  {
    icon: Banknote,
    title: "Vstupn\u00e9",
    description: "100 K\u010d \u2013 zaplatit do 4.12. 20:00",
  },
]

export function InfoBlocks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
        {"Z\u00e1kladn\u00ed informace"}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {infoItems.map((item) => (
          <Card key={item.title} className="border-border/50 bg-card">
            <CardContent className="flex flex-col items-center text-center gap-3 pt-6">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature image */}
      <div className="mt-12 overflow-hidden rounded-xl border border-border/50">
        <div className="relative aspect-[21/9]">
          <Image
            src="/images/lan-party.jpg"
            alt="LAN Party atmosf\u00e9ra"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm font-medium text-white drop-shadow-lg">
              {"P\u0159ij\u010fte si u\u017e\u00edt skv\u011blou atmosf\u00e9ru Mikul\u00e1\u0161sk\u00e9 LAN Party!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
