export const site = {
  name: "BUSCADOR MAX",
  tagline: "Inteligência de produtos para TikTok Shop",
  description:
    "O BUSCADOR MAX reúne os sinais que indicam quais produtos estão ganhando força no TikTok Shop — GVM Max, criadores, vídeos e MAX SCORE — para você encontrar oportunidades antes da maioria.",
  url: "https://buscadormax.com.br",
  // ⬇️ Troque pelos links reais de checkout / área de membros.
  checkoutUrl: "#planos",
  loginUrl: "#planos",
  supportEmail: "suporte@buscadormax.com.br",
} as const;

export type PlanId = "mensal" | "semestral" | "anual";

/**
 * Link de checkout de cada plano.
 * Enquanto não houver links individuais, todos caem no `site.checkoutUrl`.
 * Basta substituir por uma URL (Kiwify, Hotmart, Stripe...) para ativar.
 */
export const checkoutUrls: Record<PlanId, string> = {
  mensal: site.checkoutUrl,
  semestral: site.checkoutUrl,
  anual: site.checkoutUrl,
};

/** Âncoras internas e destinos usados por todos os CTAs da página. */
export const links = {
  top: "#top",
  problem: "#problema",
  beforeAfter: "#antes-depois",
  solution: "#solucao",
  howItWorks: "#como-funciona",
  platform: "#plataforma",
  features: "#recursos",
  benefits: "#beneficios",
  pricing: "#planos",
  faq: "#faq",
  checkout: site.checkoutUrl,
  login: site.loginUrl,
  support: `mailto:${site.supportEmail}`,
} as const;

export const navLinks = [
  { label: "Antes vs Depois", href: links.beforeAfter },
  { label: "Como funciona", href: links.howItWorks },
  { label: "Plataforma", href: links.platform },
  { label: "Recursos", href: links.features },
  { label: "Planos", href: links.pricing },
  { label: "FAQ", href: links.faq },
] as const;
