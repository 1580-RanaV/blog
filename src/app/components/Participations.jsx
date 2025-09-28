"use client";

import React from "react";
import Image from "next/image";

const Participations = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Participations
        </h2>

        <div className="mt-8 space-y-8">
          {/* Providence Ideathon */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <a
                  href="https://github.com/YourGitHubUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Providence Ideathon"
                  title="Providence Ideathon"
                  className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:translate-y-[-1px] hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
                >
                  <Image
                    src="/providence.svg"
                    alt="Providence"
                    width={22}
                    height={22}
                    className="opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </a>

                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Providence Ideathon 2024
                  </h3>
                </div>
              </div>

              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Took on a health-focused problem statement at Unstop and advanced to
                the second round — one step away from the finals.
              </p>
            </div>
          </div>

          {/* Catalog Hackathon */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <a
                  href="https://github.com/YourGitHubUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Catalog Hackathon"
                  title="Catalog Hackathon"
                  className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:translate-y-[-1px] hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
                >
                  <Image
                    src="/catalog.jpg"
                    alt="Catalog"
                    width={24}
                    height={24}
                    className="opacity-90 transition-opacity group-hover:opacity-100 object-contain"
                  />
                </a>

                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Catalog Hackathon
                  </h3>
                </div>
              </div>

              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Reached the final round of a competitive Catalog hackathon, ranking
                among the top participants in a hiring process that tested prompt
                engineering and problem-solving. Problem statement based on an MIT
                paper on cryptography.
              </p>
            </div>
          </div>

          {/* IIM Rohtak Logo Competition */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <a
                  href="https://github.com/YourGitHubUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IIM Rohtak"
                  title="IIM Rohtak"
                  className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:translate-y-[-1px] hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
                >
                  <Image
                    src="/iim.jpeg"
                    alt="IIM Rohtak"
                    width={22}
                    height={22}
                    className="opacity-90 transition-opacity group-hover:opacity-100 object-contain"
                  />
                </a>

                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    IIM Rohtak Logo Competition
                  </h3>
                </div>
              </div>

              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Consolation in IIM Rohtak logo design competition at Unstop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participations;
