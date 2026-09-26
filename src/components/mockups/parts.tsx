import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { countryNames, type CountryCode } from "@/data/products";

/* ------------------------------------------------------------------ */
/* Bandeiras em SVG (funcionam em qualquer sistema, sem emoji de país)  */
/* ------------------------------------------------------------------ */

const flags: Record<CountryCode, ReactNode> = {
  BR: (
    <>
      <rect width="6" height="4" fill="#009b3a" />
      <path d="M3 .55 5.35 2 3 3.45.65 2Z" fill="#fedf00" />
      <circle cx="3" cy="2" r="0.78" fill="#002776" />
    </>
  ),
  US: (
    <>
      <rect width="6" height="4" fill="#fff" />
      <g fill="#b22234">
        <rect y="0" width="6" height="0.57" />
        <rect y="1.14" width="6" height="0.57" />
        <rect y="2.28" width="6" height="0.57" />
        <rect y="3.43" width="6" height="0.57" />
      </g>
      <rect width="2.6" height="2.28" fill="#3c3b6e" />
    </>
  ),
  GB: (
    <>
      <rect width="6" height="4" fill="#012169" />
      <path d="M0 0 6 4M6 0 0 4" stroke="#fff" strokeWidth="0.8" />
      <path d="M0 0 6 4M6 0 0 4" stroke="#c8102e" strokeWidth="0.45" />
      <path d="M3 0v4M0 2h6" stroke="#fff" strokeWidth="1.3" />
      <path d="M3 0v4M0 2h6" stroke="#c8102e" strokeWidth="0.75" />
    </>
  ),
  ES: (
    <>
      <rect width="6" height="4" fill="#c60b1e" />
      <rect y="1" width="6" height="2" fill="#ffc400" />
    </>
  ),
  MX: (
    <>
      <rect width="2" height="4" fill="#006847" />
      <rect x="2" width="2" height="4" fill="#fff" />
      <rect x="4" width="2" height="4" fill="#ce1126" />
      <circle cx="3" cy="2" r="0.45" fill="#8b5a2b" />
    </>
  ),
  ID: (
    <>
      <rect width="6" height="2" fill="#ce1126" />
      <rect y="2" width="6" height="2" fill="#fff" />
    </>
  ),
  TH: (
    <>
      <rect width="6" height="4" fill="#a51931" />
      <rect y="0.8" width="6" height="2.4" fill="#f4f5f8" />
      <rect y="1.35" width="6" height="1.3" fill="#2d2a4a" />
    </>
  ),
  DE: (
    <>
      <rect width="6" height="1.34" fill="#000" />
      <rect y="1.34" width="6" height="1.33" fill="#dd0000" />
      <rect y="2.67" width="6" height="1.33" fill="#ffce00" />
    </>
  ),
};

export function CountryFlag({ code, className }: { code: CountryCode; className?: string }) {
  return (
    <svg
      viewBox="0 0 6 4"
      className={cn("h-3 w-[1.125rem] shrink-0 rounded-[2px] ring-1 ring-white/20", className)}
      role="img"
      aria-label={countryNames[code]}
    >
      {flags[code]}
    </svg>
  );
}

export function CountryPill({ code, showName = true }: { code: CountryCode; showName?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[0.62rem] text-slate-300">
      <CountryFlag code={code} />
      {showName ? countryNames[code] : code}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Badges e chips                                                       */
/* ------------------------------------------------------------------ */

export function ScoreBadge({ score, size = "md" }: { score: number; size?: "sm" | "md" }) {
  const tone =
    score >= 90
      ? "from-neon/25 to-brand-500/15 text-neon border-neon/35"
      : score >= 80
        ? "from-brand-400/20 to-brand-600/10 text-brand-300 border-brand-400/30"
        : "from-white/10 to-white/[0.03] text-slate-300 border-white/12";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border bg-gradient-to-br font-mono font-semibold",
        tone,
        size === "sm" ? "px-1.5 py-0.5 text-[0.65rem]" : "px-2 py-1 text-xs",
      )}
    >
      <Icon name="zap" size={size === "sm" ? 10 : 12} />
      {score}
    </span>
  );
}

