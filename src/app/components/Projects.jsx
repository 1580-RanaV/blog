"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full font-regular text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-neutral-900">
        <p className="mt-2 font-semibold leading-tight tracking-tight text-neutral-900">
          Selected Work; some of my projects that are listed on my resume
          actively.
        </p>

        {/* Projects List */}
        <div className="mt-8 space-y-16 sm:space-y-20 text-neutral-900">

          <ProjectCard
            title={
              <>
                <span className="underline underline-offset-4">
                  (final year capstone project)
                </span>{" "}
                HelmetGuard: Real-Time Helmet Detection
              </>
            }
            images={[]}
            description="We developed a real-time helmet detection system using PyTorch and OpenCV to identify whether a rider is wearing a helmet. The model combines an EfficientNet-B4 backbone with attention mechanisms for higher accuracy and includes a custom dataset loader, logging pipeline, and real-time video inference. It draws live bounding boxes, predicts helmet status, and saves frame-wise results. This project was our final-year team effort focused on practical computer vision for road safety."
            tags={[
              "python",
              "OpenCV",
              "cnn",
              "yolo",
              "EfficientNet",
              "Computer Vision",
            ]}
            links={[]}
          />

          <ProjectCard
            title="RabbitHole"
            images={["/r1.png", "/r2.png", "/r3.png"]}
            description="Built RabbitHole — a fully client-side YouTube Watch History analyzer that processes Google Takeout JSON files locally (no servers, no APIs). It performs real ETL, maps user behavior, and visualizes binge patterns through metrics like Night Owl Score, Nostalgic Year, and Serial Binge Depth. Designed a playful, analytics-driven interface to turn raw data into self-awareness — blending design, code, and storytelling in one experience."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "ETL Pipelines",
              "IndexedDB",
              "Web Workers",
              "Data Visualization",
              "JSON Parsing",
              "Client-Side Analytics",
              "html2pdf Export",
            ]}
            links={[{ href: "https://myjobsy.vercel.app", label: "[yet to deploy]" }]}
          />

          <ProjectCard
            title="Jobsy: Application Tracker"
            images={["/jobsy-1.png", "/jobsy.png"]}
            description="I built Jobsy as a local-first job application tracker that runs fully in the browser. It automatically grabs job links, extracts key details, and organizes them with smart alerts for deadlines or inactive postings. The idea was to make job hunting feel calm and organized — a clean dark interface, quick reminders, and complete control over your own data without any servers involved. Not to mention, I use it myself."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "IndexedDB",
              "Headless UI",
              "Local Storage",
              "Automation",
              "Data Extraction",
              "CI/CD Pipelines",
              "Vercel Deploy",
            ]}
            links={[{ href: "https://myjobsy.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="BenchMarkIQ: AI Industry Benchmark Analyzer"
            images={["/bmiq.png"]}
            description="I created BenchMarkIQ to help teams understand where they stand in their industry. Users can upload CSV files with their KPIs, and the app automatically compares them against industry medians using AI-driven analysis. It highlights gaps, trends, and strengths through clean data visuals — turning plain spreadsheets into simple, actionable insights."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "PapaParse",
              "Chart.js",
              "CSV Handling",
              "Data Visualization",
              "AI Analysis",
              "GitHub",
              "Vercel Deploy",
            ]}
            links={[
              { href: "https://bench-mark-iq.vercel.app", label: "Visit" },
            ]}
          />

          <ProjectCard
            title="SGA v1.1: Skills Gap Analyzer"
            images={["/sga.png"]}
            description="I built SGA to make career growth more measurable. It compares your resume with job descriptions, scores how closely your skills match, and suggests what to learn next — even giving project ideas to strengthen your portfolio. It’s designed to feel like a personal coach that turns job goals into a clear action plan."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "React Hook Form",
              "Headless UI",
              "AI Scoring",
              "Figma",
              "Vercel Deploy",
              "GitHub",
            ]}
            links={[{ href: "https://sga-sage.vercel.app", label: "Visit" }]}
          />

          <ProjectCard
            title="Client Personal Portfolio"
            images={["/js.png"]}
            description="I designed and developed a personal portfolio site for a client — a clean, single-page layout with tight typography and smooth animations. It includes lazy-loaded sections, Supabase integration for dynamic content, and a full CI/CD pipeline for automatic updates. High customer satisfaction."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "Supabase",
              "Vercel Deploy",
              "CI/CD Pipelines",
              "Client Work",
            ]}
            links={[{ href: "https://jayasurya.site/", label: "Visit" }]}
          />

          <ProjectCard
            title="PureText"
            images={["/puretext.png"]}
            description="I built PureText to help writers, students, and creators rephrase content intelligently using an LLM. It generates clean, plagiarism-free text that stays human and natural — effective against tools like Turnitin and Grammarly. PureText gained attention on Product Hunt for its simplicity and real-world usefulness."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "LLM Integration",
              "Figma",
              "AI Writing Tools",
              "Product Hunt",
            ]}
            links={[
              {
                href: "https://puretextbydatco.vercel.app",
                label: "Visit",
              },
              {
                href: "https://www.producthunt.com/posts/puretext",
                label: "Product Hunt",
              },
            ]}
          />

          <ProjectCard
            title="SpeedCode"
            images={["/speedcode.png"]}
            description="I made SpeedCode to merge two skills that every developer needs — typing speed and algorithmic thinking. It lets you practice real coding challenges while typing at full flow, building accuracy, rhythm, and focus together. It’s designed to feel more like a game than a coding test."
            tags={[
              "next.js",
              "React",
              "Tailwind CSS",
              "Typing Engine",
              "Algorithms",
              "Figma",
              "GitHub",
              "CI/CD Pipelines",
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
    <article className="font-regular text-neutral-900">
      <header>
        <h3 className="font-semibold leading-snug text-neutral-900">{title}</h3>
      </header>

      {/* Images */}
      <div className="mt-5 space-y-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-neutral-200"
          >
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
      <p className="mt-4 leading-relaxed text-neutral-900">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2 text-neutral-900">
          {tags.map((tag, idx) => (
            <li key={idx}>
              <TagChip label={tag} />
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className="mt-5 flex flex-wrap gap-4 text-neutral-900">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-700"
          >
            {link.label}
            <ArrowUpRightIcon className="h-4 w-4 text-blue-600" />
          </a>
        ))}
      </div>
    </article>
  );
}

function TagChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 font-medium lowercase text-neutral-900 hover:text-neutral-900 hover:border-black transition-colors">
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


