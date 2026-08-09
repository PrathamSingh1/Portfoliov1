import { createElement } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

export type Technology = {
  icon: React.ReactNode;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  technologies?: Technology[];
  live: "Live" | "Building" | "Coming Soon";
};

const iconClass = "fill-muted-foreground";

// helper to avoid repeating createElement(...) everywhere
const icon = (
  Icon: React.ElementType,
  label: string,
): Technology => ({
  label,
  icon: createElement(Icon, { size: 14, className: iconClass }),
});

export const projects: Project[] = [
  {
    title: "AI Chat Assistant",
    description:
      "A conversational AI assistant with streaming responses, context-aware memory, and multi-model support. Built for speed and a clean, distraction-free chat experience.",
    image: { src: "/project/ai-chat.png", alt: "AI Chat Assistant" },
    live: "Live",
    liveUrl: "https://example.com/ai-chat",
    githubUrl: "https://github.com/yourname/ai-chat-assistant",
    technologies: [
      icon(SiNextdotjs, "Next.js"),
      icon(SiTypescript, "TypeScript"),
      icon(SiAnthropic, "Anthropic"),
      icon(SiClaude, "Claude"),
      icon(SiTailwindcss, "Tailwind CSS"),
    ],
  },
  {
    title: "3D Portfolio Showcase",
    description:
      "An interactive 3D portfolio built with WebGL, featuring smooth camera transitions, custom shaders, and scroll-driven animations for an immersive browsing experience.",
    image: {
      src: "/project/project.png",
      alt: "3D Portfolio Showcase",
    },
    live: "Coming Soon",
    liveUrl: "https://example.com/3d-portfolio",
    githubUrl: "https://github.com/yourname/3d-portfolio",
    technologies: [
      icon(SiReact, "React"),
      icon(SiThreedotjs, "Three.js"),
      icon(SiTypescript, "TypeScript"),
      icon(SiFramer, "Framer Motion"),
    ],
  },
  {
    title: "Realtime Collab Whiteboard",
    description:
      "A collaborative whiteboard app supporting live multi-user drawing, shape recognition, and infinite canvas panning, synced in real time across sessions.",
    image: {
      src: "/project/whiteboard.png",
      alt: "Realtime Collab Whiteboard",
    },
    live: "Building",
    githubUrl: "https://github.com/yourname/collab-whiteboard",
    technologies: [
      icon(SiTldraw, "Tldraw"),
      icon(SiNodedotjs, "Node.js"),
      icon(SiRedis, "Redis"),
      icon(SiCloudflare, "Cloudflare"),
    ],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "A data analytics dashboard with natural language querying, automated insight generation, and live charting for tracking key business metrics.",
    image: {
      src: "/project/analytics.png",
      alt: "AI Analytics Dashboard",
    },
    live: "Live",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/yourname/ai-analytics-dashboard",
    technologies: [
      icon(SiNextdotjs, "Next.js"),
      icon(SiLangchain, "LangChain"),
      icon(SiChartdotjs, "Chart.js"),
      icon(SiPrisma, "Prisma"),
      icon(SiGooglegemini, "Gemini"),
    ],
  },
  {
    title: "Background Task Orchestrator",
    description:
      "A distributed task queue system for scheduling and monitoring long-running background jobs, with retry logic, dashboards, and alerting built in.",
    image: {
      src: "/project/orchestrator.png",
      alt: "Background Task Orchestrator",
    },
    live: "Coming Soon",
    githubUrl: "https://github.com/yourname/task-orchestrator",
    technologies: [
      icon(SiFastapi, "FastAPI"),
      icon(SiCelery, "Celery"),
      icon(SiPython, "Python"),
      icon(SiRedis, "Redis"),
    ],
  },
  {
    title: "Component UI Kit",
    description:
      "An open-source, accessible component library built on Radix primitives, published with automated linting, testing, and versioned releases.",
    image: { src: "/project/ui-kit.png", alt: "Component UI Kit" },
    live: "Live",
    liveUrl: "https://example.com/ui-kit",
    githubUrl: "https://github.com/yourname/ui-kit",
    technologies: [
      icon(SiRadixui, "Radix UI"),
      icon(SiBun, "Bun"),
      icon(SiEslint, "ESLint"),
      icon(SiCss, "CSS"),
      icon(SiGithub, "GitHub"),
    ],
  },
];
