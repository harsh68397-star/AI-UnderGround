"use client";

import { useState } from "react";
import { Search, Zap, Rocket, Mail, ArrowRight, Check, Menu, X } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Underground
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-slate-300 hover:text-white">Home</a>
            <a href="/tools" className="text-sm text-slate-300 hover:text-white">Tools</a>
            <a href="/guides" className="text-sm text-slate-300 hover:text-white">Guides</a>
            <a href="/news" className="text-sm text-slate-300 hover:text-white">News</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-300">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-800 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Home</a>
              <a href="/tools" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Tools</a>
              <a href="/guides" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Guides</a>
              <a href="/news" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">News</a>
            </div>
          </div>
        )}
      </nav>

      <section className="flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:pt-40 sm:pb-32">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            Weekly &bull; No Fluff &bull; Edge-First
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Discover the AI Tools Nobody Talks About
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Weekly deep-dives into hidden features, prompt hacks, and emerging tech that gives you an edge.
          </p>

          {!submitted ? (
            <form
            action="https://formspree.io/f/xojgwwrl"
            method="POST"
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-12 w-full rounded-lg bg-slate-800/50 border border-slate-700 pl-10 pr-4 text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 font-medium text-white hover:from-purple-500 hover:to-blue-500"
            >
              Join 5,000+ Curious Minds
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          ) : (
            <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400">
              <Check className="h-5 w-5" />
              <span>Thanks for subscribing! Check your inbox.</span>
            </div>
          )}
          <p className="text-sm text-slate-500">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <section id="tools" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">What You Get</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-purple-500/50 transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 text-purple-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Overlooked Tools</h3>
              <p className="text-slate-400">Hidden gems and under-the-radar AI tools that deliver outsized results.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-blue-500/50 transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3 text-blue-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Maximize Output</h3>
              <p className="text-slate-400">Advanced prompting techniques and workflow automations to 10x your results.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-cyan-500/50 transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Future Tech</h3>
              <p className="text-slate-400">Early signals on what is next in AI. Be first to know about breakthroughs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
        &copy; 2026 AI Underground. Built for the curious.
      </footer>
    </main>
  );
}
