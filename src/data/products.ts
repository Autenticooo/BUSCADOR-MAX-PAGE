export type Product = {
  id: string;
  name: string;
  category: string;
  emoji: string;
  gvm: string;
  creators: number;
  videos: number;
  growth: number;
  score: number;
  trend: number[];
  status: "escalando" | "aquecendo" | "estável";
};

export const products: Product[] = [
  {
    id: "PRD-8412",
    name: "Massageador Facial Ice Roller",
    category: "Beleza & Skincare",
    emoji: "🧊",
    gvm: "R$ 412k",
    creators: 1284,
    videos: 6720,
    growth: 318,
    score: 96,
    trend: [12, 18, 22, 30, 44, 61, 78, 96],
    status: "escalando",
  },
  {
    id: "PRD-7731",
    name: "Luminária LED Astronauta",
    category: "Casa & Decoração",
    emoji: "🚀",
    gvm: "R$ 287k",
    creators: 962,
    videos: 4310,
    growth: 241,
    score: 92,
    trend: [10, 14, 19, 27, 36, 52, 70, 88],
    status: "escalando",
  },
  {
    id: "PRD-6620",
    name: "Kit Organizador Multiuso Slim",
    category: "Utilidades",
    emoji: "🧺",
    gvm: "R$ 198k",
    creators: 741,
    videos: 3180,
    growth: 176,
    score: 88,
    trend: [16, 20, 24, 31, 39, 48, 61, 74],
    status: "escalando",
  },
  {
    id: "PRD-5518",
    name: "Fone Bluetooth Sport Pro",
    category: "Eletrônicos",
    emoji: "🎧",
    gvm: "R$ 164k",
    creators: 608,
    videos: 2740,
    growth: 132,
    score: 84,
    trend: [22, 25, 28, 34, 40, 47, 55, 66],
    status: "aquecendo",
  },
  {
    id: "PRD-4407",
    name: "Sérum Capilar Reconstrutor",
    category: "Beleza & Skincare",
    emoji: "💧",
    gvm: "R$ 141k",
    creators: 524,
    videos: 2190,
    growth: 118,
    score: 81,
    trend: [18, 21, 23, 27, 33, 38, 46, 57],
    status: "aquecendo",
  },
  {
    id: "PRD-3390",
    name: "Mini Projetor Portátil HD",
    category: "Eletrônicos",
    emoji: "📽️",
    gvm: "R$ 119k",
    creators: 436,
    videos: 1870,
    growth: 94,
    score: 78,
    trend: [24, 26, 29, 32, 36, 41, 48, 54],
    status: "estável",
  },
];

export const kpis = [
  { label: "Produtos analisados", value: "18.402", delta: "+312 hoje", trend: "up" as const },
  { label: "GVM Max acumulado", value: "R$ 24,8M", delta: "+18,4%", trend: "up" as const },
  { label: "Criadores mapeados", value: "94.210", delta: "+2.140", trend: "up" as const },
  { label: "Oportunidades ativas", value: "127", delta: "MAX SCORE 80+", trend: "up" as const },
];
