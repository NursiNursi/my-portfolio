import { makeAiImageUrl } from "@/lib/image";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  outcome: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "cms-platform",
    name: "CMS Platform",
    summary: "Role-based content management with blazing-fast editorial UX.",
    description:
      "A CMS platform built for speed and clarity: structured content, live previews, and reusable blocks. Designed to keep editors productive while maintaining a clean, component-driven frontend architecture.",
    outcome:
      "Reduced editing friction with reusable blocks and instant previews.",
    tech: [
      "ReactJS",
      "TailwindCSS",
      "TypeScript",
      "WebSocket",
      "Tanstack Query",
    ],
    liveUrl: "",
    repoUrl: "",
    imageUrl: "/projects/cms-dashboard.png",
  },
  {
    slug: "landing-page",
    name: "Auto Commerce Platform",
    summary: "Conversion-first landing experience with polished motion design.",
    description:
      "A landing page built to convert: strong hierarchy, crisp typography, and performance-focused implementation. Includes section-based navigation, CTA optimizations, and subtle animations that support readability.",
    outcome:
      "Improved CTA clarity with focused layout and frictionless navigation.",
    tech: ["Next.js", "Material UI", "TypeScript"],
    liveUrl: "https://www.mia-motorhondabandung.com/",
    repoUrl: "",
    imageUrl: "/projects/landingpage.png",
  },
  {
    slug: "dashboard-app",
    name: "University Profile",
    summary: "Data-rich dashboard with responsive layout and accessible UI.",
    description:
      "A university profile website with a focus on user experience and information presentation.",
    outcome: "Delivered a clean UI system that scales across complex screens.",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    liveUrl: "",
    repoUrl: "",
    imageUrl: "/projects/university-profile.png",
  },
  {
    slug: "case-study",
    name: "UI/UX Case Study",
    summary: "Data-rich dashboard with responsive layout and accessible UI.",
    description:
      "A dashboard app focused on clarity: responsive grids, readable charts placeholders, and accessible interactions. Built with reusable components and smooth, non-distracting animations.",
    outcome: "Enhanced user trust and providing value-added services.",
    tech: ["Figma", "Miro", "Whimsical"],
    liveUrl:
      "https://drive.google.com/file/d/1gBZaNeDnwSJM2sD-ioDZYuYViZsmJqY6/view?usp=sharing",
    repoUrl: "",
    imageUrl: "/projects/uiuxcasestudy.png",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Vodjo Software House",
    role: "Frontend Developer (Freelance)",
    duration: "Jan 2026 — Apr 2026",
    achievements: [
      "Developed a CMS application using React.js and TanStack Query.",
      "Built dynamic company profiles with Next.js powered by CMS-managed content.",
      "Delivered responsive and scalable frontend architecture.",
    ],
  },
  {
    company: "PT. Praisindo Teknologi",
    role: "Frontend Developer",
    duration: "Sep 2024 — Nov 2025",
    achievements: [
      "Built high-performance, scalable web applications using ReactJS and Redux Toolkit, integrating with microservices ecosystems for fast and reliable user experiences across multiple platforms.",
      "Collaborated with backend developers and UI/UX designers to build clean, modular, and reusable React components aligned with product requirements and design specifications.",
    ],
  },
  {
    company: "PT Mandala Multifinance Tbk",
    role: "Frontend Developer",
    duration: "Apr 2023 — May 2024",
    achievements: [
      "Delivered seamless integration between front-end and back-end systems by collaborating with cross-functional teams across web and mobile platforms using React and React Native.",
      "Built high-performance, interactive applications ensuring consistent user experiences across web and mobile environments.",
    ],
  },
  {
    company: "PT. Barrans Global Mandiri",
    role: "Frontend Developer",
    duration: "Dec 2021 — Dec 2022",
    achievements: [
      "Wrote clean, efficient, and maintainable code using HTML, CSS, and JavaScript.",
      "Ensured consistent application behavior across different web browsers and platforms.",
    ],
  },
];

export const SERVICES: Array<{
  title: string;
  points: string[];
  bestFor: string;
}> = [
  {
    title: "Landing Pages",
    points: ["Strong hierarchy", "Fast load", "Clear CTA paths"],
    bestFor: "Campaigns & product launches",
  },
  {
    title: "React / Next.js UI Engineering",
    points: ["Reusable components", "Clean state patterns", "Accessibility"],
    bestFor: "SaaS apps & dashboards",
  },
  {
    title: "Performance & UX Polish",
    points: ["Image optimization", "Smooth motion", "Responsive layouts"],
    bestFor: "Quality upgrades",
  },
];

export const TESTIMONIALS: Array<{
  name: string;
  role: string;
  quote: string;
}> = [
  {
    name: "Recruiter",
    role: "Talent Acquisition",
    quote:
      "Clear communication, strong UI execution, and a great sense of polish. Easy to evaluate and easy to trust.",
  },
  {
    name: "Product Teammate",
    role: "Product Manager",
    quote:
      "Delivers quickly without sacrificing quality. The UI feels consistent and performance stays high.",
  },
  {
    name: "Design Partner",
    role: "UI/UX Designer",
    quote:
      "Excellent at translating design intent into real interfaces, especially for responsive layouts.",
  },
];

export const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What roles are you open to?",
    a: "Frontend Developer roles focusing on React/Next.js, UI engineering, and product-minded delivery.",
  },
  {
    q: "What do you optimize for?",
    a: "Conversion, performance, accessibility, and maintainability. I prefer clean UI systems over one-off pages.",
  },
  {
    q: "How quickly can you start?",
    a: "Depending on interview process and notice period. Reach out and I’ll reply with availability.",
  },
];
