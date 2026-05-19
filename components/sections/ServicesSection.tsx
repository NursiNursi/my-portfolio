"use client";

import { motion } from "framer-motion";
import { Gauge, LayoutTemplate, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionShell } from "@/components/sections/SectionShell";

const SERVICE_SUBTITLES: Record<string, string> = {
  "High-Converting Landing Pages":
    "Conversion-first structure: messaging, layout, and CTA flow that drives signups.",
  "Performance & UX Optimization":
    "Improve Core Web Vitals, reduce jank, and refine interactions for a smoother UX.",
  "Business System Development":
    "Scalable dashboards and workflows with reusable components and data-ready UI.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "High-Converting Landing Pages": (
    <LayoutTemplate className="h-5 w-5 text-accent" />
  ),
  "Performance & UX Optimization": <Gauge className="h-5 w-5 text-accent-2" />,
  "Business System Development": <Sparkles className="h-5 w-5 text-success" />,
};

export function ServicesSection() {
  return (
    <SectionShell id="services" eyebrow="Value" title="What I build">
      <div className="grid gap-4 md:grid-cols-3">
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: idx * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2">
                {SERVICE_ICONS[s.title] ?? (
                  <Sparkles className="h-5 w-5 text-accent" />
                )}
              </span>
              <div>
                <div className="text-sm font-semibold text-fg">{s.title}</div>
                <div className="mt-0.5 text-xs text-muted">
                  Best for: {s.bestFor}
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-fg/90">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 h-px w-full bg-border/80" />
            <div className="mt-4 text-xs text-muted">
              {SERVICE_SUBTITLES[s.title] ??
                "Built with clean components, responsive layouts, and subtle motion."}
            </div>
            <div className="pointer-events-none absolute opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
