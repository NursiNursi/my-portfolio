import { ImageResponse } from "next/og";
import React from "react";
import { NextRequest } from "next/server";

export const runtime = "edge";

type ImageSize =
  | "square_hd"
  | "square"
  | "portrait_4_3"
  | "portrait_16_9"
  | "landscape_4_3"
  | "landscape_16_9";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function hashString(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalizeSize(value: string): ImageSize {
  switch (value) {
    case "square_hd":
    case "square":
    case "portrait_4_3":
    case "portrait_16_9":
    case "landscape_4_3":
    case "landscape_16_9":
      return value;
    default:
      return "landscape_16_9";
  }
}

function sizeToDims(imageSize: ImageSize) {
  switch (imageSize) {
    case "square_hd":
      return { width: 1024, height: 1024 };
    case "square":
      return { width: 512, height: 512 };
    case "portrait_4_3":
      return { width: 900, height: 1200 };
    case "portrait_16_9":
      return { width: 900, height: 1600 };
    case "landscape_4_3":
      return { width: 1200, height: 900 };
    case "landscape_16_9":
    default:
      return { width: 1600, height: 900 };
  }
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ imageSize: string; label: string }> },
) {
  const params = await context.params;
  const imageSize = normalizeSize(params.imageSize);
  const rawLabel = (params.label ?? "").trim();
  const label = rawLabel.length > 0 ? rawLabel.replace(/\s+/g, " ") : "Preview";

  const { width, height } = sizeToDims(imageSize);

  const seed = hashString(`${label}:${imageSize}`);
  const hueA = seed % 360;
  const hueB = (hueA + 36 + (seed % 64)) % 360;
  const sat = clamp(62 + (seed % 18), 55, 80);
  const lumA = clamp(34 + ((seed >>> 8) % 10), 30, 45);
  const lumB = clamp(28 + ((seed >>> 16) % 10), 24, 40);
  const accent = `hsl(${hueA} ${sat}% ${lumA}%)`;
  const accent2 = `hsl(${hueB} ${sat}% ${lumB}%)`;

  const chipStyle: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.86)",
    fontSize: 18,
    fontWeight: 600,
  };

  const el = React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(900px 520px at 25% 20%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%), linear-gradient(135deg, ${accent}, ${accent2})`,
      } satisfies React.CSSProperties,
    },
    React.createElement(
      "div",
      {
        style: {
          width: "92%",
          height: "88%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 44,
          background: "rgba(10, 14, 20, 0.58)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: 56,
        } satisfies React.CSSProperties,
      },
      React.createElement(
        "div",
        { style: { display: "flex", gap: 16, alignItems: "center" } },
        React.createElement(
          "div",
          {
            style: {
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.92)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            } satisfies React.CSSProperties,
          },
          "MRN",
        ),
        React.createElement(
          "div",
          {
            style: {
              color: "rgba(255,255,255,0.80)",
              fontSize: 22,
              fontWeight: 600,
            } satisfies React.CSSProperties,
          },
          "Frontend Developer",
        ),
      ),
      React.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: 12 } },
        React.createElement(
          "div",
          {
            style: {
              color: "rgba(255,255,255,0.92)",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
            } satisfies React.CSSProperties,
          },
          label.slice(0, 72),
        ),
        React.createElement(
          "div",
          {
            style: {
              color: "rgba(255,255,255,0.72)",
              fontSize: 22,
              fontWeight: 500,
            } satisfies React.CSSProperties,
          },
          `Blue/Purple preview • ${width}×${height}`,
        ),
        React.createElement(
          "div",
          { style: { display: "flex", gap: 10, marginTop: 10 } },
          React.createElement("div", { style: chipStyle }, "Performance"),
          React.createElement("div", { style: chipStyle }, "Accessibility"),
          React.createElement("div", { style: chipStyle }, "Conversion"),
        ),
      ),
    ),
  );

  return new ImageResponse(el, {
    width,
    height,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
