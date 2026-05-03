'use client'

import { useState } from 'react'
import shell from '../page-shell.module.scss'
import styles from './info.module.scss'

const tocItems = [
  { id: 'ucitele', label: 'Učitelé' },
  { id: 'spravci', label: 'Správci LAN Party systému' },
  { id: 'grillmasteri', label: 'Grillmasteři' },
  { id: 'kontakt', label: 'Kontakt' },
  { id: 'stazeni', label: 'Stažení PDF' },
]

interface Organizer {
  name: string
  role: string
  phone?: string
  instagram?: string
  category: 'teacher' | 'admin' | 'grillmaster'
}

const organizers: Organizer[] = [
  { name: 'Michaela Mudrochová', role: 'Učitelka', phone: '+420 777 131 303', instagram: '@micha_cz', category: 'teacher' },
  { name: 'Michal Mudroch Bureš', role: 'Učitel', phone: '+420 777 116 567', instagram: '@deathwalker_cz', category: 'teacher' },
  { name: 'Sebastian Netolický', role: 'Učitel', instagram: '@internal_server_error.', category: 'teacher' },
  { name: 'David Chlad', role: 'Učitel', instagram: '@ampercz1', category: 'teacher' },
  { name: 'Karel Honsig', role: 'Učitel', phone: '+420 724 478 552', instagram: '@karelhonsig', category: 'teacher' },
  { name: 'Stanislav Škudrna', role: 'Správce LAN Party systému', instagram: '@aldiix', category: 'admin' },
  { name: 'Serhii Yavorskyi', role: 'Správce LAN Party systému', instagram: '@_.yavorskiy.s._', category: 'admin' },
]

function OrganizerCard({ org }: { org: Organizer }) {
  const initials = org.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className={`${shell.card} ${styles.organizerCard}`}>
      <div className={styles.avatar} aria-hidden="true">{initials}</div>
      <h3 className={styles.name}>{org.name}</h3>
      <p className={styles.role}>{org.role}</p>
      {org.phone && (
        <a href={`tel:${org.phone.replace(/\s/g, '')}`} className={styles.contact}>
          <span className={styles.contactMark} aria-hidden="true" />
          {org.phone}
        </a>
      )}
      {org.instagram && (
        <p className={styles.contact}>
          <span className={styles.contactMark} aria-hidden="true" />
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
    <div className={shell.page}>
      <div className={shell.pageHeader}>
        <span className={shell.eyebrow}>Informace</span>
        <h1 className={shell.title}>Summer LAN party - 2026</h1>
        <p className={shell.description}>
          SŠ EDUCHEM, Eduarda Basse 1142, 434 01 Most. Akce probíhá od 5.6. 12:00 do 6.6. 14:00 a časy jsou orientační.
        </p>
      </div>

      <div className={shell.twoCol}>
        <aside className={shell.stickySidebar}>
          <nav className={shell.toc}>
            <h2 className={shell.tocTitle}>Obsah</h2>
            <ul className={shell.tocList}>
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={shell.tocLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          <div className={shell.search}>
            <span className={shell.searchIcon} aria-hidden="true" />
            <input
              type="text"
              className={shell.input}
              placeholder="Hledat organizátory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <section id="ucitele" className={shell.section}>
            <h2 className={shell.sectionTitle}>
              <span className={shell.sectionMark} aria-hidden="true" />
              Učitelé
            </h2>
            {filteredTeachers.length > 0 ? (
              <div className={shell.grid2}>
                {filteredTeachers.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className={shell.empty}>Žádné výsledky.</p>
            )}
          </section>

          <section id="spravci" className={shell.section}>
            <h2 className={shell.sectionTitle}>
              <span className={shell.sectionMark} aria-hidden="true" />
              Správci LAN Party systému
            </h2>
            {filteredAdmins.length > 0 ? (
              <div className={shell.grid2}>
                {filteredAdmins.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className={shell.empty}>Žádné výsledky.</p>
            )}
          </section>

          <section id="grillmasteri" className={shell.section}>
            <h2 className={shell.sectionTitle}>
              <span className={shell.sectionMark} aria-hidden="true" />
              Grillmasteři
            </h2>
            {filteredGrillmasters.length > 0 ? (
              <div className={shell.grid2}>
                {filteredGrillmasters.map((org) => (
                  <OrganizerCard key={org.name} org={org} />
                ))}
              </div>
            ) : (
              <p className={shell.empty}>Grillmasteři budou k dispozici u grilu během akce.</p>
            )}
          </section>

          <section id="kontakt" className={shell.section}>
            <h2 className={shell.sectionTitle}><span className={shell.sectionMark} aria-hidden="true" />Kontakt</h2>
            <div className={`${shell.card} ${shell.copyCard}`}>
              <p>
                Pokud budete mít v průběhu akce nějaký problém (nebo budete mít hlad), neváhejte organizátory kontaktovat ať osobně, tak na Discordu.
              </p>
              <p>
                Pokud máte nějaké dotazy, napište na školní Discord, nebo přímo organizátorům.
              </p>
            </div>
          </section>

          <section id="stazeni">
            <h2 className={shell.sectionTitle}><span className={shell.sectionMark} aria-hidden="true" />Stažení PDF</h2>
            <a href="/info.pdf" download className={`${shell.button} ${shell.secondaryButton}`}>
              Stáhnout originální info.pdf
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
