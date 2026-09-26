import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <a href={links.top} className={cn("group flex items-center gap-2.5", className)} aria-label="BUSCADOR MAX">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0ea5e9,#22d3ee_60%,#2563eb)] text-ink-950 shadow-[0_0_22px_-4px_rgba(34,211,238,0.8)]">
        <Icon name="search" size={17} strokeWidth={2.6} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-bold tracking-[0.06em] text-white">
          BUSCADOR <span className="text-gradient-blue">MAX</span>
        </span>
        <span className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-[0.24em] text-slate-500">
          TikTok Shop Intelligence
        </span>
      </span>
    </a>
  );
}
