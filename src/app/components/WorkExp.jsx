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
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                  Fluentgrid Limited
                </h3>
                <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  (for a month)
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                Full Stack Intern
              </p>
              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Brushed up some SQL, Python and had a smell of Java. Built a full
                stack banking app that uses CRUD operations, MySQL and Postman for
                API testing. Got a peek at the company’s software development
                methodologies — turns out there’s a lot more than just code and
                coffee.
              </p>
            </div>
          </div>

          {/* Thrusoft */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                  Thrusoft Solutions
                </h3>
                <span className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  (remote)
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                Machine Learning Intern
              </p>
              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Built an ANPR system using Python and OpenCV after diving into
                machine learning basics and algorithms, boosting number plate
                recognition accuracy to 80–85% and ideated storage-efficient
                solutions. It was a group project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
