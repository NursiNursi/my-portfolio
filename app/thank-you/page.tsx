import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow)]">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Message sent
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
          Thanks for reaching out
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          I’ve received your message. If you shared role details and timeline,
          I’ll respond as soon as possible.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-fg hover:bg-surface-2"
          >
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white"
          >
            View work
          </Link>
        </div>
      </div>
    </div>
  );
}
