const namedGames = ["Tic-Tac-Toe", "Chess", "Werewolf", "Poker", "Kart Racing"]

export function GamesSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-5xl font-bold text-primary sm:text-6xl">36</span>
          <span className="text-lg font-medium text-muted-foreground">games in one room</span>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          The host switches between them instantly. A few of them:
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {namedGames.map((game) => (
            <li
              key={game}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
            >
              {game}
            </li>
          ))}
          <li className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            + 31 more
          </li>
        </ul>
      </div>
    </section>
  )
}
