"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full font-regular text-white">
      <div className="space-y-6">
        <div className="space-y-8 sm:space-y-10">
          <ProjectCard
            title="HelmetGuard: Real-Time Helmet Detection"
            subtitle="Final engineering year capstone"
            images={[]}
            description="Built a real-time helmet detection system with PyTorch and OpenCV. EfficientNet-B4 backbone with attention, custom dataset loader, logging, and live video inference with bounding boxes. Team effort focused on practical computer vision for road safety."
            tags={[
              "python",
              "opencv",
              "cnn",
              "yolo",
              "efficientnet",
              "computer vision",
            ]}
            links={[]}
          />

          <ProjectCard
            title="RabbitHole"
            subtitle="Client-side YouTube history analyzer"
            images={["/r3.png"]}
            description="RabbitHole runs fully in the browser to analyze YouTube Watch History from Google Takeout JSON. Performs ETL locally, maps behavior, and visualizes binge patterns like Night Owl Score or Nostalgic Year. No servers, only playful analytics."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "etl",
              "indexeddb",
              "web workers",
              "data viz",
              "client-only",
              "html2pdf",
            ]}
            links={[{ href: "https://myjobsy.vercel.app", label: "[yet to deploy]" }]}
          />

          <ProjectCard
            title="Jobsy: Application Tracker"
            subtitle="Local-first job pipeline"
            images={["/jobsy.png"]}
            description="Local-first job tracker that scrapes links, extracts details, and manages reminders. Dark calm UI with alerts for deadlines or inactive posts. Fully browser based with no servers so data stays with the user."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "indexeddb",
              "headless ui",
              "automation",
              "data extraction",
              "vercel",
            ]}
            links={[{ href: "https://myjobsy.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="BenchMarkIQ: AI Industry Benchmark Analyzer"
            subtitle="Compare your KPIs"
            images={["/bmiq.png"]}
            description="Upload CSV KPIs and get instant comparisons against industry medians. AI-driven summaries highlight gaps, trends, and strengths with clean data visuals so teams can move from spreadsheets to decisions."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "papaparse",
              "chart.js",
              "csv",
              "data viz",
              "ai analysis",
            ]}
            links={[{ href: "https://bench-mark-iq.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="SGA v1.1: Skills Gap Analyzer"
            subtitle="Resume vs JD scoring"
            images={["/sga.png"]}
            description="Compares resumes with job descriptions, scores alignment, and suggests learning paths plus project ideas. Designed to feel like a calm coach that turns job goals into a clear action plan."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "react hook form",
              "headless ui",
              "ai scoring",
              "vercel",
            ]}
            links={[{ href: "https://sga-sage.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="Client Personal Portfolio"
            subtitle="Single-page client site"
            images={["/image.png"]}
            description="Designed and built a single-page portfolio with lazy-loaded sections, Supabase content, and CI/CD. Smooth animations, tight typography, and high client satisfaction."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "supabase",
              "vercel",
              "ci/cd",
              "client work",
            ]}
            links={[{ href: "https://jayasurya.site/", label: "Visit" }]}
          />

          <ProjectCard
            title="PureText"
            subtitle="LLM-powered rephrase tool"
            images={["/puretext.png"]}
            description="LLM tool that rewrites text to stay human and natural while reducing plagiarism flags. Simple, clean interface; gained attention on Product Hunt for practicality."
            tags={[
              "next.js",
              "react",
              "tailwind",
              "llm",
              "figma",
              "ai writing",
              "product hunt",
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
              "next.js",
              "react",
              "tailwind",
              "typing engine",
              "algorithms",
              "figma",
              "ci/cd",
            ]}
            links={[{ href: "https://speedcode.vercel.app", label: "Visit" }]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, images = [], description, links = [], tags = [] }) {
  return (
    <article className="space-y-3">
      <header className="space-y-1">
        <p className="text-xs text-white/50">{subtitle}</p>
        <h3 className="text-sm font-semibold leading-snug">{title}</h3>
      </header>

      {/* Images */}
      {images.length > 0 && (
        <div className="space-y-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-white/80 leading-relaxed">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="grid w-full gap-2 [grid-template-columns:repeat(auto-fit,minmax(110px,1fr))]">
          {tags.map((tag, idx) => (
            <li key={idx} className="text-sm text-white/70 capitalize text-center">
              {tag}
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
              className="inline-flex items-center gap-1 text-white underline underline-offset-4"
            >
              {link.label}
              <ArrowUpRightIcon className="h-4 w-4 text-white/70" />
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
