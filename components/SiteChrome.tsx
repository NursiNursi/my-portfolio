"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CustomCursor } from "@/components/CustomCursor";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShowLoader(false), 450);
    return () => window.clearTimeout(t);
  }, []);

  const overlay = useMemo(() => {
    if (shouldReduceMotion) return null;
    return (
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-1 w-full origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ scaleX: scrollYProgress }}
      />
    );
  }, [scrollYProgress, shouldReduceMotion]);

  return (
    <>
      {overlay}
      <AnimatePresence>
        {showLoader ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div className="h-2 w-2 rounded-full bg-accent-2" />
              <div className="h-2 w-2 rounded-full bg-fg/70" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <CustomCursor />
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
