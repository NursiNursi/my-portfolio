"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_ITEMS } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionIds = useMemo(
    () => NAV_ITEMS.map((i) => i.id).filter(Boolean) as string[],
    [],
  );
  const activeId = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-surface-2 shadow-[var(--shadow)]">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-fg group-hover:text-fg/90">
            Muhamad Nursi Ramdan
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const href = item.id ? `/#${item.id}` : "/";
            const isActive = isHome && item.id && activeId === item.id;
            return (
              <a
                key={item.label}
                href={href}
                onClick={(e) => {
                  if (!item.id) return;
                  if (!isHome) return;
                  e.preventDefault();
                  scrollToId(item.id);
                }}
                className={
                  "rounded-full px-3 py-2 text-sm transition-colors " +
                  (isActive
                    ? "bg-surface-2 text-fg"
                    : "text-muted hover:text-fg hover:bg-surface-2/70")
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            onClick={(e) => {
              if (!isHome) return;
              e.preventDefault();
              scrollToId("contact");
            }}
            className="hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Contact
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:bg-surface-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: -8,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            className="border-t border-border bg-bg md:hidden"
          >
            <div className="container-page py-3">
              <div className="grid gap-1">
                {NAV_ITEMS.map((item) => {
                  const href = item.id ? `/#${item.id}` : "/";
                  const isActive = isHome && item.id && activeId === item.id;
                  return (
                    <a
                      key={item.label}
                      href={href}
                      onClick={(e) => {
                        if (!item.id) return;
                        if (!isHome) return;
                        e.preventDefault();
                        scrollToId(item.id);
                        setMobileOpen(false);
                      }}
                      className={
                        "rounded-xl px-3 py-2 text-sm transition-colors " +
                        (isActive
                          ? "bg-surface-2 text-fg"
                          : "text-muted hover:text-fg hover:bg-surface-2/70")
                      }
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href="/#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-white"
                  onClick={(e) => {
                    if (!isHome) return;
                    e.preventDefault();
                    scrollToId("contact");
                    setMobileOpen(false);
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
