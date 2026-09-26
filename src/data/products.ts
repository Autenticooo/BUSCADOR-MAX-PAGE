export type CountryCode = "BR" | "US" | "GB" | "ES" | "MX" | "ID" | "TH" | "DE";

export type Product = {
  id: string;
  name: string;
  category: string;
  country: CountryCode;
  emoji: string;
  gvm: string;
  gvmPercent: number;
  price: string;
  commission: string;
  creators: number;
  videos: number;
  growth: number;
  score: number;
  rank: number;
  rankDelta: number;
  trend: number[];
  status: "escalando" | "aquecendo" | "estável";
};

export const products: Product[] = [
  {
    id: "PRD-8412",
    name: "Massageador Facial Ice Roller",
    category: "Beleza & Skincare",
    country: "BR",
    emoji: "🧊",
    gvm: "R$ 412k",
    gvmPercent: 94,
    price: "R$ 39,90",
    commission: "18%",
    creators: 1284,
    videos: 6720,
    growth: 318,
    score: 96,
    rank: 1,
    rankDelta: 4,
    trend: [12, 18, 22, 30, 44, 61, 78, 96],
    status: "escalando",
  },
  {
    id: "PRD-7731",
    name: "Luminária LED Astronauta",
    category: "Casa & Decoração",
    country: "BR",
    emoji: "🚀",
    gvm: "R$ 287k",
    gvmPercent: 81,
    price: "R$ 74,90",
    commission: "15%",
    creators: 962,
    videos: 4310,
    growth: 241,
    score: 92,
    rank: 2,
    rankDelta: 2,
    trend: [10, 14, 19, 27, 36, 52, 70, 88],
    status: "escalando",
  },
  {
    id: "PRD-6620",
    name: "Kit Organizador Multiuso Slim",
    category: "Utilidades",
    country: "US",
    emoji: "🧺",
    gvm: "R$ 198k",
    gvmPercent: 68,
    price: "R$ 52,00",
    commission: "20%",
    creators: 741,
    videos: 3180,
    growth: 176,
    score: 88,
    rank: 3,
    rankDelta: 5,
    trend: [16, 20, 24, 31, 39, 48, 61, 74],
    status: "escalando",
  },
  {
    id: "PRD-5518",
    name: "Fone Bluetooth Sport Pro",
    category: "Eletrônicos",
    country: "BR",
    emoji: "🎧",
    gvm: "R$ 164k",
    gvmPercent: 59,
    price: "R$ 119,90",
    commission: "12%",
    creators: 608,
    videos: 2740,
    growth: 132,
    score: 84,
    rank: 4,
    rankDelta: -1,
    trend: [22, 25, 28, 34, 40, 47, 55, 66],
    status: "aquecendo",
  },
  {
    id: "PRD-4407",
    name: "Sérum Capilar Reconstrutor",
    category: "Beleza & Skincare",
    country: "ES",
    emoji: "💧",
    gvm: "R$ 141k",
    gvmPercent: 52,
    price: "R$ 64,90",
    commission: "22%",
    creators: 524,
    videos: 2190,
    growth: 118,
    score: 81,
    rank: 5,
    rankDelta: 3,
    trend: [18, 21, 23, 27, 33, 38, 46, 57],
    status: "aquecendo",
  },
  {
    id: "PRD-3390",
    name: "Mini Projetor Portátil HD",
    category: "Eletrônicos",
    country: "US",
    emoji: "📽️",
    gvm: "R$ 119k",
    gvmPercent: 44,
    price: "R$ 289,00",
    commission: "10%",
    creators: 436,
    videos: 1870,
    growth: 94,
    score: 78,
    rank: 6,
    rankDelta: -2,
    trend: [24, 26, 29, 32, 36, 41, 48, 54],
    status: "estável",
  },
  {
    id: "PRD-2284",
    name: "Escova Secadora 3 em 1",
    category: "Beleza & Skincare",
    country: "MX",
    emoji: "💇",
    gvm: "R$ 102k",
    gvmPercent: 38,
    price: "R$ 149,90",
    commission: "14%",
    creators: 388,
    videos: 1510,
    growth: 82,
    score: 76,
    rank: 7,
    rankDelta: 1,
    trend: [20, 22, 25, 27, 31, 35, 41, 49],
    status: "aquecendo",
  },
  {
    id: "PRD-1176",
    name: "Tapete Antiderrapante Secagem Rápida",
    category: "Casa & Decoração",
    country: "GB",
    emoji: "🛁",
    gvm: "R$ 87k",
    gvmPercent: 32,
    price: "R$ 45,90",
    commission: "19%",
    creators: 311,
    videos: 1240,
    growth: 67,
    score: 73,
    rank: 8,
    rankDelta: -3,
    trend: [19, 20, 22, 24, 27, 30, 35, 42],
    status: "estável",
  },
];

