"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { links, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-max flex h-[72px] items-center justify-between gap-3 xl:gap-4">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-[0.8rem] font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white xl:px-3 xl:text-[0.83rem]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex xl:gap-3">
          <a
            href={links.login}
            data-cta="navbar-login"
            className="text-[0.83rem] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Entrar
          </a>
          <ButtonLink href={links.pricing} size="sm" data-cta="navbar-desktop">
            Começar agora
            <Icon name="arrow" size={15} className="transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.04] text-white lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container-max flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href={links.pricing}
            className="mt-2 w-full"
            data-cta="navbar-mobile"
            onClick={() => setOpen(false)}
          >
            Começar agora
            <Icon name="arrow" size={16} />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
