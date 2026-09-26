import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";

const steps: { icon: IconName; title: string; text: string; tag: string }[] = [
  {
    icon: "refresh",
    title: "Todos os dias novas oportunidades são analisadas",
    text: "A plataforma acompanha o movimento do TikTok Shop e reúne os sinais de produtos que estão ganhando tração.",
    tag: "Atualização diária",
  },
  {
    icon: "layers",
    title: "Você acessa os produtos organizados com dados importantes",
    text: "GVM Max, criadores, vídeos, crescimento e MAX SCORE lado a lado — tudo comparável, sem planilha e sem trabalho manual.",
    tag: "Dados organizados",
  },
  {
    icon: "rocket",
    title: "Você encontra oportunidades e toma decisões mais rápidas",
    text: "Com o cenário claro, você escolhe onde investir tempo e dinheiro — e age enquanto a oportunidade ainda está em ascensão.",
    tag: "Decisão rápida",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent_75%)]"
      />
      <div className="container-max">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Três passos entre você e a próxima <span className="text-gradient-blue">oportunidade</span>
            </>
          }
          description="Sem curva de aprendizado. Você entra, lê os sinais e decide."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent lg:block"
          />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 110}>
                <div className="relative h-full">
                  <div className="relative z-10 mx-auto flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] blur-md" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-400/25 bg-ink-900 text-brand-300 shadow-[0_0_40px_-12px_rgba(34,211,238,0.9)]">
                      <Icon name={step.icon} size={24} />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] font-mono text-[0.7rem] font-bold text-ink-950">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 h-full rounded-2xl border border-white/[0.07] bg-[linear-gradient(165deg,rgba(255,255,255,0.045),rgba(255,255,255,0.008))] p-6 text-center">
                    <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {step.tag}
                    </span>
                    <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug text-white">{step.title}</h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-slate-400">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <CtaBand
            title="Todo dia a análise acontece. Basta você abrir e usar."
            text="Enquanto outros ainda estão procurando, você começa o dia com as oportunidades já organizadas."
            cta="Começar agora"
            id="como-funciona"
          />
        </div>
      </div>
    </section>
  );
}
