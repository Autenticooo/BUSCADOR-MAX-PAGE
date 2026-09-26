import { products } from "@/data/products";
import { ScoreRing, Sparkline } from "@/components/ui/Charts";
import { Icon } from "@/components/ui/Icon";
import { AppFrame, CountryFlag, ProductThumb, ScoreBadge, TopBar, TrendChip } from "./parts";

const periods = ["24 horas", "7 dias", "30 dias"];

export function RankingMockup() {
  const podium = products.slice(0, 3);
  const rest = products.slice(3, 8);

  return (
    <AppFrame path="ranking" active="ranking">
      <TopBar
        title="Ranking MAX SCORE"
        breadcrumb="Início / Ranking"
        action={
          <div className="hidden items-center gap-0.5 rounded-lg border border-white/[0.07] bg-white/[0.03] p-0.5 sm:flex">
            {periods.map((period, index) => (
              <span
                key={period}
                className={`rounded-md px-2 py-1 text-[0.62rem] ${
                  index === 1 ? "bg-brand-400/15 text-white" : "text-slate-500"
                }`}
              >
                {period}
              </span>
            ))}
          </div>
        }
      />

      <div className="p-3.5 sm:p-4">
        {/* Pódio */}
        <div className="grid gap-2.5 sm:grid-cols-3">
          {podium.map((product, index) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-xl border p-3 ${
                index === 0
                  ? "border-neon/30 bg-[linear-gradient(150deg,rgba(34,211,238,0.14),rgba(7,11,22,0.6))] shadow-[0_20px_60px_-30px_rgba(34,211,238,0.9)] sm:-mt-1"
                  : "border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]"
              }`}
            >
              {index === 0 ? (
                <span className="absolute right-2 top-2 rounded-full bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-wider text-ink-950">
                  #1 do dia
                </span>
              ) : null}

              <div className="flex items-center gap-2">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-lg font-mono text-[0.68rem] font-bold ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-ink-950"
                      : "border border-white/[0.1] bg-white/[0.04] text-slate-300"
                  }`}
                >
                  {index + 1}
                </span>
                <CountryFlag code={product.country} />
                <span className="truncate text-[0.58rem] text-slate-500">{product.category}</span>
              </div>

              <div className="mt-2.5 flex items-center gap-2.5">
                <ProductThumb emoji={product.emoji} />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-[0.72rem] font-medium leading-snug text-white">
                    {product.name}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <TrendChip value={product.growth} small />
                    <span className="font-mono text-[0.55rem] text-slate-500">{product.gvm}</span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <ScoreRing score={product.score} size={56} label="score" />
                </div>
                <div className="lg:hidden">
                  <ScoreBadge score={product.score} size="sm" />
                </div>
              </div>

              <Sparkline id={`rank-${index}`} data={product.trend} className="mt-2 h-8" />

              <div className="mt-2 grid grid-cols-3 gap-1 border-t border-white/[0.06] pt-2 text-center">
                <div>
                  <p className="font-mono text-[0.62rem] text-white">{(product.creators / 1000).toFixed(1)}k</p>
                  <p className="text-[0.46rem] uppercase tracking-wide text-slate-500">Criadores</p>
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] text-white">{(product.videos / 1000).toFixed(1)}k</p>
                  <p className="text-[0.46rem] uppercase tracking-wide text-slate-500">Vídeos</p>
                </div>
                <div>
                  <p className="flex items-center justify-center gap-0.5 font-mono text-[0.62rem] text-lime">
                    <Icon name="trending" size={8} />
                    {product.rankDelta}
                  </p>
                  <p className="text-[0.46rem] uppercase tracking-wide text-slate-500">Posições</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lista 4+ */}
        <div className="mt-2.5 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <p className="text-[0.72rem] font-semibold text-white">Classificação completa</p>
            <span className="flex items-center gap-1 text-[0.58rem] text-slate-500">
              <Icon name="refresh" size={10} /> Recalculado a cada 24h
            </span>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {rest.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center gap-2.5 px-3 py-2 transition-colors hover:bg-white/[0.02]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] font-mono text-[0.62rem] text-slate-300">
                  {index + 4}
                </span>
                <span
                  className={`hidden w-9 items-center gap-0.5 font-mono text-[0.55rem] sm:flex ${
                    product.rankDelta >= 0 ? "text-lime" : "text-red-300"
                  }`}
                >
                  <Icon
                    name="trending"
                    size={9}
                    className={product.rankDelta >= 0 ? "" : "-scale-y-100"}
                  />
                  {Math.abs(product.rankDelta)}
                </span>
                <ProductThumb emoji={product.emoji} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.7rem] font-medium text-slate-100">{product.name}</p>
                  <p className="flex items-center gap-1.5 truncate text-[0.55rem] text-slate-500">
                    <CountryFlag code={product.country} />
                    {product.category}
                  </p>
                </div>
                <span className="hidden w-24 lg:block">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-neon"
                      style={{ width: `${product.score}%` }}
                    />
                  </div>
                </span>
                <span className="hidden font-mono text-[0.65rem] text-slate-300 sm:block">{product.gvm}</span>
                <ScoreBadge score={product.score} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
