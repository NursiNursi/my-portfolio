import Link from "next/link";
import { Code, Link as LinkIcon, Mail } from "lucide-react";
import { SITE_LINKS } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/80 bg-bg">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-fg">
              Muhamad Nursi Ramdan
            </div>
            <div className="mt-1 text-sm text-muted">
              Frontend Developer | React & Next.js Specialist
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm text-fg hover:bg-surface-2"
              href={SITE_LINKS.emailHref}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm text-fg hover:bg-surface-2"
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm text-fg hover:bg-surface-2"
              href={SITE_LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border/80 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <div>© {year} Muhamad Nursi Ramdan. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/#projects" className="hover:text-fg">
              Work
            </Link>
            <Link href="/#contact" className="hover:text-fg">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
