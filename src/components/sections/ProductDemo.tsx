"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { MetricsMockup, ProductDetailMockup, ProductListMockup } from "@/components/mockups/PlatformMockups";
import { cn } from "@/lib/utils";

const tabs: { id: string; label: string; icon: IconName; caption: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", caption: "Visão geral das oportunidades do dia, com ranking e sinais em destaque." },
  { id: "produtos", label: "Lista de produtos", icon: "layers", caption: "Todos os produtos analisados, filtráveis por nicho e ordenados por MAX SCORE." },
  { id: "produto", label: "Página do produto", icon: "target", caption: "Cada produto com seus sinais abertos: GVM Max, criadores, vídeos e crescimento." },
  { id: "metricas", label: "Métricas", icon: "chart", caption: "A leitura macro do mercado: nichos acelerando e distribuição de score." },
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
          description="Navegue pelas telas: do panorama do dia até o detalhe de cada produto analisado."
        />

        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                aria-pressed={active === tab.id}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[0.82rem] font-medium transition-all duration-300",
                  active === tab.id
                    ? "border-brand-400/40 bg-[linear-gradient(120deg,rgba(56,189,248,0.18),rgba(37,99,235,0.08))] text-white shadow-[0_12px_40px_-20px_rgba(34,211,238,0.9)]"
                    : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white",
                )}
              >
                <Icon name={tab.icon} size={15} className={active === tab.id ? "text-neon" : ""} />
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-8 max-w-6xl">
          <div className="relative rounded-[1.6rem] border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-sm sm:p-2.5">
            <div
              aria-hidden
              className="absolute -inset-x-4 -top-6 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_65%)] blur-2xl"
            />
            <div key={active} className="animate-rise">
              {active === "dashboard" && <DashboardMockup />}
              {active === "produtos" && <ProductListMockup />}
              {active === "produto" && <ProductDetailMockup />}
              {active === "metricas" && <MetricsMockup />}
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[0.9rem] text-slate-400">{current.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
