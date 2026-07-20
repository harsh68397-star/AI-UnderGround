import { Rocket, Search, Zap } from "lucide-react";

const features = [
  {
    title: "Overlooked Tools",
    description:
      "Uncover niche AI apps and workflows before they hit the mainstream—curated for builders who look past the hype.",
    icon: Search,
  },
  {
    title: "Maximize Output",
    description:
      "Prompt patterns, hidden settings, and power-user tricks that squeeze more quality from the tools you already use.",
    icon: Zap,
  },
  {
    title: "Future Tech",
    description:
      "Early signals on models, agents, and interfaces reshaping how work gets done—so you can adapt ahead of the curve.",
    icon: Rocket,
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#030303] text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,255,0.35),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
            AI
          </span>
          <span className="text-lg font-semibold tracking-tight">
            AI Underground
          </span>
        </div>
        <p className="hidden text-sm text-zinc-400 sm:block">
          Newsletter &amp; discovery
        </p>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-4 sm:px-10 sm:pt-12">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-200">
            Weekly · No fluff · Edge-first
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Discover the AI Tools{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nobody Talks About
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Weekly deep-dives into hidden features, prompt hacks, and emerging
            tech that gives you an edge.
          </p>

          <form
            className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch"
            action="#"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="min-h-14 flex-1 rounded-xl border border-zinc-700/80 bg-zinc-900/80 px-5 text-base text-zinc-100 placeholder:text-zinc-500 shadow-inner transition-all duration-300 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
            />
            <button
              type="submit"
              className="min-h-14 shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 hover:shadow-violet-500/40 active:translate-y-0 sm:px-8"
            >
              Join 5,000+ Curious Minds
            </button>
          </form>
          <p className="mt-4 text-sm text-zinc-500">
            Free forever. Unsubscribe anytime.
          </p>
        </section>

        <section className="mt-24 sm:mt-32">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
            What you get
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-violet-900/20"
              >
                <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 p-3 text-violet-300 ring-1 ring-violet-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-200">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-zinc-50">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} AI Underground. Built for the curious.
      </footer>
    </div>
  );
}
