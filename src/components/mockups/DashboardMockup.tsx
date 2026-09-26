import { products, kpis } from "@/data/products";
import { BarChart, Sparkline } from "@/components/ui/Charts";
import { Icon } from "@/components/ui/Icon";
import {
  AppFrame,
  CountryFlag,
  FilterBar,
  ProductThumb,
  ScoreBadge,
  StatusChip,
  TopBar,
  TrendChip,
} from "./parts";

export function DashboardMockup() {
  return (
    <AppFrame path="dashboard" active="dashboard" scanline>
      <TopBar
        title="Dashboard de oportunidades"
        breadcrumb="Início / Dashboard"
        action={
          <span className="hidden items-center gap-1.5 rounded-lg border border-neon/25 bg-neon/10 px-2.5 py-1.5 text-[0.66rem] font-medium text-neon sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" />
            Ao vivo
          </span>
        }
      />
      <FilterBar compact />

      <div className="p-3.5 sm:p-4">
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/[0.07] bg-[linear-gradient(150deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01))] p-3"
            >
              <p className="truncate text-[0.58rem] uppercase tracking-wider text-slate-500">{kpi.label}</p>
              <p className="mt-1 font-mono text-base font-semibold text-white sm:text-lg">{kpi.value}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[0.58rem] font-medium text-lime">
                <Icon name="trending" size={10} /> {kpi.delta}
              </p>
              <Sparkline id={`kpi-${index}`} data={products[index % products.length].trend} className="mt-1.5 h-6" />
            </div>
          ))}
        </div>

        {/* Gráfico + ranking lateral */}
        <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.55fr_1fr]">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.72rem] font-semibold text-white">Curva de crescimento — GVM Max</p>
                <p className="text-[0.58rem] text-slate-500">Últimos 14 dias · Beleza &amp; Skincare · Brasil</p>
              </div>
              <TrendChip value={318} />
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex flex-col justify-between py-0.5 font-mono text-[0.5rem] text-slate-600">
                <span>500k</span>
                <span>250k</span>
                <span>0</span>
              </div>
              <div className="h-20 flex-1 sm:h-24">
                <BarChart data={[18, 22, 20, 28, 33, 30, 41, 47, 44, 58, 66, 72, 85, 97]} highlightFrom={10} />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-white/[0.05] pt-2 text-[0.52rem] text-slate-600">
              <span>14 dias atrás</span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-sm bg-brand-400/50" /> histórico
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-sm bg-neon" /> aceleração
                </span>
              </span>
              <span>hoje</span>
            </div>
          </div>

          {/* Mini ranking MAX SCORE */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <div className="flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold text-white">Top MAX SCORE</p>
              <span className="rounded border border-white/[0.08] px-1.5 py-px text-[0.52rem] text-slate-500">
                24h
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5">
              {products.slice(0, 4).map((product, index) => (
                <div key={product.id} className="flex items-center gap-2">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md font-mono text-[0.58rem] font-bold ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-ink-950"
                        : "border border-white/[0.08] bg-white/[0.03] text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm">{product.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.65rem] text-slate-200">{product.name}</p>
                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-neon"
                        style={{ width: `${product.score}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-[0.65rem] font-semibold text-neon">{product.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-brand-400/15 bg-brand-400/[0.06] px-2.5 py-2">
              <Icon name="flame" size={13} className="shrink-0 text-neon" />
              <p className="text-[0.58rem] leading-tight text-slate-300">
                <span className="font-semibold text-white">3 novas oportunidades</span> entraram no top 10 hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Tabela resumida */}
        <div className="mt-2.5 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <p className="text-[0.72rem] font-semibold text-white">Oportunidades detectadas hoje</p>
            <span className="flex items-center gap-1 text-[0.58rem] text-slate-500">
              <Icon name="refresh" size={10} /> Atualizado às 06:00
            </span>
          </div>
          <div className="hidden grid-cols-[2fr_0.9fr_0.9fr_0.8fr_0.8fr_0.7fr] gap-2 border-b border-white/[0.05] px-3 py-1.5 text-[0.55rem] uppercase tracking-wider text-slate-500 sm:grid">
            <span>Produto</span>
            <span>País</span>
            <span>GVM Max</span>
            <span>Criadores</span>
            <span>Vídeos</span>
            <span className="text-right">Score</span>
          </div>
          <div className="divide-y divide-white/[0.05]">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[1.6fr_auto] items-center gap-2 px-3 py-2 transition-colors hover:bg-white/[0.02] sm:grid-cols-[2fr_0.9fr_0.9fr_0.8fr_0.8fr_0.7fr]"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <ProductThumb emoji={product.emoji} size="sm" />
                  <div className="min-w-0">
                    <p className="truncate text-[0.7rem] font-medium text-slate-100">{product.name}</p>
                    <p className="flex items-center gap-1.5 truncate text-[0.55rem] text-slate-500">
                      {product.category}
                      <StatusChip status={product.status} />
                    </p>
                  </div>
                </div>
                <span className="hidden items-center gap-1.5 text-[0.65rem] text-slate-300 sm:flex">
                  <CountryFlag code={product.country} />
                  {product.country}
                </span>
                <span className="hidden font-mono text-[0.7rem] text-slate-200 sm:block">{product.gvm}</span>
                <span className="hidden font-mono text-[0.7rem] text-slate-300 sm:block">
                  {product.creators.toLocaleString("pt-BR")}
                </span>
                <span className="hidden font-mono text-[0.7rem] text-slate-300 sm:block">
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
    </AppFrame>
  );
}
