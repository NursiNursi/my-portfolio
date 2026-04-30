"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionShell } from "@/components/sections/SectionShell";

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
                <Sparkles className="h-5 w-5 text-accent" />
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
              Built with clean components, responsive layouts, and subtle
              motion.
            </div>
            <div className="pointer-events-none absolute opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
