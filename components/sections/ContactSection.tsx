"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Code, Download, Link as LinkIcon, Mail, Send } from "lucide-react";
import { SectionShell } from "@/components/sections/SectionShell";
import { SITE_LINKS } from "@/lib/site";

const cvHref = "/files/CV_Muhamad%20Nursi%20Ramdan_English.pdf";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactSection() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validation = useMemo(() => {
    const nameOk = form.name.trim().length >= 2;
    const emailOk = isEmail(form.email.trim());
    const msgOk = form.message.trim().length >= 10;
    return {
      nameOk,
      emailOk,
      msgOk,
      ok: nameOk && emailOk && msgOk,
    };
  }, [form.email, form.message, form.name]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validation.ok) {
      setError("Please fill out the form with a valid email and message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          contextUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!data.ok) {
        if (res.status === 501) {
          const subject = encodeURIComponent("Portfolio inquiry");
          const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
          );
          window.location.href = `${SITE_LINKS.emailHref}?subject=${subject}&body=${body}`;
          router.push("/thank-you");
          return;
        }
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      router.push("/thank-you");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionShell id="contact" eyebrow="Let’s talk" title="Contact">
      <div className="grid gap-6 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]">
            <div className="text-sm font-semibold text-fg">Quick response</div>
            <div className="mt-2 text-sm leading-6 text-muted">
              Recruiters: share role details, team, and timeline. I’ll respond
              as soon as possible.
            </div>
            <div className="mt-5 grid gap-2">
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg hover:bg-surface"
                href={SITE_LINKS.emailHref}
              >
                <Mail className="h-4 w-4" />
                {SITE_LINKS.email}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg hover:bg-surface"
                href={cvHref}
                download
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg hover:bg-surface"
                href={SITE_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg hover:bg-surface"
                href={SITE_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.06 }}
        >
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className={
                    "mt-2 w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition " +
                    (validation.nameOk
                      ? "border-border focus:border-accent focus:ring-2 focus:ring-accent/30"
                      : "border-border focus:border-danger focus:ring-2 focus:ring-danger/25")
                  }
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className={
                    "mt-2 w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition " +
                    (validation.emailOk
                      ? "border-border focus:border-accent focus:ring-2 focus:ring-accent/30"
                      : "border-border focus:border-danger focus:ring-2 focus:ring-danger/25")
                  }
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                rows={6}
                className={
                  "mt-2 w-full resize-none rounded-xl border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition " +
                  (validation.msgOk
                    ? "border-border focus:border-accent focus:ring-2 focus:ring-accent/30"
                    : "border-border focus:border-danger focus:ring-2 focus:ring-danger/25")
                }
                placeholder="Tell me about the role, team, and what you’re looking for."
              />
            </div>
            {error ? (
              <div className="mt-4 text-sm text-danger">{error}</div>
            ) : null}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-muted">
                {submitting ? "Sending…" : "I’ll reply as soon as possible."}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}
