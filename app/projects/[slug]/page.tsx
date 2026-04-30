import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="container-page py-12 md:py-16">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Case study
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)]">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1000px"
            priority
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-lg font-semibold text-fg">Overview</h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                {project.description}
              </p>

              <h2 className="mt-8 text-lg font-semibold text-fg">Outcome</h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                {project.outcome}
              </p>

              <h2 className="mt-8 text-lg font-semibold text-fg">Approach</h2>
              <ul className="mt-3 space-y-2 text-sm text-fg/90">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  <span className="leading-6">
                    Component-driven UI with consistent spacing and tokens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  <span className="leading-6">
                    Performance-minded rendering and optimized images.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  <span className="leading-6">
                    Subtle motion that supports hierarchy, not distractions.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-border bg-surface-2 p-5">
                <div className="text-sm font-semibold text-fg">Links</div>
                <div className="mt-4 grid gap-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-white"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-fg hover:bg-surface"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="mt-6 h-px w-full bg-border/80" />
                <div className="mt-5 text-sm text-muted">
                  Want something similar? Let’s discuss your project.
                </div>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-fg hover:bg-surface"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#projects" className="text-sm text-muted hover:text-fg">
          ← Back to work
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white"
        >
          Let’s talk
        </Link>
      </div>
    </div>
  );
}
