import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-accent),transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
          Free · No logins · No installs
        </span>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Play multiplayer games with friends, straight from your phone
        </h1>

        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Game Hub is a free website where everyone joins one room with a 4-letter code. The host switches between 36
          games — from Tic-Tac-Toe and Chess to Werewolf, Poker and Kart Racing.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="https://gamma.app/docs/Game-Hub-g04iapyy3k5v36f" target="_blank" rel="noreferrer">
              View the pitch deck
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">One code. Everyone&apos;s in.</span>
        </div>

        <div className="mt-14 w-full max-w-sm">
          <RoomCodeCard />
        </div>
      </div>
    </section>
  )
}

function RoomCodeCard() {
  const code = ["P", "L", "A", "Y"]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Join the room</p>
      <div className="mt-4 flex justify-center gap-2 sm:gap-3">
        {code.map((letter, i) => (
          <div
            key={i}
            className="flex size-14 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground sm:size-16 sm:text-3xl"
          >
            {letter}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Enter one 4-letter code to join — no account required.</p>
    </div>
  )
}
