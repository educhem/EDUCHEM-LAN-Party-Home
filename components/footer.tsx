import Link from "next/link"
import { Gamepad2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { href: "/info", label: "Info" },
  { href: "/reservation", label: "Rezervace" },
  { href: "/rules", label: "Pravidla" },
  { href: "/schedule", label: "Harmonogram" },
  { href: "/faq", label: "FAQ" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-sm">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
              <Gamepad2 className="size-6" />
              EDUCHEM LAN Party
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Mikulášská LAN Party 2025 na SŠ EDUCHEM v Mostě. Přijď si zahrát, pobavit se a užít skvělou atmosféru!"}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Navigace</span>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Download */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{"Ke stažení"}</span>
            <Button asChild variant="outline" size="sm">
              <a href="/info.pdf" download>
                <Download className="size-4" />
                {"Stáhnout info.pdf"}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          {"EDUCHEM LAN Party 2025 \u2014 SŠ EDUCHEM, Eduarda Basse 1142, 434 01 Most"}
        </div>
      </div>
    </footer>
  )
}
