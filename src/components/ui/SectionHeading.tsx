import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={60}>
        <h2
          className={cn(
            "text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]",
            align === "center" && "mx-auto max-w-4xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={120}>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed text-slate-400 sm:text-lg",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-400/[0.07] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-300">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon" />
      </span>
      {children}
    </span>
  );
}
