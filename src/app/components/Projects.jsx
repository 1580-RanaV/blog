"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Projects
        </h2>

        <p className="mt-2 text-[26px] sm:text-[30px] font-semibold leading-tight tracking-tight text-neutral-900">
          Selected Work
        </p>

        {/* Projects List */}
        <div className="mt-10 space-y-16 sm:space-y-20">
          <ProjectCard
            title="Jobsy: Application Tracker"
            images={["/jobsy-1.png", "/jobsy.png"]}
            description="Local-first tracker that auto-captures job links, extracts details, flags inactive postings, and reminds you before deadlines."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "IndexedDB",
              "Shadcn UI",
              "Vercel",
              "GitHub",
              "CI/CD Pipelines",
              "Llama API",
            ]}
            links={[{ href: "https://myjobsy.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="BenchMarkIQ: AI Industry Benchmark Analyzer"
            images={["/bmiq.png"]}
            description="Upload KPIs, compare against industry medians, and get data-driven insights to improve performance."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "PapaParse",
              "Chart.js",
              "CSV",
              "GitHub",
              "Vercel",
            ]}
            links={[{ href: "https://bench-mark-iq.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="SGA v1.1: Skills Gap Analyzer"
            images={["/sga.png"]}
            description="Analyzes resumes vs. job descriptions, scores alignment, and recommends learning paths and portfolio projects."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Figma",
              "React Hook Form",
              "Headless UI",
              "Vercel",
              "GitHub",
              "CI/CD Pipelines",
            ]}
            links={[{ href: "https://sga-sage.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="Client Personal Portfolio"
            images={["/js.png"]}
            description="Single-page portfolio with tight typography, lazy loading, Supabase integration, and automated deployment pipeline."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Vercel",
              "CI/CD",
              "Prisma/Supabase",
            ]}
            links={[{ href: "https://jayasurya.site/", label: "Visit" }]}
          />

          <ProjectCard
            title="PureText"
            images={["/puretext.png"]}
            description="Convert text into plagiarism-free content using an LLM. 80%+ effective against Turnitin & Grammarly. Featured on Product Hunt."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "LLM",
              "Figma",
              "Product Hunt",
            ]}
            links={[
              { href: "https://puretextbydatco.vercel.app", label: "Visit" },
              {
                href: "https://www.producthunt.com/posts/puretext",
                label: "Product Hunt",
              },
            ]}
          />

          <ProjectCard
            title="SpeedCode"
            images={["/speedcode.png"]}
            description="Practice coding algorithms while improving typing speed — algorithmic accuracy meets flow state typing."
            tags={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "GitHub",
              "CI/CD",
              "Figma",
            ]}
            links={[{ href: "https://speedcode.vercel.app", label: "Visit" }]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, images = [], description, links = [], tags = [] }) {
  return (
    <article className="group border-l border-neutral-200 pl-6 transition-all hover:border-neutral-900">
      <header>
        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug text-neutral-900">
          {title}
        </h3>
      </header>

      {/* Images */}
      <div className="mt-5 space-y-3">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-neutral-200">
            <Image
              src={src}
              alt={title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 font-mono text-[14px] leading-relaxed text-neutral-700">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <li key={idx}>
              <TagChip label={tag} />
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className="mt-5 flex flex-wrap gap-4 font-sans text-[14px]">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-neutral-900 underline-offset-4 hover:underline"
          >
            {link.label}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </article>
  );
}

function TagChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-colors">
      {label}
    </span>
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
