import { detectedSignals, products, scoreBreakdown, topCreators } from "@/data/products";
import { BarChart, MetricBar, ScoreRing, Sparkline } from "@/components/ui/Charts";
import { Icon } from "@/components/ui/Icon";
import { AppFrame, Avatar, CountryFlag, ProductThumb, TopBar, TrendChip } from "./parts";

const product = products[0];

const tabs = ["Visão geral", "Criadores", "Vídeos", "Histórico"];

const miniKpis = [
  { label: "GVM Max", value: product.gvm, delta: "+22,8%" },
  { label: "Criadores", value: product.creators.toLocaleString("pt-BR"), delta: "+48%" },
  { label: "Vídeos", value: product.videos.toLocaleString("pt-BR"), delta: "+62%" },
  { label: "Crescimento", value: `+${product.growth}%`, delta: "7 dias" },
];

export function ProductDetailMockup() {
  return (
    <AppFrame path={`produto/${product.id.toLowerCase()}`} active="produtos">
      <TopBar
        title={product.name}
        breadcrumb={`Produtos / ${product.category} / ${product.id}`}
        action={
          <span className="hidden items-center gap-1.5 rounded-lg border border-lime/25 bg-lime/10 px-2.5 py-1.5 text-[0.62rem] font-medium text-lime sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Em escala
          </span>
        }
      />

      <div className="p-3.5 sm:p-4">
        {/* Cabeçalho do produto */}
        <div className="flex flex-col gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 sm:flex-row sm:items-center">
          <ProductThumb emoji={product.emoji} size="lg" />

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[0.58rem] text-slate-300">
                <CountryFlag code={product.country} /> Brasil
              </span>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[0.58rem] text-slate-300">
                {product.category}
              </span>
              <span className="font-mono text-[0.55rem] text-slate-600">{product.id}</span>
            </div>
            <p className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-white">{product.name}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.6rem] text-slate-500">
              <span>
                Preço médio <span className="font-mono text-slate-300">{product.price}</span>
              </span>
              <span>
                Comissão <span className="font-mono text-slate-300">{product.commission}</span>
              </span>
              <span>
                Rank <span className="font-mono text-slate-300">#{product.rank}</span>
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-3 py-1.5 text-[0.65rem] font-semibold text-ink-950">
              <Icon name="link" size={12} strokeWidth={2.4} />
              Abrir no TikTok Shop
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300">
              <Icon name="star" size={13} />
            </span>
          </div>
        </div>

        {/* Abas */}
        <div className="mt-2.5 flex items-center gap-1 border-b border-white/[0.06]">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`-mb-px border-b-2 px-2.5 py-1.5 text-[0.65rem] ${
                index === 0
                  ? "border-neon text-white"
                  : "border-transparent text-slate-500"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.45fr_1fr]">
          {/* Coluna principal */}
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {miniKpis.map((kpi, index) => (
                <div key={kpi.label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5">
                  <p className="truncate text-[0.52rem] uppercase tracking-wider text-slate-500">{kpi.label}</p>
                  <p className="mt-0.5 font-mono text-[0.85rem] font-semibold text-white">{kpi.value}</p>
                  <p className="text-[0.52rem] text-lime">{kpi.delta}</p>
                  <Sparkline id={`detail-kpi-${index}`} data={products[index].trend} className="mt-1 h-5" />
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[0.72rem] font-semibold text-white">Evolução de criadores e vídeos</p>
                  <p className="text-[0.56rem] text-slate-500">Base diária dos últimos 12 dias</p>
                </div>
                <TrendChip value={product.growth} />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="flex flex-col justify-between py-0.5 font-mono text-[0.48rem] text-slate-600">
                  <span>1.5k</span>
                  <span>750</span>
                  <span>0</span>
                </div>
                <div className="h-24 flex-1">
                  <BarChart data={[14, 17, 16, 24, 29, 27, 38, 45, 52, 61, 74, 88]} highlightFrom={8} />
                </div>
              </div>
              <div className="mt-2 flex justify-between text-[0.5rem] text-slate-600">
                <span>12 dias atrás</span>
                <span>hoje</span>
              </div>
            </div>

            {/* Criadores em destaque */}
            <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                <p className="text-[0.72rem] font-semibold text-white">Criadores em destaque</p>
                <span className="text-[0.55rem] text-slate-500">1.284 no total</span>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {topCreators.map((creator, index) => (
                  <div key={creator.handle} className="flex items-center gap-2.5 px-3 py-2">
                    <Avatar name={creator.name} index={index} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.68rem] font-medium text-slate-100">{creator.name}</p>
                      <p className="truncate font-mono text-[0.55rem] text-slate-500">{creator.handle}</p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <p className="font-mono text-[0.62rem] text-slate-200">{creator.followers}</p>
                      <p className="text-[0.48rem] uppercase tracking-wide text-slate-600">seguidores</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[0.62rem] text-slate-200">{creator.videos}</p>
                      <p className="text-[0.48rem] uppercase tracking-wide text-slate-600">vídeos</p>
                    </div>
                    <span className="rounded-md border border-lime/20 bg-lime/[0.08] px-1.5 py-0.5 font-mono text-[0.55rem] text-lime">
                      {creator.growth}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="space-y-2.5">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-brand-400/15 bg-[linear-gradient(150deg,rgba(34,211,238,0.10),rgba(37,99,235,0.04))] p-3.5">
              <ScoreRing score={product.score} size={86} />
              <p className="text-center text-[0.6rem] leading-relaxed text-slate-400">
                Potencial de oportunidade <span className="font-semibold text-neon">muito alto</span> para
                este momento.
              </p>
              <div className="w-full space-y-1.5 border-t border-white/[0.07] pt-2.5">
                {scoreBreakdown.map((item) => (
                  <MetricBar
                    key={item.label}
                    label={item.label}
                    value={String(item.value)}
                    percent={item.value}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
              <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-white">
                <Icon name="sparkles" size={13} className="text-neon" />
                Sinais detectados
              </p>
              <div className="mt-2.5 space-y-2.5">
                {detectedSignals.map((signal, index) => (
                  <div key={signal.text} className="flex gap-2.5">
                    <div className="flex flex-col items-center">
                      <span
                        className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                          signal.tone === "high" ? "bg-neon" : "bg-slate-600"
                        }`}
                      />
                      {index < detectedSignals.length - 1 ? (
                        <span className="mt-1 w-px flex-1 bg-white/[0.08]" />
                      ) : null}
                    </div>
                    <div className="pb-0.5">
                      <p className="text-[0.6rem] leading-snug text-slate-300">{signal.text}</p>
                      <p className="mt-0.5 font-mono text-[0.5rem] text-slate-600">{signal.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
              <p className="text-[0.72rem] font-semibold text-white">Comparação com o nicho</p>
              <div className="mt-2 space-y-1.5">
                <MetricBar label="Este produto" value="96" percent={96} accent="from-brand-400 to-neon" />
                <MetricBar label="Média Beleza & Skincare" value="61" percent={61} accent="from-slate-600 to-slate-500" />
                <MetricBar label="Média geral" value="48" percent={48} accent="from-slate-700 to-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
