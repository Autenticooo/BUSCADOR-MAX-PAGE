"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pricing = document.getElementById("planos");
      const passedHero = window.scrollY > window.innerHeight * 0.9;
      const inPricing = pricing
        ? pricing.getBoundingClientRect().top < window.innerHeight &&
          pricing.getBoundingClientRect().bottom > 0
        : false;
      setShow(passedHero && !inPricing);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink-950/90 px-4 py-3 backdrop-blur-xl transition-all duration-300 lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.78rem] font-semibold text-white">Acesso a partir de R$10/mês</p>
          <p className="truncate text-[0.68rem] text-slate-500">Mesmos benefícios em todos os planos</p>
        </div>
        <ButtonLink href={links.pricing} size="sm" className="shrink-0" data-cta="sticky-mobile">
          Começar agora
          <Icon name="arrow" size={14} />
        </ButtonLink>
      </div>
    </div>
  );
}
