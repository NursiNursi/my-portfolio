"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Braces,
  Database,
  GitBranch,
  Layers,
  Package,
  PenTool,
  Server,
} from "lucide-react";
import { SectionShell } from "@/components/sections/SectionShell";

type SkillCard = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const SKILLS: SkillCard[] = [
  {
    title: "Frontend",
    icon: <Layers className="h-5 w-5 text-accent" />,
    items: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind",
      "Redux",
      "Vue",
      "Nuxt",
      "Pinia",
      "Tanstack Query",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5 text-accent-2" />,
    items: ["Node.js", "Go", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <Boxes className="h-5 w-5 text-success" />,
    items: ["Git", "Docker", "Figma"],
  },
];

const ICONS: Record<string, React.ReactNode> = {
  React: <Braces className="h-4 w-4" />,
  "React Native": <Braces className="h-4 w-4" />,
  Vue: <Braces className="h-4 w-4" />,
  "Next.js": <Package className="h-4 w-4" />,
  Nuxt: <Package className="h-4 w-4" />,
  Tailwind: <Layers className="h-4 w-4" />,
  Redux: <Database className="h-4 w-4" />,
  "Tanstack Query": <Database className="h-4 w-4" />,
  Pinia: <Database className="h-4 w-4" />,
  "Node.js": <Server className="h-4 w-4" />,
  Go: <Server className="h-4 w-4" />,
  "API integration": <Package className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  Git: <GitBranch className="h-4 w-4" />,
  Docker: <Boxes className="h-4 w-4" />,
  Figma: <PenTool className="h-4 w-4" />,
};

export function SkillsSection() {
  return (
    <SectionShell id="skills" eyebrow="Stack" title="Skills & tools">
      <div className="grid gap-4 md:grid-cols-3">
        {SKILLS.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2">
                {c.icon}
              </span>
              <div className="text-sm font-semibold text-fg">{c.title}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.items.map((it) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-fg/90 shadow-[0_0_0_0_rgba(124,92,255,0)] transition-shadow group-hover:shadow-[0_0_0_2px_rgba(124,92,255,0.18)]"
                >
                  <span className="text-muted">{ICONS[it] ?? null}</span>
                  {it}
                </motion.span>
              ))}
            </div>
            <div className="mt-5 text-xs text-muted">
              Focused on clean UI systems, good DX, and high performance.
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
