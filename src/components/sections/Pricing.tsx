import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const benefits = [
  "Acesso completo ao BUSCADOR MAX",
  "Produtos analisados diariamente",
  "Dashboard de oportunidades",
  "Métricas GVM Max",
  "MAX SCORE",
  "Favoritar produtos",
  "Área de membros",
];

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  equivalent: string;
  note: string;
  badge?: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "R$19",
    period: "/mês",
    equivalent: "Cobrança mensal recorrente",
    note: "Flexível para começar agora",
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    price: "R$79",
    period: "/6 meses",
    equivalent: "Equivale a R$13,17 por mês",
    note: "Economize R$35 no período",
    badge: "Mais escolhido",
    featured: true,
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "R$120",
    period: "/12 meses",
    equivalent: "Equivale a R$10,00 por mês",
    note: "Economize R$108 no período",
    badge: "Melhor valor",
  },
];

export function Pricing() {
  return (
    <section id="planos" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_55%_at_50%_30%,rgba(37,99,235,0.14),transparent_70%)]"
      />
      <div className="container-max">
        <SectionHeading
          eyebrow="Planos"
          title={
            <>
              Escolha o período. <span className="text-gradient-blue">Os benefícios são os mesmos.</span>
            </>
          }
          description="Todos os planos dão acesso completo ao BUSCADOR MAX. A única diferença é o tempo de acesso — e quanto você economiza."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 90} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300",
                  plan.featured
                    ? "aurora-border bg-[linear-gradient(165deg,rgba(14,165,233,0.14),rgba(7,11,22,0.92))] shadow-[0_40px_100px_-45px_rgba(34,211,238,0.9)] lg:-translate-y-3 lg:scale-[1.03]"
                    : "border border-white/[0.08] bg-[linear-gradient(165deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01))] hover:-translate-y-1 hover:border-brand-400/30",
                )}
              >
                {plan.badge ? (
                  <span
                    className={cn(
                      "absolute -top-3 left-7 z-10 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em]",
                      plan.featured
                        ? "bg-[linear-gradient(100deg,#0ea5e9,#22d3ee)] text-ink-950 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.9)]"
                        : "border border-violet/35 bg-violet/15 text-violet",
                    )}
                  >
                    {plan.badge}
                  </span>
                ) : null}

                <div className="relative z-[2]">
                  <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-1.5">
                    <span className="font-mono text-[2.75rem] font-bold leading-none tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1.5 text-sm text-slate-500">{plan.period}</span>
                  </div>

                  <p className="mt-2 text-[0.82rem] text-slate-400">{plan.equivalent}</p>
                  <p
                    className={cn(
                      "mt-3 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[0.72rem] font-medium",
                      plan.featured || plan.badge
                        ? "border-lime/25 bg-lime/[0.08] text-lime"
                        : "border-white/[0.08] bg-white/[0.03] text-slate-400",
                    )}
                  >
                    <Icon name={plan.badge ? "trending" : "zap"} size={12} />
                    {plan.note}
                  </p>

                  <div className="my-6 h-px bg-gradient-to-r from-white/[0.12] to-transparent" />

                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-[0.9rem] text-slate-300">
                        <span
                          className={cn(
                            "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                            plan.featured ? "bg-neon/20 text-neon" : "bg-brand-400/15 text-brand-300",
                          )}
                        >
                          <Icon name="check" size={11} strokeWidth={3} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-[2] mt-8 pt-0">
                  <ButtonLink
                    href={site.checkoutUrl}
                    variant={plan.featured ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                    data-plan={plan.id}
                  >
                    Assinar agora
                    <Icon name="arrow" size={17} className="transition-transform group-hover:translate-x-1" />
                  </ButtonLink>
                  <p className="mt-3 text-center text-[0.7rem] text-slate-500">
                    Acesso liberado imediatamente após a confirmação
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 text-[0.82rem] text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" size={15} className="text-brand-300" /> Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="refresh" size={15} className="text-brand-300" /> Dados atualizados diariamente
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="lock" size={15} className="text-brand-300" /> Cancele quando quiser
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
