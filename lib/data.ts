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
  role: string;
  period: string;
  status: "Production" | "Prototype" | "Concept";
  stack: string[];
  gallery: Array<{ src: string; alt: string }>;
  overview: string[];
  problem: string[];
  solution: string[];
  contributions: string[];
  features: Array<{ title: string; description: string; icon: string }>;
  technical: {
    architecture: string[];
    frontend: string[];
    performance: string[];
  };
  challenges: Array<{ challenge: string; solution: string }>;
  impact: Array<{ label: string; value: string }>;
  lessons: string[];
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
    name: "Data Center Indonesia CMS Platform",
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
    imageUrl: "/projects/dci-cms.png",
    role: "Frontend Developer",
    period: "Sep 2023 — Oct 2024",
    status: "Production",
    stack: ["React.js", "Next.js", "Tailwind", "TanStack Query", "TypeScript"],
    gallery: [
      { src: "/projects/dci-cms.png", alt: "CMS dashboard overview" },
      {
        src: makeAiImageUrl(
          "modern CMS content editor UI, split-pane editor and live preview, dark mode, blue purple accents, clean SaaS, high detail",
          "landscape_16_9",
        ),
        alt: "CMS editor and preview",
      },
      {
        src: makeAiImageUrl(
          "role based access control settings screen UI, dark SaaS settings, toggle switches, permissions matrix, blue purple accents, high detail",
          "landscape_16_9",
        ),
        alt: "Role-based access control settings",
      },
      {
        src: makeAiImageUrl(
          "content analytics dashboard UI, charts and metrics cards, dark mode, minimal, blue purple accent, high detail",
          "landscape_16_9",
        ),
        alt: "Content analytics dashboard",
      },
      {
        src: makeAiImageUrl(
          "mobile CMS preview UI, responsive preview modes, dark theme, blue purple accents, high detail",
          "portrait_16_9",
        ),
        alt: "Mobile preview mode",
      },
    ],
    overview: [
      "A role-based CMS platform designed to help teams create, review, and publish content quickly without breaking brand consistency.",
      "Editors can assemble pages from reusable blocks, preview changes instantly, and manage permissions across teams and roles.",
      "The focus was a clean component architecture and fast UX for daily editorial workflows.",
    ],
    problem: [
      "Editing flows were slow and fragmented across multiple tools, causing frequent context-switching and mistakes.",
      "Non-technical users struggled to keep content consistent while moving fast.",
      "Permissions were too coarse, increasing risk when multiple teams published content.",
    ],
    solution: [
      "Implemented a block-based editor with reusable components and predictable layout rules.",
      "Added real-time previews and autosave behavior to reduce friction and uncertainty.",
      "Built role-based access control patterns so publishing is safe and auditable.",
    ],
    contributions: [
      "Built reusable React components for editor blocks, previews, and settings screens.",
      "Implemented data fetching and caching patterns with TanStack Query for a snappy UI.",
      "Developed real-time interactions (presence/updates) for collaborative editorial workflows.",
      "Improved perceived performance through skeletons, optimistic UI, and sensible pagination.",
    ],
    features: [
      {
        title: "Block-based editor",
        description:
          "Compose pages using reusable blocks with guardrails and previews.",
        icon: "LayoutGrid",
      },
      {
        title: "Live preview",
        description:
          "Instant feedback for changes across desktop and mobile breakpoints.",
        icon: "MonitorSmartphone",
      },
      {
        title: "Role-based access",
        description:
          "Safe publishing with permissions, approvals, and audit-friendly flows.",
        icon: "Shield",
      },
      {
        title: "Content analytics",
        description:
          "Clear visibility into content performance and editorial throughput.",
        icon: "BarChart3",
      },
      {
        title: "Search & filtering",
        description:
          "Find and manage content quickly with fast, responsive controls.",
        icon: "Search",
      },
      {
        title: "Workflow states",
        description:
          "Draft → review → publish with status indicators and history.",
        icon: "Workflow",
      },
    ],
    technical: {
      architecture: [
        "Frontend (React/Next.js)",
        "REST API",
        "Backend services",
        "Database",
      ],
      frontend: [
        "Framework: React + Next.js (App Router patterns)",
        "State: TanStack Query + local state for form/editor interactions",
        "UI: Tailwind components with reusable primitives",
        "Data: normalized server responses + caching + optimistic updates",
      ],
      performance: [
        "Pagination + virtualization strategy for large content lists",
        "Memoized components for editor blocks to prevent rerenders",
        "Lazy loading heavy panels and images to keep interactions smooth",
      ],
    },
    challenges: [
      {
        challenge: "Keeping the editor responsive with complex block UIs.",
        solution:
          "Isolated block state, memoized rendering, and applied optimistic updates.",
      },
      {
        challenge: "Supporting safe publishing across multiple roles.",
        solution:
          "Designed permission checks in UI and clear status + approval flows.",
      },
    ],
    impact: [
      {
        label: "Faster publishing flow",
        value: "Reduced friction with blocks + previews",
      },
      { label: "Safer collaboration", value: "RBAC + clearer workflow states" },
      {
        label: "Better consistency",
        value: "Reusable blocks and layout guardrails",
      },
      { label: "Higher confidence", value: "Instant preview + predictable UI" },
    ],
    lessons: [
      "Designing scalable component architecture for complex editors",
      "Balancing real-time UX with maintainability",
      "Building guardrails that empower non-technical users",
      "Performance optimization for large lists and interactive UIs",
    ],
  },
  {
    slug: "whatsapp-automation-platform",
    name: "WhatsApp Messaging & Automation Suite",
    summary:
      "Automated broadcast campaigns, drip messaging, and live agent handoff.",
    description:
      "An enterprise WhatsApp automation dashboard built for high-throughput customer engagement. Features a drag-and-drop flow builder, template management, real-time message tracking, and seamless live-agent inbox handoff.",
    outcome:
      "Automated 70% of inbound customer queries and streamlined bulk outreach campaigns.",
    tech: ["ReactJS", "Redux Toolkit", "Material UI", "Axios", "WebSocket"],
    liveUrl: "",
    repoUrl: "",
    imageUrl: "/projects/whatsapp-automation.png",
    role: "Frontend Developer",
    period: "Sep 2023 — Oct 2024",
    status: "Production",
    stack: ["ReactJS", "Redux Toolkit", "Material UI", "Axios", "JavaScript"],
    gallery: [
      {
        src: "/projects/whatsapp-automation.png",
        alt: "WhatsApp automation dashboard overview",
      },
      {
        src: makeAiImageUrl(
          "modern WhatsApp broadcast campaign builder UI, message scheduling table, dark mode, Material UI, teal and green accents, sleek SaaS, high detail",
          "landscape_16_9",
        ),
        alt: "Broadcast campaign manager",
      },
      {
        src: makeAiImageUrl(
          "chatbot visual flow builder node graph UI, dark SaaS interface, connected conversation nodes, green blue accents, Material UI, high detail",
          "landscape_16_9",
        ),
        alt: "Visual automated flow builder",
      },
      {
        src: makeAiImageUrl(
          "realtime chat inbox multi agent interface UI, WhatsApp green themes, conversation queue, sidebar customer details, Material UI, high detail",
          "landscape_16_9",
        ),
        alt: "Multi-agent unified live inbox",
      },
      {
        src: makeAiImageUrl(
          "WhatsApp message delivery analytics dashboard UI, delivery rate charts, read receipts metrics, dark mode, green accent, high detail",
          "landscape_16_9",
        ),
        alt: "Messaging performance analytics",
      },
    ],
    overview: [
      "A comprehensive WhatsApp automation platform designed to help marketing and support teams automate customer conversations and manage high-volume broadcasts.",
      "Businesses can build automated drip campaigns, send personalized notifications via WhatsApp Business API, and seamlessly transition complex queries to human agents.",
      "Focused on state management reliability using Redux Toolkit to handle live chat threads, real-time message statuses, and dynamic workflow builders.",
    ],
    problem: [
      "Manual messaging outreach was unscalable, leading to high response times and lost customer leads.",
      "Teams struggled with synchronizing state across multiple support agents handling the same WhatsApp Business account.",
      "Managing rich interactive messages, variable templates, and delivery status tracking (sent, delivered, read) lacked a central interface.",
    ],
    solution: [
      "Built a central multi-agent inbox powered by Redux Toolkit for real-time thread updates and agent assignments.",
      "Created an intuitive template manager with dynamic variables, interactive buttons, and real-time preview.",
      "Integrated Axios interceptors and centralized API management for handling bulk media uploads and status polling smoothly.",
    ],
    contributions: [
      "Architected the Redux Toolkit store sliced by conversations, campaign state, and user permissions for efficient global state access.",
      "Created custom Material UI components and theme overrides tailored for chat interfaces and automation node maps.",
      "Configured Axios instance with request/response interceptors to handle token refreshes, error toasts, and file upload progress.",
      "Optimized heavy chat thread rendering using windowing/virtualization techniques to prevent UI freeze on large message histories.",
    ],
    features: [
      {
        title: "Automated Flow Builder",
        description:
          "Design auto-responder flows and keyphrase triggers without writing code.",
        icon: "Workflow",
      },
      {
        title: "Multi-Agent Live Inbox",
        description:
          "Unified inbox with agent assignment, internal notes, and real-time status updates.",
        icon: "MessageSquare",
      },
      {
        title: "Broadcast Campaigns",
        description:
          "Schedule bulk WhatsApp messages with dynamic tag insertion and audience segmentation.",
        icon: "Send",
      },
      {
        title: "Template Management",
        description:
          "Submit, validate, and preview WhatsApp Business HSM templates directly from the UI.",
        icon: "FileText",
      },
      {
        title: "Real-time Analytics",
        description:
          "Track delivery rates, open rates, response times, and bot deflection metrics.",
        icon: "BarChart3",
      },
      {
        title: "Contact Segmentation",
        description:
          "Organize contacts with custom tags, attributes, and automated import/export tools.",
        icon: "Users",
      },
    ],
    technical: {
      architecture: [
        "Frontend (React.js + Material UI)",
        "State Management (Redux Toolkit + RTK Query)",
        "HTTP Client (Axios)",
        "WhatsApp Business API Gateways",
      ],
      frontend: [
        "Framework: React.js with modular component organization",
        "State: Redux Toolkit for complex relational chat state and campaign builders",
        "UI: Material UI (MUI v5) custom theme and styled components",
        "Data: Axios for REST API calls with request queueing and response normalization",
      ],
      performance: [
        "Virtualization for rendering thousands of chat logs without DOM bloat",
        "Redux selector memoization (Reselect) to avoid expensive recalculations on incoming messages",
        "Axios request cancellation (CancelToken/AbortController) on rapid navigation/filtering",
      ],
    },
    challenges: [
      {
        challenge:
          "Managing frequent WebSocket/real-time state updates in a large inbox without UI jitter.",
        solution:
          "Utilized Redux Toolkit normalized slices and batched state dispatches to keep incoming message rendering smooth.",
      },
      {
        challenge:
          "Handling complex form validation for dynamic WhatsApp templates (variables, buttons, media headers).",
        solution:
          "Built controlled custom Material UI form steps with granular state management and real-time preview feedback.",
      },
    ],
    impact: [
      {
        label: "Higher response speed",
        value: "80% reduction in initial customer wait times",
      },
      {
        label: "Better agent capacity",
        value: "3x increase in queries handled per agent",
      },
      {
        label: "Campaign efficiency",
        value: "95%+ delivery success on bulk broadcast campaigns",
      },
      {
        label: "Reduced support costs",
        value: "70% automated resolution via bot flows",
      },
    ],
    lessons: [
      "Structuring complex Redux state for enterprise chat applications",
      "Maximizing Material UI component customization while keeping bundle size lean",
      "Handling real-time async side-effects gracefully with Redux and Axios",
      "Optimizing heavy list rendering in real-time messaging apps",
    ],
  },

  {
    slug: "wealth-management-system",
    name: "Enterprise Wealth Management CRM",
    summary:
      "Comprehensive FX transaction processing and Market-Linked Deposit management.",
    description:
      "An enterprise-grade financial CRM engineered for relationship managers to execute foreign exchange (FX) deals, structure Market-Linked Deposit (MLD) portfolios, and track client wealth metrics in real time with high availability.",
    outcome:
      "Accelerated FX order execution speeds and streamlined regulatory compliance workflows for high-net-worth portfolio management.",
    tech: [
      "ReactJS",
      "Redux Toolkit",
      "Material UI",
      "Axios",
      "Microservice",
      "Azure",
    ],
    liveUrl: "",
    repoUrl: "",
    imageUrl: "/projects/wealth-management.png",
    role: "Frontend Developer",
    period: "Nov 2024 — Present",
    status: "Production",
    stack: [
      "ReactJS",
      "Redux Toolkit",
      "Material UI",
      "Axios",
      "Azure Services",
    ],
    gallery: [
      {
        src: "/projects/wealth-management.png",
        alt: "Wealth Management CRM dashboard overview",
      },
      {
        src: makeAiImageUrl(
          "financial wealth management CRM dashboard UI, FX foreign exchange trading order book, dark mode, Material UI, navy blue and gold accents, high detail enterprise SaaS",
          "landscape_16_9",
        ),
        alt: "Foreign exchange trading terminal view",
      },
      {
        src: makeAiImageUrl(
          "market linked deposit yield calculator UI, financial charts and structured product portfolios, dark enterprise theme, Material UI, gold accents, high detail",
          "landscape_16_9",
        ),
        alt: "Market-Linked Deposit structuring tool",
      },
      {
        src: makeAiImageUrl(
          "wealth management client portfolio summary UI, asset allocation charts, regulatory compliance checklist, dark mode, Material UI, high detail",
          "landscape_16_9",
        ),
        alt: "Client portfolio and compliance overview",
      },
      {
        src: makeAiImageUrl(
          "financial CRM relationship manager task view, FX rate alert triggers, dark mode, gold accents, high detail",
          "portrait_16_9",
        ),
        alt: "Relationship manager activity center",
      },
    ],
    overview: [
      "A specialized CRM built for wealth management teams to manage high-net-worth client accounts, execute FX spot/forward contracts, and configure Market-Linked Deposits.",
      "Integrated with cloud-native microservices on Azure to consume streaming FX spot rates, validate transaction limits, and process settlement pipelines securely.",
      "Engineered with Redux Toolkit to maintain complex transactional states, active rate lock timers, and dynamic multi-currency calculations across client portfolios.",
    ],
    problem: [
      "Legacy monolithic CRM systems were slow at fetching real-time FX rates, causing order slippage during market volatility.",
      "Structuring Market-Linked Deposits required fragmented manual calculations across spread sheets, increasing operational risk.",
      "Tightly coupled services led to poor fault tolerance during peak market trading hours.",
    ],
    solution: [
      "Built a modular React frontend connecting directly to microservice APIs hosted on Azure, isolating market data streams from trade execution.",
      "Created automated Market-Linked Deposit calculator and booking widgets with strict client risk-profile validation.",
      "Utilized Redux for predictable, centralized state management across multi-tab trade workflows and rate lock countdowns.",
    ],
    contributions: [
      "Designed scalable Redux slices to manage streaming FX exchange rates, trade session tokens, and order state machines.",
      "Constructed complex Material UI financial tables and booking forms tailored with custom validation logic and currency formatters.",
      "Configured Axios clients to interact with distinct Azure API API Management (APIM) microservice gateways with OAuth2 token handling.",
      "Deployed build artifacts and static assets to Azure Static Web Apps integrated with Azure Pipelines for continuous integration.",
    ],
    features: [
      {
        title: "FX Trading Terminal",
        description:
          "Real-time spot/forward foreign exchange booking with live rate locking and spread controls.",
        icon: "TrendingUp",
      },
      {
        title: "MLD Structuring Engine",
        description:
          "Configure Market-Linked Deposit terms, index benchmarks, and payout scenario simulations.",
        icon: "PieChart",
      },
      {
        title: "Client 360 View",
        description:
          "Unified view of total assets under management (AUM), risk profile status, and cross-currency holdings.",
        icon: "UserCheck",
      },
      {
        title: "Microservice Sync",
        description:
          "Decoupled integration with core banking, rate engine, and audit log microservices via Azure.",
        icon: "Server",
      },
      {
        title: "Compliance & Audit Trail",
        description:
          "Automated suitability checks and immutable deal activity logs for regulatory verification.",
        icon: "ShieldCheck",
      },
      {
        title: "Rate Alert System",
        description:
          "Customizable exchange rate triggers and notifications for proactive relationship management.",
        icon: "Bell",
      },
    ],
    technical: {
      architecture: [
        "Frontend (React.js + Material UI)",
        "Global State (Redux Toolkit)",
        "Cloud Infrastructure (Azure Web Apps / Azure APIM)",
        "Backend (Microservice Architecture via Azure Kubernetes Service)",
      ],
      frontend: [
        "Framework: React.js structured around feature-based domain modules",
        "State: Redux Toolkit for rate streaming state, active deals, and portfolio filters",
        "UI: Material UI customized for high-density financial data displays and dark mode",
        "API Layer: Axios instances mapped to individual Azure microservice endpoints",
      ],
      performance: [
        "Redux selector memoization for instantaneous recalculation of multi-currency totals",
        "Optimized Azure CDN caching strategy for frontend static assets",
        "Debounced user inputs on high-frequency market scenario calculators to minimize CPU load",
      ],
    },
    challenges: [
      {
        challenge:
          "Handling real-time FX rate volatility while a relationship manager is actively filling out a trade order.",
        solution:
          "Implemented a Redux-driven rate-lock timer module with Axios request retries that cleanly locks or updates prices upon user confirmation.",
      },
      {
        challenge:
          "Integrating front-end routes smoothly with multiple independently deployed backend microservices on Azure.",
        solution:
          "Standardized Axios base paths using Azure API Management routing and unified response handling middleware.",
      },
    ],
    impact: [
      {
        label: "Execution speed",
        value: "60% faster deal processing for FX orders",
      },
      {
        label: "High Availability",
        value: "99.9% system uptime powered by Azure microservices",
      },
      {
        label: "Operational Efficiency",
        value: "Eliminated manual calculation errors on MLD bookings",
      },
      {
        label: "AUM Growth",
        value:
          "Streamlined portfolio management across multi-currency accounts",
      },
    ],
    lessons: [
      "State architecture patterns for multi-step financial booking engines in Redux",
      "Designing frontend apps to interface seamlessly with Azure microservice environments",
      "Building high-density, accessible financial UIs using Material UI components",
      "Managing asynchronous order execution flows securely using Axios",
    ],
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
    imageUrl: "/projects/bike-showcase.png",
    role: "Frontend Developer",
    period: "Apr 2024 — May 2024",
    status: "Production",
    stack: ["Next.js", "TypeScript", "Material UI", "SEO", "Performance"],
    gallery: [
      { src: "/projects/bike-showcase.png", alt: "Landing page hero section" },
      {
        src: makeAiImageUrl(
          "high converting landing page section layout, testimonial cards, CTA buttons, clean modern SaaS style, dark theme, blue purple accents, high detail",
          "landscape_16_9",
        ),
        alt: "Landing page sections and CTAs",
      },
      {
        src: makeAiImageUrl(
          "mobile landing page UI, stacked sections, sticky CTA, dark theme, blue purple accents, high detail",
          "portrait_16_9",
        ),
        alt: "Mobile landing page experience",
      },
      {
        src: makeAiImageUrl(
          "pricing and FAQ section UI, accordion, clean typography, dark theme, blue purple accents, high detail",
          "landscape_16_9",
        ),
        alt: "FAQ and supporting content",
      },
    ],
    overview: [
      "A conversion-focused landing page built to communicate value fast and drive inbound leads.",
      "Designed around clear hierarchy, fast scanning, and frictionless CTA paths across devices.",
    ],
    problem: [
      "The existing landing experience had unclear messaging and weak CTA structure.",
      "Mobile layout and performance issues reduced engagement and trust.",
    ],
    solution: [
      "Rebuilt the page with a strong information hierarchy and clearer CTA flow.",
      "Optimized for performance and mobile readability with responsive spacing and typography.",
      "Used subtle, supportive motion to guide attention without distraction.",
    ],
    contributions: [
      "Implemented the full page in Next.js with responsive layout and component reuse.",
      "Improved performance via optimized images and lean component structure.",
      "Iterated with stakeholders on content hierarchy and CTA placement.",
    ],
    features: [
      {
        title: "Conversion-first layout",
        description: "Clear hierarchy that drives users to key actions.",
        icon: "Sparkles",
      },
      {
        title: "Mobile-first experience",
        description:
          "Readable typography and stacked layout optimized for small screens.",
        icon: "Smartphone",
      },
      {
        title: "SEO-ready structure",
        description: "Semantic sections and fast loading to support discovery.",
        icon: "Search",
      },
      {
        title: "Polished micro-motion",
        description:
          "Subtle animations that improve clarity and perceived quality.",
        icon: "Wand2",
      },
    ],
    technical: {
      architecture: ["Frontend (Next.js)", "REST/Forms", "Business services"],
      frontend: [
        "Framework: Next.js + TypeScript",
        "UI: Material UI + custom layout primitives",
        "Content: section-based navigation and reusable components",
      ],
      performance: [
        "Optimized images and reduced layout shift",
        "Avoided heavy client JS and kept interactions lightweight",
      ],
    },
    challenges: [
      {
        challenge: "Keeping animations smooth without hurting performance.",
        solution:
          "Used minimal motion, avoided heavy effects, and optimized images.",
      },
      {
        challenge: "Making CTAs clear across screen sizes.",
        solution:
          "Adjusted layout hierarchy and button placement for mobile-first scanning.",
      },
    ],
    impact: [
      {
        label: "Better CTA clarity",
        value: "More focused layout and messaging",
      },
      { label: "Improved trust", value: "Polished UI and stable performance" },
      { label: "Mobile usability", value: "Cleaner spacing and typography" },
    ],
    lessons: [
      "Conversion UX is mostly hierarchy and clarity",
      "Performance and polish increase recruiter confidence",
      "Iterating on content structure is as important as code",
    ],
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
    role: "Frontend Developer",
    period: "Jan 2024 — Mar 2024",
    status: "Production",
    stack: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Accessible UI",
      "Responsive Design",
    ],
    gallery: [
      {
        src: "/projects/university-profile.png",
        alt: "University profile page",
      },
      {
        src: makeAiImageUrl(
          "university dashboard UI, statistics cards, announcements, clean design, dark mode, blue purple accents, high detail",
          "landscape_16_9",
        ),
        alt: "Dashboard overview",
      },
      {
        src: makeAiImageUrl(
          "responsive university site navigation and content sections, mobile layout, dark theme, blue purple accents, high detail",
          "portrait_16_9",
        ),
        alt: "Mobile layout",
      },
    ],
    overview: [
      "A university profile website that presents institutional information in a clear, accessible way.",
      "Built with reusable UI patterns so content pages scale without becoming inconsistent.",
    ],
    problem: [
      "Large amounts of content were hard to scan and maintain across pages.",
      "The experience needed to work smoothly across mobile, tablet, and desktop.",
    ],
    solution: [
      "Introduced consistent layout primitives and content sections for predictable reading flow.",
      "Built responsive components and accessible patterns for navigation and content discovery.",
    ],
    contributions: [
      "Developed reusable layout sections and typography rules for content-heavy pages.",
      "Implemented responsive navigation and consistent spacing across breakpoints.",
      "Ensured accessibility and readability with semantic markup and contrast-safe UI.",
    ],
    features: [
      {
        title: "Content sections",
        description: "Reusable section blocks that keep long pages readable.",
        icon: "LayoutGrid",
      },
      {
        title: "Responsive navigation",
        description: "Clear navigation that adapts across devices.",
        icon: "Compass",
      },
      {
        title: "Accessible UI",
        description:
          "Readable typography and contrast with semantic structure.",
        icon: "Accessibility",
      },
      {
        title: "Reusable layout system",
        description: "Consistent spacing and components across pages.",
        icon: "Layers",
      },
    ],
    technical: {
      architecture: ["Frontend (Next.js)", "Content sources", "Deployment"],
      frontend: [
        "Framework: Next.js + TypeScript",
        "UI: Tailwind-based components and layout system",
        "Data: static + CMS-ready structure for future expansion",
      ],
      performance: [
        "Optimized images and reduced layout shift",
        "Kept components lean to minimize client-side JS",
      ],
    },
    challenges: [
      {
        challenge: "Maintaining consistency across content-heavy pages.",
        solution:
          "Standardized sections, typography scale, and spacing tokens.",
      },
      {
        challenge: "Ensuring readability on mobile.",
        solution:
          "Adjusted line lengths, spacing, and stacking layouts for small screens.",
      },
    ],
    impact: [
      { label: "Improved clarity", value: "Easier scanning and navigation" },
      {
        label: "More consistency",
        value: "Reusable components and layout rules",
      },
      { label: "Future-ready", value: "Structure supports CMS expansion" },
    ],
    lessons: [
      "Content-heavy UI needs strong typographic hierarchy",
      "Consistency is a system, not a one-off page",
      "Accessibility improves perceived quality immediately",
    ],
  },
  {
    slug: "case-study",
    name: "UI/UX Case Study",
    summary: "Data-rich dashboard with responsive layout and accessible UI.",
    description:
      "A mobile app focused on clarity: responsive grids, readable charts placeholders, and accessible interactions. Built with reusable components and smooth, non-distracting animations.",
    outcome: "Enhanced user trust and providing value-added services.",
    tech: [
      "Figma",
      "Miro",
      "Whimsical",
      "Usability testing",
      "Qualitative Analysis",
    ],
    liveUrl:
      "https://drive.google.com/file/d/1gBZaNeDnwSJM2sD-ioDZYuYViZsmJqY6/view?usp=sharing",
    repoUrl: "",
    imageUrl: "/projects/uiuxcasestudy.png",
    role: "UI/UX Designer",
    period: "2024",
    status: "Concept",
    stack: ["Figma", "Miro", "Whimsical", "Design Systems", "UX Flow"],
    gallery: [
      { src: "/projects/uiuxcasestudy.png", alt: "UI/UX case study cover" },
      { src: "/projects/designsystem.webp", alt: "Design system components" },
      {
        src: makeAiImageUrl(
          "user flow diagram, dark theme, clean nodes and connections, blue purple accents, high detail",
          "landscape_16_9",
        ),
        alt: "User flow diagram",
      },
    ],
    overview: [
      "A UI/UX case study showing how I approach product UX: problem framing, flows, UI system, and handoff-ready screens.",
      "Designed to be clear for stakeholders and actionable for engineers with reusable components and patterns.",
    ],
    problem: [
      "Teams needed a consistent UI system and clearer flows to reduce iteration time.",
      "Screens were inconsistent and hard to extend without breaking patterns.",
    ],
    solution: [
      "Created a design system with reusable components and spacing/typography rules.",
      "Mapped flows and edge cases before pushing high-fidelity screens.",
      "Prepared handoff artifacts so implementation stays consistent.",
    ],
    contributions: [
      "Built the design system components and usage rules.",
      "Produced key user flows and interaction states.",
      "Delivered handoff-ready layouts for responsive implementation.",
    ],
    features: [
      {
        title: "Design system",
        description:
          "Reusable components with consistent spacing and typography.",
        icon: "PenTool",
      },
      {
        title: "Flow mapping",
        description: "Clear user journeys and edge-case handling.",
        icon: "Workflow",
      },
      {
        title: "Handoff ready",
        description:
          "Specs and components that engineers can implement quickly.",
        icon: "FileText",
      },
    ],
    technical: {
      architecture: ["Discovery", "User flows", "UI system", "Handoff"],
      frontend: [
        "Outputs: screens, components, specs, and interaction notes",
        "Collaboration: feedback loops with stakeholders and engineering",
      ],
      performance: [
        "Created reusable patterns to reduce rework and improve consistency",
      ],
    },
    challenges: [
      {
        challenge: "Aligning stakeholders on priorities and constraints.",
        solution:
          "Used flow diagrams and quick prototypes to validate decisions early.",
      },
    ],
    impact: [
      {
        label: "Faster implementation",
        value: "Clear handoff with reusable components",
      },
      {
        label: "More consistency",
        value: "Systemized UI patterns and guidelines",
      },
    ],
    lessons: [
      "Strong UI systems reduce long-term maintenance cost",
      "Good handoff is a product multiplier for engineering teams",
      "Flows first, pixels second for better UX decisions",
    ],
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
    title: "High-Converting Landing Pages",
    points: [
      "Strong visual hierarchy",
      "Fast-loading & SEO-friendly",
      "Clear conversion-focused CTA flow",
    ],
    bestFor: "Dealerships, campaigns & product launches",
  },
  {
    title: "Performance & UX Optimization",
    points: [
      "Image & rendering optimization",
      "Smooth animations & interactions",
      "Mobile-first responsive experience",
    ],
    bestFor: "Modern web apps & UX quality improvements",
  },
  {
    title: "Business System Development",
    points: [
      "Finance & administration systems",
      "Task & workflow management",
      "Real-time data-driven interfaces",
    ],
    bestFor: "Enterprise & operational platforms",
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
