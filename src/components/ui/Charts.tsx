import { cn } from "@/lib/utils";

/** Linha suave com área preenchida — usada nos cards de métrica. */
export function Sparkline({
  data,
  className,
  stroke = "#22d3ee",
  id,
}: {
  data: number[];
  className?: string;
  stroke?: string;
  id: string;
}) {
  const width = 100;
  const height = 32;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 4) - 2;
    return [x, y] as const;
  });

  const line = points
    .map(([x, y], i) => (i === 0 ? `M${x.toFixed(2)},${y.toFixed(2)}` : `L${x.toFixed(2)},${y.toFixed(2)}`))
    .join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-8 w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spark-${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Anel de progresso do MAX SCORE. */
export function ScoreRing({
  score,
  size = 92,
  label = "MAX SCORE",
}: {
  score: number;
  size?: number;
  label?: string;
}) {
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id={`ring-${score}-${size}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#ring-${score}-${size})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-lg font-semibold text-white">{score}</span>
        <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</span>
      </div>
    </div>
  );
}

/** Colunas com gradiente — usada no bloco de métricas. */
export function BarChart({
  data,
  className,
  highlightFrom = 5,
}: {
  data: number[];
  className?: string;
  highlightFrom?: number;
}) {
  const max = Math.max(...data);
  return (
    <div className={cn("flex h-full w-full items-end gap-1.5", className)}>
      {data.map((value, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 rounded-t-[3px] transition-all duration-500",
            index >= highlightFrom
              ? "bg-[linear-gradient(180deg,#22d3ee,#0ea5e9)] shadow-[0_0_14px_rgba(34,211,238,0.45)]"
              : "bg-[linear-gradient(180deg,rgba(56,189,248,0.45),rgba(56,189,248,0.08))]",
          )}
          style={{ height: `${Math.max((value / max) * 100, 6)}%` }}
        />
      ))}
    </div>
  );
}

/** Barra de progresso fina com rótulo. */
export function MetricBar({
  label,
  value,
  percent,
  accent = "from-brand-400 to-neon",
}: {
  label: string;
  value: string;
  percent: number;
  accent?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[0.7rem]">
        <span className="text-slate-400">{label}</span>
        <span className="font-mono font-medium text-slate-200">{value}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={cn("h-full rounded-full bg-gradient-to-r", accent)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
