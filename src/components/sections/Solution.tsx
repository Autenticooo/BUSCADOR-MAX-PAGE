import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const features: { icon: IconName; title: string; text: string; metric: string }[] = [
  {
    icon: "flame",
    title: "Produto em escala",
    text: "Veja produtos que estão recebendo atenção e crescimento.",
    metric: "+318% / 7d",
  },
  {
    icon: "chart",
    title: "GVM Max",
    text: "Analise sinais de investimento e crescimento.",
    metric: "R$ 412k",
  },
  {
    icon: "users",
    title: "Criadores",
    text: "Descubra quantas pessoas estão promovendo cada produto.",
    metric: "1.284 ativos",
  },
  {
    icon: "video",
    title: "Vídeos",
    text: "Identifique produtos com movimentação real.",
    metric: "6.720 vídeos",
  },
  {
    icon: "zap",
    title: "MAX SCORE",
    text: "Tenha uma visão rápida do potencial da oportunidade.",
    metric: "96 / 100",
  },
  {
    icon: "link",
    title: "Link TikTok Shop",
    text: "Acesse rapidamente os produtos analisados.",
    metric: "1 clique",
  },
];

export function Solution() {
  return (
    <section id="solucao" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-max">
        <SectionHeading
          eyebrow="A plataforma"
          title={
            <>
              A vantagem não está em encontrar produtos. Está em encontrar{" "}
              <span className="text-gradient-blue">os produtos certos no momento certo.</span>
            </>
          }
          description="O BUSCADOR MAX transforma sinais dispersos do TikTok Shop em uma leitura clara de oportunidade — com métricas comparáveis, ranking e contexto para decidir rápido."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/35 hover:shadow-[0_30px_70px_-40px_rgba(34,211,238,0.85)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-400/20 bg-[linear-gradient(140deg,rgba(56,189,248,0.18),rgba(37,99,235,0.06))] text-brand-300 transition-colors group-hover:text-neon">
                    <Icon name={feature.icon} size={21} />
                  </div>
                  <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-[0.68rem] text-slate-400 transition-colors group-hover:border-neon/30 group-hover:text-neon">
                    {feature.metric}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-slate-400">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
