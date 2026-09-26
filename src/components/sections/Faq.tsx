"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    question: "O BUSCADOR MAX é uma lista de produtos?",
    answer:
      "Não. É uma ferramenta de inteligência que organiza sinais e dados para ajudar você a encontrar oportunidades no TikTok Shop.",
  },
  {
    question: "Os produtos são atualizados?",
    answer: "Sim. Novos produtos e oportunidades são adicionados constantemente.",
  },
  {
    question: "Preciso ter experiência?",
    answer:
      "Não. A plataforma foi criada para facilitar a análise mesmo para quem está começando.",
  },
  {
    question: "Todos os planos possuem os mesmos benefícios?",
    answer: "Sim. A diferença está apenas no período contratado.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-max">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Tudo o que você precisa saber <span className="text-gradient-blue">antes de entrar</span>
            </>
          }
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={faq.question} delay={index * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    isOpen
                      ? "border-brand-400/30 bg-[linear-gradient(150deg,rgba(14,165,233,0.09),rgba(255,255,255,0.012))]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/15",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[0.98rem] font-semibold text-white sm:text-[1.02rem]">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-neon/35 bg-neon/10 text-neon"
                          : "border-white/[0.09] bg-white/[0.03] text-slate-400",
                      )}
                    >
                      <Icon name="chevron" size={16} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[0.94rem] leading-relaxed text-slate-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-[0.88rem] text-slate-500">
            Ficou com outra dúvida?{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-brand-300 underline-offset-4 hover:underline"
            >
              Fale com o suporte
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
