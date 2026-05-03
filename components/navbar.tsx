"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/info", label: "Info" },
  { href: "/reservation", label: "Rezervace" },
  { href: "/rules", label: "Pravidla" },
  { href: "/schedule", label: "Harmonogram" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl">
      <nav
        className={cn(
          "rounded-2xl border border-foreground/[0.06] px-4 py-2.5 lg:px-5",
          "bg-background/60 backdrop-blur-2xl backdrop-saturate-150",
          "shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_0_0_0.5px_rgba(255,255,255,0.06)]",
          "dark:bg-background/50 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_0_0_0.5px_rgba(255,255,255,0.04)]"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
            <Image src="/images/logo.svg" alt="" width={28} height={28} className="size-7" />
            <span className="hidden sm:inline">LAN Party</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-1 pl-1 border-l border-foreground/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-foreground hover:bg-foreground/5"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Zavrit menu" : "Otevrit menu"}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 pt-2 border-t border-foreground/[0.06] md:hidden">
            <div className="flex flex-col gap-0.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
