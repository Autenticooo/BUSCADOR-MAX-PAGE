import { Icon } from "@/components/ui/Icon";

const items = [
  { emoji: "🧊", name: "Ice Roller Facial", value: "+318%" },
  { emoji: "🚀", name: "Luminária Astronauta", value: "+241%" },
  { emoji: "🧺", name: "Organizador Slim", value: "+176%" },
  { emoji: "🎧", name: "Fone Sport Pro", value: "+132%" },
  { emoji: "💧", name: "Sérum Reconstrutor", value: "+118%" },
  { emoji: "📽️", name: "Mini Projetor HD", value: "+94%" },
  { emoji: "🕶️", name: "Óculos Fotocromático", value: "+87%" },
  { emoji: "🧴", name: "Protetor Solar Gel", value: "+76%" },
];

export function SignalTicker() {
  const list = [...items, ...items];

  return (
    <section aria-label="Produtos em movimento" className="relative border-y border-white/[0.06] bg-ink-900/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-4">
        {list.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2"
          >
            <span className="text-base">{item.emoji}</span>
            <span className="whitespace-nowrap text-[0.82rem] font-medium text-slate-300">{item.name}</span>
            <span className="inline-flex items-center gap-1 rounded-md border border-lime/20 bg-lime/[0.08] px-1.5 py-0.5 font-mono text-[0.68rem] font-semibold text-lime">
              <Icon name="trending" size={10} />
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
