"use client";

export default function Projects() {
  const projects = [
    {
      title: "SnipAsker",
      description: "A lightweight Chrome extension that lets users highlight any text on a webpage and get instant AI answers inline. Designed for speed and focus.",
      tech: "Next.js · React · Chrome Extension",
      link: { href: "https://snipasker.vercel.app", label: "Visit" },
    },
    {
      title: "HelmetGuard",
      description: "Real-time helmet detection system with PyTorch and OpenCV. EfficientNet-B4 backbone with attention for road safety applications.",
      tech: "Python · OpenCV · YOLO · Computer Vision",
      link: null,
    },
    {
      title: "RabbitHole",
      description: "Client-side YouTube history analyzer. Performs ETL locally, maps behavior, and visualizes binge patterns. No servers, only playful analytics.",
      tech: "Next.js · IndexedDB · Web Workers",
      link: { href: "https://myjobsy.vercel.app", label: "Coming Soon" },
    },
    {
      title: "Jobsy",
      description: "Local-first job tracker that scrapes links, extracts details, and manages reminders. Fully browser-based so data stays with the user.",
      tech: "Next.js · IndexedDB · Headless UI",
      link: { href: "https://myjobsy.vercel.app", label: "Visit" },
    },
    {
      title: "BenchMarkIQ",
      description: "Upload CSV KPIs and get instant comparisons against industry medians. AI-driven summaries highlight gaps, trends, and strengths.",
      tech: "Next.js · Chart.js · AI Analysis",
      link: { href: "https://bench-mark-iq.vercel.app", label: "Visit" },
    },
    {
      title: "SGA v1.1",
      description: "Compares resumes with job descriptions, scores alignment, and suggests learning paths. A calm coach that turns job goals into action.",
      tech: "Next.js · React Hook Form · AI Scoring",
      link: { href: "https://sga-sage.vercel.app", label: "Visit" },
    },
    {
      title: "Client Portfolio",
      description: "Single-page portfolio with lazy-loaded sections, Supabase content, and CI/CD. Smooth animations and tight typography.",
      tech: "Next.js · Supabase · Vercel",
      link: { href: "https://jayasurya.site/", label: "Visit" },
    },
    {
      title: "PureText",
      description: "LLM tool that rewrites text to stay human and natural while reducing plagiarism flags. Featured on Product Hunt.",
      tech: "Next.js · LLM · AI Writing",
      link: { href: "https://puretextbydatco.vercel.app", label: "Visit" },
    },
    {
      title: "SpeedCode",
      description: "Practice real coding challenges while typing at speed. Blends rhythm, focus, and algorithmic thinking.",
      tech: "Next.js · Typing Engine · Algorithms",
      link: { href: "https://speedcode.vercel.app", label: "Visit" },
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="group">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[0.9375rem] font-medium text-black">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-black/40 hover:text-black transition-colors flex-shrink-0"
              >
                {project.link.label} ↗
              </a>
            )}
          </div>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/60">
            {project.description}
          </p>
          <p className="mt-2 text-xs text-black/35">
            {project.tech}
          </p>
        </div>
      ))}
    </div>
  );
}
