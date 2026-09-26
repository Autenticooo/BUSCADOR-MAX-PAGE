import { categories, countries, products } from "@/data/products";
import { Icon } from "@/components/ui/Icon";
import { CountryFlag, ProductThumb, ScoreBadge, TrendChip, WindowChrome } from "./parts";

const selectedCategories = ["Beleza & Skincare", "Casa & Decoração"];
const selectedCountries = ["BR", "US"];

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${
        checked ? "border-neon/50 bg-neon/20 text-neon" : "border-white/15 bg-white/[0.04]"
      }`}
    >
      {checked ? <Icon name="check" size={8} strokeWidth={3.5} /> : null}
    </span>
  );
}

export function FiltersMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,rgba(12,19,36,0.96),rgba(5,8,16,0.98))] shadow-[0_40px_110px_-45px_rgba(14,165,233,0.5)]">
      <WindowChrome path="produtos?categoria=beleza&pais=br" />

      <div className="grid lg:grid-cols-[210px_1fr]">
        {/* Painel de filtros */}
        <div className="space-y-3 border-b border-white/[0.06] p-3.5 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-white">
              <Icon name="filter" size={13} className="text-brand-300" />
              Filtros
            </p>
            <span className="text-[0.55rem] text-brand-300">Limpar</span>
          </div>

          <div className="flex h-7 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 text-[0.62rem] text-slate-500">
            <Icon name="search" size={11} />
            Buscar produto…
          </div>

          {/* Categoria */}
          <div>
            <p className="mb-1.5 text-[0.55rem] uppercase tracking-wider text-slate-500">Categoria</p>
            <div className="space-y-1">
              {categories.slice(1, 6).map((category) => (
                <div key={category.label} className="flex items-center gap-1.5">
                  <Checkbox checked={selectedCategories.includes(category.label)} />
                  <span
                    className={`flex-1 truncate text-[0.62rem] ${
                      selectedCategories.includes(category.label) ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {category.label}
                  </span>
                  <span className="font-mono text-[0.52rem] text-slate-600">
                    {category.count.toLocaleString("pt-BR")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* País */}
          <div>
            <p className="mb-1.5 text-[0.55rem] uppercase tracking-wider text-slate-500">País</p>
            <div className="space-y-1">
              {countries.slice(0, 6).map((country) => (
                <div key={country.code} className="flex items-center gap-1.5">
                  <Checkbox checked={selectedCountries.includes(country.code)} />
                  <CountryFlag code={country.code} />
                  <span
                    className={`flex-1 truncate text-[0.62rem] ${
                      selectedCountries.includes(country.code) ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {country.name}
                  </span>
                  <span className="font-mono text-[0.52rem] text-slate-600">
                    {country.count.toLocaleString("pt-BR")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MAX SCORE */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[0.55rem] uppercase tracking-wider text-slate-500">MAX SCORE</p>
              <span className="font-mono text-[0.55rem] text-neon">80 — 100</span>
            </div>
            <div className="relative h-1.5 w-full rounded-full bg-white/[0.06]">
              <div className="absolute left-[55%] right-0 h-full rounded-full bg-gradient-to-r from-brand-400 to-neon" />
              <span className="absolute left-[55%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon bg-ink-950" />
              <span className="absolute right-0 top-1/2 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon bg-ink-950" />
            </div>
          </div>

          {/* Período */}
          <div>
            <p className="mb-1.5 text-[0.55rem] uppercase tracking-wider text-slate-500">Período</p>
            <div className="flex gap-0.5 rounded-lg border border-white/[0.07] bg-white/[0.03] p-0.5">
              {["24h", "7d", "30d"].map((period, index) => (
                <span
                  key={period}
                  className={`flex-1 rounded-md py-1 text-center text-[0.58rem] ${
                    index === 1 ? "bg-brand-400/15 text-white" : "text-slate-500"
                  }`}
                >
                  {period}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1.5">
            {[
              { label: "Somente em escala", on: true },
              { label: "Apenas favoritos", on: false },
            ].map((toggle) => (
              <div key={toggle.label} className="flex items-center justify-between">
                <span className="text-[0.62rem] text-slate-400">{toggle.label}</span>
                <span
                  className={`flex h-3.5 w-6 items-center rounded-full p-0.5 ${
                    toggle.on ? "bg-neon/60" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                      toggle.on ? "translate-x-2.5" : ""
                    }`}
                  />
                </span>
              </div>
            ))}
          </div>

          <span className="flex w-full items-center justify-center gap-1 rounded-lg bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] py-1.5 text-[0.65rem] font-semibold text-ink-950">
            Aplicar filtros
          </span>
        </div>

        {/* Resultados */}
        <div className="p-3.5 sm:p-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.72rem] font-semibold text-white">
              <span className="font-mono text-neon">127</span> produtos encontrados
            </p>
            <span className="ml-auto inline-flex items-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[0.6rem] text-slate-400">
              Ordenar: MAX SCORE
              <Icon name="chevron" size={10} />
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {["Beleza & Skincare", "Casa & Decoração"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1 rounded-md border border-brand-400/25 bg-brand-400/[0.08] px-1.5 py-0.5 text-[0.55rem] text-brand-200"
              >
                {chip}
                <Icon name="close" size={8} />
              </span>
            ))}
            {(["BR", "US"] as const).map((code) => (
              <span
                key={code}
                className="inline-flex items-center gap-1 rounded-md border border-brand-400/25 bg-brand-400/[0.08] px-1.5 py-0.5 text-[0.55rem] text-brand-200"
              >
                <CountryFlag code={code} />
                {code}
                <Icon name="close" size={8} />
              </span>
            ))}
          </div>

          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5"
              >
                <ProductThumb emoji={product.emoji} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.68rem] font-medium text-slate-100">{product.name}</p>
                  <p className="flex items-center gap-1.5 truncate text-[0.55rem] text-slate-500">
                    <CountryFlag code={product.country} />
                    {product.category}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <ScoreBadge score={product.score} size="sm" />
                  <TrendChip value={product.growth} small />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-brand-400/15 bg-brand-400/[0.06] px-3 py-2">
            <Icon name="sparkles" size={14} className="shrink-0 text-neon" />
            <p className="text-[0.6rem] leading-tight text-slate-300">
              Combine <span className="font-semibold text-white">categoria + país + MAX SCORE</span> para
              isolar exatamente o tipo de oportunidade que você procura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
