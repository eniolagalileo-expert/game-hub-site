import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { WhyItMatters } from "@/components/why-it-matters"
import { GamesSection } from "@/components/games-section"
import { ProofSection } from "@/components/proof-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <HowItWorks />
      <WhyItMatters />
      <GamesSection />
      <ProofSection />
      <SiteFooter />
    </main>
  )
}
