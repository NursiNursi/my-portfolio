"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionShell } from "@/components/sections/SectionShell";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" eyebrow="Signal" title="Social proof">
      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.name}
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
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-fg">{t.name}</div>
                <div className="mt-0.5 text-xs text-muted">{t.role}</div>
              </div>
              <Quote className="h-5 w-5 text-muted" />
            </div>
            <p className="mt-4 text-sm leading-6 text-fg/90">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
