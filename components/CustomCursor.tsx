"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function isCoarsePointer() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (isCoarsePointer()) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[18px] w-[18px] rounded-full border border-border bg-surface/40 backdrop-blur md:block"
      style={{ translateX: sx, translateY: sy }}
    />
  );
}
