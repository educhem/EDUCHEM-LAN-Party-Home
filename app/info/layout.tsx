import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Info",
  description: "Kompletní informace o Mikulášské LAN Party 2025. Organizátoři, kontakty a důležité údaje.",
}

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return children
}
