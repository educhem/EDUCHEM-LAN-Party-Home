"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchFilterProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchFilter({ value, onChange, placeholder = "Hledat..." }: SearchFilterProps) {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
      />
    </div>
  )
}
