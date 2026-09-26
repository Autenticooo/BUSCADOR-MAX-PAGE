import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FiltersMockup } from "@/components/mockups/FiltersMockup";
import { OpportunityCardsMockup } from "@/components/mockups/OpportunityCardsMockup";
import { CtaBand } from "@/components/ui/CtaBand";
import { cn } from "@/lib/utils";

type Row = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  bullets: { icon: IconName; label: string; text: string }[];
  mockup: React.ReactNode;
  reverse?: boolean;
};

const rows: Row[] = [
  {
    eyebrow: "Filtros inteligentes",
    title: (
      <>
        Filtre por <span className="text-gradient-blue">categoria e país</span> e veja só o que interessa
        para você.
      </>
    ),
    text: "Em vez de olhar tudo, você isola o recorte exato do seu negócio: o nicho que você já vende, o mercado onde você atua e a faixa de MAX SCORE que faz sentido testar.",
    bullets: [
      { icon: "layers", label: "Categoria", text: "Selecione os nichos que fazem sentido para o seu negócio." },
      { icon: "target", label: "País", text: "Analise o mercado onde você vende, sem ruído dos outros." },
      { icon: "zap", label: "Faixa de MAX SCORE", text: "Mostre apenas produtos acima do score que você define." },
      { icon: "clock", label: "Período", text: "Analise janelas de 24 horas, 7 dias ou 30 dias." },
    ],
    mockup: <FiltersMockup />,
  },
  {
    eyebrow: "Cards de oportunidade",
    title: (
      <>
        Cada oportunidade vira um <span className="text-gradient-blue">card com os sinais na frente</span>{" "}
        dos seus olhos.
      </>
    ),
    text: "Sem abrir planilha e sem cruzar dados na mão: o card já mostra GVM Max, criadores, vídeos, crescimento, MAX SCORE e os sinais que dispararam o alerta.",
    bullets: [
      { icon: "flame", label: "Sinal forte", text: "Destaque automático para produtos acelerando agora." },
      { icon: "chart", label: "Mini gráfico", text: "A curva dos últimos dias direto no card." },
      { icon: "star", label: "Favoritar", text: "Salve produtos para acompanhar a evolução depois." },
      { icon: "link", label: "Link direto", text: "Abra o produto no TikTok Shop em um clique." },
    ],
    mockup: <OpportunityCardsMockup />,
    reverse: true,
  },
];

const capabilities: { icon: IconName; label: string }[] = [
  { icon: "filter", label: "Filtro por categoria" },
  { icon: "target", label: "Filtro por país" },
  { icon: "chart", label: "Ordenação por MAX SCORE" },
  { icon: "trending", label: "Histórico de crescimento" },
  { icon: "users", label: "Criadores por produto" },
  { icon: "video", label: "Volume de vídeos" },
  { icon: "star", label: "Favoritos" },
  { icon: "link", label: "Link direto TikTok Shop" },
  { icon: "refresh", label: "Atualização diária" },
  { icon: "database", label: "Base de produtos analisados" },
  { icon: "search", label: "Busca por nicho e criador" },
  { icon: "lock", label: "Área de membros" },
];

export function FeatureShowcase() {
  return (
    <section id="recursos" className="relative scroll-mt-24 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(124,92,255,0.08),transparent_70%)]"
      />
      <div className="container-max space-y-20 sm:space-y-28">
        {rows.map((row) => (
          <div
            key={row.eyebrow}
            className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
          >
            <Reveal className={cn("min-w-0", row.reverse && "lg:order-2")}>
              <Eyebrow>{row.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
                {row.title}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-slate-400">{row.text}</p>

              <ul className="mt-7 space-y-3.5">
                {row.bullets.map((bullet) => (
                  <li key={bullet.label} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-400/20 bg-brand-400/[0.08] text-brand-300">
                      <Icon name={bullet.icon} size={15} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.88rem] font-semibold text-white">{bullet.label}</span>
                      <span className="block text-[0.85rem] leading-relaxed text-slate-400">
                        {bullet.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className={cn("min-w-0", row.reverse && "lg:order-1")}>
              <div className="relative rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-sm sm:p-2.5">
                <div
                  aria-hidden
                  className="absolute -inset-x-4 -top-6 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.16),transparent_65%)] blur-2xl"
                />
                {row.mockup}
              </div>
              <p className="mt-3 text-center text-[0.72rem] text-slate-600">
                Tela demonstrativa da interface do BUSCADOR MAX.
              </p>
            </Reveal>
          </div>
        ))}

        {/* Grade de capacidades */}
        <Reveal>
          <div className="rounded-2xl border border-white/[0.07] bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.008))] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">Tudo isso dentro da plataforma</h3>
                <p className="mt-1 text-[0.9rem] text-slate-400">
                  Todos os recursos estão liberados em qualquer plano.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.08] px-3 py-1.5 text-[0.72rem] font-semibold text-lime">
                <Icon name="check" size={13} strokeWidth={3} />
                Acesso completo
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-brand-400/25 hover:bg-brand-400/[0.04]"
                >
                  <Icon name={capability.icon} size={14} className="shrink-0 text-brand-300" />
                  <span className="text-[0.78rem] leading-tight text-slate-300">{capability.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <CtaBand
          title="Uma ferramenta de inteligência de produtos, não uma lista pronta."
          text="Você entra, filtra pelo seu recorte e encontra as oportunidades com os sinais na mesa."
          cta="Começar agora"
        />
      </div>
    </section>
  );
}
