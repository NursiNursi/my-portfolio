"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Atom,
  Database,
  DatabaseZap,
  Flame,
  Layers,
  LayoutGrid,
  Leaf,
  Network,
  PenTool,
  Rabbit,
  Rocket,
  Server,
  Shuffle,
  Smartphone,
  Terminal,
  Wind,
  Workflow,
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
    items: ["Node.js", "Go", "Supabase", "PostgreSQL"],
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="h-5 w-5 text-success" />,
    items: ["Figma", "Miro", "Whimsical"],
  },
];

const ICONS: Record<string, React.ReactNode> = {
  React: <Atom className="h-4 w-4" />,
  "React Native": <Smartphone className="h-4 w-4" />,
  Vue: <Leaf className="h-4 w-4" />,
  "Next.js": <Rocket className="h-4 w-4" />,
  Nuxt: <LayoutGrid className="h-4 w-4" />,
  Tailwind: <Wind className="h-4 w-4" />,
  Redux: <Shuffle className="h-4 w-4" />,
  "Tanstack Query": <Network className="h-4 w-4" />,
  Pinia: <Flame className="h-4 w-4" />,
  "Node.js": <Terminal className="h-4 w-4" />,
  Go: <Rabbit className="h-4 w-4" />,
  Supabase: <DatabaseZap className="h-4 w-4" />,
  "API integration": <Workflow className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  Figma: <PenTool className="h-4 w-4" />,
  Miro: <LayoutGrid className="h-4 w-4" />,
  Whimsical: <Workflow className="h-4 w-4" />,
};

export function SkillsSection() {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSeed(Math.floor(Math.random() * 1_000_000));
  }, []);

  const blurbs: Record<string, string[]> = {
    Frontend: [
      "UI engineering with accessibility, performance, and clean architecture.",
      "Component-driven UIs with consistent spacing, type, and motion.",
      "Focused on strong DX, predictable state, and fast iterations.",
    ],
    Backend: [
      "Light backend to support the frontend: APIs, data, and integrations.",
      "Comfortable wiring services, auth flows, and simple databases.",
      "Practical server work that keeps product UX smooth and reliable.",
    ],
    "UI/UX Design": [
      "Wireframes → high-fidelity screens → developer-ready components.",
      "Design systems, layout rhythm, and interaction details that convert.",
      "Clear handoff, reusable patterns, and UX decisions that scale.",
    ],
  };

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
              {
                (blurbs[c.title] ?? blurbs.Frontend)[
                  (seed + idx) % (blurbs[c.title] ?? blurbs.Frontend).length
                ]
              }
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
