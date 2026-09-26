import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { CountryFlag, ProductThumb, ScoreBadge, TrendChip } from "@/components/mockups/parts";
import { Sparkline } from "@/components/ui/Charts";
import { products } from "@/data/products";

const before = [
  "Escolhe produto por intuição, print de grupo ou palpite",
  "Descobre a tendência quando ela já está em todo lugar",
  "Passa horas rolando o feed para tentar achar um padrão",
  "Compara produtos de cabeça, sem critério comparável",
  "Testa, gasta e só depois descobre se havia demanda",
];

const after = [
  "Escolhe produto olhando sinais organizados lado a lado",
  "Acompanha o movimento enquanto ele ainda está subindo",
  "Abre a plataforma e vê o panorama do dia pronto",
  "Compara tudo pelo MAX SCORE, no mesmo padrão",
  "Decide onde investir com contexto antes de gastar",
];

const dimensions = [
  { label: "Como escolhe", before: "Palpite", after: "Sinais" },
  { label: "Tempo de pesquisa", before: "Horas", after: "Minutos" },
  { label: "Timing", before: "Depois de todo mundo", after: "Enquanto acelera" },
  { label: "Base da decisão", before: "Torcida", after: "Critério" },
];

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_45%,rgba(14,165,233,0.08),transparent_70%)]"
      />
      <div className="container-max">
        <SectionHeading
          eyebrow="Antes vs Depois"
          title={
            <>
              A mesma busca por produtos, com e sem{" "}
              <span className="text-gradient-blue">inteligência de dados.</span>
            </>
          }
          description="Não é sobre trabalhar mais. É sobre enxergar o que já está acontecendo antes que fique óbvio para todo mundo."
        />

        <div className="relative mt-14 grid items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          {/* ANTES */}
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(160deg,rgba(255,255,255,0.03),rgba(255,255,255,0.006))] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.08] text-red-300">
                  <Icon name="eyeoff" size={18} />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-red-300/80">
                    Antes
                  </p>
                  <p className="text-[1.05rem] font-semibold text-white">Procurando no escuro</p>
                </div>
              </div>

              {/* mock "sem dados" */}
              <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.06] bg-ink-950/50">
                <div className="flex items-center justify-between border-b border-white/[0.05] px-3 py-2">
                  <span className="text-[0.62rem] text-slate-500">Produtos que talvez funcionem</span>
                  <span className="font-mono text-[0.55rem] text-slate-700">sem dados</span>
                </div>
                <div className="divide-y divide-white/[0.04] opacity-60">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-center gap-2.5 px-3 py-2 grayscale">
                      <ProductThumb emoji={product.emoji} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.68rem] text-slate-400 blur-[1.5px]">{product.name}</p>
                        <p className="font-mono text-[0.55rem] text-slate-700">demanda desconhecida</p>
                      </div>
                      <span className="font-mono text-[0.62rem] text-slate-600">—</span>
                      <span className="flex h-5 w-8 items-center justify-center rounded-md border border-white/[0.07] font-mono text-[0.6rem] text-slate-600">
                        ?
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-slate-400">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-red-400/12 text-red-300">
                      <Icon name="close" size={10} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* DEPOIS */}
          <Reveal delay={90} className="h-full">
            <article className="aurora-border relative flex h-full flex-col overflow-hidden rounded-2xl bg-[linear-gradient(160deg,rgba(14,165,233,0.12),rgba(7,11,22,0.85))] p-6 shadow-[0_40px_100px_-50px_rgba(34,211,238,0.9)] sm:p-7">
              <div className="relative z-[2] flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                  <Icon name="sparkles" size={18} />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-neon">Depois</p>
                  <p className="text-[1.05rem] font-semibold text-white">Com o BUSCADOR MAX</p>
                </div>
              </div>

              {/* mock "com dados" */}
              <div className="relative z-[2] mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-ink-950/60">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                  <span className="text-[0.62rem] text-slate-300">Oportunidades com sinais</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] text-neon">
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" />
                    MAX SCORE
                  </span>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {products.slice(0, 3).map((product, index) => (
                    <div key={product.id} className="flex items-center gap-2.5 px-3 py-2">
                      <ProductThumb emoji={product.emoji} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.68rem] text-slate-100">{product.name}</p>
                        <p className="flex items-center gap-1.5 truncate text-[0.55rem] text-slate-500">
                          <CountryFlag code={product.country} />
                          {product.category}
                        </p>
                      </div>
                      <span className="hidden w-12 sm:block">
                        <Sparkline id={`ba-${index}`} data={product.trend} className="h-5" />
                      </span>
                      <TrendChip value={product.growth} small />
                      <ScoreBadge score={product.score} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="relative z-[2] mt-6 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-slate-200">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-neon/20 text-neon">
                      <Icon name="check" size={10} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* divisor VS */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-ink-950 font-mono text-[0.68rem] font-bold text-slate-300 shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)]">
              VS
            </span>
          </div>
        </div>

        <p className="mt-4 text-center text-[0.72rem] text-slate-600">
          Representação ilustrativa da interface do BUSCADOR MAX.
        </p>

        {/* comparativo por dimensão */}
        <Reveal delay={120}>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-2 border-b border-white/[0.06] px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.14em] text-slate-500 sm:px-6">
              <span />
              <span className="text-red-300/70">No escuro</span>
              <span className="text-neon">Com o BUSCADOR MAX</span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {dimensions.map((dimension) => (
                <div
                  key={dimension.label}
                  className="grid grid-cols-[1.1fr_1fr_1fr] items-center gap-2 px-4 py-3 sm:px-6"
                >
                  <span className="text-[0.8rem] font-medium text-slate-300 sm:text-[0.88rem]">
                    {dimension.label}
                  </span>
                  <span className="text-[0.8rem] text-slate-500 line-through decoration-red-400/40 sm:text-[0.88rem]">
                    {dimension.before}
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-white sm:text-[0.88rem]">
                    <Icon name="check" size={13} className="shrink-0 text-neon" strokeWidth={3} />
                    {dimension.after}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <CtaBand
            title="Você já faz o trabalho pesado. Falta a camada de inteligência."
            text="Comece a analisar produtos com sinais organizados em vez de tentativa e erro."
            cta="Entrar no BUSCADOR MAX"
          />
        </div>
      </div>
    </section>
  );
}
