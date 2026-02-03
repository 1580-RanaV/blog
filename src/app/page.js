"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ProfileViewsBadge from "./components/ProfileViewsBadge";
import { BIO, SOCIAL_LINKS } from "./constants";

/* ---------- Lazy sections ---------- */
const Projects       = dynamic(() => import("./components/Projects"),       { loading: () => <TextLoading /> });
const Unfinished     = dynamic(() => import("./components/Unfinished"),     { loading: () => <TextLoading /> });
const WorkExp        = dynamic(() => import("./components/WorkExp"),        { loading: () => <TextLoading /> });
const Education      = dynamic(() => import("./components/Education"),      { loading: () => <TextLoading /> });
const Certifications = dynamic(() => import("./components/Certifications"), { loading: () => <TextLoading /> });
const Articles       = dynamic(() => import("./components/Articles"),       { loading: () => <TextLoading /> });
const Git            = dynamic(() => import("./components/Git"),            { loading: () => <TextLoading /> });

function TextLoading() {
  return (
    <p className="text-black/40 animate-pulse py-4">
      Loading...
    </p>
  );
}

/* ---------- Social Icons ---------- */
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

/* ---------- Accordion Section ---------- */
function AccordionSection({ id, title, isOpen, setOpen, children, delayMs = 0 }) {
  const onToggle = useCallback(
    (e) => {
      setOpen(id, e.currentTarget.open);
    },
    [id, setOpen]
  );

  return (
    <details
      className="group fade-seq border-b border-black/10 last:border-0"
      style={{ "--fade-delay": `${delayMs}ms` }}
      open={isOpen}
      onToggle={onToggle}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 select-none">
        <span className="text-[0.9375rem] font-medium text-black">
          {title}
        </span>
        <span className="text-black/40 text-sm transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="accordion-content pb-6">
        {isOpen && (
          <div className="space-y-4">
            {children}
          </div>
        )}
      </div>
    </details>
  );
}

export default function Page() {
  const sections = useMemo(
    () => [
    { id: "projects",       title: "Things I’ve Built" },
    { id: "articles",       title: "Tech Writing" },
    { id: "work",           title: "Where I’ve Worked" },
    { id: "education",      title: "Education & Extras" },
    { id: "certifications", title: "Certifications" },
    { id: "unfinished",     title: "Old & Unfinished Projects" },
    { id: "git",            title: "GitHub" }
    ],
    []
  );

  const [contentReady, setContentReady] = useState(false);
  const [openMap, setOpenMap] = useState(() => ({
    articles: false,
    git: false,
    projects: false,
    unfinished: false,
    certifications: false,
    work: false,
    education: false,
  }));

  useEffect(() => {
    const timer = setTimeout(() => setContentReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const setOpen = useCallback((id, value) => {
    setOpenMap((prev) => ({ ...prev, [id]: value }));
  }, []);

  const closeAllAccordions = useCallback(() => {
    setOpenMap({
      articles: false,
      git: false,
      projects: false,
      unfinished: false,
      certifications: false,
      work: false,
      education: false,
    });
  }, []);

  if (!contentReady) {
    return <main className="min-h-screen bg-white" aria-label="Loading" />;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[520px] mx-auto px-6 py-16 sm:py-24 md:py-32">
        
        {/* Header - Name */}
        <header className="text-center mb-16 sm:mb-20 fade-seq" style={{ "--fade-delay": "0ms" }}>
          <h1 
            onClick={closeAllAccordions}
            className="text-[0.9375rem] font-medium text-black tracking-tight cursor-pointer hover:opacity-60 transition-opacity"
          >
            {BIO.name}
          </h1>
        </header>

        {/* Hero Tagline */}
        <section className="text-center mb-16 sm:mb-20">
          <p 
            className="text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.5] text-black fade-seq"
            style={{ "--fade-delay": "100ms" }}
          >
            I work between design and engineering, building products and interfaces that are simple, intentional, and <em>fast</em>.
          </p>
        </section>

        {/* Accordion Sections */}
        <section className="mb-16 sm:mb-20">
          {sections.map((section, idx) => (
            <AccordionSection
              key={section.id}
              id={section.id}
              title={section.title}
              isOpen={openMap[section.id]}
              setOpen={setOpen}
              delayMs={300 + idx * 50}
            >
              {section.id === "articles" && <Articles />}
              {section.id === "git" && <Git />}
              {section.id === "projects" && <Projects />}
              {section.id === "unfinished" && <Unfinished />}
              {section.id === "certifications" && <Certifications />}
              {section.id === "work" && <WorkExp />}
              {section.id === "education" && <Education />}
            </AccordionSection>
          ))}
        </section>

        {/* Footer - Social Links */}
        <footer 
          className="flex flex-col items-center gap-4 fade-seq"
          style={{ "--fade-delay": "650ms" }}
        >
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-black transition-colors p-2"
                aria-label={link.label}
              >
                {link.label === "LinkedIn" && <LinkedInIcon />}
                {link.label === "GitHub" && <GitHubIcon />}
                {link.label === "Instagram" && <InstagramIcon />}
              </a>
            ))}
          </div>
          <ProfileViewsBadge />
          <div className="mt-8">
            <Image
              src="/r-logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="opacity-100"
            />
          </div>
        </footer>

      </div>
    </main>
  );
}
