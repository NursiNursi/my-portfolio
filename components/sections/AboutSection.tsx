"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { makeAiImageUrl } from "@/lib/image";
import { SectionShell } from "@/components/sections/SectionShell";

const aboutImage = makeAiImageUrl(
  "minimal abstract tech illustration, dark background, blue and purple gradient shapes, subtle glow, clean modern style, professional",
  "square_hd",
);

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <SectionShell id="about" eyebrow="Story" title="About me">
      <div className="grid items-center gap-8 md:grid-cols-12">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <p className="text-sm leading-7 text-fg/90 md:text-base">
            I’m a frontend developer with 3 years of experience building
            responsive, high-quality interfaces. I focus on React and Next.js,
            translating UI/UX into clean component systems that are fast,
            accessible, and easy to maintain.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)]">
              <div className="text-sm font-semibold text-fg">
                What I care about
              </div>
              <div className="mt-2 text-sm text-muted">
                Strong defaults, readable code, and UI polish that supports
                conversion.
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)]">
              <div className="text-sm font-semibold text-fg">What you get</div>
              <div className="mt-2 text-sm text-muted">
                Responsive layouts, smooth motion, optimized images, and clear
                CTA flows.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 6, ease: "easeInOut", repeat: Infinity }
            }
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[26px] bg-gradient-to-br from-accent/25 via-accent-2/10 to-success/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow)] p-5">
              <Image
                src="/projects/designsystem.webp"
                alt="Abstract illustration"
                width={720}
                height={720}
                className="h-[320px] w-full object-cover rounded-[20px]"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="p-5">
                <div className="text-sm font-semibold text-fg">
                  UI/UX minded
                </div>
                <div className="mt-2 text-sm text-muted">
                  Clean layouts, readable typography, and thoughtful
                  micro-interactions.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
