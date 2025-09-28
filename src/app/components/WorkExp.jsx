"use client";

import React from "react";

const WorkExp = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Work experience
        </h2>

        <div className="mt-8 space-y-8">
          {/* Fluentgrid */}
          <WorkCard
            company="Fluentgrid Limited"
            duration="(for a month)"
            role="Full Stack Intern"
            description="Brushed up some SQL, Python and had a smell of Java. Built a full stack banking app that uses CRUD operations, MySQL and Postman for API testing. Got a peek at the company’s software development methodologies — turns out there’s a lot more than just code and coffee."
            tags={["SQL", "Python", "Java", "Spring Boot", "MySQL", "Postman", "Full Stack development", "Software development methodologies"]}
          />

          {/* Thrusoft */}
          <WorkCard
            company="Thrusoft Solutions"
            duration="(remote)"
            role="Machine Learning Intern"
            description="Built an ANPR system using Python and OpenCV after diving into machine learning basics and algorithms, boosting number plate recognition accuracy to 80–85% and ideated storage-efficient solutions. It was a group project."
            tags={["Python", "OpenCV", "Machine Learning basics", "ANPR"]}
          />
        </div>
      </div>
    </section>
  );
};

const WorkCard = ({ company, duration, role, description, tags = [] }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
      <div className="px-6 py-6 sm:px-7 sm:py-7">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {company}
          </h3>
          <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            {duration}
          </span>
        </div>
        <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
          {role}
        </p>
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

export default WorkExp;