export const kpis = [
  { label: "Produtos analisados", value: "18.402", delta: "+312 hoje" },
  { label: "GVM Max acumulado", value: "R$ 24,8M", delta: "+18,4%" },
  { label: "Criadores mapeados", value: "94.210", delta: "+2.140" },
  { label: "Oportunidades ativas", value: "127", delta: "MAX SCORE 80+" },
];

export const categories = [
  { label: "Todas as categorias", count: 18402 },
  { label: "Beleza & Skincare", count: 4820 },
  { label: "Casa & Decoração", count: 3915 },
  { label: "Eletrônicos", count: 2740 },
  { label: "Utilidades", count: 2318 },
  { label: "Moda & Acessórios", count: 2106 },
  { label: "Fitness & Bem-estar", count: 1593 },
  { label: "Pet Shop", count: 910 },
];

export const countries: { code: CountryCode; name: string; count: number }[] = [
  { code: "BR", name: "Brasil", count: 7412 },
  { code: "US", name: "Estados Unidos", count: 4980 },
  { code: "GB", name: "Reino Unido", count: 1842 },
  { code: "ES", name: "Espanha", count: 1310 },
  { code: "MX", name: "México", count: 1188 },
  { code: "ID", name: "Indonésia", count: 940 },
  { code: "TH", name: "Tailândia", count: 421 },
  { code: "DE", name: "Alemanha", count: 309 },
];

export const countryNames: Record<CountryCode, string> = {
  BR: "Brasil",
  US: "Estados Unidos",
  GB: "Reino Unido",
  ES: "Espanha",
  MX: "México",
  ID: "Indonésia",
  TH: "Tailândia",
  DE: "Alemanha",
};

export const topCreators = [
  { name: "Ana Ribeiro", handle: "@anaribeiro", followers: "412k", videos: 38, growth: "+62%" },
  { name: "Lucas Prado", handle: "@lucasprado", followers: "287k", videos: 24, growth: "+48%" },
  { name: "Bia Moreira", handle: "@biamoreira", followers: "196k", videos: 31, growth: "+41%" },
  { name: "Rafa Souza", handle: "@rafasouza", followers: "154k", videos: 19, growth: "+27%" },
];

export const detectedSignals = [
  { time: "há 2h", text: "Aumento de 48% em novos criadores nas últimas 24h", tone: "high" as const },
  { time: "há 6h", text: "Volume de vídeos ultrapassou a média do nicho", tone: "high" as const },
  { time: "há 1d", text: "GVM Max cresceu por 5 dias consecutivos", tone: "mid" as const },
  { time: "há 2d", text: "Produto entrou no top 10 de Beleza & Skincare", tone: "mid" as const },
];

export const scoreBreakdown = [
  { label: "GVM Max", value: 94 },
  { label: "Volume de criadores", value: 88 },
  { label: "Volume de vídeos", value: 81 },
  { label: "Velocidade de crescimento", value: 96 },
  { label: "Consistência do sinal", value: 90 },
];
