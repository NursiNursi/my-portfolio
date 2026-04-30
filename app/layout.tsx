import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteChrome } from "@/components/SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhamad Nursi Ramdan — Frontend Developer",
    template: "%s — Muhamad Nursi Ramdan",
  },
  description:
    "Conversion-focused frontend development with React and Next.js: fast, accessible, and polished UI engineering.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    title: "Muhamad Nursi Ramdan — Frontend Developer",
    description:
      "Conversion-focused frontend development with React and Next.js: fast, accessible, and polished UI engineering.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Nursi Ramdan — Frontend Developer",
    description:
      "Conversion-focused frontend development with React and Next.js: fast, accessible, and polished UI engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}

