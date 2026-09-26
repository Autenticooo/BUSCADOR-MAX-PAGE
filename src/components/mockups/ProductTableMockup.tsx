import { products } from "@/data/products";
import { Sparkline } from "@/components/ui/Charts";
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

const columns = [
  { label: "Produto", className: "w-[24%]" },
  { label: "Categoria", className: "w-[13%] min-w-0" },
  { label: "País", className: "w-[10%]" },
  { label: "GVM Max", className: "w-[10%]", sorted: false },
  { label: "Criadores", className: "w-[9%]" },
  { label: "Vídeos", className: "w-[9%]" },
  { label: "Crescimento", className: "w-[12%]" },
  { label: "MAX SCORE", className: "w-[13%]", sorted: true },
];

export function ProductTableMockup() {
  return (
    <AppFrame path="produtos" active="produtos">
      <TopBar
        title="Todos os produtos analisados"
        breadcrumb="Início / Produtos"
        action={
          <span className="hidden items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[0.66rem] text-slate-300 sm:inline-flex">
            <Icon name="database" size={12} className="text-brand-300" />
            18.402 produtos
          </span>
        }
      />
      <FilterBar />

      <div className="p-3.5 sm:p-4">
        {/* chips de filtros ativos */}
        <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
          <span className="text-[0.58rem] uppercase tracking-wider text-slate-600">Filtros ativos</span>
          {[
            { label: "Beleza & Skincare" },
            { label: "Brasil", flag: "BR" as const },
            { label: "MAX SCORE ≥ 80" },
            { label: "Últimos 7 dias" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1 rounded-md border border-brand-400/25 bg-brand-400/[0.08] px-1.5 py-0.5 text-[0.6rem] text-brand-200"
            >
              {chip.flag ? <CountryFlag code={chip.flag} /> : null}
              {chip.label}
              <Icon name="close" size={9} className="text-brand-300/70" />
            </span>
          ))}
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/[0.07] bg-white/[0.02]">
          <div className="min-w-[780px]">
            {/* cabeçalho */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2">
              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border border-white/15 bg-white/[0.04]" />
              {columns.map((column) => (
                <span
                  key={column.label}
                  className={`flex items-center gap-1 text-[0.56rem] uppercase tracking-wider ${
                    column.sorted ? "text-brand-300" : "text-slate-500"
                  } ${column.className}`}
                >
                  {column.label}
                  <Icon
                    name="chevron"
                    size={9}
                    className={column.sorted ? "text-brand-300" : "text-slate-700"}
                  />
                </span>
              ))}
              <span className="ml-auto w-8" />
            </div>

            {/* linhas */}
            <div className="divide-y divide-white/[0.05]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex items-center gap-2 px-3 py-2 transition-colors hover:bg-brand-400/[0.04] ${
                    index === 0 ? "bg-brand-400/[0.05]" : ""
                  }`}
                >
                  <span
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${
                      index === 0
                        ? "border-neon/50 bg-neon/20 text-neon"
                        : "border-white/15 bg-white/[0.04]"
                    }`}
                  >
                    {index === 0 ? <Icon name="check" size={8} strokeWidth={3.5} /> : null}
                  </span>

                  <div className="flex w-[24%] min-w-0 items-center gap-2">
                    <ProductThumb emoji={product.emoji} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-[0.7rem] font-medium text-slate-100">{product.name}</p>
                      <p className="truncate font-mono text-[0.55rem] text-slate-600">{product.id}</p>
                    </div>
                  </div>

                  <span className="w-[13%] min-w-0 truncate text-[0.65rem] text-slate-400">{product.category}</span>

                  <span className="flex w-[10%] items-center gap-1.5 text-[0.65rem] text-slate-300">
                    <CountryFlag code={product.country} />
                    {product.country}
                  </span>

                  <span className="w-[10%] font-mono text-[0.68rem] text-white">{product.gvm}</span>
                  <span className="w-[9%] font-mono text-[0.68rem] text-slate-300">
                    {product.creators.toLocaleString("pt-BR")}
                  </span>
                  <span className="w-[9%] font-mono text-[0.68rem] text-slate-300">
                    {product.videos.toLocaleString("pt-BR")}
                  </span>

                  <span className="flex w-[12%] items-center gap-1.5">
                    <TrendChip value={product.growth} small />
                    <span className="hidden w-10 lg:block">
                      <Sparkline id={`table-${index}`} data={product.trend} className="h-4" />
                    </span>
                  </span>

                  <span className="flex w-[13%] items-center gap-1.5">
                    <ScoreBadge score={product.score} size="sm" />
                    <StatusChip status={product.status} />
                  </span>

                  <span className="ml-auto flex w-8 items-center justify-end gap-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-slate-400">
                      <Icon name="star" size={11} />
                    </span>
                    <span className="hidden h-6 w-6 items-center justify-center rounded-md border border-brand-400/25 bg-brand-400/10 text-brand-300 lg:flex">
                      <Icon name="link" size={11} />
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* rodapé / paginação */}
            <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2">
              <p className="text-[0.6rem] text-slate-500">
                Mostrando <span className="font-mono text-slate-300">1–8</span> de{" "}
                <span className="font-mono text-slate-300">18.402</span> produtos
              </p>
              <div className="flex items-center gap-1">
                {["‹", "1", "2", "3", "…", "2.300", "›"].map((page, index) => (
                  <span
                    key={`${page}-${index}`}
                    className={`flex h-5 min-w-5 items-center justify-center rounded border px-1 font-mono text-[0.55rem] ${
                      page === "1"
                        ? "border-brand-400/35 bg-brand-400/10 text-brand-200"
                        : "border-white/[0.07] bg-white/[0.02] text-slate-500"
                    }`}
                  >
                    {page}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
