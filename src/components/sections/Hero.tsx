import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { CountryFlag } from "@/components/mockups/parts";

const highlights = [
  { icon: "chart" as const, label: "GVM Max" },
  { icon: "users" as const, label: "Criadores" },
  { icon: "video" as const, label: "Vídeos" },
  { icon: "zap" as const, label: "MAX SCORE" },
  { icon: "layers" as const, label: "Categoria" },
  { icon: "target" as const, label: "País" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_35%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.26),transparent_62%)] blur-[60px]" />
        <div className="absolute right-[-10rem] top-32 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.18),transparent_65%)] blur-[70px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-max">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] py-1.5 pl-1.5 pr-4 backdrop-blur">
              <span className="rounded-full bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-950">
                Novo
              </span>
              <span className="text-[0.78rem] font-medium text-slate-300">
                Inteligência de produtos para TikTok Shop
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.85rem]">
              Descubra os produtos que estão{" "}
              <span className="text-gradient-blue">escalando no TikTok Shop</span> antes da concorrência.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-slate-400 sm:text-lg">
              Pare de testar produtos no escuro. O BUSCADOR MAX reúne os sinais que indicam quais
              produtos estão ganhando força para você encontrar novas oportunidades antes da maioria.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="#planos" size="lg" className="w-full sm:w-auto">
                Começar agora
                <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#como-funciona" size="lg" variant="secondary" className="w-full sm:w-auto">
                <Icon name="play" size={15} />
                Ver como funciona
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.78rem] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" size={14} className="text-lime" /> Acesso imediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" size={14} className="text-lime" /> Dados atualizados diariamente
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" size={14} className="text-lime" /> A partir de R$19/mês
              </span>
            </div>
          </Reveal>
        </div>

        {/* Dashboard */}
        <Reveal delay={320} className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          <div
            aria-hidden
            className="absolute -inset-x-6 -top-10 bottom-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_60%)] blur-2xl"
          />
          <div className="relative rounded-[1.6rem] border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-sm sm:p-2.5">
            <DashboardMockup />
          </div>

          {/* Floating chips */}
          <div className="pointer-events-none absolute -left-3 top-24 hidden animate-float rounded-xl border border-neon/25 bg-ink-900/90 px-3 py-2 shadow-[0_18px_50px_-18px_rgba(34,211,238,0.6)] backdrop-blur xl:block">
            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500">Sinal detectado</p>
            <p className="mt-0.5 flex items-center gap-1.5 font-mono text-sm font-semibold text-neon">
              <Icon name="flame" size={14} /> +318% em 7d
            </p>
          </div>
          <div
            className="pointer-events-none absolute -right-4 bottom-24 hidden animate-float rounded-xl border border-brand-400/25 bg-ink-900/90 px-3 py-2 shadow-[0_18px_50px_-18px_rgba(56,189,248,0.6)] backdrop-blur xl:block"
            style={{ animationDelay: "1.4s" }}
          >
            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500">MAX SCORE</p>
            <p className="mt-0.5 flex items-center gap-1.5 font-mono text-sm font-semibold text-white">
              <Icon name="zap" size={14} className="text-brand-300" /> 96 / 100
            </p>
          </div>
          <div
            className="pointer-events-none absolute -left-6 bottom-14 hidden animate-float rounded-xl border border-white/[0.12] bg-ink-900/90 px-3 py-2 shadow-[0_18px_50px_-18px_rgba(14,165,233,0.5)] backdrop-blur xl:block"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500">Filtro ativo</p>
            <p className="mt-1 flex items-center gap-1.5 text-[0.72rem] font-medium text-white">
              <CountryFlag code="BR" /> Brasil
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Beleza</span>
            </p>
          </div>
        </Reveal>

        {/* Signals strip */}
        <Reveal delay={380}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-600">Sinais monitorados</span>
            {highlights.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[0.78rem] font-medium text-slate-300"
              >
                <Icon name={item.icon} size={14} className="text-brand-300" />
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
