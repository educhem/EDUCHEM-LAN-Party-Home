'use client'

import { useState } from 'react'

const tocItems = [
  { id: 'ucitele', label: 'Ucitele' },
  { id: 'spravci', label: 'Spravci LAN Party systemu' },
  { id: 'grillmasteri', label: 'Grillmasteri' },
  { id: 'kontakt', label: 'Kontakt' },
  { id: 'stazeni', label: 'Stazeni PDF' },
]

interface Organizer {
  name: string
  role: string
  phone?: string
  instagram?: string
  category: 'teacher' | 'admin' | 'grillmaster'
}

const organizers: Organizer[] = [
  { name: 'Michaela Mudrochova', role: 'Ucitelka', phone: '+420 777 131 303', instagram: '@micha_cz', category: 'teacher' },
  { name: 'Michal Mudroch Bures', role: 'Ucitel', phone: '+420 777 116 567', instagram: '@deathwalker_cz', category: 'teacher' },
  { name: 'Sebastian Netolicky', role: 'Ucitel', instagram: '@internal_server_error.', category: 'teacher' },
  { name: 'David Chlad', role: 'Ucitel', instagram: '@ampercz1', category: 'teacher' },
  { name: 'Stanislav Skudrna', role: 'Spravce LAN Party systemu', instagram: '@aldiix', category: 'admin' },
  { name: 'Serhii Yavorskyi', role: 'Spravce LAN Party systemu', instagram: '@_.yavorskiy.s._', category: 'admin' },
  { name: 'Jakub Fryc', role: 'Grillmaster', instagram: '@f0xiar', category: 'grillmaster' },
]

function OrganizerCard({ org }: { org: Organizer }) {
  return (
    <div className="card organizer-card">
      <div className="image-placeholder organizer-avatar">Avatar</div>
      <h3 className="organizer-name">{org.name}</h3>
      <p className="organizer-role">{org.role}</p>
      {org.phone && (
        <a href={`tel:${org.phone.replace(/\s/g, '')}`} className="organizer-contact">
          <div className="icon-placeholder sm" aria-hidden="true" />
          {org.phone}
        </a>
      )}
      {org.instagram && (
        <p className="organizer-contact">
          <div className="icon-placeholder sm" aria-hidden="true" />
          {org.instagram}
        </p>
      )}
    </div>
  )
}

export default function InfoPage() {
  const [search, setSearch] = useState('')
  const query = search.toLowerCase()

  const teachers = organizers.filter((o) => o.category === 'teacher')
  const admins = organizers.filter((o) => o.category === 'admin')
  const grillmasters = organizers.filter((o) => o.category === 'grillmaster')

  const filterOrg = (list: Organizer[]) =>
    list.filter((o) => o.name.toLowerCase().includes(query) || o.role.toLowerCase().includes(query))

  const filteredTeachers = filterOrg(teachers)
  const filteredAdmins = filterOrg(admins)
  const filteredGrillmasters = filterOrg(grillmasters)

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '80px' }}>
      <div className="page-header" style={{ paddingTop: 0, textAlign: 'left' }}>
        <span className="badge">Informace</span>
        <h1 className="page-title" style={{ marginTop: '16px' }}>Kompletni informace o akci</h1>
        <p className="page-description" style={{ marginLeft: 0, textAlign: 'left' }}>
          Vsechny informace z info PDF prepsane do prehledne webove podoby. Organizatori, kontakty a dulezite udaje na jednom miste.
        </p>
      </div>

      <div className="two-col">
        <aside className="sticky-sidebar">
          <nav className="toc">
            <h2 className="toc-title">Obsah</h2>
            <ul className="toc-list">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="toc-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          <div className="search-wrapper" style={{ marginBottom: '40px' }}>
            <div className="icon-placeholder sm search-icon" aria-hidden="true" />
            <input
              type="text"
              className="input search-input"
              placeholder="Hledat organizatory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <section id="ucitele" style={{ marginBottom: '48px' }}>
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="icon-placeholder" aria-hidden="true" />
              Ucitele
            </h2>
            {filteredTeachers.length > 0 ? (
              <div className="grid grid-2">
                {filteredTeachers.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-color-darker)' }}>Zadne vysledky.</p>
            )}
          </section>

          <section id="spravci" style={{ marginBottom: '48px' }}>
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="icon-placeholder" aria-hidden="true" />
              Spravci LAN Party systemu
            </h2>
            {filteredAdmins.length > 0 ? (
              <div className="grid grid-2">
                {filteredAdmins.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-color-darker)' }}>Zadne vysledky.</p>
            )}
          </section>

          <section id="grillmasteri" style={{ marginBottom: '48px' }}>
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="icon-placeholder" aria-hidden="true" />
              Grillmasteri
            </h2>
            {filteredGrillmasters.length > 0 ? (
              <div className="grid grid-2">
                {filteredGrillmasters.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-color-darker)' }}>Zadne vysledky.</p>
            )}
            <p style={{ color: 'var(--text-color-darker)', marginTop: '12px' }}>+ Misa :)</p>
          </section>

          <section id="kontakt" style={{ marginBottom: '48px' }}>
            <h2 className="section-title">Kontakt</h2>
            <div className="card">
              <p style={{ color: 'var(--text-color-secondary)', marginBottom: '12px' }}>
                Pokud budete mit v prubehu akce nejaky problem (nebo budete mit hlad), nevahejte organizatory kontaktovat at osobne, tak na Discordu.
              </p>
              <p style={{ color: 'var(--text-color-secondary)' }}>
                Pokud mate nejake dotazy, napiste na skolni Discord, nebo primo organizatorum.
              </p>
            </div>
          </section>

          <section id="stazeni">
            <h2 className="section-title">Stazeni PDF</h2>
            <a href="/info.pdf" download className="btn btn-secondary">
              <div className="icon-placeholder sm" aria-hidden="true" />
              Stahnout originalni info.pdf
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