export function TrendChip({ value, small = false }: { value: number; small?: boolean }) {
  const positive = value >= 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border font-mono font-semibold",
        positive
          ? "border-lime/25 bg-lime/[0.08] text-lime"
          : "border-red-400/25 bg-red-400/[0.08] text-red-300",
        small ? "px-1 py-px text-[0.58rem]" : "px-1.5 py-0.5 text-[0.65rem]",
      )}
    >
      <Icon name="trending" size={small ? 9 : 11} className={positive ? "" : "-scale-y-100"} />
      {positive ? "+" : ""}
      {value}%
    </span>
  );
}

export const statusStyles: Record<string, string> = {
  escalando: "border-lime/25 bg-lime/10 text-lime",
  aquecendo: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  estável: "border-white/12 bg-white/5 text-slate-300",
};

export function StatusChip({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "rounded border px-1 py-px text-[0.5rem] uppercase tracking-wide",
        statusStyles[status] ?? statusStyles["estável"],
      )}
    >
      {status}
    </span>
  );
}

export function Avatar({ name, index = 0 }: { name: string; index?: number }) {
  const gradients = [
    "from-brand-500 to-neon",
    "from-violet to-brand-600",
    "from-neon to-lime",
    "from-brand-600 to-violet",
  ];
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <span
      className={cn(
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[0.6rem] font-bold text-ink-950",
        gradients[index % gradients.length],
      )}
    >
      {initials}
    </span>
  );
}

export function ProductThumb({ emoji, size = "md" }: { emoji: string; size?: "sm" | "md" | "lg" }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))]",
        size === "sm" && "h-7 w-7 text-sm",
        size === "md" && "h-9 w-9 text-base",
        size === "lg" && "h-14 w-14 rounded-xl text-2xl",
      )}
    >
      {emoji}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Chrome do app: janela, sidebar e topbar                              */
/* ------------------------------------------------------------------ */

const navItems: { icon: IconName; label: string; id: string; badge?: string }[] = [
  { icon: "dashboard", label: "Dashboard", id: "dashboard" },
  { icon: "layers", label: "Produtos", id: "produtos", badge: "312" },
  { icon: "flame", label: "Oportunidades", id: "oportunidades" },
  { icon: "chart", label: "Ranking MAX", id: "ranking" },
  { icon: "filter", label: "Filtros", id: "filtros" },
  { icon: "star", label: "Favoritos", id: "favoritos" },
];

export function WindowChrome({ path }: { path: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto hidden max-w-[55%] items-center gap-2 rounded-md border border-white/[0.07] bg-ink-950/60 px-3 py-1 text-[0.66rem] text-slate-500 sm:flex">
        <Icon name="lock" size={10} className="shrink-0" />
        <span className="truncate">app.buscadormax.com/{path}</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Demonstração
        </span>
      </div>
    </div>
  );
}

function SidebarNav({ active }: { active: string }) {
  return (
    <aside className="hidden w-[172px] shrink-0 flex-col gap-0.5 border-r border-white/[0.06] bg-ink-950/60 p-3 md:flex">
      <div className="mb-3 flex items-center gap-2 px-1.5 py-1">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-ink-950">
          <Icon name="search" size={15} strokeWidth={2.4} />
        </div>
        <span className="text-[0.68rem] font-bold tracking-[0.12em] text-white">BUSCADOR</span>
      </div>

      {navItems.map((item) => (
        <div
          key={item.id}
          className={cn(
            "flex items-center gap-2 rounded-lg px-2.5 py-[0.42rem] text-[0.71rem] transition-colors",
            item.id === active
              ? "border border-brand-400/20 bg-brand-400/10 text-white"
              : "text-slate-500",
          )}
        >
          <Icon name={item.icon} size={14} className={item.id === active ? "text-neon" : ""} />
          <span className="truncate">{item.label}</span>
          {item.badge ? (
            <span className="ml-auto rounded bg-white/[0.07] px-1 font-mono text-[0.52rem] text-slate-400">
              {item.badge}
            </span>
          ) : null}
        </div>
      ))}

      <div className="mt-auto space-y-2">
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[0.6rem] font-semibold text-slate-300">Plano Anual</p>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </div>
          <p className="mt-0.5 text-[0.55rem] text-slate-500">Acesso ativo</p>
        </div>
        <div className="rounded-lg border border-brand-400/15 bg-brand-400/[0.06] p-2.5">
          <p className="text-[0.58rem] font-semibold text-brand-300">Próxima análise</p>
          <p className="mt-0.5 font-mono text-[0.55rem] text-slate-500">em 02h14</p>
        </div>
      </div>
    </aside>
  );
}

