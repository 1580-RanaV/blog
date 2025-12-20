"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ProfileViewsBadge from "./components/ProfileViewsBadge";

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
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-white font-regular">
        <span className="text-[0.875rem] underline underline-offset-4 font-normal">
          {title}
        </span>
        <span className="text-white/40 text-[0.875rem] font-normal">{isOpen ? "−" : "+"}</span>
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
    return <main className="min-h-screen bg-black" />;
  }

  const year = new Date().getFullYear();

  return (
    <main className="relative min-h-screen font-regular text-white bg-black">
      {/* Desktop Layout */}
      <div className="hidden md:block md:min-h-screen md:px-6 lg:px-8 xl:px-12 md:py-8 lg:py-12">
        <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-16 xl:gap-20 md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)]">
          {/* Left Top: Name and Title */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 md:flex md:flex-col">
            <div className="fade-seq" style={{ "--fade-delay": "0ms" }}>
              <h1 
                onClick={closeAllAccordions}
                className="text-[0.875rem] font-medium mb-1 leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
              >
                V Ranadheer
              </h1>
              <p 
                onClick={closeAllAccordions}
                className="text-[0.875rem] font-medium sub-heading leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
              >
                Product Designer
              </p>
            </div>
          </div>

          {/* Middle: Content */}
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 md:flex md:flex-col md:justify-start md:max-w-2xl">
            <div className="fade-seq space-y-4" style={{ "--fade-delay": "100ms" }}>
              <p className="text-[0.875rem] font-normal leading-[1.5]">
                A hands-on builder who designs with restraint and ships with intention. I build products, interfaces, and systems that sit between design and engineering. I like things that are minimal, intentional, and fast; whether it is a frontend flow or a visual identity. I treat code like a design tool; it shapes experience, not just function. I love designing and building what I create.
              </p>
              <p>
                Interested in basketball, apparel designing and music.
              </p>
              <div className="mt-4">
                <Image
                  src="/30-new.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <nav className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/vrana11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.875rem] font-normal underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/1580-RanaV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.875rem] font-normal underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/byvrana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.875rem] font-normal underline underline-offset-4"
                >
                  Instagram
                </a>
              </nav>
            </div>
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
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">India</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
        </div>
        {/* Bottom Right: Image */}
        <div className="md:absolute md:bottom-6 lg:bottom-8 xl:bottom-12 md:right-6 lg:right-8 xl:right-12 fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
          <Image
            src="/r.png"
            alt=""
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            unoptimized
          />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block md:hidden px-6 py-12 space-y-10">
        {/* Tablet: Name and Title */}
        <div className="fade-seq" style={{ "--fade-delay": "0ms" }}>
          <h1 
            onClick={closeAllAccordions}
            className="text-[0.875rem] font-normal mb-1 leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
          >
            V Ranadheer
          </h1>
          <p 
            onClick={closeAllAccordions}
            className="text-[0.875rem] font-normal text-white leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
          >
            Product Designer
          </p>
        </div>

        {/* Tablet: Content */}
        <div className="fade-seq space-y-4 max-w-2xl" style={{ "--fade-delay": "100ms" }}>
          <p className="text-[0.875rem] font-normal leading-[1.5]">
            A hands-on builder who designs with restraint and ships with intention. I build products, interfaces, and systems that sit between design and engineering. I like things that are minimal, intentional, and fast; whether it is a frontend flow or a visual identity. I treat code like a design tool; it shapes experience, not just function. I love designing and building what I create.
          </p>
          <p>
                Interested in basketball, apparel designing and music.
              </p>
          <div className="mt-4">
            <Image
              src="/30-new.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <nav className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/vrana11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/1580-RanaV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/byvrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              Instagram
            </a>
          </nav>
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
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">India</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
        </div>
        {/* Tablet: Bottom Right Image */}
        <div className="flex justify-end mt-10 fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
          <Image
            src="/r.png"
            alt=""
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            unoptimized
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden px-5 py-12 space-y-8">
        {/* Mobile: Name and Title */}
        <div className="fade-seq" style={{ "--fade-delay": "0ms" }}>
          <h1 
            onClick={closeAllAccordions}
            className="text-[0.875rem] font-normal mb-1 leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
          >
            V Ranadheer
          </h1>
          <p 
            onClick={closeAllAccordions}
            className="text-[0.875rem] font-normal text-white leading-[1.5] cursor-pointer hover:opacity-80 transition-opacity"
          >
            Product Designer
          </p>
        </div>

        {/* Mobile: Content */}
        <div className="fade-seq space-y-4" style={{ "--fade-delay": "100ms" }}>
          <p className="text-[0.875rem] font-normal leading-[1.5]">
            A hands-on builder who designs with restraint and ships with intention. I build products, interfaces, and systems that sit between design and engineering. I like things that are minimal, intentional, and fast; whether it is a frontend flow or a visual identity. I treat code like a design tool; it shapes experience, not just function. I love designing and building what I create.
          </p>
          <p>
                Interested in basketball, apparel designing and music.
              </p>
          <div className="mt-4">
            <Image
              src="/30-new.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <nav className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/vrana11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/1580-RanaV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/byvrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.875rem] font-normal underline underline-offset-4"
            >
              Instagram
            </a>
          </nav>
        </div>

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
            <p className="text-[0.875rem] font-normal text-white leading-[1.5]">India</p>
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.profileBadge}ms` }}>
            <ProfileViewsBadge />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <ClockBadge delayMs={entryDelays.clock} />
          </div>
          <div className="fade-seq" style={{ "--fade-delay": `${entryDelays.clock}ms` }}>
            <Image
              src="/r.png"
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </main>
  );
}
