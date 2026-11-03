"use client";

import { useState } from "react";
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  FileCode2,
  GitBranch,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";

type DemoQuery = {
  id: string;
  tabTitle: string;
  question: string;
  summary: string;
  codeSnippet: string;
  language: string;
  fileName: string;
  lineRange: string;
  confidence: string;
  latency: string;
  chunksCount: number;
};

const DEMO_QUERIES: DemoQuery[] = [
  {
    id: "ast-chunker",
    tabTitle: "AST Chunking Logic",
    question: "How does the AST parser preserve function and interface boundaries?",
    summary:
      "GitPilot inspects the TypeScript Abstract Syntax Tree via tree-sitter. Instead of slicing tokens arbitrarily at 500 characters, it extracts full top-level and nested FunctionDeclarations, attaching parent class context and exported type signatures.",
    fileName: "src/indexer/ast_chunker.ts",
    lineRange: "48-73",
    language: "typescript",
    confidence: "99.4%",
    latency: "34ms",
    chunksCount: 3,
    codeSnippet: `export async function extractAstChunks(source: SourceFile): Promise<CodeChunk[]> {
  const visitor = new SemanticChunkVisitor({
    minLines: 8,
    preserveDocstrings: true,
    includeEnclosingScope: true,
  });

  // Extract whole function and class boundaries intact
  const nodes = visitor.traverse(source.rootNode);
  return nodes.map(node => ({
    id: generateContentHash(node.text),
    filePath: source.path,
    startLine: node.startPosition.row + 1,
    endLine: node.endPosition.row + 1,
    symbolName: node.identifier?.name,
    metadata: { astType: node.type, exports: node.isExported }
  }));
}`,
  },
  {
    id: "pgvector-query",
    tabTitle: "pgvector Search",
    question: "Show me the exact cosine similarity query executed against PostgreSQL.",
    summary:
      "Vector embeddings (1536-dim) are queried using pgvector's HNSW index with cosine distance operator (`<=>`). Results are filtered by repository ID and reranked using lexical BM25 hybrid fusion.",
    fileName: "backend/rag/repository_search.py",
    lineRange: "84-106",
    language: "python",
    confidence: "98.8%",
    latency: "28ms",
    chunksCount: 5,
    codeSnippet: `async def search_repository_vectors(
    db: AsyncSession,
    repo_id: str,
    query_embedding: list[float],
    limit: int = 5
) -> list[RetrievedChunk]:
    # HNSW index search using pgvector cosine distance operator (<=>)
    query = text("""
        SELECT id, file_path, start_line, end_line, content,
               1 - (embedding <=> :query_vec) AS similarity
        FROM code_chunks
        WHERE repository_id = :repo_id
        ORDER BY embedding <=> :query_vec
        LIMIT :limit
    """)
    result = await db.execute(query, {
        "repo_id": repo_id,
        "query_vec": str(query_embedding),
        "limit": limit
    })
    return [RetrievedChunk.from_row(row) for row in result.fetchall()]`,
  },
  {
    id: "oauth-security",
    tabTitle: "GitHub OAuth Scope",
    question: "Where are scoped GitHub OAuth tokens exchanged and encrypted?",
    summary:
      "OAuth tokens are requested strictly with minimal repository read permissions (`repo:read`). Tokens are encrypted at rest using AES-256-GCM and never shared with LLM providers.",
    fileName: "backend/auth/github_oauth.py",
    lineRange: "32-54",
    language: "python",
    confidence: "99.1%",
    latency: "41ms",
    chunksCount: 2,
    codeSnippet: `async def exchange_and_encrypt_token(code: str) -> SecureUserSession:
    # Exchange GitHub OAuth code for user access token
    token_resp = await http_client.post("https://github.com/login/oauth/access_token", {
        "client_id": settings.GITHUB_CLIENT_ID,
        "client_secret": settings.GITHUB_CLIENT_SECRET,
        "code": code,
    })
    
    # Encrypt access token at rest using AES-GCM
    encrypted_secret = vault.encrypt(
        token_resp["access_token"],
        aad=f"user:{user_id}".encode()
    )
    return await session_store.save(user_id=user_id, encrypted_token=encrypted_secret)`,
  },
];

