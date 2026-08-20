"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles, X, CheckCircle2, Code2 } from "lucide-react";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { TiltCard } from "@/components/ui/tilt-card";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string[];
  takeaways: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  url: string;
}

export function BlogSection() {
  const { playClick } = useSoundEffects();
  const [activeArticleModal, setActiveArticleModal] = useState<Article | null>(null);

  useScrollLock(!!activeArticleModal);

  const ARTICLES: Article[] = [
    {
      id: "nodejs-optimization",
      title: "Optimizing Node.js Microservices for High-Concurrency Fintech Workloads",
      excerpt: "A deep dive into event loop tuning, Redis memory caching strategies, and MongoDB connection pooling to cut API response latency by 35%.",
      fullContent: [
        "In high-frequency fintech environments, handling thousands of simultaneous transactions requires minimizing Node.js event loop blockages and optimizing database network I/O.",
        "By implementing an in-memory Redis caching tier ahead of MongoDB aggregations, response latencies dropped from 120ms to under 38ms during peak transaction workloads.",
        "Furthermore, configuring optimal MongoDB connection pool sizes (maxPoolSize: 50) and leveraging lean query projections (.lean()) reduced memory consumption per microservice pod by 40%."
      ],
      takeaways: [
        "Event Loop Unblocking: Offloading CPU-heavy validation tasks to worker threads",
        "Multi-Layer Caching: Cache-aside pattern using Redis with TTL expiration",
        "Connection Pool Tuning: Preventing socket starvation during traffic spikes"
      ],
      codeSnippet: {
        language: "typescript",
        code: `// Redis Cache-Aside Pattern Implementation
async function getAccountBalance(userId: string): Promise<Balance> {
  const cacheKey = \`balance:\${userId}\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const balance = await db.balances.findOne({ userId }).lean();
  await redis.set(cacheKey, JSON.stringify(balance), 'EX', 60);
  return balance;
}`
      },
      date: "May 2026",
      readTime: "6 min read",
      category: "Backend & Systems",
      gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
      url: "https://dev.to/tejaskumar/optimizing-nodejs-microservices-for-high-concurrency-fintech-workloads"
    },
    {
      id: "proctored-exam-design",
      title: "Building AI-Assisted Online Examination Systems with WebRTC & Tab Detection",
      excerpt: "Architectural blueprint for real-time video stream inspection, tab-blur detection, and low-latency websocket heartbeats.",
      fullContent: [
        "Remote assessment platforms require secure client-side event tracking alongside real-time video stream verification to ensure academic integrity.",
        "Using Page Visibility APIs (visibilitychange) combined with window blur and focus event listeners, our portal captures unauthorized tab switching with sub-millisecond accuracy.",
        "WebRTC peer connections transmit video streams to background processing workers, while WebSocket heartbeats ensure immediate session termination if connectivity drops."
      ],
      takeaways: [
        "DOM Event Monitoring: Detecting tab switching, devtools inspection, and multi-monitor focus loss",
        "WebRTC Integration: Low-latency p2p video stream transmission for invigilation",
        "Automated Violation Engine: Auto-submitting exams upon 3 threshold warnings"
      ],
      codeSnippet: {
        language: "javascript",
        code: `// Client-Side Tab Switch & Blur Detector
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    socket.emit('violation', { type: 'TAB_SWITCH', timestamp: Date.now() });
    triggerWarningBadge('Tab switch detected! Return to exam.');
  }
});`
      },
      date: "April 2026",
      readTime: "8 min read",
      category: "Full Stack",
      gradient: "from-purple-600/20 via-pink-500/10 to-indigo-600/20",
      url: "https://dev.to/tejaskumar/building-ai-assisted-online-examination-systems-webrtc"
    },
    {
      id: "dsa-competitive",
      title: "Mathematics in Algorithms: Graph Optimization & Dynamic Programming Patterns",
      excerpt: "Key learnings from solving 400+ algorithmic coding problems and achieving Specialist rank (1638 max rating) on Codeforces.",
      fullContent: [
        "Combining discrete mathematics from IIT Patna with competitive programming techniques on Codeforces provides a structured approach to solving complex graph and DP problems.",
        "Key patterns include Dijkstra's shortest path with Fibonacci heaps, segment trees with lazy propagation for range queries, and bitmask DP for combinatorial optimization.",
        "Consistent practice across 400+ problems built deep algorithmic intuition, helping achieve Specialist rank (1638 max rating) on Codeforces."
      ],
      takeaways: [
        "State Compression: Using bitmasks to represent subset states in DP",
        "Segment Trees: O(log N) range updates and point queries",
        "Amortized Complexity: Analyzing time complexity bounds under extreme constraints"
      ],
      codeSnippet: {
        language: "cpp",
        code: `// Segment Tree Range Query with Lazy Propagation
void updateRange(int node, int start, int end, int l, int r, int val) {
    if (lazy[node] != 0) {
        tree[node] += (end - start + 1) * lazy[node];
        if (start != end) {
            lazy[2*node] += lazy[node];
            lazy[2*node+1] += lazy[node];
        }
        lazy[node] = 0;
    }
    if (start > end || start > r || end < l) return;
    if (start >= l && end <= r) {
        tree[node] += (end - start + 1) * val;
        if (start != end) {
            lazy[2*node] += val;
            lazy[2*node+1] += val;
        }
        return;
    }
    int mid = (start + end) / 2;
    updateRange(2*node, start, mid, l, r, val);
    updateRange(2*node+1, mid+1, end, l, r, val);
    tree[node] = tree[2*node] + tree[2*node+1];
}`
      },
      date: "March 2026",
      readTime: "5 min read",
      category: "Algorithms",
      gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
      url: "https://dev.to/tejaskumar/mathematics-in-algorithms-graph-optimization-dp"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENGINEERING INSIGHTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Articles & Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Writeups
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          Sharing lessons learned in full-stack engineering, cloud architecture, and competitive algorithm optimization.
        </p>
      </motion.div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="glass-card glass-card-hover rounded-3xl border border-white/15 overflow-hidden flex flex-col justify-between h-full shadow-xl" glowColor="rgba(56, 189, 248, 0.15)">
              {/* Card Header Banner */}
              <div className={`p-6 bg-gradient-to-br ${article.gradient} border-b border-white/10 space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/50 text-cyan-300 border border-white/10">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-300 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-cyan-400" /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {article.date}
                  </span>
                  <button
                    onClick={() => {
                      playClick();
                      setActiveArticleModal(article);
                    }}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-[9999] flex items-end justify-center p-2 sm:p-4 pb-2 sm:pb-3 pt-16 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveArticleModal(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 50 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl bg-[#090d16] text-white max-h-[88vh] flex flex-col mt-auto mb-1 sm:mb-2"
            >
              {/* Modal Banner Header (Fixed at top) */}
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeArticleModal.gradient} flex items-center justify-between border-b border-white/10 shrink-0`}>
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-cyan-300 border border-white/10 uppercase">
                      {activeArticleModal.category}
                    </span>
                    <span className="text-slate-200">{activeArticleModal.date}</span>
                    <span className="text-slate-300">• {activeArticleModal.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mt-2">
                    {activeArticleModal.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white shrink-0 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrolls cleanly) */}
              <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed flex-1 overflow-y-auto overscroll-contain">
                {/* Paragraphs */}
                <div className="space-y-4">
                  {activeArticleModal.fullContent.map((paragraph, i) => (
                    <p key={i} className="text-slate-200 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Code Snippet Box */}
                {activeArticleModal.codeSnippet && (
                  <div className="rounded-2xl border border-white/15 bg-[#030712] overflow-hidden font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-b border-white/10 text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Code2 className="w-3.5 h-3.5" /> Key Implementation Snippet ({activeArticleModal.codeSnippet.language})
                      </span>
                    </div>
                    <pre className="p-4 text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed">
                      {activeArticleModal.codeSnippet.code}
                    </pre>
                  </div>
                )}

                {/* Key Takeaways */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider mb-3">
                    Key Technical Takeaways
                  </h4>
                  <div className="space-y-2">
                    {activeArticleModal.takeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Written by Tejas Kumar • Engineering Insights</span>
                  <button
                    onClick={() => setActiveArticleModal(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-200 glass-card hover:bg-white/10 border border-white/15 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
