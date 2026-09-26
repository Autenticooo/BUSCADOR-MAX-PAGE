import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { checkoutUrls, type PlanId } from "@/lib/site";
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
  id: PlanId;
  name: string;
  price: string;
  period: string;
  months: number;
  perMonth: string;
  perMonthValue: number;
  access: string;
  savings: string;
  savingsPercent: number;
  badge?: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "R$19",
    period: "/mês",
    months: 1,
    perMonth: "R$19,00",
    perMonthValue: 19,
    access: "Acesso por 1 mês, renovado mensalmente",
    savings: "Preço de referência",
    savingsPercent: 0,
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    price: "R$79",
    period: "à vista",
    months: 6,
    perMonth: "R$13,17",
    perMonthValue: 13.17,
    access: "Acesso por 6 meses",
    savings: "Economize R$35",
    savingsPercent: 31,
    badge: "Mais escolhido",
    featured: true,
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: "R$120",
    period: "à vista",
    months: 12,
    perMonth: "R$10,00",
    perMonthValue: 10,
    access: "Acesso por 12 meses",
    savings: "Economize R$108",
    savingsPercent: 47,
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
              Os benefícios são os mesmos. <span className="text-gradient-blue">Escolha só o período.</span>
            </>
          }
          description="Nenhum recurso fica de fora em nenhum plano. A única coisa que muda é por quanto tempo você mantém o acesso — e quanto você economiza no caminho."
        />

        {/* Faixa: mesmos recursos em todos os planos */}
        <Reveal delay={60}>
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-[0.88rem] font-semibold text-white">
                <Icon name="check" size={15} className="text-neon" strokeWidth={3} />
                Incluso em todos os planos, sem exceção
              </p>
              <span className="text-[0.75rem] text-slate-500">Mensal · Semestral · Anual</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[0.78rem] text-slate-300"
                >
                  <Icon name="check" size={11} className="text-brand-300" strokeWidth={3} />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-3">
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
                  <div className="flex items-center justify-between">
                    <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {plan.name}
                    </h3>
                    <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[0.65rem] text-slate-400">
                      {plan.months} {plan.months === 1 ? "mês" : "meses"}
                    </span>
                  </div>

                  <div className="mt-4 flex items-end gap-1.5">
                    <span className="font-mono text-[2.75rem] font-bold leading-none tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1.5 text-sm text-slate-500">{plan.period}</span>
                  </div>

                  <p className="mt-2 flex items-center gap-1.5 text-[0.82rem] text-slate-400">
                    <Icon name="clock" size={13} className="text-slate-500" />
                    {plan.access}
                  </p>

                  {/* destaque: custo por mês */}
                  <div
                    className={cn(
                      "mt-4 rounded-xl border p-3",
                      plan.savingsPercent > 0
                        ? "border-lime/20 bg-lime/[0.06]"
                        : "border-white/[0.07] bg-white/[0.02]",
                    )}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-[0.7rem] uppercase tracking-wider text-slate-500">Sai por</span>
                      <span
                        className={cn(
                          "font-mono text-lg font-bold",
                          plan.savingsPercent > 0 ? "text-lime" : "text-white",
                        )}
                      >
                        {plan.perMonth}
                        <span className="ml-1 text-[0.7rem] font-normal text-slate-500">/mês</span>
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          plan.savingsPercent > 0
                            ? "bg-gradient-to-r from-lime to-neon"
                            : "bg-white/15",
                        )}
                        style={{ width: `${Math.max(plan.savingsPercent, 6)}%` }}
                      />
                    </div>

                    <p
                      className={cn(
                        "mt-2 flex items-center gap-1.5 text-[0.72rem] font-medium",
                        plan.savingsPercent > 0 ? "text-lime" : "text-slate-500",
                      )}
                    >
                      {plan.savingsPercent > 0 ? (
                        <>
                          <Icon name="trending" size={12} />
                          {plan.savings} · {plan.savingsPercent}% mais barato que o mensal
                        </>
                      ) : (
                        <>
                          <Icon name="zap" size={12} />
                          {plan.savings}
                        </>
                      )}
                    </p>
                  </div>

                  <div className="my-6 h-px bg-gradient-to-r from-white/[0.12] to-transparent" />

                  <p className="mb-3 text-[0.72rem] uppercase tracking-[0.14em] text-slate-500">
                    Tudo incluso neste plano
                  </p>
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

                <div className="relative z-[2] mt-8">
                  <ButtonLink
                    href={checkoutUrls[plan.id]}
                    variant={plan.featured ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                    data-plan={plan.id}
                    data-cta={`plano-${plan.id}`}
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

        {/* Comparativo de custo por mês */}
        <Reveal delay={120}>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-[0.95rem] font-semibold text-white">
                Quanto mais longo o período, menor o custo por mês
              </p>
              <p className="text-[0.78rem] text-slate-500">Mesmos recursos nos três planos</p>
            </div>

            <div className="mt-5 space-y-3">
              {plans.map((plan) => (
                <div key={plan.id} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-[0.78rem] text-slate-400 sm:w-24">
                    {plan.name.replace("Plano ", "")}
                  </span>
                  <div className="h-7 flex-1 overflow-hidden rounded-lg bg-white/[0.04]">
                    <div
                      className={cn(
                        "flex h-full items-center justify-end rounded-lg pr-2.5 font-mono text-[0.72rem] font-semibold",
                        plan.perMonthValue === 19
                          ? "bg-white/[0.08] text-slate-300"
                          : "bg-[linear-gradient(100deg,rgba(14,165,233,0.85),rgba(34,211,238,0.85))] text-ink-950",
                      )}
                      style={{ width: `${(plan.perMonthValue / 19) * 100}%` }}
                    >
                      {plan.perMonth}/mês
                    </div>
                  </div>
                  <span
                    className={cn(
                      "hidden w-24 shrink-0 text-right font-mono text-[0.72rem] sm:block",
                      plan.savingsPercent > 0 ? "text-lime" : "text-slate-600",
                    )}
                  >
                    {plan.savingsPercent > 0 ? `−${plan.savingsPercent}%` : "—"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 text-[0.82rem] text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" size={15} className="text-brand-300" /> Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="refresh" size={15} className="text-brand-300" /> Novas análises todos os dias
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
