"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import ProfileIntro from "./components/ProfileIntro";
import ProfileViewsBadge from "./components/ProfileViewsBadge";
import ScrollToTop from "./components/ScrollToTop";

/* ---------- Lazy sections ---------- */
const Projects       = dynamic(() => import("./components/Projects"),       { loading: () => <TextLoading /> });
const Unfinished     = dynamic(() => import("./components/Unfinished"),     { loading: () => <TextLoading /> });
const WorkExp        = dynamic(() => import("./components/WorkExp"),        { loading: () => <TextLoading /> });
const Education      = dynamic(() => import("./components/Education"),      { loading: () => <TextLoading /> });
const Certifications = dynamic(() => import("./components/Certifications"), { loading: () => <TextLoading /> });
const Articles       = dynamic(() => import("./components/Articles"),       { loading: () => <TextLoading /> });
const Git            = dynamic(() => import("./components/Git"),            { loading: () => <TextLoading /> });
const Thankyou       = dynamic(() => import("./components/Thankyou"),       { loading: () => null });

/* ---------- Small helper ---------- */
function SectionSkeleton({ title }) {
  return (
    <div className="border-l border-neutral-200 pl-6 font-regular">
      <p className="uppercase text-neutral-900">{title}</p>
      <div className="mt-3 h-24 w-full animate-pulse rounded bg-neutral-100" />
    </div>
  );
}

function TextLoading() {
  return (
    <p className="font-regular text-neutral-500 animate-pulse">
      One second....
    </p>
  );
}

/* ---------- Toolbar: single toggle (Open all / Close all) ---------- */
function AccordionToggle({ allOpen, onToggleAll }) {
  const label = allOpen ? "close all" : "open all";
  return (
    <button
      type="button"
      onClick={onToggleAll}
      className="text-neutral-300 underline underline-offset-4 hover:text-white"
      aria-pressed={allOpen}
      aria-label={label}
      title={label}
    >
      {label}
    </button>
  );
}

/* ---------- Controlled, accessible accordion section ---------- */
function AccordionSection({ id, title, isOpen, setOpen, children, delayMs = 0 }) {
  const onToggle = useCallback(
    (e) => {
      setOpen(id, e.currentTarget.open);
    },
    [id, setOpen]
  );

  return (
    <details
      className="group fade-seq py-1.5 sm:py-2.5"
      style={{ "--fade-delay": `${delayMs}ms` }}
      open={isOpen}
      onToggle={onToggle}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1.5 sm:py-2.5 text-neutral-50 font-semibold tracking-tight">
        <span className="font-regular text-[0.8rem]">
          {title}
        </span>
        <span className="text-neutral-500 text-xs">{isOpen ? "−" : "+"}</span>
      </summary>

      <div className="pb-8 sm:pb-10">
        <div className="pl-1 sm:pl-2 space-y-3 text-neutral-200 leading-relaxed">
          {isOpen ? children : null}
        </div>
      </div>
    </details>
  );
}

function ClockBadge({ delayMs = 0 }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const label = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div
      className="fade-seq"
      style={{ "--fade-delay": `${delayMs}ms` }}
    >
      <span className="font-regular text-xs tracking-tight text-neutral-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function Page() {
  const sections = useMemo(
    () => [
      { id: "profile",        title: "Profile" },
      { id: "projects",       title: "Projects" },
      { id: "unfinished",     title: "Unfinished / Old Projects" },
      { id: "certifications", title: "Certifications" },
      { id: "work",           title: "Work Experience" },
      { id: "education",      title: "Education / Academics" },
      { id: "articles",       title: "Articles" },
      { id: "git",            title: "Git"},
    ],
    []
  );

  const [contentReady, setContentReady] = useState(false);
  const [openMap, setOpenMap] = useState(() => ({
    profile: false,
    projects: false,
    unfinished: false,
    certifications: false,
    work: false,
    education: false,
    articles: false,
    git: false,
  }));

  useEffect(() => {
    const timer = setTimeout(() => setContentReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const entryDelays = useMemo(
    () => ({
      profile: 0,
      articles: 120,
      git: 240,
      projects: 360,
      unfinished: 480,
      certifications: 600,
      work: 720,
      education: 840,
      footer: 960,
      profileBadge: 1100,
      clock: 1200,
    }),
    []
  );

  const setOpen = useCallback((id, value) => {
    setOpenMap((prev) => ({ ...prev, [id]: value }));
  }, []);

  const allOpen = useMemo(
    () => sections.every((s) => openMap[s.id]),
    [sections, openMap]
  );

  const toggleAll = useCallback(() => {
    const next = !allOpen;
    setOpenMap(Object.fromEntries(sections.map((s) => [s.id, next])));
  }, [allOpen, sections]);

  if (!contentReady) {
    return <main className="min-h-screen bg-neutral-950" />;
  }

  return (
    <main className="relative min-h-screen bg-neutral-950 font-regular text-neutral-100">
      <div
        className="absolute left-0 top-0 fade-seq"
        style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}
      >
        <ProfileViewsBadge />
      </div>
      <div className="absolute right-0 top-0">
        <ClockBadge delayMs={entryDelays.clock} />
      </div>
      <ScrollToTop />
      <div className="mx-auto max-w-4xl px-5 sm:px-7 lg:px-10 py-16 sm:py-20 lg:py-24 space-y-6">
        <div className="flex items-center justify-end text-sm text-neutral-400">
          <AccordionToggle allOpen={allOpen} onToggleAll={toggleAll} />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <AccordionSection
            id="profile"
            title="Profile"
            isOpen={openMap.profile}
            setOpen={setOpen}
            delayMs={entryDelays.profile}
          >
            <ProfileIntro />
          </AccordionSection>

          <AccordionSection
            id="articles"
            title="Articles"
            isOpen={openMap.articles}
            setOpen={setOpen}
            delayMs={entryDelays.articles}
          >
            <Articles />
          </AccordionSection>

          <AccordionSection
            id="git"
            title="Github contribution chart"
            isOpen={openMap.git}
            setOpen={setOpen}
            delayMs={entryDelays.git}
          >
            <Git />
          </AccordionSection>

          <AccordionSection
            id="projects"
            title="Projects"
            isOpen={openMap.projects}
            setOpen={setOpen}
            delayMs={entryDelays.projects}
          >
            <Projects />
          </AccordionSection>

          {/* ✅ New Accordion section below Projects */}
          <AccordionSection
            id="unfinished"
            title="Unfinished / old Projects"
            isOpen={openMap.unfinished}
            setOpen={setOpen}
            delayMs={entryDelays.unfinished}
          >
            <Unfinished />
          </AccordionSection>

          <AccordionSection
            id="certifications"
            title="Certification(s)"
            isOpen={openMap.certifications}
            setOpen={setOpen}
            delayMs={entryDelays.certifications}
          >
            <Certifications />
          </AccordionSection>

          <AccordionSection
            id="work"
            title="Work Experience"
            isOpen={openMap.work}
            setOpen={setOpen}
            delayMs={entryDelays.work}
          >
            <WorkExp />
          </AccordionSection>

          <AccordionSection
            id="education"
            title="Education & participations"
            isOpen={openMap.education}
            setOpen={setOpen}
            delayMs={entryDelays.education}
          >
            <Education />
          </AccordionSection>

          {/* Not an accordion; renders separately */}
          <Thankyou delayMs={entryDelays.footer} />
        </div>
      </div>
    </main>
  );
}
