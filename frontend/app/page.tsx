import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  FileCode2,
  FolderGit2,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { GitPilotIcon } from "@/components/icons/gitpilot-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HeroShowcase } from "@/components/landing/hero-showcase";
import { TerminalSection } from "@/components/landing/terminal-section";
import { FaqSection } from "@/components/landing/faq-section";

import { getGithubLoginUrl } from "@/lib/api";

export default function HomePage() {
  const githubLoginUrl = getGithubLoginUrl();

  return (
    <div className="relative min-h-svh bg-[#08090a] text-zinc-100 selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(20,184,166,0.22),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 linear-grid linear-mask opacity-60" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative flex size-9 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 p-1 shadow-[0_0_15px_rgba(20,184,166,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-teal-500/60 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
              <GitPilotIcon className="size-full rounded-lg" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                GitPilot
              </span>
              <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-teal-300">
                v2.0
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a
              href="#features"
              className="hover:text-white transition-colors duration-200"
            >
              Capabilities
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors duration-200"
            >
              Workflow
            </a>
            <a
              href="#terminal"
              className="hover:text-white transition-colors duration-200"
            >
              Developer CLI
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
            >
              <GitHubIcon className="size-3.5" />
              <span>GitHub</span>
            </a>

            <ModeToggle />

            <Link
              href="/login"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Sign in
            </Link>

            <a
              href={githubLoginUrl}
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-teal-400 px-3.5 py-1.5 text-sm font-semibold text-zinc-950 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative pt-16 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center space-y-8">
            
            {/* Linear Announcement Pill */}
            <div className="inline-flex items-center">
              <a
                href="#features"
                className="group flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.15)] backdrop-blur-md transition-all duration-300 hover:border-teal-500/60 hover:bg-teal-500/20 hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-teal-400" />
                </span>
                <span>GitPilot 2.0 • Codebase RAG with AST precision</span>
                <ChevronRight className="size-3.5 text-teal-400 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* BIG HERO HEADING */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                Chat with your codebase.
                <span className="block bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300 bg-clip-text text-transparent mt-2">
                  Built for developer speed.
                </span>
              </h1>
              
              <p className="mx-auto max-w-3xl text-lg sm:text-xl text-zinc-400 text-balance leading-relaxed font-normal pt-2">
                Connect GitHub, index any repository with AST-aware semantic chunking, and ask anything
                with instant answers and clickable line-by-line citations.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={githubLoginUrl}
                className="group relative flex items-center gap-2.5 rounded-xl bg-teal-400 px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_0_35px_rgba(20,184,166,0.35)] hover:bg-teal-300 hover:shadow-[0_0_50px_rgba(45,212,191,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FolderGit2 className="size-5" />
                <span>Continue with GitHub</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <Link
                href="/login"
                className="group flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 text-base font-medium text-zinc-200 backdrop-blur-md hover:border-teal-500/40 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
              >
                <Sparkles className="size-4 text-teal-400 transition-transform duration-200 group-hover:rotate-12" />
                <span>See how it works</span>
              </Link>
            </div>

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-teal-400" />
                <span>100% AST-Aware</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-teal-400" />
                <span>pgvector HNSW</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-teal-400" />
                <span>Zero Code Retention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-teal-400" />
                <span>Sub-40ms Retrieval</span>
              </div>
            </div>

            {/* Interactive Hero Showcase Mockup */}
            <div className="pt-8 sm:pt-12">
              <HeroShowcase />
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.08] bg-[#0c0d14]/70 p-6 sm:grid-cols-4 sm:p-8 backdrop-blur-xl">
            {[
              { label: "Vector Search Latency", value: "< 35ms", note: "p99 HNSW cosine index" },
              { label: "AST Chunk Accuracy", value: "100%", note: "Language-specific parsers" },
              { label: "Supported Languages", value: "15+", note: "TS, Python, Go, Rust, Java..." },
              { label: "Code Retained on Disk", value: "0 MB", note: "Vectors & metadata only" },
            ].map((metric) => (
              <div key={metric.label} className="space-y-1 text-center sm:text-left">
                <div className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-teal-400">{metric.label}</div>
                <div className="text-[11px] text-zinc-500">{metric.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES / BENTO GRID */}
        <section id="features" className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              CAPABILITIES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Engineered for deep codebase comprehension.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Generic RAG models fail when code is split across random token limits. GitPilot was
              built specifically for software architecture.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            
            {/* Card 1: AST Chunking (Spans 2 cols) */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.12)] hover:-translate-y-1 md:col-span-2 linear-card-sheen">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    AST-Aware Semantic Chunking
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400 max-w-xl">
                    Instead of arbitrary 500-token text slices that cut functions in half, GitPilot
                    parses full Abstract Syntax Trees. Functions, classes, interfaces, and docstrings
                    are extracted as coherent semantic units.
                  </p>
                </div>

                {/* Visual Mini Element */}
                <div className="rounded-xl border border-white/[0.06] bg-[#07080c] p-3.5 font-mono text-xs text-zinc-400">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
                    <span className="text-teal-400">tree-sitter ast_parser.ts</span>
                    <span className="text-zinc-500">scope: ExportedFunction</span>
                  </div>
                  <div className="pt-2 text-zinc-300 space-y-1 text-[11px]">
                    <p><span className="text-teal-400 font-semibold">✓</span> FunctionDeclaration: <span className="text-amber-300">calculateVectorCosine()</span> preserved intact</p>
                    <p><span className="text-teal-400 font-semibold">✓</span> Attached JSDoc comments and parameter signatures intact</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Postgres + pgvector */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.12)] hover:-translate-y-1 linear-card-sheen">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <Database className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    PostgreSQL + pgvector
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    High-performance vector similarity search using HNSW indexes. Scalable to millions
                    of code embeddings with sub-second retrieval times.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-[#07080c] p-3 text-xs font-mono text-zinc-400">
                  <div className="text-[11px] text-teal-400">HNSW m=16, ef_search=64</div>
                  <div className="text-zinc-500 mt-1">Cosine distance: 0.9842</div>
                </div>
              </div>
            </div>

            {/* Card 3: Exact Citations */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.12)] hover:-translate-y-1 linear-card-sheen">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <FileCode2 className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Line-by-Line Citations
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Never trust a hallucinated answer. Every single assertion links to the exact
                    file path and line number range in your repository.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-teal-500/30 bg-teal-500/10 p-2.5 text-xs text-teal-300 font-mono">
                  <FileCode2 className="size-3.5" />
                  <span>api/auth.ts#L42-L68</span>
                </div>
              </div>
            </div>

            {/* Card 4: Enterprise Privacy */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.12)] hover:-translate-y-1 linear-card-sheen">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Zero Permanent Storage
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    We never store raw source code on persistent storage. Ingestion runs in
                    ephemeral memory, and your code is never used to train external LLMs.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#07080c] p-2.5 text-xs text-zinc-400 font-mono">
                  <Lock className="size-3.5 text-teal-400" />
                  <span>AES-256 encrypted tokens</span>
                </div>
              </div>
            </div>

            {/* Card 5: GitHub OAuth Sync (Spans 2 cols) */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-7 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6),0_0_25px_rgba(20,184,166,0.12)] hover:-translate-y-1 md:col-span-2 linear-card-sheen">
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <FolderGit2 className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    1-Click GitHub Repository Sync
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400 max-w-xl">
                    Log in with GitHub, pick any public or private repository, and watch GitPilot
                    index your branches in real time. Webhook triggers re-index modified files automatically
                    on every push.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-zinc-300">
                    Public & Private Repos
                  </span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-zinc-300">
                    Branch Switcher
                  </span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-teal-300 border-teal-500/30">
                    Automated Webhook Sync
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WORKFLOW / 3-STEP TIMELINE */}
        <section id="how-it-works" className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              WORKFLOW
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              From repository to intelligence in three steps.
            </h2>
            <p className="text-zinc-400 text-base">
              No complex setup or local models required. Start asking questions in under 30 seconds.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 relative">
            {[
              {
                step: "01",
                title: "Connect GitHub",
                desc: "Authorize with GitHub OAuth. Choose which repositories GitPilot should have read access to.",
                badge: "Scoped OAuth",
              },
              {
                step: "02",
                title: "AST & Vector Index",
                desc: "GitPilot analyzes syntax trees across all languages, creates vector embeddings, and populates pgvector.",
                badge: "HNSW Embeddings",
              },
              {
                step: "03",
                title: "Ask & Navigate",
                desc: "Chat with your codebase in real-time. Click source citations to jump right to relevant code.",
                badge: "Streaming RAG",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0d12]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-[#0f1118] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-teal-400/80 group-hover:text-teal-300 transition-colors">
                    {item.step}
                  </span>
                  <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 font-mono text-[10px] text-teal-300">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEVELOPER CLI & TERMINAL SECTION */}
        <section id="terminal" className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              DEVELOPER EXPERIENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Use GitPilot from the web, terminal, or API.
            </h2>
            <p className="text-zinc-400 text-base">
              Integrate codebase intelligence directly into your daily developer workflows and CI/CD pipelines.
            </p>
          </div>

          <TerminalSection />
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Everything you need to know.
            </h2>
          </div>

          <FaqSection />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-b from-[#0c1316] via-[#090b10] to-[#08090a] p-10 sm:p-16 text-center shadow-[0_0_60px_rgba(20,184,166,0.15)]">
            {/* Ambient inner flare */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-teal-500/20 blur-3xl" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ready to talk to your codebase?
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Connect your first repository in 30 seconds. Free for open source and personal projects.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href={githubLoginUrl}
                  className="group flex items-center gap-2.5 rounded-xl bg-teal-400 px-8 py-4 text-base font-semibold text-zinc-950 shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:bg-teal-300 hover:shadow-[0_0_45px_rgba(45,212,191,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <FolderGit2 className="size-5" />
                  <span>Start with GitHub</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/login"
                  className="rounded-xl border border-white/[0.1] bg-white/[0.04] px-6 py-4 text-base font-medium text-zinc-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050608] py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <GitPilotIcon className="size-6 rounded-md" />
            <span className="font-semibold text-zinc-300">GitPilot</span>
            <span>© {new Date().getFullYear()} GitPilot Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal-400" />
            </span>
            <span className="font-mono text-[11px] text-teal-300 font-medium">
              All systems operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
