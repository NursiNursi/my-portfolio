"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { SectionShell } from "@/components/sections/SectionShell";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq" eyebrow="Details" title="FAQ">
      <div className="grid gap-3">
        {FAQS.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={f.q}
              className="rounded-2xl border border-border bg-surface shadow-[var(--shadow)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen((v) => (v === idx ? null : idx))}
                aria-expanded={isOpen}
              >
                <div className="text-sm font-semibold text-fg">{f.q}</div>
                <ChevronDown
                  className={
                    "h-5 w-5 text-muted transition-transform " +
                    (isOpen ? "rotate-180" : "rotate-0")
                  }
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm leading-6 text-muted">
                      {f.a}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
