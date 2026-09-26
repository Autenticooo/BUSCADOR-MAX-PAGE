import { products } from "@/data/products";
import { Sparkline } from "@/components/ui/Charts";
import { Icon } from "@/components/ui/Icon";
import { CountryFlag, ProductThumb, ScoreBadge, TrendChip, WindowChrome } from "./parts";

const signalsByProduct = [
  ["Criadores +48%", "Vídeos +62%", "GVM 5d ↑"],
  ["Criadores +31%", "Novo no top 10"],
  ["Vídeos +44%", "Nicho acelerando"],
  ["GVM estável", "Criadores +18%"],
];

export function OpportunityCardsMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,rgba(12,19,36,0.96),rgba(5,8,16,0.98))] shadow-[0_40px_110px_-45px_rgba(14,165,233,0.5)]">
      <WindowChrome path="oportunidades" />

      <div className="flex items-center justify-between border-b border-white/[0.06] px-3.5 py-2.5">
        <div>
          <p className="text-[0.78rem] font-semibold text-white">Oportunidades do dia</p>
          <p className="text-[0.58rem] text-slate-500">12 novos sinais detectados nas últimas 24h</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-neon/25 bg-neon/10 px-2.5 py-1 text-[0.62rem] font-medium text-neon">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" />
          Monitorando
        </span>
      </div>

      <div className="grid gap-2.5 p-3.5 sm:grid-cols-2 sm:p-4">
        {products.slice(0, 4).map((product, index) => (
          <article
            key={product.id}
            className={`relative overflow-hidden rounded-xl border p-3 transition-colors ${
              index === 0
                ? "border-neon/30 bg-[linear-gradient(150deg,rgba(34,211,238,0.12),rgba(255,255,255,0.01))]"
                : "border-white/[0.08] bg-[linear-gradient(150deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]"
            }`}
          >
            {index === 0 ? (
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-wider text-ink-950">
                <Icon name="flame" size={9} strokeWidth={2.4} />
                Sinal forte
              </span>
            ) : null}

            <div className="flex items-start gap-2.5">
              <ProductThumb emoji={product.emoji} />
              <div className="min-w-0 flex-1 pr-14">
                <p className="line-clamp-1 text-[0.76rem] font-semibold text-white">{product.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.58rem] text-slate-500">
                  <CountryFlag code={product.country} />
                  {product.category}
                  <span className="font-mono text-slate-600">· {product.id}</span>
                </p>
              </div>
            </div>

            <div className="mt-2.5 flex items-end gap-3">
              <div className="min-w-0 flex-1">
                <Sparkline id={`opp-${index}`} data={product.trend} className="h-9" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <ScoreBadge score={product.score} />
                <TrendChip value={product.growth} small />
              </div>
            </div>

            <div className="mt-2.5 grid grid-cols-3 gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 text-center">
              <div>
                <p className="font-mono text-[0.68rem] font-semibold text-white">{product.gvm}</p>
                <p className="text-[0.48rem] uppercase tracking-wide text-slate-500">GVM Max</p>
              </div>
              <div className="border-x border-white/[0.06]">
                <p className="font-mono text-[0.68rem] font-semibold text-white">
                  {product.creators.toLocaleString("pt-BR")}
                </p>
                <p className="text-[0.48rem] uppercase tracking-wide text-slate-500">Criadores</p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] font-semibold text-white">
                  {(product.videos / 1000).toFixed(1)}k
                </p>
                <p className="text-[0.48rem] uppercase tracking-wide text-slate-500">Vídeos</p>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {signalsByProduct[index].map((signal) => (
                <span
                  key={signal}
                  className="rounded-md border border-brand-400/20 bg-brand-400/[0.07] px-1.5 py-0.5 text-[0.55rem] text-brand-200"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-2.5 py-1.5 text-[0.62rem] font-semibold text-ink-950">
                Ver análise
                <Icon name="arrow" size={11} strokeWidth={2.4} />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-400">
                <Icon name="star" size={12} />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-400">
                <Icon name="link" size={12} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
