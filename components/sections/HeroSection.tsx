"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code, Link as LinkIcon, Mail } from "lucide-react";
import { SITE_LINKS } from "@/lib/site";
import { useTypewriter } from "@/lib/useTypewriter";
import Link from "next/link";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const taglineBase =
    "I build fast, accessible, conversion-focused interfaces.";
  const typed = useTypewriter(taglineBase, { speedMs: 38, pauseMs: 900 });

  return (
    <section
      id="hero"
      className="cv-auto scroll-mt-24 pb-14 pt-16 md:pb-20 md:pt-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Available for frontend roles
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl">
              Muhamad Nursi Ramdan
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Frontend Developer | React & Next.js Specialist
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-fg/90 sm:text-lg sm:leading-8">
              <span className="text-fg/80">{typed}</span>
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-[3px] bg-fg/60 align-baseline" />
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-fg hover:bg-surface-2"
                href={SITE_LINKS.emailHref}
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-fg hover:bg-surface-2"
                href={SITE_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-fg hover:bg-surface-2"
                href={SITE_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut", delay: 0.05 }}
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-accent/30 via-accent-2/10 to-success/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-border bg-surface shadow-[var(--shadow)]">
                <div className="p-6">
                  <motion.div
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : {
                            duration: 5.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }
                    }
                    className="mx-auto flex w-full max-w-[260px] flex-col items-center"
                  >
                    <motion.div
                      animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                      transition={
                        shouldReduceMotion
                          ? undefined
                          : {
                              duration: 10,
                              ease: "linear",
                              repeat: Infinity,
                            }
                      }
                      className="relative"
                    >
                      <Image
                        src="/react-logo.png"
                        alt="React logo"
                        width={400}
                        height={400}
                        priority
                        className="h-[180px] w-[180px] object-contain drop-shadow-[0_18px_45px_rgba(124,92,255,0.22)]"
                      />
                    </motion.div>
                    <div className="mt-5 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3">
                      <div className="text-sm font-semibold text-fg">
                        Frontend Engineering
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        ReactJS • Next.js • Performance • Scalable UI
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
