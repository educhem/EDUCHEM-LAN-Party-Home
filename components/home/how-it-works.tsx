import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Zapla\u0165te vstup",
    description: "Po\u0161lete 100 K\u010d na \u00fa\u010det 2603033660/2010 se zpr\u00e1vou: JM\u00c9NO P\u0158\u00cdJMEN\u00cd, T\u0158\u00cdDA, EMAIL. Term\u00edn: do 4.12. 20:00.",
  },
  {
    number: "2",
    title: "Obdr\u017e\u00edte p\u0159\u00edstup",
    description: "Po zaplacen\u00ed v\u00e1m na zadan\u00fd email p\u0159ijdou p\u0159\u00edstupov\u00e9 \u00fadaje do LAN Party syst\u00e9mu.",
  },
  {
    number: "3",
    title: "Rezervujte m\u00edsto",
    description: "V syst\u00e9mu na str\u00e1nce /app/reservations si rezervujte po\u010d\u00edta\u010d nebo m\u00edsto pro vlastn\u00ed setup.",
  },
  {
    number: "4",
    title: "P\u0159ij\u010fte a hrajte",
    description: "M\u016f\u017eete p\u0159ij\u00edt/odej\u00edt kdykoliv b\u011bhem akce. Odchod z budovy ale nahlaste u\u010diteli.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Steps */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {"Jak to funguje"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            {"Jednoduch\u00fd postup ve 4 kroc\u00edch, jak se z\u00fa\u010dastnit LAN Party."}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <Card key={step.number} className="border-border/50 bg-card relative overflow-hidden">
                <CardContent className="flex flex-col gap-3 pt-6">
                  <span className="text-4xl font-bold text-primary/20 font-mono">{step.number}</span>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Side image */}
        <div className="lg:w-80 shrink-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border/50">
            <Image
              src="/images/gaming-setup.jpg"
              alt="Gaming setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
