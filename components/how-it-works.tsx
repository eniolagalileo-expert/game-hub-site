import { Smartphone, KeyRound, Gamepad2 } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    title: "Open the site",
    body: "Everyone opens Game Hub in a phone browser. Nothing to download, nothing to sign up for.",
  },
  {
    icon: KeyRound,
    title: "Join with a 4-letter code",
    body: "One room, one code. Friends type it in and they're instantly playing together.",
  },
  {
    icon: Gamepad2,
    title: "Host picks the game",
    body: "The host switches between 36 games on the fly — the whole group follows along.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <step.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
