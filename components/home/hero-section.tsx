import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        {/* Accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(255,179,3,0.08),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 lg:px-6 lg:py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10 backdrop-blur-sm">
            {"5.\u20136. prosince 2025"}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl text-balance">
            {"Mikul\u00e1\u0161sk\u00e1"}
            <span className="block text-primary drop-shadow-[0_0_30px_var(--primary)]">{"LAN Party"}</span>
          </h1>

          <p className="max-w-xl text-lg text-neutral-300 leading-relaxed text-pretty">
            {"S\u0160 EDUCHEM, Eduarda Basse 1142, 434 01 Most. P\u0159ij\u010f si zahr\u00e1t, grilovat a u\u017e\u00edt skv\u011blou atmosf\u00e9ru s kamar\u00e1dy!"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Button asChild size="lg" className="font-semibold text-primary-foreground">
              <Link href="/reservation">
                {"Jak rezervovat"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white">
              <Link href="/rules">
                <ShieldCheck className="size-4" />
                {"Pravidla"}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white">
              <Link href="/info">
                <BookOpen className="size-4" />
                {"Info"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
