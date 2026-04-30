"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter(
  text: string,
  opts?: {
    speedMs?: number;
    pauseMs?: number;
  },
) {
  const speedMs = Math.max(18, opts?.speedMs ?? 36);
  const pauseMs = Math.max(0, opts?.pauseMs ?? 800);
  const [value, setValue] = useState("");

  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    let i = 0;
    let t: number | undefined;

    const tick = () => {
      i += 1;
      setValue(chars.slice(0, i).join(""));
      if (i >= chars.length) return;
      t = window.setTimeout(tick, speedMs);
    };

    setValue("");
    const start = window.setTimeout(() => {
      tick();
    }, pauseMs);

    return () => {
      if (t) window.clearTimeout(t);
      window.clearTimeout(start);
    };
  }, [chars, pauseMs, speedMs]);

  return value;
}
