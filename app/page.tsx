import { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { InfoBlocks } from "@/components/home/info-blocks"
import { HowItWorks } from "@/components/home/how-it-works"

export const metadata: Metadata = {
  title: "EDUCHEM LAN Party 2025",
  description: "Mikulášská LAN Party 2025 na SŠ EDUCHEM v Mostě. 5.–6. prosince, vstup 100 Kč.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoBlocks />
      <HowItWorks />
    </>
  )
}
