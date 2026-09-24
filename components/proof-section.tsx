import { Bot, CheckCircle2, Server } from "lucide-react"

const facts = [
  {
    icon: Bot,
    title: "A bot for every game",
    body: "Every game ships with a computer bot, so you can play even when you're short a player.",
  },
  {
    icon: CheckCircle2,
    title: "331 tests passing",
    body: "The games are covered by automated tests — 331 of them passing.",
  },
  {
    icon: Server,
    title: "Plain Node.js, no dependencies",
    body: "The whole thing runs on plain Node.js with no external dependencies.",
  },
]

export function ProofSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Built to be solid and simple</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <fact.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{fact.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fact.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
