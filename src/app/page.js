"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import ProfileViewsBadge from "./components/ProfileViewsBadge";
import Header from "./components/Header";
import BioContent from "./components/BioContent";
import LogoImage from "./components/LogoImage";
import { BIO } from "./constants";

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
    <p className="font-regular text-white/50 animate-pulse">
      One second....
    </p>
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
      className="group fade-seq"
      style={{ "--fade-delay": `${delayMs}ms` }}
      open={isOpen}
      onToggle={onToggle}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-white font-regular" aria-expanded={isOpen}>
        <span className="text-[0.875rem] underline underline-offset-4 font-normal">
          {title}
        </span>
        <span className="text-white/40 text-[0.875rem] font-normal" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </summary>

      <div className="pb-6 pt-2">
        <div className="space-y-4 text-white">
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
      <span className="text-[0.875rem] font-normal text-white whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function Page() {
  const sections = useMemo(
    () => [
      { id: "articles",       title: "Articles" },
      { id: "git",            title: "Github contribution chart" },
      { id: "projects",       title: "Projects" },
      { id: "unfinished",     title: "Unfinished / Old Projects" },
      { id: "certifications", title: "Certification(s)" },
      { id: "work",           title: "Work Experience" },
      { id: "education",      title: "Education & participations" },
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
    const timer = setTimeout(() => setContentReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const entryDelays = useMemo(
    () => ({
      articles: 120,
      git: 240,
      projects: 360,
      unfinished: 480,
      certifications: 600,
      work: 720,
      education: 840,
      profileBadge: 100,
      clock: 200,
    }),
    []
  );

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
    return <main className="min-h-screen bg-black" aria-label="Loading" />;
  }

  return (
    <main className="relative min-h-screen font-regular text-white bg-black" role="main">
      {/* Desktop Layout */}
      <div className="hidden md:block md:min-h-screen md:px-6 lg:px-8 xl:px-12 md:py-8 lg:py-12">
        <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-16 xl:gap-20 md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)]">
          {/* Left Top: Name and Title */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 md:flex md:flex-col">
            <Header onNameClick={closeAllAccordions} delayMs={0} />
          </div>

          {/* Middle: Content */}
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 md:flex md:flex-col md:justify-start md:max-w-2xl">
            <BioContent delayMs={100} />
          </div>

          {/* Right: Accordions - Scrollable */}
          <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 md:space-y-0 md:overflow-y-auto md:max-h-full md:pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {sections.map((section, idx) => (
              <AccordionSection
                key={section.id}
                id={section.id}
                title={section.title}
                isOpen={openMap[section.id]}
                setOpen={setOpen}
                delayMs={entryDelays[section.id]}
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
          </div>
        </div>

        {/* Bottom Left: Location, Views Badge, and Time */}
        <div className="md:absolute md:bottom-6 lg:bottom-8 xl:bottom-12 md:left-6 lg:left-8 xl:left-12 md:flex md:flex-col md:gap-1">
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">{BIO.location}</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
        </div>
        {/* Bottom Right: Image */}
        <LogoImage 
          delayMs={entryDelays.clock} 
          className="md:absolute md:bottom-6 lg:bottom-8 xl:bottom-12 md:right-6 lg:right-8 xl:right-12" 
        />
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block md:hidden px-6 py-12 space-y-10">
        {/* Tablet: Name and Title */}
        <Header onNameClick={closeAllAccordions} delayMs={0} variant="tablet" />

        {/* Tablet: Content */}
        <div className="max-w-2xl">
          <BioContent delayMs={100} />
        </div>

        {/* Tablet: Accordions */}
        <div className="space-y-0">
          {sections.map((section) => (
            <AccordionSection
              key={section.id}
              id={section.id}
              title={section.title}
              isOpen={openMap[section.id]}
              setOpen={setOpen}
              delayMs={entryDelays[section.id]}
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
        </div>

        {/* Tablet: Bottom elements */}
        <div className="flex flex-col gap-1 mt-10">
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">{BIO.location}</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
        </div>
        {/* Tablet: Bottom Right Image */}
        <LogoImage 
          delayMs={entryDelays.clock} 
          className="flex justify-end mt-10" 
        />
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden px-5 py-12 space-y-8">
        {/* Mobile: Name and Title */}
        <Header onNameClick={closeAllAccordions} delayMs={0} variant="mobile" />

        {/* Mobile: Content */}
        <BioContent delayMs={100} />

        {/* Mobile: Accordions */}
        <div className="space-y-0">
          {sections.map((section) => (
            <AccordionSection
              key={section.id}
              id={section.id}
              title={section.title}
              isOpen={openMap[section.id]}
              setOpen={setOpen}
              delayMs={entryDelays[section.id]}
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
        </div>

        {/* Mobile: Bottom elements */}
        <div className="flex flex-col gap-1 mt-8">
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">{BIO.location}</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
          <LogoImage delayMs={entryDelays.clock} />
        </div>
      </div>
    </main>
  );
}
