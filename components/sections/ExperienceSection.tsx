"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/sections/SectionShell";
import { EXPERIENCE } from "@/lib/data";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" eyebrow="Career" title="Experience">
      <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]">
        <div className="absolute left-7 top-6 bottom-6 hidden w-px bg-border md:block" />
        <motion.div
          className="absolute left-7 top-6 hidden w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:block"
          initial={{ scaleY: 0, opacity: 0.8 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="grid gap-6">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.duration}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: idx * 0.08,
              }}
              className="relative md:pl-10"
            >
              <div className="hidden md:block absolute left-3 top-1 h-4 w-4 rounded-full border border-border bg-surface-2" />
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-fg">
                    {item.role} · {item.company}
                  </div>
                  <div className="mt-0.5 text-xs text-muted">
                    {item.duration}
                  </div>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-fg/90">
                {item.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                    <span className="leading-6">{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
