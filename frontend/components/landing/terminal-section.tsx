"use client";

import { useState } from "react";
import { Check, Copy, Terminal as TerminalIcon } from "lucide-react";

type Snippet = {
  id: string;
  name: string;
  language: string;
  code: string;
};

const SNIPPETS: Snippet[] = [
  {
    id: "cli",
    name: "CLI Ingestion",
    language: "bash",
    code: `# 1. Index any GitHub repository via CLI
npx gitpilot index owner/repository --branch main

# 2. Query code semantics directly from your terminal
npx gitpilot query "Where is the authentication session cookie parsed?"

# Output:
✔ Cloned repository in-memory [0.8s]
✔ Parsed 4,210 AST nodes (TypeScript, Go, Rust)
✔ Vectorized into pgvector HNSW index [0.35s]
➜ Found in: src/middleware/auth_session.ts:44-67 (confidence: 99.1%)`,
  },
  {
    id: "api",
    name: "REST API",
    language: "bash",
    code: `# Query your indexed codebase with retrieval-augmented generation
curl -X POST "https://api.gitpilot.dev/v1/chat/completions" \\
  -H "Authorization: Bearer gp_live_382fa08d9" \\
  -H "Content-Type: application/json" \\
  -d '{
    "repository": "owner/repository",
    "query": "How is the WebSocket reconnection backoff implemented?",
    "stream": true,
    "citations": true
  }'`,
  },
  {
    id: "sdk",
    name: "Python SDK",
    language: "python",
    code: `from gitpilot import GitPilot

# Initialize client with scoped API token
client = GitPilot(api_key="gp_live_382fa08d9")

# Execute grounded RAG query with exact line citations
response = client.repositories.chat(
    repository_id="repo_89a3f290",
    prompt="Explain how database migrations run in multi-tenant mode."
)

print(response.markdown)
for citation in response.citations:
    print(f"  [{citation.file_path}#L{citation.start_line}-L{citation.end_line}]")`,
  },
];

export function TerminalSection() {
  const [activeTab, setActiveTab] = useState<string>("cli");
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet =
    SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Outer Glow */}
      <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-teal-500/10 blur-xl opacity-60" />

      {/* Terminal Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090a0f] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#0c0d14]/90 px-4 py-3 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-rose-500/80" />
              <span className="size-3 rounded-full bg-amber-500/80" />
              <span className="size-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <TerminalIcon className="size-3.5 text-teal-400" />
              <span>terminal@gitpilot</span>
            </div>
          </div>

          {/* Snippet Tabs */}
          <div className="flex items-center gap-1">
            {SNIPPETS.map((snippet) => {
              const isActive = snippet.id === activeTab;
              return (
                <button
                  key={snippet.id}
                  onClick={() => setActiveTab(snippet.id)}
                  className={`rounded-md px-2.5 py-1 text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {snippet.name}
                </button>
              );
            })}

            <div className="ml-2 h-4 w-px bg-white/10" />

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-teal-400" />
                  <span className="text-teal-400 font-mono text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  <span className="font-mono text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 selection:bg-teal-500/30">
          <pre>
            <code>{activeSnippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
