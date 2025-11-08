"use client";

import React, { useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import ProfileIntro from "./components/ProfileIntro";

/* ---------- Lazy sections ---------- */
const Projects       = dynamic(() => import("./components/Projects"),       { loading: () => <SectionSkeleton title="Projects" /> });
const Unfinished     = dynamic(() => import("./components/Unfinished"),     { loading: () => <SectionSkeleton title="Unfinished Projects" /> });
const WorkExp        = dynamic(() => import("./components/WorkExp"),        { loading: () => <SectionSkeleton title="Work Experience" /> });
const Education      = dynamic(() => import("./components/Education"),      { loading: () => <SectionSkeleton title="Education / Academics" /> });
const Contact        = dynamic(() => import("./components/Contact"),        { loading: () => <SectionSkeleton title="Contact" /> });
const Certifications = dynamic(() => import("./components/Certifications"), { loading: () => <SectionSkeleton title="Certifications" /> });
const Thankyou       = dynamic(() => import("./components/Thankyou"),       { loading: () => null });

/* ---------- Small helper ---------- */
function SectionSkeleton({ title }) {
  return (
    <div className="border-l border-neutral-200 pl-6 font-regular">
      <p className="uppercase tracking-[0.14em] text-neutral-500">{title}</p>
      <div className="mt-3 h-24 w-full animate-pulse rounded bg-neutral-100" />
    </div>
  );
}

/* ---------- Toolbar: single toggle (Open all / Close all) ---------- */
function AccordionToggle({ allOpen, onToggleAll }) {
  const label = allOpen ? "close all" : "open all";
  return (
    <button
      type="button"
      onClick={onToggleAll}
      className="rounded-full border border-neutral-300 px-3 py-1.5 font-regular font-medium hover:border-neutral-900"
      aria-pressed={allOpen}
      aria-label={label}
      title={label}
    >
      {label}
    </button>
  );
}

/* ---------- Controlled, accessible accordion section ---------- */
function AccordionSection({ id, title, isOpen, setOpen, children }) {
  const onToggle = useCallback(
    (e) => {
      setOpen(id, e.currentTarget.open);
    },
    [id, setOpen]
  );

  return (
    <details
      className="group border-t border-neutral-200 first:border-t-0"
      open={isOpen}
      onToggle={onToggle}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 sm:py-5">
        <span className="font-regular font-semibold tracking-tight text-neutral-900">
          {title}
        </span>
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </summary>

      <div className="pb-8 sm:pb-10">
        <div className="border-l border-neutral-200 pl-6">
          {isOpen ? children : null}
        </div>
      </div>
    </details>
  );
}

export default function Page() {
  const sections = useMemo(
    () => [
      { id: "profile",        title: "Profile" },
      { id: "projects",       title: "Projects" },
      { id: "unfinished",     title: "Unfinished / old Projects" },
      { id: "certifications", title: "Certifications" },
      { id: "work",           title: "Work Experience" },
      { id: "education",      title: "Education / Academics" },
      { id: "contact",        title: "Contact" },
    ],
    []
  );

  const [openMap, setOpenMap] = useState(() => ({
    profile: true,
    projects: false,
    unfinished: false,
    certifications: false,
    work: false,
    education: false,
    contact: false,
  }));

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

  return (
    <main className="relative min-h-screen bg-white font-regular text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mb-4 flex items-center justify-end">
          <AccordionToggle allOpen={allOpen} onToggleAll={toggleAll} />
        </div>

        <div className="divide-y divide-neutral-200">
          <AccordionSection
            id="profile"
            title="Profile"
            isOpen={openMap.profile}
            setOpen={setOpen}
          >
            <ProfileIntro />
          </AccordionSection>

          <AccordionSection
            id="projects"
            title="Projects"
            isOpen={openMap.projects}
            setOpen={setOpen}
          >
            <Projects />
          </AccordionSection>

          {/* ✅ New Accordion section below Projects */}
          <AccordionSection
            id="unfinished"
            title="Unfinished / old Projects"
            isOpen={openMap.unfinished}
            setOpen={setOpen}
          >
            <Unfinished />
          </AccordionSection>

          <AccordionSection
            id="certifications"
            title="Certification(s)"
            isOpen={openMap.certifications}
            setOpen={setOpen}
          >
            <Certifications />
          </AccordionSection>

          <AccordionSection
            id="work"
            title="Work Experience"
            isOpen={openMap.work}
            setOpen={setOpen}
          >
            <WorkExp />
          </AccordionSection>

          <AccordionSection
            id="education"
            title="Education & participations"
            isOpen={openMap.education}
            setOpen={setOpen}
          >
            <Education />
          </AccordionSection>

          <AccordionSection
            id="contact"
            title="Contact"
            isOpen={openMap.contact}
            setOpen={setOpen}
          >
            <Contact />
          </AccordionSection>

          {/* Not an accordion; renders separately */}
          <Thankyou />
        </div>
      </div>
    </main>
  );
}
