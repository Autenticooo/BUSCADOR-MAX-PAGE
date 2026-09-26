"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { ProductTableMockup } from "@/components/mockups/ProductTableMockup";
import { RankingMockup } from "@/components/mockups/RankingMockup";
import { ProductDetailMockup } from "@/components/mockups/ProductDetailMockup";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  icon: IconName;
  short: string;
  caption: string;
  bullets: string[];
};

const tabs: Tab[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    short: "Panorama do dia",
    caption: "Visão geral das oportunidades do dia, com KPIs, curva de crescimento e top MAX SCORE.",
    bullets: ["KPIs em tempo real", "Curva de GVM Max", "Top 4 do dia"],
  },
  {
    id: "tabela",
    label: "Tabela de produtos",
    icon: "layers",
    short: "Base completa",
    caption:
      "Todos os produtos analisados em uma tabela ordenável, com país, categoria, GVM Max, criadores, vídeos e MAX SCORE lado a lado.",
    bullets: ["Ordenação por qualquer métrica", "Filtros ativos visíveis", "Link direto para o TikTok Shop"],
  },
  {
    id: "ranking",
    label: "Ranking MAX SCORE",
    icon: "chart",
    short: "Quem está na frente",
    caption:
      "O ranking recalculado todos os dias: pódio, variação de posições e a classificação completa das oportunidades.",
    bullets: ["Pódio do dia", "Variação de posição", "Períodos de 24h, 7d e 30d"],
  },
  {
    id: "produto",
    label: "Página do produto",
    icon: "target",
    short: "Análise individual",
    caption:
      "Cada produto com os sinais abertos: composição do MAX SCORE, criadores em destaque, timeline de sinais e comparação com o nicho.",
    bullets: ["Composição do MAX SCORE", "Criadores em destaque", "Comparação com a média do nicho"],
  },
];

export function ProductDemo() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="plataforma" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_40%,rgba(14,165,233,0.10),transparent_70%)]"
      />
      <div className="container-max">
        <SectionHeading
          eyebrow="Por dentro da plataforma"
          title={
            <>
              Transforme dados espalhados pelo TikTok Shop em{" "}
              <span className="text-gradient-blue">decisões mais inteligentes.</span>
            </>
          }
          description="Estas são as telas reais que você usa todos os dias. Navegue entre elas:"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[264px_1fr] lg:gap-7">
          {/* Navegação lateral */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={active === tab.id}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 lg:w-full",
                    active === tab.id
                      ? "border-brand-400/40 bg-[linear-gradient(120deg,rgba(56,189,248,0.16),rgba(37,99,235,0.06))] shadow-[0_14px_44px_-24px_rgba(34,211,238,0.95)]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      active === tab.id
                        ? "border-neon/35 bg-neon/10 text-neon"
                        : "border-white/[0.08] bg-white/[0.03] text-slate-400",
                    )}
                  >
                    <Icon name={tab.icon} size={17} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block whitespace-nowrap text-[0.85rem] font-semibold lg:whitespace-normal",
                        active === tab.id ? "text-white" : "text-slate-300",
                      )}
                    >
                      {tab.label}
                    </span>
                    <span className="hidden text-[0.7rem] text-slate-500 lg:block">{tab.short}</span>
                  </span>
                </button>
              ))}

              <div className="hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 lg:block">
                <p className="text-[0.7rem] leading-relaxed text-slate-400">{current.caption}</p>
                <ul className="mt-3 space-y-1.5">
                  {current.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-[0.72rem] text-slate-300">
                      <Icon name="check" size={12} className="mt-0.5 shrink-0 text-neon" strokeWidth={3} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Tela */}
          <Reveal delay={80} className="min-w-0">
            <div className="relative rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-sm sm:p-2.5">
              <div
                aria-hidden
                className="absolute -inset-x-4 -top-6 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_65%)] blur-2xl"
              />
              <div key={active} className="animate-rise">
                {active === "dashboard" && <DashboardMockup />}
                {active === "tabela" && <ProductTableMockup />}
                {active === "ranking" && <RankingMockup />}
                {active === "produto" && <ProductDetailMockup />}
              </div>
            </div>
            <p className="mt-4 text-[0.88rem] text-slate-400 lg:hidden">{current.caption}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
