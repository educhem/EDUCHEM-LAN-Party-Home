'use client'

import { useState, type ReactNode } from 'react'

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <div className={`icon-placeholder sm accordion-chevron${open ? ' open' : ''}`} aria-hidden="true" />
      </button>
      <div className={`accordion-content${open ? '' : ' hidden'}`}>
        {children}
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>
}
