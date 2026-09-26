import { products, kpis } from "@/data/products";
import { BarChart, Sparkline } from "@/components/ui/Charts";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const sidebar: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "flame", label: "Em escala" },
  { icon: "chart", label: "GVM Max" },
  { icon: "users", label: "Criadores" },
  { icon: "video", label: "Vídeos" },
  { icon: "star", label: "Favoritos" },
];

const statusStyles: Record<string, string> = {
  escalando: "border-lime/25 bg-lime/10 text-lime",
  aquecendo: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  estável: "border-white/12 bg-white/5 text-slate-300",
};

export function ScoreBadge({ score, size = "md" }: { score: number; size?: "sm" | "md" }) {
  const tone =
    score >= 90
      ? "from-neon/25 to-brand-500/15 text-neon border-neon/35"
      : score >= 80
        ? "from-brand-400/20 to-brand-600/10 text-brand-300 border-brand-400/30"
        : "from-white/10 to-white/[0.03] text-slate-300 border-white/12";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border bg-gradient-to-br font-mono font-semibold",
        tone,
        size === "sm" ? "px-1.5 py-0.5 text-[0.65rem]" : "px-2 py-1 text-xs",
      )}
    >
      <Icon name="zap" size={size === "sm" ? 10 : 12} />
      {score}
    </span>
  );
}

export function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto hidden items-center gap-2 rounded-md border border-white/[0.07] bg-ink-950/60 px-3 py-1 text-[0.68rem] text-slate-500 sm:flex">
        <Icon name="lock" size={11} />
        app.buscadormax.com/{title}
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,rgba(12,19,36,0.95),rgba(5,8,16,0.97))] shadow-[0_40px_120px_-40px_rgba(14,165,233,0.45)] backdrop-blur">
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
        <div className="h-24 w-full animate-scan bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.07),transparent)]" />
      </div>

      <WindowChrome title="dashboard" />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[168px] shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-ink-950/50 p-3 md:flex">
          <div className="mb-3 flex items-center gap-2 px-2 py-1">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-ink-950">
              <Icon name="search" size={15} strokeWidth={2.4} />
            </div>
            <span className="text-[0.7rem] font-bold tracking-[0.12em] text-white">MAX</span>
          </div>
          {sidebar.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.72rem] transition-colors",
                item.active
                  ? "border border-brand-400/20 bg-brand-400/10 text-white"
                  : "text-slate-500",
              )}
            >
              <Icon name={item.icon} size={14} />
              {item.label}
            </div>
          ))}
          <div className="mt-auto rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5">
            <p className="text-[0.62rem] font-semibold text-slate-300">Atualização diária</p>
            <p className="mt-0.5 text-[0.58rem] text-slate-500">Próxima em 02h14</p>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-3.5 sm:p-5">
          {/* topbar */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 text-[0.7rem] text-slate-500">
              <Icon name="search" size={13} />
              <span className="truncate">Buscar produto, nicho ou criador…</span>
            </div>
            <div className="hidden h-8 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 text-[0.7rem] text-slate-400 sm:flex">
              <Icon name="filter" size={13} /> MAX SCORE 80+
            </div>
            <div className="flex h-8 items-center gap-1.5 rounded-lg border border-neon/25 bg-neon/10 px-2.5 text-[0.7rem] font-medium text-neon">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" /> Ao vivo
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-3.5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kpis.map((kpi, index) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-white/[0.07] bg-[linear-gradient(150deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01))] p-3"
              >
                <p className="truncate text-[0.6rem] uppercase tracking-wider text-slate-500">{kpi.label}</p>
                <p className="mt-1 font-mono text-base font-semibold text-white sm:text-lg">{kpi.value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[0.6rem] font-medium text-lime">
                  <Icon name="trending" size={10} /> {kpi.delta}
                </p>
                <Sparkline
                  id={`kpi-${index}`}
                  data={products[index % products.length].trend}
                  className="mt-1.5 h-6"
                />
              </div>
            ))}
          </div>

          {/* chart + score */}
          <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.72rem] font-semibold text-white">Curva de crescimento — GVM Max</p>
                  <p className="text-[0.6rem] text-slate-500">Últimos 14 dias</p>
                </div>
                <span className="rounded-md border border-lime/25 bg-lime/10 px-1.5 py-0.5 font-mono text-[0.6rem] text-lime">
                  +318%
                </span>
              </div>
              <div className="mt-3 h-20 sm:h-24">
                <BarChart
                  data={[18, 22, 20, 28, 33, 30, 41, 47, 44, 58, 66, 72, 85, 97]}
                  highlightFrom={10}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-brand-400/15 bg-[linear-gradient(140deg,rgba(34,211,238,0.10),rgba(37,99,235,0.05))] p-3">
              <div className="scale-90 sm:scale-100">
                <ScoreRingStatic />
              </div>
              <div className="min-w-0">
                <p className="text-[0.72rem] font-semibold text-white">Oportunidade detectada</p>
                <p className="mt-0.5 text-[0.62rem] leading-relaxed text-slate-400">
                  Crescimento de criadores acima da média do nicho nas últimas 72h.
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[0.6rem] font-semibold text-neon">
                  <Icon name="flame" size={11} /> Sinal forte
                </span>
              </div>
            </div>
          </div>

          {/* table */}
          <div className="mt-2.5 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
              <p className="text-[0.72rem] font-semibold text-white">Ranking de oportunidades</p>
              <span className="text-[0.6rem] text-slate-500">Atualizado hoje</span>
            </div>
            <div className="hidden grid-cols-[2.2fr_1fr_0.9fr_0.9fr_0.8fr] gap-2 px-3 py-1.5 text-[0.58rem] uppercase tracking-wider text-slate-500 sm:grid">
              <span>Produto</span>
              <span>GVM Max</span>
              <span>Criadores</span>
              <span>Vídeos</span>
              <span className="text-right">Score</span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {products.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-[1.6fr_auto] items-center gap-2 px-3 py-2 sm:grid-cols-[2.2fr_1fr_0.9fr_0.9fr_0.8fr]"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] text-sm">
                      {product.emoji}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.72rem] font-medium text-slate-100">{product.name}</p>
                      <p className="flex items-center gap-1.5 truncate text-[0.58rem] text-slate-500">
                        {product.category}
                        <span
                          className={cn(
                            "rounded border px-1 py-px text-[0.5rem] uppercase tracking-wide",
                            statusStyles[product.status],
                          )}
                        >
                          {product.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="hidden font-mono text-[0.72rem] text-slate-200 sm:block">{product.gvm}</span>
                  <span className="hidden font-mono text-[0.72rem] text-slate-300 sm:block">
                    {product.creators.toLocaleString("pt-BR")}
                  </span>
                  <span className="hidden font-mono text-[0.72rem] text-slate-300 sm:block">
                    {product.videos.toLocaleString("pt-BR")}
                  </span>
                  <div className="flex justify-end">
                    <ScoreBadge score={product.score} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreRingStatic() {
  const score = 96;
  const size = 64;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#hero-ring)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (score / 100) * circumference}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-sm font-bold text-white">{score}</span>
        <span className="text-[0.42rem] font-semibold uppercase tracking-[0.15em] text-slate-500">max score</span>
      </div>
    </div>
  );
}
