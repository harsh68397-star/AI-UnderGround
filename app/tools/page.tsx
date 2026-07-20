"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Brain,
  Code,
  Wand2,
  FileText,
  Mic,
  Presentation,
  Search,
  Filter,
} from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
  overlooked: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const tools: Tool[] = [
  {
    name: "Kimi",
    category: "Productivity",
    description:
      "Long-context AI assistant that handles massive documents and codebases with ease.",
    overlooked:
      "Most people compare it to ChatGPT, but its 2M token context window and file handling crush research tasks that break other models.",
    link: "https://kimi.moonshot.cn",
    icon: <Brain className="h-6 w-6" />,
    color: "purple",
  },
  {
    name: "Perplexity Spaces",
    category: "Research",
    description:
      "Collaborative AI research environments where you can organize sources, threads, and insights.",
    overlooked:
      "Everyone uses the search bar. Almost nobody creates a Space to build a persistent knowledge base with shared sources.",
    link: "https://perplexity.ai",
    icon: <Search className="h-6 w-6" />,
    color: "blue",
  },
  {
    name: "Claude Artifacts",
    category: "Dev",
    description:
      "Side-panel code preview and editing inside Claude. Build React components, SVGs, and games live.",
    overlooked:
      "People chat with Claude but never click the artifact window. It is a full prototyping environment, not just a code block.",
    link: "https://claude.ai",
    icon: <Code className="h-6 w-6" />,
    color: "cyan",
  },
  {
    name: "ElevenLabs Voice Changer",
    category: "Creative",
    description:
      "Real-time voice conversion and cloning. Turn your voice into any character or style instantly.",
    overlooked:
      "The TTS gets the hype, but the Voice Changer lets you dub content, anonymize calls, and prototype characters without recording gear.",
    link: "https://elevenlabs.io",
    icon: <Mic className="h-6 w-6" />,
    color: "pink",
  },
  {
    name: "Gamma",
    category: "Productivity",
    description:
      "AI-powered presentations, documents, and websites that actually look designed by a human.",
    overlooked:
      "It is not just slide generation. The nested cards, live embeds, and analytics turn a deck into a mini-website.",
    link: "https://gamma.app",
    icon: <Presentation className="h-6 w-6" />,
    color: "orange",
  },
  {
    name: "Otter Meeting GenAI",
    category: "Productivity",
    description:
      "Auto-joins meetings, takes notes, captures slides, and writes follow-up emails for you.",
    overlooked:
      "People think it is just transcription. The GenAI agent actually attends the call and drafts action items before you open your laptop.",
    link: "https://otter.ai",
    icon: <FileText className="h-6 w-6" />,
    color: "green",
  },
];

const categories = ["All", "Productivity", "Research", "Dev", "Creative"];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/50", glow: "hover:shadow-purple-500/10" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/50", glow: "hover:shadow-blue-500/10" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/50", glow: "hover:shadow-cyan-500/10" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/50", glow: "hover:shadow-pink-500/10" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/50", glow: "hover:shadow-orange-500/10" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/50", glow: "hover:shadow-green-500/10" },
};

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Underground
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-slate-300 hover:text-white">Home</a>
            <a href="/tools" className="text-sm font-medium text-white">Tools</a>
            <a href="/guides" className="text-sm text-slate-300 hover:text-white">Guides</a>
            <a href="/news" className="text-sm text-slate-300 hover:text-white">News</a>
          </div>
        </div>
      </nav>


      {/* Header */}
      <section className="px-4 pt-32 pb-12 text-center sm:pt-40">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <Sparkles className="h-4 w-4" />
            Curated &bull; Tested &bull; Under-the-Radar
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Tool Directory
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            AI tools that deliver outsized results but fly under the mainstream radar. Updated weekly.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-8">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <Filter className="mr-2 h-4 w-4 text-slate-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Tool Grid */}
      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => {
            const c = colorMap[tool.color];
            return (
              <div
                key={tool.name}
                className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:${c.border} hover:bg-slate-800/50 hover:shadow-xl ${c.glow} sm:p-8`}
              >
                {/* Category badge */}
                <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-950 px-2.5 py-0.5 text-xs text-slate-400">
                  {tool.category}
                </span>

                {/* Icon */}
                <div className={`mb-4 inline-flex rounded-lg ${c.bg} p-3 ${c.text}`}>
                  {tool.icon}
                </div>

                {/* Name */}
                <h3 className="mb-2 text-xl font-semibold">{tool.name}</h3>

                {/* Description */}
                <p className="mb-4 text-sm text-slate-400">{tool.description}</p>

                {/* Why overlooked */}
                <div className="mb-6 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                    Why It Is Overlooked
                  </p>
                  <p className="text-sm text-slate-300">{tool.overlooked}</p>
                </div>

                {/* Link */}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-purple-500 hover:to-blue-500"
                >
                  Try It
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500">No tools in this category yet.</p>
        )}
      </section>

      {/* Back to home */}
      <section className="border-t border-slate-800 px-4 py-12 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
        &copy; 2026 AI Underground. Built for the curious.
      </footer>
    </main>
  );
}
