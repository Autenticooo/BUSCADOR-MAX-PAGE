# BUSCADOR MAX — Landing page de vendas

Landing page premium, focada em conversão de assinaturas, para o **BUSCADOR MAX** — plataforma de
inteligência de produtos para TikTok Shop.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, exportada como site estático e
pronta para deploy no **Netlify**.

---

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros scripts:

```bash
npm run build     # gera o site estático em ./out
npm run typecheck # checagem de tipos
npm run lint      # eslint
npm start         # serve a build estática (npx serve out)
```

---

## Deploy no Netlify

O arquivo `netlify.toml` já está configurado:

| Configuração        | Valor           |
| ------------------- | --------------- |
| Build command       | `npm run build` |
| Publish directory   | `out`           |
| Node version        | `22`            |

Passo a passo:

1. No Netlify: **Add new site → Import an existing project** e selecione este repositório.
2. O build command e o publish directory são lidos automaticamente do `netlify.toml`.
3. **Deploy**. Não é necessário nenhum plugin — a saída é HTML/CSS/JS estático (`output: "export"`).

Deploy manual pela CLI:

```bash
npm run build
npx netlify-cli deploy --prod --dir=out
```

---

## O que editar primeiro

| O que                                  | Onde                                   |
| -------------------------------------- | -------------------------------------- |
| Links de checkout, login, e-mail, URL  | `src/lib/site.ts`                      |
| Itens do menu                          | `src/lib/site.ts` (`navLinks`)         |
| Preços, etiquetas e benefícios         | `src/components/sections/Pricing.tsx`  |
| Perguntas do FAQ                       | `src/components/sections/Faq.tsx`      |
| Produtos, países e categorias dos mockups | `src/data/products.ts`              |
| Paleta, animações e utilitários        | `src/app/globals.css`                  |

> **Checkout:** em `src/lib/site.ts`, troque `checkoutUrl` e `loginUrl` pelos links reais
> (Kiwify, Hotmart, Stripe, área de membros etc.). Todos os botões "Assinar agora" e
> "Entrar no BUSCADOR MAX" já apontam para essas constantes.

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # metadata, SEO, JSON-LD, fontes (Geist self-hosted)
│   ├── page.tsx              # composição das seções da landing page
│   ├── globals.css           # design system (cores, animações, utilitários Tailwind v4)
│   ├── icon.svg              # favicon da marca
│   ├── opengraph-image.tsx   # imagem de compartilhamento 1200x630 gerada no build
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── layout/               # Navbar, Footer, Logo, StickyCta (CTA fixo mobile)
│   ├── sections/             # Hero, Problem, Solution, HowItWorks, ProductDemo,
│   │                         # Benefits, Pricing, Faq, FinalCta, SignalTicker
│   ├── mockups/              # Telas da plataforma (100% HTML/SVG, sem imagens):
│   │                         # parts.tsx (chrome do app, sidebar, filtros, bandeiras SVG),
│   │                         # DashboardMockup, ProductTableMockup, RankingMockup,
│   │                         # OpportunityCardsMockup, FiltersMockup, ProductDetailMockup
│   └── ui/                   # Button, Icon, Charts, Reveal, SectionHeading
├── data/products.ts          # dados de exemplo dos mockups
└── lib/                      # site.ts (configuração) e utils.ts
```

### Seções da página

1. **Hero** — headline, CTAs e mockup de dashboard (produtos, métricas, ranking, MAX SCORE)
2. **Números + ticker de sinais** — base monitorada e produtos em movimento
3. **Problema** — as 4 dores + narrativa "falta inteligência de dados, não esforço"
4. **Solução** — 6 cards: Produto em escala, GVM Max, Criadores, Vídeos, MAX SCORE, Link TikTok Shop
5. **Como funciona** — 3 passos
6. **Demonstração interativa** — abas: Dashboard, Tabela de produtos, Ranking MAX SCORE e Página do produto
7. **Recursos** — filtros por categoria/país, cards de oportunidade e grade de capacidades
8. **Benefícios** — 5 cards
9. **Planos** — Mensal R$19/mês, Semestral R$79 (Mais escolhido), Anual R$120 (Melhor valor)
10. **FAQ** — acordeão com 4 perguntas
11. **CTA final** — "Pare de procurar oportunidades no escuro."

---

## Decisões técnicas

- **Zero imagens raster**: todos os mockups de dashboard, gráficos e ícones são HTML + SVG.
  Resultado: carregamento instantâneo, nitidez em qualquer tela e fácil edição de textos/números.
- **Fontes self-hosted** (pacote `geist`): sem requisições ao Google Fonts, sem layout shift.
- **Animações de entrada** via `IntersectionObserver` (componente `Reveal`), sem bibliotecas extras —
  e respeitando `prefers-reduced-motion`.
- **Conversão**: CTA no topo, ao longo da página, CTA fixo no mobile após o hero e CTA final.
- **SEO**: metadata completa em pt-BR, Open Graph gerado no build, JSON-LD de `SoftwareApplication`
  com os três planos, `robots.txt` e `sitemap.xml`.
