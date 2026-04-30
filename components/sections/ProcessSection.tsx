"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/sections/SectionShell";

const STEPS = [
  {
    title: "Align",
    text: "Clarify goals, users, constraints, and success metrics.",
  },
  {
    title: "Build",
    text: "Ship clean, reusable UI with responsive layouts and strong defaults.",
  },
  {
    title: "Polish",
    text: "Optimize performance, accessibility, and motion for a premium feel.",
  },
  {
    title: "Deliver",
    text: "Hand off with maintainable code and practical documentation.",
  },
];

export function ProcessSection() {
  return (
    <SectionShell id="process" eyebrow="How" title="Simple process">
      <div className="grid gap-4 md:grid-cols-4">
        {STEPS.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
              delay: idx * 0.08,
            }}
            className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 text-sm font-semibold text-fg">
                {idx + 1}
              </span>
              <div className="text-sm font-semibold text-fg">{s.title}</div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
