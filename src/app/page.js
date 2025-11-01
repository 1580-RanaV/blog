"use client";

import React, { useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import ProfileIntro from "./components/ProfileIntro"; // merged header+intro
// Lazy sections
const Projects   = dynamic(() => import("./components/Projects"),   { loading: () => <SectionSkeleton title="Projects" /> });
const WorkExp    = dynamic(() => import("./components/WorkExp"),    { loading: () => <SectionSkeleton title="Work Experience" /> });
const Education  = dynamic(() => import("./components/Education"),  { loading: () => <SectionSkeleton title="Education / Academics" /> });
const Contact    = dynamic(() => import("./components/Contact"),    { loading: () => <SectionSkeleton title="Contact" /> });
const Thankyou   = dynamic(() => import("./components/Thankyou"),   { loading: () => null });

/* ---------- Small helper ---------- */
function SectionSkeleton({ title }) {
  return (
    <div className="border-l border-neutral-200 pl-6">
      <p className="text-[13px] uppercase tracking-[0.14em] text-neutral-500">{title}</p>
      <div className="mt-3 h-24 w-full animate-pulse rounded bg-neutral-100" />
    </div>
  );
}

/* ---------- Toolbar: Open all / Collapse all ---------- */
function AccordionToolbar({ allOpen, onOpenAll, onCloseAll }) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={onOpenAll}
        className="rounded-full border border-neutral-300 px-3 py-1.5 text-[13px] font-medium hover:border-neutral-900"
        aria-pressed={allOpen}
      >
        Open all
      </button>
      <button
        type="button"
        onClick={onCloseAll}
        className="rounded-full border border-neutral-300 px-3 py-1.5 text-[13px] font-medium hover:border-neutral-900"
        aria-pressed={!allOpen}
      >
        Collapse all
      </button>
    </div>
  );
}

/* ---------- Controlled, accessible accordion section ---------- */
function AccordionSection({ id, title, isOpen, setOpen, children }) {
  // Keep <details> semantics but control 'open'
  const onToggle = useCallback((e) => {
    // sync to the actual state after user clicks the summary
    setOpen(id, e.currentTarget.open);
  }, [id, setOpen]);

  return (
    <details className="group border-t border-neutral-200 first:border-t-0" open={isOpen} onToggle={onToggle}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 sm:py-5">
        <span className="text-[15px] sm:text-[16px] font-semibold tracking-tight text-neutral-900">
          {title}
        </span>
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </summary>

      <div className="pb-8 sm:pb-10">
        <div className="border-l border-neutral-200 pl-6">
          {/* Mount content only when open */}
          {isOpen ? children : null}
        </div>
      </div>
    </details>
  );
}

export default function Page() {
  // Define sections (order + ids)
  const sections = useMemo(() => ([
    { id: "profile",     title: "Profile" },
    { id: "projects",    title: "Projects" },
    { id: "work",        title: "Work Experience" },
    { id: "education",   title: "Education / Academics" },
    { id: "contact",     title: "Contact" },
    { id: "thankyou",    title: "Thank You" },
  ]), []);

  // Open state map — profile open by default; rest closed
  const [openMap, setOpenMap] = useState(() => ({
    profile: true,
    projects: false,
    work: false,
    education: false,
    contact: false,
    thankyou: false,
  }));

  const setOpen = useCallback((id, value) => {
    setOpenMap((prev) => ({ ...prev, [id]: value }));
  }, []);

  const openAll = useCallback(() => {
    setOpenMap(Object.fromEntries(sections.map(s => [s.id, true])));
  }, [sections]);

  const closeAll = useCallback(() => {
    setOpenMap(Object.fromEntries(sections.map(s => [s.id, false])));
  }, [sections]);

  const allOpen = useMemo(() => sections.every(s => openMap[s.id]), [sections, openMap]);

  return (
    <main className="relative min-h-screen bg-white font-sans text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Top row: page title (optional) + toolbar on the right */}
        <div className="mb-4 flex items-center justify-end">
          <AccordionToolbar allOpen={allOpen} onOpenAll={openAll} onCloseAll={closeAll} />
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
            title="Education / Academics"
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

            <Thankyou />
            
        </div>
      </div>
    </main>
  );
}
