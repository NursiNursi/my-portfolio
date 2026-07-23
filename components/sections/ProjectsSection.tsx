"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionShell } from "@/components/sections/SectionShell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" eyebrow="Work" title="Featured projects">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: idx * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)]"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={p.imageUrl}
                alt={p.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                {/* <div>
                  <div className="text-sm font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs text-white/70">{p.summary}</div>
                </div> */}
                {/* <Link
                  href={`/projects/${p.slug}`}
                  className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-white/15"
                >
                  Case study
                </Link> */}
              </div>
            </div>

            <div className="p-5">
              <div className="text-sm font-semibold text-fg/90">{p.name}</div>
              <p className="text-sm leading-6 text-fg/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-white ${p.liveUrl ? "" : "cursor-not-allowed"}`}
                  href={p.liveUrl || "#"}
                  target={p.liveUrl ? "_blank" : ""}
                  rel="noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
                <Link
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-fg hover:bg-surface-2 ${p.repoUrl ? "" : "cursor-not-allowed"}`}
                  href={p.repoUrl || "#"}
                  target={p.repoUrl ? "_blank" : ""}
                  rel="noreferrer"
                >
                  <Code className="h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {/* More Button */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
        >
          I’ll add more work soon
        </button>
      </div>
    </SectionShell>
  );
}
