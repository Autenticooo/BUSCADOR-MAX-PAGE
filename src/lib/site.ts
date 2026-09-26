export const site = {
  name: "BUSCADOR MAX",
  tagline: "Inteligência de produtos para TikTok Shop",
  description:
    "O BUSCADOR MAX reúne os sinais que indicam quais produtos estão ganhando força no TikTok Shop — GVM Max, criadores, vídeos e MAX SCORE — para você encontrar oportunidades antes da maioria.",
  url: "https://buscadormax.com.br",

  // Checkout principal (CTA geral)
  checkoutUrl: "https://pay.kiwify.com.br/Ej9NnLJ",

  // Área de membros (alterar quando estiver pronta)
  loginUrl: "#planos",

  supportEmail: "suporte@buscadormax.com.br",
} as const;

export type PlanId = "mensal" | "semestral" | "anual";

/**
 * Links individuais de checkout por plano.
 */
export const checkoutUrls: Record<PlanId, string> = {
  mensal: "https://pay.kiwify.com.br/IT9crh4",
  semestral: "https://pay.kiwify.com.br/ejHi2I1",
  anual: "https://pay.kiwify.com.br/Ej9NnLJ",
};

/**
 * Âncoras internas e destinos usados pelos CTAs da página.
 */
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
