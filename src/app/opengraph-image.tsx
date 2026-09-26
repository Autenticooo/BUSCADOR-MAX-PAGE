import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BUSCADOR MAX — Inteligência de produtos para TikTok Shop";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(140deg, #04060d 30%, #0b1a33 70%, #072a3a 100%)",
          color: "#e6edf9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>BUSCADOR MAX</div>
        </div>

        <div
          style={{
            marginTop: 44,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 940,
            display: "flex",
          }}
        >
          Descubra os produtos que estão escalando no TikTok Shop antes da concorrência.
        </div>

        <div style={{ marginTop: 32, fontSize: 28, color: "#7dd3fc", display: "flex", gap: 28 }}>
          <span>GVM Max</span>
          <span>•</span>
          <span>Criadores</span>
          <span>•</span>
          <span>Vídeos</span>
          <span>•</span>
          <span>MAX SCORE</span>
        </div>
      </div>
    ),
    size,
  );
}
