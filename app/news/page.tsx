"use client";

import { Clock, Newspaper, ExternalLink, TrendingUp, Flame } from "lucide-react";

interface NewsItem {
  headline: string;
  summary: string;
  tag: string;
  source: string;
  sourceUrl: string;
  timeAgo: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  color: string;
}

const news: NewsItem[] = [
  {
    headline: "Baseten Secures $1.5 Billion in Series F Funding for AI Inference",
    summary:
      "Baseten raised $1.5B across two tranches at $13B and $11B valuations. The platform now processes 1 billion inference calls daily across 87 clusters. CEO Tuhin Srivastava says post-trained open source models are becoming existential for companies building specialized AI.",
    tag: "Funding",
    source: "Yahoo Finance",
    sourceUrl: "https://finance.yahoo.com/technology/ai/articles/baseten-secures-1-5bn-series-110931159.html",
    timeAgo: "2 days ago",
    isBreaking: true,
    color: "purple",
  },
  {
    headline: "ElevenLabs Hits $500M ARR, Adds BlackRock, Nvidia, and Jamie Foxx as Investors",
    summary:
      "Voice AI company ElevenLabs revealed new investors in its Series D including BlackRock, Wellington, Nvidia, Salesforce Ventures, and celebrities Jamie Foxx and Eva Longoria. The company surpassed $500M in annual recurring revenue after ending 2025 with $350M.",
    tag: "Funding",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/05/05/elevenlabs-lists-blackrock-jamie-foxx-and-eva-longoria-as-new-investors/",
    timeAgo: "3 days ago",
    isFeatured: true,
    color: "cyan",
  },
  {
    headline: "ElevenLabs Raises $500M from Sequoia at $11 Billion Valuation",
    summary:
      "The voice AI startup is now valued at $11 billion, more than triple its valuation from January 2025. Existing investor a16z quadrupled its investment, and Iconiq tripled its stake. The company closed the year at $330 million ARR and plans expansion into India, Japan, and Brazil.",
    tag: "Funding",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/02/04/elevenlabs-raises-500m-from-sequioia-at-a-11-billion-valuation/",
    timeAgo: "5 months ago",
    color: "blue",
  },
  {
    headline: "xAI Leads 2026 Mega-Deals with $20 Billion Series E Round",
    summary:
      "Elon Musk's xAI opened the year with a $20 billion Series E, bringing total funding to $42.7 billion. The round was led by Valor Equity Partners, Fidelity, and Qatar Investment Authority. xAI has effectively merged interests with SpaceX ahead of an anticipated mid-2026 IPO.",
    tag: "Funding",
    source: "Crunchbase News",
    sourceUrl: "https://news.crunchbase.com/venture/biggest-funding-rounds-xai-parabilis-medicines-soley-therapeutics/",
    timeAgo: "6 months ago",
    color: "orange",
  },
  {
    headline: "Anthropic Closes $30B Series G at $380 Billion Valuation",
    summary:
      "The AI safety company raised $30 billion in February 2026, bringing its post-money valuation to $380 billion. Investors included GIC, Coatue, Founders Fund, and Nvidia. The company reported $14 billion in annualized revenue, the fastest revenue ramp of any enterprise software company.",
    tag: "Funding",
    source: "Anthropic / Business Times",
    sourceUrl: "https://en.wikipedia.org/wiki/Anthropic",
    timeAgo: "5 months ago",
    color: "green",
  },
  {
    headline: "Baseten: The $13 Billion AI Startup Betting on Cheaper Alternatives to OpenAI",
    summary:
      "Wall Street Journal exclusive on Baseten's dual-tiered fundraising structure and its bet that inference — not training — will eat the AI industry. The company specializes in software and computing for low-cost AI models as open-source alternatives converge with frontier performance.",
    tag: "Analysis",
    source: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com/tech/ai/the-13-billion-ai-startup-betting-on-cheaper-alternatives-to-openai-anthropic-b9679603",
    timeAgo: "1 week ago",
    color: "pink",
  },
  {
    headline: "ElevenLabs Crosses $500M ARR, Welcomes New Investors",
    summary:
      "ElevenLabs' official announcement confirming $500M ARR after ending 2025 with $350M. New investors include Deutsche Telekom's T.Capital, Santander, KPN, and Squid Game creator Hwang Dong-hyuk. The company also closed a $100 million tender offer for employees.",
    tag: "Official",
    source: "ElevenLabs Blog",
    sourceUrl: "https://elevenlabs.io/blog/500m-arr-and-new-investors",
    timeAgo: "3 days ago",
    color: "purple",
  },
  {
    headline: "Voice AI Startup ElevenLabs Raises $500 Million",
    summary:
      "WSJ's original reporting on ElevenLabs' Series D led by Sequoia Capital at $11 billion valuation. The company evolved from a Hollywood pariah — after lawsuits from voice actors and 4chan impersonation controversies — into a creative partner for studios and enterprises.",
    tag: "Funding",
    source: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com/tech/ai/voice-ai-startup-elevenlabs-raises-500-million-568c0c60",
    timeAgo: "5 months ago",
    color: "cyan",
  },
];