export function HeroShowcase() {
  const [selectedId, setSelectedId] = useState<string>("ast-chunker");
  const [copied, setCopied] = useState<boolean>(false);

  const activeQuery =
    DEMO_QUERIES.find((q) => q.id === selectedId) || DEMO_QUERIES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Ambient background glow behind mockup */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-500/20 via-teal-400/10 to-emerald-500/15 blur-2xl opacity-70" />

      {/* Main Mockup Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0d12]/95 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(20,184,166,0.12)] backdrop-blur-2xl transition-all duration-300 hover:border-teal-500/40">
        
        {/* Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#08090d]/90 px-4 py-3 gap-3">
          {/* Traffic lights & Repo Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-rose-500/80 ring-1 ring-rose-500/20" />
              <span className="size-3 rounded-full bg-amber-500/80 ring-1 ring-amber-500/20" />
              <span className="size-3 rounded-full bg-emerald-500/80 ring-1 ring-emerald-500/20" />
            </div>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300">
              <GitHubIcon className="size-3.5 text-zinc-400" />
              <span className="font-semibold text-white">gitpilot</span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-300">core-indexer</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400">
              <GitBranch className="size-3 text-teal-400" />
              <span className="font-mono text-[11px] text-zinc-300">main</span>
            </div>
          </div>

          {/* Index Status & Specs */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-teal-300">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-teal-400" />
              </span>
              <span className="font-mono text-[11px] font-medium">1,842 chunks indexed</span>
            </div>

            <div className="hidden md:flex items-center gap-1 text-[11px] font-mono text-zinc-500">
              <span>pgvector</span>
              <span>•</span>
              <span className="text-teal-400/80">HNSW (m=16)</span>
            </div>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0a0b10] px-4 py-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] uppercase tracking-wider font-mono text-zinc-500 mr-2 flex items-center gap-1 shrink-0">
            <Sparkles className="size-3 text-teal-400" />
            Live Query:
          </span>
          {DEMO_QUERIES.map((q) => {
            const isActive = q.id === selectedId;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedId(q.id)}
                className={`group flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-[0_0_12px_rgba(20,184,166,0.2)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                <Code2
                  className={`size-3.5 transition-colors ${
                    isActive ? "text-teal-400" : "text-zinc-500 group-hover:text-zinc-400"
                  }`}
                />
                <span>{q.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Content Viewport */}
        <div className="p-4 sm:p-6 space-y-5">
          {/* User Question */}
          <div className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold">
              YOU
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-100 max-w-2xl shadow-xs">
              {activeQuery.question}
            </div>
          </div>

          {/* AI Response Bubble */}
          <div className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-zinc-950 text-xs font-bold shadow-[0_0_15px_rgba(20,184,166,0.4)]">
              AI
            </div>
            <div className="flex-1 space-y-4">
              <div className="text-sm leading-relaxed text-zinc-300">
                {activeQuery.summary}
              </div>

              {/* Code Citation Box */}
              <div className="group/code relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#07080b] shadow-inner transition-colors duration-200 hover:border-teal-500/40">
                {/* File Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="size-3.5 text-teal-400" />
                    <span className="font-mono text-zinc-200 font-medium">
                      {activeQuery.fileName}
                    </span>
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                      lines {activeQuery.lineRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 rounded bg-teal-500/10 px-2 py-0.5 font-mono text-[10px] text-teal-300 border border-teal-500/20">
                      <Zap className="size-2.5" />
                      {activeQuery.confidence} match
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 rounded px-2 py-1 text-[11px] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                      title="Copy snippet"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3 text-teal-400" />
                          <span className="text-teal-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Content */}
                <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-300 selection:bg-teal-500/30">
                  <pre className="text-[12px] leading-5">
                    <code>{activeQuery.codeSnippet}</code>
                  </pre>
                </div>

                {/* Citation Jump Link Pill */}
                <div className="flex items-center justify-between border-t border-white/[0.04] bg-white/[0.015] px-3.5 py-2 text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Layers className="size-3.5 text-teal-400" />
                    <span className="text-[11px]">
                      Grounded in AST Chunk #{activeQuery.lineRange.replace("-", "_")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 transition-colors cursor-pointer group/link">
                    <span>Inspect full file in context</span>
                    <ExternalLink className="size-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Retrieval Stats Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1 text-teal-400">
                  <Zap className="size-3" />
                  {activeQuery.latency} vector lookup
                </span>
                <span>•</span>
                <span>{activeQuery.chunksCount} context chunks merged</span>
                <span>•</span>
                <span className="hidden sm:inline">AST integrity verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
