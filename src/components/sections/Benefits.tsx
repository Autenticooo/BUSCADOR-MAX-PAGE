import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clock",
    title: "Economize tempo pesquisando produtos",
    text: "O trabalho manual de garimpar vídeos e comparar produtos já vem pronto quando você abre a plataforma.",
  },
  {
    icon: "flame",
    title: "Encontre tendências antes da maioria",
    text: "Acompanhe produtos no momento em que os sinais começam a acelerar, não quando já estão saturados.",
  },
  {
    icon: "database",
    title: "Tenha dados organizados em um único lugar",
    text: "GVM Max, criadores, vídeos, crescimento e MAX SCORE reunidos em uma interface única.",
  },
  {
    icon: "target",
    title: "Tome decisões baseadas em sinais reais",
    text: "Cada produto vem com métricas comparáveis para você julgar o potencial com critério, não com achismo.",
  },
  {
    icon: "shield",
    title: "Pare de depender apenas de tentativa e erro",
    text: "Menos testes às cegas, mais escolhas com contexto — protegendo seu orçamento e sua energia.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-max">
        <SectionHeading
          eyebrow="Benefícios"
          title={
            <>
              O que muda quando você trabalha com <span className="text-gradient-blue">inteligência de dados</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 70}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30">
                <div
                  aria-hidden
                  className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-400/20 bg-brand-400/[0.08] text-brand-300">
                    <Icon name={benefit.icon} size={18} />
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-400/25 to-transparent" />
                </div>
                <h3 className="relative mt-5 text-[1.02rem] font-semibold leading-snug text-white">
                  {benefit.title}
                </h3>
                <p className="relative mt-2 text-[0.92rem] leading-relaxed text-slate-400">{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <CtaBand
            title="Comece hoje com o mesmo acesso completo em qualquer plano."
            text="Escolha só por quanto tempo quer manter a ferramenta — os recursos são idênticos."
            cta="Ver planos"
            id="beneficios"
            note="Mensal R$19 · Semestral R$79 · Anual R$120"
          />
        </div>
      </div>
    </section>
  );
}