const colorMap: Record<string, { border: string; badge: string }> = {
  purple: { border: "border-l-purple-500", badge: "bg-purple-500/10 text-purple-400" },
  cyan: { border: "border-l-cyan-500", badge: "bg-cyan-500/10 text-cyan-400" },
  blue: { border: "border-l-blue-500", badge: "bg-blue-500/10 text-blue-400" },
  orange: { border: "border-l-orange-500", badge: "bg-orange-500/10 text-orange-400" },
  pink: { border: "border-l-pink-500", badge: "bg-pink-500/10 text-pink-400" },
  green: { border: "border-l-green-500", badge: "bg-green-500/10 text-green-400" },
};

export default function NewsPage() {
  const featured = news.find((n) => n.isFeatured);
  const rest = news.filter((n) => n !== featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Underground
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-slate-300 hover:text-white">Home</a>
            <a href="/tools" className="text-sm text-slate-300 hover:text-white">Tools</a>
            <a href="/guides" className="text-sm text-slate-300 hover:text-white">Guides</a>
            <a href="/news" className="text-sm font-medium text-white">News</a>
          </div>
        </div>
      </nav>

      <section className="px-4 pt-32 pb-8 text-center sm:pt-40">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
            <Newspaper className="h-4 w-4" />
            Curated &bull; Source-Linked &bull; Signal Over Noise
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">AI News</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Real stories from verified sources. Every headline links to the original article.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl space-y-6">
          {featured && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8">
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-medium text-white">
                  <TrendingUp className="h-3 w-3" />
                  Featured
                </span>
              </div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-slate-600 bg-slate-950 px-3 py-1 text-xs text-slate-300">{featured.tag}</span>
                <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" />{featured.timeAgo}</span>
                <span className="text-xs text-slate-500">via {featured.source}</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">{featured.headline}</h2>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{featured.summary}</p>
              <a
                href={featured.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-950/50 px-4 py-2 text-sm text-slate-300 transition-all hover:border-purple-500 hover:text-white"
              >
                Read original
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}

          {rest.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <div
                key={i}
                className={`relative rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-slate-600 hover:bg-slate-800/50 sm:p-6 ${c.border} border-l-4`}
              >
                {item.isBreaking && (
                  <div className="absolute -top-3 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400 ring-1 ring-red-500/30">
                      <Flame className="h-3 w-3" />
                      Breaking
                    </span>
                  </div>
                )}
                <div className={`${item.isBreaking ? "mt-2" : ""} flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`}>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge}`}>{item.tag}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" />{item.timeAgo}</span>
                      <span className="text-xs text-slate-500">via {item.source}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.headline}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{item.summary}</p>
                  </div>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-400 transition-all hover:border-slate-500 hover:text-white sm:mt-0"
                  >
                    Source
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
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
