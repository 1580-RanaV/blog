"use client";

import React from "react";

export default function WorkExp() {
  return (
    <section className="w-full font-regular text-white space-y-6">
      <div className="space-y-5 sm:space-y-6">
        <WorkItem
          company="Fluentgrid Limited"
          duration="1 month"
          role="Full-Stack Intern"
          description="Brushed up SQL and Python, touched Java. Built a full-stack banking demo with CRUD, MySQL, and Postman tests. Learned delivery hygiene beyond code."
          tags={[
            "sql",
            "python",
            "java",
            "spring boot",
            "mysql",
            "postman",
            "full-stack",
          ]}
        />

        <WorkItem
          company="Thrusoft Solutions"
          duration="Remote"
          role="Machine Learning Intern"
          description="Implemented ANPR pipeline with Python and OpenCV after covering ML basics. Reached ~80-85% plate recognition and proposed storage-aware logging."
          tags={["python", "opencv", "machine learning", "anpr"]}
        />
      </div>
    </section>
  );
}

function WorkItem({ company, duration, role, description, tags = [] }) {
  return (
    <article className="space-y-3">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-sm font-semibold leading-snug">{company}</h3>
        {duration && <span className="text-white/60 text-sm">{duration}</span>}
      </header>

      <p className="text-white/75">{role}</p>

      <p className="text-white/80 leading-relaxed">{description}</p>

      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li key={i}>
              <span className="tag-chip text-xs capitalize">{t}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
