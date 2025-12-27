"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full font-regular text-white [data-theme='light']:text-black space-y-8 transition-colors duration-300">
      <div className="space-y-8">

      <ProjectCard
          title="SnipAsker"
          subtitle="Inline AI assistant for instant context-aware answers"
          images={["/snipasker-wall.png"]}
          description="SnipAsker is a lightweight Chrome extension that lets users highlight any text on a webpage and get instant AI answers inline - without opening new tabs or scrolling away. Designed for speed and focus, it delivers quick explanations, summaries, and clarity exactly where you’re reading."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "API",
            "Chrome Extension",
            "Vercel",
          ]}
          links={[{ href: "https://snipasker.vercel.app", label: "SnipAsker" }]}
        />


        <ProjectCard
          title="HelmetGuard: Real-Time Helmet Detection"
          subtitle="Final engineering year capstone"
          images={[]}
          description="Built a real-time helmet detection system with PyTorch and OpenCV. EfficientNet-B4 backbone with attention, custom dataset loader, logging, and live video inference with bounding boxes. Team effort focused on practical computer vision for road safety."
          tags={[
            "Python",
            "OpenCV",
            "CNN",
            "YOLO",
            "EfficientNet",
            "Computer Vision",
          ]}
          links={[]}
        />

        <ProjectCard
          title="RabbitHole"
          subtitle="Client-side YouTube history analyzer"
          images={["/r3.png"]}
          description="RabbitHole runs fully in the browser to analyze YouTube Watch History from Google Takeout JSON. Performs ETL locally, maps behavior, and visualizes binge patterns like Night Owl Score or Nostalgic Year. No servers, only playful analytics."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "ETL",
            "IndexedDB",
            "Web Workers",
            "Data Viz",
            "Client-Only",
            "HTML2PDF",
          ]}
          links={[{ href: "https://myjobsy.vercel.app", label: "[Yet to deploy]" }]}
        />

        <ProjectCard
          title="Jobsy: Application Tracker"
          subtitle="Local-first job pipeline"
          images={["/jobsy.png"]}
          description="Local-first job tracker that scrapes links, extracts details, and manages reminders. Dark calm UI with alerts for deadlines or inactive posts. Fully browser based with no servers so data stays with the user."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "IndexedDB",
            "Headless UI",
            "Automation",
            "Data Extraction",
            "Vercel",
          ]}
          links={[{ href: "https://myjobsy.vercel.app", label: "Visit" }]}
        />

        <ProjectCard
          title="BenchMarkIQ: AI Industry Benchmark Analyzer"
          subtitle="Compare your KPIs"
          images={["/bmiq.png"]}
          description="Upload CSV KPIs and get instant comparisons against industry medians. AI-driven summaries highlight gaps, trends, and strengths with clean data visuals so teams can move from spreadsheets to decisions."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "PapaParse",
            "Chart.js",
            "CSV",
            "Data Viz",
            "AI Analysis",
          ]}
          links={[{ href: "https://bench-mark-iq.vercel.app", label: "Visit" }]}
        />

        <ProjectCard
          title="SGA v1.1: Skills Gap Analyzer"
          subtitle="Resume vs JD scoring"
          images={["/sga.png"]}
          description="Compares resumes with job descriptions, scores alignment, and suggests learning paths plus project ideas. Designed to feel like a calm coach that turns job goals into a clear action plan."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "React Hook Form",
            "Headless UI",
            "AI Scoring",
            "Vercel",
          ]}
          links={[{ href: "https://sga-sage.vercel.app", label: "Visit" }]}
        />

        <ProjectCard
          title="Client Personal Portfolio"
          subtitle="Single-page client site"
          images={["/image.png"]}
          description="Designed and built a single-page portfolio with lazy-loaded sections, Supabase content, and CI/CD. Smooth animations, tight typography, and high client satisfaction."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "Supabase",
            "Vercel",
            "CI/CD",
            "Client Work",
          ]}
          links={[{ href: "https://jayasurya.site/", label: "Visit" }]}
        />

        <ProjectCard
          title="PureText"
          subtitle="LLM-powered rephrase tool"
          images={["/puretext.png"]}
          description="LLM tool that rewrites text to stay human and natural while reducing plagiarism flags. Simple, clean interface; gained attention on Product Hunt for practicality."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "LLM",
            "Figma",
            "AI Writing",
            "Product Hunt",
          ]}
          links={[
            { href: "https://puretextbydatco.vercel.app", label: "Visit" },
            { href: "https://www.producthunt.com/posts/puretext", label: "Product Hunt" },
          ]}
        />

        <ProjectCard
          title="SpeedCode"
          subtitle="Typing meets algorithms"
          images={["/speedcode.png"]}
          description="Practice real coding challenges while typing at speed. Blends rhythm, focus, and algorithmic thinking; built to feel more like a game than a test."
          tags={[
            "Next.js",
            "React",
            "Tailwind",
            "Typing Engine",
            "Algorithms",
            "Figma",
            "CI/CD",
          ]}
          links={[{ href: "https://speedcode.vercel.app", label: "Visit" }]}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, images = [], description, links = [], tags = [] }) {
  return (
    <article className="space-y-4 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300">
      <div className="space-y-2">
        <p className="text-[0.75rem] font-medium text-white/40 [data-theme='light']:text-black/40 tracking-wide uppercase">
          {subtitle}
        </p>
        <h3 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Images */}
      {images.length > 0 && (
        <div className="space-y-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`${title} project screenshot`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <li key={idx}>
              <span className="text-[0.75rem] font-normal text-white/50 [data-theme='light']:text-black/50 transition-colors duration-300">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[0.875rem] font-normal text-white [data-theme='light']:text-black underline underline-offset-4 hover:text-white/80 [data-theme='light']:hover:text-black/80 transition-colors duration-300"
            >
              {link.label}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
