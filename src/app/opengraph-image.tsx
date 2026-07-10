import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Generate at request time. @vercel/og cannot prerender during a local
// Windows `next build` (a font/asset path bug), but it works perfectly at
// runtime on Vercel's Linux servers — which is where crawlers fetch it.
export const dynamic = "force-dynamic";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand logo mark inlined as a data URI so it renders reliably in the card.
const logo =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#617A66"/><path d="M11 29c3.1 4.8 9.1 7.8 16.8 7.8" stroke="#FBF8F4" stroke-width="2.4" stroke-linecap="round" opacity="0.5"/><path d="M12 26c2.6 3.6 7.4 6 13 6" stroke="#FBF8F4" stroke-width="2.4" stroke-linecap="round"/><path d="M24 30c-2.9-2.2-5.6-4.7-5.6-8A3.2 3.2 0 0124 19.3a3.2 3.2 0 015.6 2.7c0 3.3-2.7 5.8-5.6 8z" fill="#FBF8F4"/></svg>`,
  );

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF8F4",
          padding: 72,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* decorative blooms */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            backgroundColor: "#E7EEE8",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            backgroundColor: "#F6E7E2",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={96} height={96} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "#33302B",
                letterSpacing: 1,
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#4C6353",
                letterSpacing: 4,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {site.tagline}
            </div>
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 700,
            color: "#33302B",
            lineHeight: 1.08,
            maxWidth: 940,
          }}
        >
          {site.heroTitle}
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#617A66",
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
              padding: "16px 34px",
              borderRadius: 9999,
            }}
          >
            Book a free consultation
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              fontWeight: 600,
              color: "#5B564E",
            }}
          >
            {`Boutique care · ${site.city}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
