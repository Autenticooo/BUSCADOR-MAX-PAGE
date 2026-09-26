import { products } from "@/data/products";
import { BarChart, MetricBar, ScoreRing, Sparkline } from "@/components/ui/Charts";
import { Icon } from "@/components/ui/Icon";
import { ScoreBadge, WindowChrome } from "./DashboardMockup";
import { cn } from "@/lib/utils";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,rgba(12,19,36,0.95),rgba(5,8,16,0.97))] shadow-[0_40px_110px_-45px_rgba(14,165,233,0.5)]">
      <WindowChrome title={title} />
      <div className="p-3.5 sm:p-5">{children}</div>
    </div>
  );
}

/* ---------------- Lista de produtos ---------------- */
export function ProductListMockup() {
  return (
    <Frame title="produtos">
      <div className="flex flex-wrap items-center gap-2">
        {["Todos", "Beleza", "Casa", "Eletrônicos", "Utilidades"].map((chip, i) => (
          <span
            key={chip}
            className={cn(
              "rounded-lg border px-2.5 py-1 text-[0.68rem]",
              i === 0
                ? "border-brand-400/30 bg-brand-400/10 text-brand-300"
                : "border-white/[0.07] bg-white/[0.02] text-slate-400",
            )}
          >
            {chip}
          </span>
        ))}
        <span className="ml-auto hidden items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[0.68rem] text-slate-400 sm:flex">
          <Icon name="filter" size={12} /> Ordenar: MAX SCORE
        </span>
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product, index) => (
          <div
            key={product.id}
            className="group relative rounded-xl border border-white/[0.07] bg-[linear-gradient(155deg,rgba(255,255,255,0.05),rgba(255,255,255,0.012))] p-3 transition-colors hover:border-brand-400/30"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] text-base">
                {product.emoji}
              </span>
              <ScoreBadge score={product.score} size="sm" />
            </div>
            <p className="mt-2.5 line-clamp-2 text-[0.78rem] font-medium leading-snug text-slate-100">
              {product.name}
            </p>
            <p className="mt-0.5 text-[0.6rem] text-slate-500">{product.category}</p>
            <Sparkline id={`list-${index}`} data={product.trend} className="mt-2 h-7" />
            <div className="mt-2 grid grid-cols-3 gap-1.5 border-t border-white/[0.05] pt-2 text-center">
              <div>
                <p className="font-mono text-[0.68rem] text-white">{product.gvm}</p>
                <p className="text-[0.5rem] uppercase tracking-wide text-slate-500">GVM</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] text-white">{(product.creators / 1000).toFixed(1)}k</p>
                <p className="text-[0.5rem] uppercase tracking-wide text-slate-500">Criadores</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] text-white">{(product.videos / 1000).toFixed(1)}k</p>
                <p className="text-[0.5rem] uppercase tracking-wide text-slate-500">Vídeos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------------- Página individual do produto ---------------- */
export function ProductDetailMockup() {
  const product = products[0];

  return (
    <Frame title={`produto/${product.id.toLowerCase()}`}>
      <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-2xl">
              {product.emoji}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded border border-lime/25 bg-lime/10 px-1.5 py-px text-[0.55rem] uppercase tracking-wide text-lime">
                  Em escala
                </span>
                <span className="font-mono text-[0.55rem] text-slate-500">{product.id}</span>
              </div>
              <p className="mt-1 text-sm font-semibold leading-snug text-white">{product.name}</p>
              <p className="text-[0.65rem] text-slate-500">{product.category}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-lg bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-2.5 py-1 text-[0.62rem] font-semibold text-ink-950">
                  <Icon name="link" size={11} /> Abrir no TikTok Shop
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg border border-white/[0.1] px-2.5 py-1 text-[0.62rem] text-slate-300">
                  <Icon name="star" size={11} /> Favoritar
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold text-white">Evolução de vídeos e criadores</p>
              <span className="font-mono text-[0.6rem] text-lime">+{product.growth}%</span>
            </div>
            <div className="mt-3 h-24">
              <BarChart data={[14, 17, 16, 24, 29, 27, 38, 45, 52, 61, 74, 88]} highlightFrom={8} />
            </div>
            <div className="mt-2 flex justify-between text-[0.55rem] text-slate-600">
              <span>14 dias atrás</span>
              <span>hoje</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-brand-400/15 bg-[linear-gradient(150deg,rgba(34,211,238,0.10),rgba(37,99,235,0.04))] p-3.5">
            <ScoreRing score={product.score} size={84} />
            <p className="text-center text-[0.62rem] leading-relaxed text-slate-400">
              Potencial de oportunidade <span className="font-semibold text-neon">muito alto</span> para este momento.
            </p>
          </div>

          <div className="space-y-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
            <p className="text-[0.72rem] font-semibold text-white">Sinais analisados</p>
            <MetricBar label="GVM Max" value={product.gvm} percent={94} />
            <MetricBar label="Criadores ativos" value={product.creators.toLocaleString("pt-BR")} percent={88} accent="from-neon to-brand-500" />
            <MetricBar label="Vídeos publicados" value={product.videos.toLocaleString("pt-BR")} percent={81} accent="from-violet to-brand-400" />
            <MetricBar label="Velocidade de crescimento" value={`+${product.growth}%`} percent={96} accent="from-lime to-neon" />
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------- Métricas ---------------- */
export function MetricsMockup() {
  const cards = [
    { label: "GVM Max (7d)", value: "R$ 1,84M", delta: "+22,8%", icon: "chart" as const },
    { label: "Novos criadores", value: "3.912", delta: "+14,1%", icon: "users" as const },
    { label: "Vídeos publicados", value: "21.480", delta: "+31,6%", icon: "video" as const },
  ];

  return (
    <Frame title="metricas">
      <div className="grid gap-2.5 sm:grid-cols-3">
        {cards.map((card, index) => (
          <div key={card.label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <div className="flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-400/20 bg-brand-400/10 text-brand-300">
                <Icon name={card.icon} size={13} />
              </span>
              <span className="font-mono text-[0.6rem] text-lime">{card.delta}</span>
            </div>
            <p className="mt-2 font-mono text-lg font-semibold text-white">{card.value}</p>
            <p className="text-[0.6rem] uppercase tracking-wide text-slate-500">{card.label}</p>
            <Sparkline id={`metric-${index}`} data={products[index].trend} className="mt-2 h-7" />
          </div>
        ))}
      </div>

      <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
          <p className="text-[0.72rem] font-semibold text-white">Distribuição de MAX SCORE</p>
          <p className="text-[0.6rem] text-slate-500">Produtos monitorados hoje</p>
          <div className="mt-3 h-28">
            <BarChart
              data={[8, 12, 18, 26, 34, 42, 55, 68, 79, 92, 74, 58, 41, 30, 21, 13]}
              highlightFrom={9}
            />
          </div>
        </div>
        <div className="space-y-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
          <p className="text-[0.72rem] font-semibold text-white">Top nichos em aceleração</p>
          {[
            { name: "Beleza & Skincare", pct: 92 },
            { name: "Casa & Decoração", pct: 78 },
            { name: "Eletrônicos", pct: 64 },
            { name: "Utilidades", pct: 51 },
          ].map((niche) => (
            <MetricBar key={niche.name} label={niche.name} value={`${niche.pct}`} percent={niche.pct} />
          ))}
        </div>
      </div>
    </Frame>
  );
}
