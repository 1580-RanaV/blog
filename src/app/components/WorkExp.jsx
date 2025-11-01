"use client";

import React from "react";

export default function WorkExp() {
  return (
    <div className="w-full font-regular">
      {/* Section Header (micro-label + title for consistency) */}
      <h2 className="text-[13px] font-regular font-semibold uppercase tracking-[0.14em] text-neutral-500">
        Work Experience
      </h2>

      <p className="mt-2 text-[26px] sm:text-[30px] font-regular font-semibold leading-tight tracking-tight text-neutral-900">
        Roles & Internships
      </p>

      <div className="mt-8 space-y-12 sm:space-y-14 font-regular">
        <WorkItem
          company="Fluentgrid Limited"
          duration="(for a month)"
          role="Full-Stack Intern"
          description="Brushed up SQL and Python, touched Java. Built a full-stack banking demo with CRUD, MySQL, and Postman for API tests. Got a peek at delivery practices—turns out there’s a lot more than just code and coffee."
          tags={[
            "SQL",
            "Python",
            "Java",
            "Spring Boot",
            "MySQL",
            "Postman",
            "Full-stack",
            "SDLC",
          ]}
        />

        <WorkItem
          company="Thrusoft Solutions"
          duration="(remote)"
          role="Machine Learning Intern"
          description="Implemented an ANPR pipeline with Python + OpenCV after covering ML basics. Reached ~80–85% plate recognition and proposed storage-efficient logging. Collaborative group project."
          tags={["Python", "OpenCV", "Machine Learning", "ANPR"]}
        />
      </div>
    </div>
  );
}

function WorkItem({ company, duration, role, description, tags = [] }) {
  return (
    <article className="font-regular">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-regular">
        <h3 className="text-[20px] sm:text-[22px] font-regular font-semibold leading-snug text-neutral-900">
          {company}
        </h3>
        {duration && (
          <span className="text-[13px] font-regular text-neutral-600">
            {duration}
          </span>
        )}
      </header>

      <p className="mt-1 text-[15px] sm:text-[16px] text-neutral-800 font-regular">
        {role}
      </p>

      <p className="mt-4 text-[14px] leading-relaxed text-neutral-700 font-regular">
        {description}
      </p>

      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2 font-regular">
          {tags.map((t, i) => (
            <li key={i}>
              <TagChip label={t} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function TagChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-[11px] font-regular font-medium uppercase tracking-[0.12em] text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-colors">
      {label}
    </span>
  );
}
