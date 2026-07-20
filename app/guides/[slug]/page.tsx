"use client";

import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { useParams } from "next/navigation";

const articles: Record<string, {
  title: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  "cursor-hidden-commands": {
    title: "The Cursor Hidden Commands Nobody Uses",
    category: "Dev Tools",
    readTime: "6 min read",
    content: [
      "Most developers treat Cursor like a fancy autocomplete. They hit Tab, accept suggestions, and move on. That is like buying a Ferrari and only driving it to the grocery store.",
      "Here is what the pros actually do.",
      "1. @-mentions for context control. Type @ followed by any file name, and Cursor pulls that entire file into the conversation context. This means you can ask it to refactor code across multiple files without manually copy-pasting anything.",
      "2. Agent mode (Cmd+I on Mac, Ctrl+I on Windows). This opens a side panel where Cursor acts as an autonomous agent. You describe a feature, and it plans the implementation, creates files, writes code, and runs terminal commands — all while showing you exactly what it is doing.",
      "3. Context folders. Drag an entire folder into the chat, and Cursor indexes every file. Ask it to find security vulnerabilities, refactor patterns, or generate documentation across the whole codebase.",
      "The exact prompt chain we used to build this site: First, we described the brand and audience. Then we asked for a dark-themed landing page with Tailwind. Then we refined the navbar, added mobile responsiveness, and finally built the tools directory. Each step was one conversation thread.",
    ],
  },
  "claude-artifacts": {
    title: "Claude Artifacts: Build UI Without Leaving the Chat",
    category: "Dev Tools",
    readTime: "8 min read",
    content: [
      "Claude's Artifact panel is not a preview window. It is a live execution environment.",
      "When Claude generates a React component, an SVG, or even a small game, the Artifact panel renders it in real-time. You can edit the code directly in the panel, and Claude sees your changes immediately.",
      "Here is the workflow: Ask Claude to build a landing page hero section. It generates the code. The Artifact panel shows it live. You say 'make the button bigger' — Claude updates the code, the preview refreshes instantly.",
      "For non-coders, this is revolutionary. You can prototype entire interfaces, test color schemes, and iterate on layout without ever opening a code editor.",
      "The hidden trick: use the 'fork' button in the Artifact panel. It creates a copy of the current artifact so you can experiment without losing your original version.",
    ],
  },
  "prompt-chaining": {
    title: "Prompt Engineering Is Dead. Long Live Prompt Chaining",
    category: "Technique",
    readTime: "5 min read",
    content: [
      "Single prompts give single-quality results. The real magic happens when you chain 3-5 prompts in sequence.",
      "Here is the template that doubles output quality on any model:",
      "Prompt 1 — Context: 'You are an expert [role] with 10 years of experience in [field]. Here is the background: [paste context].'",
      "Prompt 2 — Draft: 'Based on the above, write a [deliverable]. Do not worry about perfection — just get the ideas down.'",
      "Prompt 3 — Critique: 'Review the draft above. List 3 strengths and 3 weaknesses. Be brutally honest.'",
      "Prompt 4 — Refine: 'Rewrite the draft addressing the weaknesses identified. Keep the strengths.'",
      "Prompt 5 — Polish: 'Final pass: improve flow, tighten language, and add a compelling opening and closing.'",
      "This works because AI models are stateless. Each prompt is a fresh start. Chaining gives you iterative improvement without the model getting stuck in its first draft.",
    ],
  },
  "kimi-research": {
    title: "Kimi's 2M Token Window: The Research Superpower",
    category: "Research",
    readTime: "7 min read",
    content: [
      "Context window is the most underrated spec in AI. It determines how much information the model can hold in its 'working memory' at once.",
      "Kimi offers a 2 million token context window. For reference: that is approximately 1.5 million words, or about 3,000 pages of text.",
      "What this means in practice: you can drop an entire book, a full codebase, or a 500-page legal contract into Kimi and ask questions that reference any part of it.",
      "We tested Kimi against Claude 3.5 Sonnet and GPT-4o on a 400-page technical manual. The task: find contradictions between Chapter 3 and Chapter 12, then summarize the implications.",
      "Kimi found 7 contradictions. Claude found 4. GPT-4o found 3. More importantly, Kimi cited exact page numbers and quoted the conflicting passages verbatim.",
      "The catch: longer context means slower response times. For documents under 50 pages, Claude is faster. For anything over 200 pages, Kimi is the only viable option.",
    ],
  },
  "elevenlabs-dubbing": {
    title: "ElevenLabs Voice Changer: Dub Content in Real Time",
    category: "Creative",
    readTime: "4 min read",
    content: [
      "Everyone knows ElevenLabs for text-to-speech. The feature that will change content creation is Voice Changer.",
      "Here is how it works: you speak into a microphone in English. ElevenLabs converts your voice into a cloned voice speaking Japanese, Spanish, or Hindi — in real-time, with under 500ms latency.",
      "Use cases: dub your YouTube videos for global audiences without hiring voice actors. Anonymize podcast interviews while keeping emotional nuance. Create multilingual customer support bots that sound like your brand.",
      "The quality is scary good. We tested it with a non-native Spanish speaker. The output sounded like a fluent native speaker with the same vocal energy and pacing as the original.",
      "Pricing: free tier gives 10 minutes of voice changing per month. The Creator tier at $22/month gives 100 minutes, which is enough for a weekly 20-minute video.",
    ],
  },
  "vibe-coding-stack": {
    title: "The Vibe Coding Stack: Ship for $0",
    category: "Workflow",
    readTime: "10 min read",
    content: [
      "You do not need money to build a real product. You need the right free tools stacked together.",
      "The stack we used to build AI Underground:",
      "1. Cursor (free tier, 2,000 completions/month) — AI-powered code editor. When you hit the limit, switch to Claude.ai in browser and copy-paste.",
      "2. Next.js 14 + App Router — one codebase for frontend and backend API routes. Massive community, instant deployment.",
      "3. Tailwind CSS — utility-first styling. No writing custom CSS. Just describe what you want: 'flex, gap-4, rounded-lg, bg-slate-900'.",
      "4. Vercel Hobby — free hosting with custom domains, SSL, and auto-deploy from GitHub. Handles 100GB bandwidth before you pay.",
      "5. Supabase free tier — PostgreSQL database + auth + storage. 500MB is enough for your first 1,000 users.",
      "6. Formspree — free form backend. Collect emails without writing a single line of backend code.",
      "Total cost: $0. Time to first deploy: under 2 hours. Scales to: 1,000 users before you need to upgrade anything.",
    ],
  },
};

export default function GuideArticle() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Guide not found</h1>
            <a href="/guides" className="mt-4 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
              <ArrowLeft className="h-4 w-4" />
              Back to Guides
            </a>
          </div>
        </div>
      </main>
    );
  }

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
            <a href="/tools" className="text-sm text-slate-300 hover:text-white">Tools</a>
            <a href="/guides" className="text-sm font-medium text-white">Guides</a>
            <a href="/news" className="text-sm text-slate-300 hover:text-white">News</a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <a href="/guides" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </a>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-400">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
            <p className="text-sm text-slate-400">
              Want more guides like this? Subscribe to the newsletter and get one deep-dive every week.
            </p>
            <a href="/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:from-purple-500 hover:to-blue-500">
              <BookOpen className="h-4 w-4" />
              Subscribe
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
        &copy; 2026 AI Underground. Built for the curious.
      </footer>
    </main>
  );
}

