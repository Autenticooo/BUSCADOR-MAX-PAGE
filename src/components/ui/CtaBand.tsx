import { ButtonLink } from "./Button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  text?: string;
  cta?: string;
  href?: string;
  note?: string;
};

export function CtaBand({
  title,
  text,
  cta = "Começar agora",
  href = "#planos",
  note = "Acesso imediato · a partir de R$10/mês no plano anual",
}: Props) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-brand-400/20 bg-[linear-gradient(120deg,rgba(14,165,233,0.12),rgba(7,11,22,0.75)_60%,rgba(124,92,255,0.10))] px-6 py-7 sm:px-9 sm:py-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,#000,transparent_75%)]"
        />
        <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-balance text-lg font-semibold leading-snug text-white sm:text-xl">{title}</p>
            {text ? <p className="mt-1.5 text-[0.92rem] leading-relaxed text-slate-400">{text}</p> : null}
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-center lg:items-end">
            <ButtonLink href={href} size="lg" className="w-full sm:w-auto">
              {cta}
              <Icon name="arrow" size={17} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <span className="text-[0.72rem] text-slate-500">{note}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function InlineCta({ label = "Ver planos e começar" }: { label?: string }) {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <ButtonLink href="#planos" size="lg">
        {label}
        <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
      </ButtonLink>
      <ButtonLink href="#plataforma" size="lg" variant="secondary">
        <Icon name="play" size={15} />
        Ver a plataforma por dentro
      </ButtonLink>
    </div>
  );
}