export function TopBar({
  title,
  breadcrumb,
  action,
}: {
  title: string;
  breadcrumb?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-3.5 py-2.5 sm:px-4">
      <div className="min-w-0">
        {breadcrumb ? (
          <p className="truncate text-[0.58rem] text-slate-600">{breadcrumb}</p>
        ) : null}
        <p className="truncate text-[0.8rem] font-semibold text-white">{title}</p>
      </div>

      <div className="ml-auto hidden h-8 w-56 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 text-[0.68rem] text-slate-500 lg:flex">
        <Icon name="search" size={13} />
        <span className="truncate">Buscar produto, nicho ou criador…</span>
        <span className="ml-auto rounded border border-white/[0.08] px-1 font-mono text-[0.55rem] text-slate-600">
          ⌘K
        </span>
      </div>

      {action}

      <div className="flex items-center gap-1.5">
        <span className="hidden h-7 w-7 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-400 sm:flex">
          <Icon name="refresh" size={12} />
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0ea5e9,#22d3ee)] text-[0.6rem] font-bold text-ink-950">
          JM
        </span>
      </div>
    </div>
  );
}

export function AppFrame({
  path,
  active,
  children,
  scanline = false,
}: {
  path: string;
  active: string;
  children: ReactNode;
  scanline?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,rgba(12,19,36,0.96),rgba(5,8,16,0.98))] shadow-[0_40px_120px_-40px_rgba(14,165,233,0.45)] backdrop-blur">
      {scanline ? (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
          <div className="h-24 w-full animate-scan bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.07),transparent)]" />
        </div>
      ) : null}

      <WindowChrome path={path} />

      <div className="flex">
        <SidebarNav active={active} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Barra de filtros (categoria + país + score + período)                */
/* ------------------------------------------------------------------ */

export function FilterBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.06] px-3.5 py-2.5 sm:px-4">
      <FilterSelect icon="layers" label="Categoria" value="Beleza & Skincare" active />
      <FilterSelect icon="target" label="País" value="Brasil" flag="BR" active />
      {!compact ? <FilterSelect icon="zap" label="MAX SCORE" value="80 — 100" /> : null}
      <FilterSelect icon="clock" label="Período" value="7 dias" />
      <span className="ml-auto hidden items-center gap-1.5 rounded-lg border border-neon/25 bg-neon/10 px-2.5 py-1.5 text-[0.66rem] font-medium text-neon sm:inline-flex">
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" />
        127 resultados
      </span>
    </div>
  );
}

export function FilterSelect({
  icon,
  label,
  value,
  flag,
  active = false,
}: {
  icon: IconName;
  label: string;
  value: string;
  flag?: CountryCode;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[0.66rem]",
        active
          ? "border-brand-400/30 bg-brand-400/[0.09] text-white"
          : "border-white/[0.07] bg-white/[0.03] text-slate-400",
      )}
    >
      <Icon name={icon} size={12} className={active ? "text-brand-300" : ""} />
      <span className="hidden text-slate-500 sm:inline">{label}:</span>
      {flag ? <CountryFlag code={flag} /> : null}
      <span className="font-medium">{value}</span>
      <Icon name="chevron" size={11} className="text-slate-500" />
    </span>
  );
}
