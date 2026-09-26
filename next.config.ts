import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportação estática: a landing page vira HTML/CSS/JS puro em `out/`,
  // o que deixa o deploy no Netlify simples e o carregamento instantâneo.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
