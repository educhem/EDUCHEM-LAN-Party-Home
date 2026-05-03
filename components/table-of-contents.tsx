"use client"

import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  items: { id: string; label: string }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="rounded-lg border border-border/50 bg-card p-4" aria-label="Obsah stranky">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Obsah</h3>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm text-muted-foreground hover:text-primary transition-colors rounded px-2 py-1 hover:bg-secondary/50"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
