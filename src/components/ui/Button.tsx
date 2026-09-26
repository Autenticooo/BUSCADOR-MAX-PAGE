import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "cta-glow bg-[linear-gradient(100deg,#0ea5e9,#22d3ee_55%,#2563eb)] text-ink-950 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white backdrop-blur-sm hover:border-brand-400/45 hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
