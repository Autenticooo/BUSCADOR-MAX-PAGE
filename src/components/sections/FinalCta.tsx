import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/20 bg-[linear-gradient(150deg,rgba(14,165,233,0.16),rgba(7,11,22,0.9)_55%,rgba(124,92,255,0.14))] px-6 py-14 text-center sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000,transparent_75%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_65%)] blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
                <Icon name="sparkles" size={13} />
                Acesso imediato
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Pare de procurar oportunidades <span className="text-gradient-blue">no escuro.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-pretty text-[1rem] leading-relaxed text-slate-300 sm:text-lg">
                Tenha acesso a uma ferramenta criada para encontrar sinais de produtos em crescimento no
                TikTok Shop.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href={site.checkoutUrl} size="lg" className="w-full sm:w-auto">
                  Entrar no BUSCADOR MAX
                  <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
                </ButtonLink>
                <span className="text-[0.82rem] text-slate-400">A partir de R$19/mês</span>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.8rem] text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={15} className="text-lime" /> Sem necessidade de experiência
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={15} className="text-lime" /> Novas oportunidades todos os dias
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={15} className="text-lime" /> Todos os planos com os mesmos recursos
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
