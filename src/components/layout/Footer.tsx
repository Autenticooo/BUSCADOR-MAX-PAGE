import { Logo } from "./Logo";
import { links, navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950">
      <div className="container-max pb-28 pt-14 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[0.9rem] leading-relaxed text-slate-500">
              Plataforma de inteligência de produtos para TikTok Shop. Reunimos sinais de crescimento para
              você identificar oportunidades com mais clareza e velocidade.
            </p>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-slate-500 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.88rem] text-slate-500">
              <li>
                <a
                  href={links.support}
                  className="transition-colors hover:text-brand-300"
                >
                  {site.supportEmail}
                </a>
              </li>
              <li>
                <a href={links.pricing} data-cta="footer" className="transition-colors hover:text-brand-300">
                  Assinar agora
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-7 text-[0.78rem] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-slate-600">
            O BUSCADOR MAX é uma ferramenta independente de análise de dados e não possui vínculo com o
            TikTok Shop. Resultados dependem da estratégia e execução de cada usuário.
          </p>
        </div>
      </div>
    </footer>
  );
}
