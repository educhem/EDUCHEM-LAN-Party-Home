"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilter } from "@/components/search-filter"
import { TableOfContents } from "@/components/table-of-contents"
import { Phone, GraduationCap, Server, Flame, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const tocItems = [
  { id: "ucitele", label: "Učitelé" },
  { id: "spravci", label: "Správci LAN Party systému" },
  { id: "grillmasteri", label: "Grillmasteři" },
  { id: "kontakt", label: "Kontakt" },
  { id: "stazeni", label: "Stažení PDF" },
]

interface Organizer {
  name: string
  role: string
  phone?: string
  instagram?: string
  roleIcon: React.ElementType
}

const organizers: Organizer[] = [
  {
    name: "Michaela Mudrochová",
    role: "Učitelka",
    phone: "+420 777 131 303",
    instagram: "@micha_cz",
    roleIcon: GraduationCap,
  },
  {
    name: "Michal Mudroch Bureš",
    role: "Učitel",
    phone: "+420 777 116 567",
    instagram: "@deathwalker_cz",
    roleIcon: GraduationCap,
  },
  {
    name: "Sebastian Netolický",
    role: "Učitel",
    instagram: "@internal_server_error.",
    roleIcon: GraduationCap,
  },
  {
    name: "David Chlad",
    role: "Učitel",
    instagram: "@ampercz1",
    roleIcon: GraduationCap,
  },
  {
    name: "Stanislav Škudrna",
    role: "Správce LAN Party systému",
    instagram: "@aldiix",
    roleIcon: Server,
  },
  {
    name: "Serhii Yavorskyi",
    role: "Správce LAN Party systému",
    instagram: "@_.yavorskiy.s._",
    roleIcon: Server,
  },
  {
    name: "Jakub Fryč",
    role: "Grillmaster",
    instagram: "@f0xiar",
    roleIcon: Flame,
  },
]

function OrganizerCard({ org }: { org: Organizer }) {
  const Icon = org.roleIcon
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="size-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">{org.name}</CardTitle>
            <CardDescription>{org.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {org.phone && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="size-4 text-primary/70" />
            <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
              {org.phone}
            </a>
          </div>
        )}
        {org.instagram && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{org.instagram}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function InfoPage() {
  const [search, setSearch] = useState("")
  const query = search.toLowerCase()

  const teachers = organizers.filter((o) => o.role.includes("Učitel"))
  const admins = organizers.filter((o) => o.role.includes("Správce"))
  const grillmasters = organizers.filter((o) => o.role.includes("Grillmaster"))

  const filteredTeachers = teachers.filter(
    (o) => o.name.toLowerCase().includes(query) || o.role.toLowerCase().includes(query)
  )
  const filteredAdmins = admins.filter(
    (o) => o.name.toLowerCase().includes(query) || o.role.toLowerCase().includes(query)
  )
  const filteredGrillmasters = grillmasters.filter(
    (o) => o.name.toLowerCase().includes(query) || o.role.toLowerCase().includes(query)
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="mb-10">
        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
          {"Informace"}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">{"Kompletní informace o akci"}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {"Veškeré informace z info PDF přepsané do přehledné webové podoby. Organizátoři, kontakty a důležité údaje na jednom místě."}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-10">
          <SearchFilter value={search} onChange={setSearch} placeholder="Hledat organizátory..." />

          {/* Teachers */}
          <section id="ucitele">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              {"Učitelé"}
            </h2>
            {filteredTeachers.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredTeachers.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{"Žádné výsledky."}</p>
            )}
          </section>

          {/* System admins */}
          <section id="spravci">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Server className="size-5 text-primary" />
              {"Správci LAN Party systému"}
            </h2>
            {filteredAdmins.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredAdmins.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{"Žádné výsledky."}</p>
            )}
          </section>

          {/* Grillmasters */}
          <section id="grillmasteri">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Flame className="size-5 text-primary" />
              {"Grillmasteři"}
            </h2>
            {filteredGrillmasters.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredGrillmasters.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{"Žádné výsledky."}</p>
            )}
            <p className="text-sm text-muted-foreground mt-3">{"+ Míša :)"}</p>
          </section>

          {/* Contact info */}
          <section id="kontakt">
            <h2 className="text-xl font-bold text-foreground mb-4">{"Kontakt"}</h2>
            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {"Pokud budete mít v průběhu akce nějaký problém (nebo budete mít hlad), neváhejte organizátory kontaktovat ať osobně, tak na Discordu."}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {"Pokud máte nějaké dotazy, napište na školní Discord, nebo přímo organizátorům."}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* PDF download */}
          <section id="stazeni">
            <h2 className="text-xl font-bold text-foreground mb-4">{"Stažení PDF"}</h2>
            <Button asChild variant="outline" size="lg">
              <a href="/info.pdf" download>
                <Download className="size-4" />
                {"Stáhnout originální info.pdf"}
              </a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
