"use client";

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Few projects
        </h2>

        <div className="mt-8 space-y-8">
          <ProjectCard
            title="Jobsy: Application Tracker"
            images={["/jobsy-1.png", "/jobsy.png"]}
            description="Local-first application tracker that auto-captures job links, extracts details, flags inactive postings, and reminds you before deadlines."
            tags={["Next.js", "React", "Tailwind CSS", "IndexedDB", "Shadcn UI", "Vercel","Github","CI/CD Pipelines","Llama API"]}
            links={[{ href: "https://myjobsy.vercel.app", label: "Jobsy" }]}
          />

          <ProjectCard
            title="BenchMarkIQ: AI-Powered Industry Benchmark Analyzer"
            images={["/bmiq.png"]}
            description="Upload KPIs, compare against industry medians, and get actionable insights to improve performance."
            tags={["Next.js", "React", "Tailwind CSS", "PapaParse", "Chart.js", "CSV", "Github","Vercel"]}
            links={[{ href: "https://bench-mark-iq.vercel.app", label: "BenchMarkIQ" }]}
          />

          <ProjectCard
            title="SGA v1.1: Skills Gap Analyzer"
            images={["/sga.png"]}
            description="Analyzes a candidate’s resume against a job description, scores the match, and suggests personalized learning plans, projects, and resume improvements."
            tags={["Next.js", "React", "Tailwind CSS", "Figma", "React Hook Form", "Headless UI", "Vercel","Github","CI/CD Pipelines"]}
            links={[{ href: "https://sga-sage.vercel.app", label: "SGA v1.1" }]}
          />

          <ProjectCard
            title="Client Personal Portfolio"
            images={["/js.png"]}
            description="Single-page portfolio with clean UI, tight typography, lazy loading to reduce server load, database integration for messages, and CI/CD via Git. High customer satisfaction."
            tags={["Next.js", "React", "Tailwind CSS", "Vercel", "CI/CD", "Prisma/Supabase"]}
            links={[{ href: "https://jayasurya.site/", label: "jayasurya.site" }]}
          />

          <ProjectCard
            title="PureText"
            images={["/puretext.png"]}
            description="Convert regular text to plagiarism-free text with an LLM — smooth, responsive, blazing fast, and typically 80%+ effective against tools like Turnitin and Grammarly. Now live on Product Hunt."
            tags={["Next.js", "React", "Tailwind CSS", "LLM", "Figma", "Featured on Product Hunt"]}
            links={[
              { href: "https://puretextbydatco.vercel.app", label: "PureText" },
              { href: "https://www.producthunt.com/posts/puretext", label: "ProductHunt" },
            ]}
          />

          <ProjectCard
            title="SpeedCode"
            images={["/speedcode.png"]}
            description="Practice essential coding algorithms while improving typing speed. Two goals in one — choose an algorithm, type it out, and track progress."
            tags={["Next.js", "React", "Tailwind CSS", "Github", "CI/CD", "18 Pull Requests","Figma"]}
            links={[{ href: "https://speedcode.vercel.app", label: "SpeedCode" }]}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, images, description, links, tags = [] }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
      <div className="px-6 py-6 sm:px-7 sm:py-7">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>

        <div className="mt-4 space-y-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-neutral-200 shadow dark:border-neutral-800"
            >
              <Image
                src={src}
                alt={title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description}
        </p>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <TagChip label={tag} />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 font-mono flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
            >
              <span className="font-sans">{link.label}</span>
              <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TagChip = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-900 ring-1 ring-inset ring-emerald-200 px-3 py-1 font-mono text-xs sm:text-sm leading-none dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-800">
      {label}
    </span>
  );
};

const ArrowUpRightIcon = (props) => (
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

export default Projects;
