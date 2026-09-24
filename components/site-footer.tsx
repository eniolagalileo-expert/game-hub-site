import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
          Read the full story of Game Hub
        </h2>
        <p className="mt-3 text-muted-foreground">Everything about the project lives in the pitch deck.</p>
        <div className="mt-6">
          <Button asChild size="lg">
            <a href="https://gamma.app/docs/Game-Hub-g04iapyy3k5v36f" target="_blank" rel="noreferrer">
              Open the pitch deck
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Made by <span className="font-medium text-foreground">Eniola Olaleye</span>
        </p>
      </div>
    </footer>
  )
}
