"use client";

import { motion } from "framer-motion";

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="cv-auto scroll-mt-24 py-14 md:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
            {title}
          </h2>
        </motion.div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
