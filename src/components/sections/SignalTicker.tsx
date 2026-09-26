import { Icon, type IconName } from "@/components/ui/Icon";

const signals: { icon: IconName; label: string }[] = [
  { icon: "chart", label: "GVM Max" },
  { icon: "users", label: "Quantidade de criadores" },
  { icon: "video", label: "Quantidade de vídeos" },
  { icon: "trending", label: "Crescimento do produto" },
  { icon: "zap", label: "MAX SCORE" },
  { icon: "layers", label: "Categoria" },
  { icon: "target", label: "País" },
  { icon: "flame", label: "Produtos em escala" },
  { icon: "star", label: "Favoritos" },
  { icon: "link", label: "Link TikTok Shop" },
];

const pillars = [
  { icon: "database" as const, title: "Sinais em um só lugar", text: "Sem planilha, sem garimpo manual." },
  { icon: "refresh" as const, title: "Análises todos os dias", text: "Novas oportunidades continuamente." },
  { icon: "chart" as const, title: "Ranking por MAX SCORE", text: "Leitura rápida do potencial." },
  { icon: "filter" as const, title: "Recorte do seu negócio", text: "Filtre por categoria e país." },
];

export function SignalTicker() {
  const list = [...signals, ...signals];

  return (
    <section
      aria-label="O que o BUSCADOR MAX analisa"
      className="relative border-y border-white/[0.06] bg-ink-900/40 py-8"
    >
      <div className="container-max mb-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-400/20 bg-brand-400/[0.08] text-brand-300">
                <Icon name={pillar.icon} size={15} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.85rem] font-semibold text-white">{pillar.title}</span>
                <span className="block text-[0.76rem] leading-snug text-slate-500">{pillar.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-max mb-3">
        <p className="text-center text-[0.68rem] uppercase tracking-[0.22em] text-slate-600">
          Sinais analisados em cada produto
        </p>
      </div>

      <div className="relative overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-3">
          {list.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2"
            >
              <Icon name={item.icon} size={14} className="text-brand-300" />
              <span className="whitespace-nowrap text-[0.82rem] font-medium text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
