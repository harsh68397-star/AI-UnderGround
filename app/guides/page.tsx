"use client";

import { Clock, BookOpen, ChevronRight, Terminal, Layers, MessageSquare, Lightbulb } from "lucide-react";

const guides = [
  {
    slug: "cursor-hidden-commands",
    title: "The Cursor Hidden Commands Nobody Uses",
    excerpt: "Beyond Tab completion: how to use @-mentions, context folders, and agent mode to let Cursor write entire features while you watch.",
    readTime: "6 min read",
    category: "Dev Tools",
    icon: <Terminal className="h-5 w-5" />,
    color: "cyan",
  },
  {
    slug: "claude-artifacts",
    title: "Claude Artifacts: Build UI Without Leaving the Chat",
    excerpt: "Most people treat Claude like a search engine. The Artifact panel is actually a live React playground.",
    readTime: "8 min read",
    category: "Dev Tools",
    icon: <Layers className="h-5 w-5" />,
    color: "purple",
  },
  {
    slug: "prompt-chaining",
    title: "Prompt Engineering Is Dead. Long Live Prompt Chaining",
    excerpt: "Single prompts give average results. The pros chain 3-5 prompts in sequence. Here is the template.",
    readTime: "5 min read",
    category: "Technique",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "blue",
  },
  {
    slug: "kimi-research",
    title: "Kimi's 2M Token Window: The Research Superpower",
    excerpt: "Drop an entire book into Kimi and ask questions across the full document. We tested it against Claude and GPT-4.",
    readTime: "7 min read",
    category: "Research",
    icon: <BookOpen className="h-5 w-5" />,
    color: "green",
  },
  {
    slug: "elevenlabs-dubbing",
    title: "ElevenLabs Voice Changer: Dub Content in Real Time",
    excerpt: "Speak in English, output in Spanish with your cloned voice — live. Under 500ms latency.",
    readTime: "4 min read",
    category: "Creative",
    icon: <Lightbulb className="h-5 w-5" />,
    color: "orange",
  },
  {
    slug: "vibe-coding-stack",
    title: "The Vibe Coding Stack: Ship for $0",
    excerpt: "Cursor + Next.js + Vercel + Supabase + Formspree = a full product that scales to 1,000 users for free.",
    readTime: "10 min read",
    category: "Workflow",
    icon: <Terminal className="h-5 w-5" />,
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400" },
  green: { bg: "bg-green-500/10", text: "text-green-400" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400" },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Underground</a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-slate-300 hover:text-white">Home</a>
            <a href="/tools" className="text-sm text-slate-300 hover:text-white">Tools</a>
            <a href="/guides" className="text-sm font-medium text-white">Guides</a>
            <a href="/news" className="text-sm text-slate-300 hover:text-white">News</a>
          </div>
        </div>
      </nav>

      <section className="px-4 pt-32 pb-12 text-center sm:pt-40">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <BookOpen className="h-4 w-4" />
            Deep Dives &bull; Tested &bull; Actionable
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Guides</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Not tutorials. Battle-tested workflows, hidden features, and prompt chains that actually move the needle.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-4">
          {guides.map((guide) => {
            const c = colorMap[guide.color];
            return (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-600 hover:bg-slate-800/50 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
              >
                <div className={`flex-shrink-0 inline-flex rounded-xl ${c.bg} p-3 ${c.text}`}>
                  {guide.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-0.5 text-xs text-slate-400">{guide.category}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" />{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-purple-300 transition-colors sm:text-xl">{guide.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{guide.excerpt}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-purple-400 pt-1">
                    Read guide<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
        &copy; 2026 AI Underground. Built for the curious.
      </footer>
    </main>
  );
}