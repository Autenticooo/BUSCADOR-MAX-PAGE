import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const pains: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "alert",
    title: "Testar dezenas de produtos sem saber se existe demanda",
    text: "Cada teste é dinheiro, criativo e tempo investidos em uma aposta que poderia ter sido validada por dados antes de começar.",
  },
  {
    icon: "clock",
    title: "Perder tendências porque descobriu tarde demais",
    text: "Quando o produto já está em todo lugar, a janela de maior oportunidade normalmente já passou — e a disputa ficou muito mais cara.",
  },
  {
    icon: "eyeoff",
    title: "Gastar horas analisando manualmente milhares de vídeos",
    text: "Rolar o feed procurando padrões não escala. É trabalho manual, cansativo e que raramente entrega uma conclusão confiável.",
  },
  {
    icon: "chart",
    title: "Não saber quais produtos possuem sinais reais de escala",
    text: "Sem métricas comparáveis, tudo parece promissor. O resultado é decidir por intuição em um mercado que se move rápido demais.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,92,255,0.08),transparent_70%)]"
      />
      <div className="container-max">
        <SectionHeading
          eyebrow="O cenário real"
          title={
            <>
              Enquanto muitos vendedores gastam dinheiro tentando adivinhar,{" "}
              <span className="text-gradient-blue">outros encontram oportunidades antes.</span>
            </>
          }
          description="O TikTok Shop se move em dias, não em meses. Quem só reage ao que já está viralizando entra na disputa quando a margem e a atenção já foram divididas."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(155deg,rgba(255,255,255,0.045),rgba(255,255,255,0.008))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/20">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(248,113,113,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.08] text-red-300">
                  <Icon name={pain.icon} size={19} />
                </div>
                <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-white">{pain.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-slate-400">{pain.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-brand-400/15 bg-[linear-gradient(120deg,rgba(14,165,233,0.09),rgba(7,11,22,0.6)_55%)] p-7 sm:p-10">
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(34,211,238,0.14),transparent_70%)]"
            />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-ink-950">
                <Icon name="sparkles" size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-lg font-semibold text-white sm:text-xl">
                  O problema nunca foi falta de esforço. É falta de inteligência de dados.
                </p>
                <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-slate-400">
                  Os sinais de que um produto está ganhando escala já existem — estão espalhados em milhares
                  de vídeos, criadores e páginas. O que falta é alguém reunindo, organizando e ranqueando
                  tudo isso em um só lugar, todos os dias.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
