"use client";

import React from "react";
import Image from "next/image";

const Clubs = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section heading (matches Projects/WorkExp) */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          University club activities
        </h2>

        <div className="mt-8 space-y-8">
          {/* GDSC Card */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                {/* Icon button styled like ProfileHeader socials */}
                <a
                  href="https://github.com/YourGitHubUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GDSC"
                  title="GDSC"
                  className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:translate-y-[-1px] hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
                >
                  <Image
                    src="/google.svg"
                    alt="GDSC"
                    width={20}
                    height={20}
                    className="opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </a>

                <div className="min-w-0">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Lead Graphic Designer
                  </h3>
                  <p className="mt-1 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                    Google Developer Student Clubs (GDSC)
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Led a team for graphic work across university events and beyond.
                Created visuals for Google Club events for almost a year with
                1,000+ participants — delivering designs that made an impact.
                Worked with Figma and Adobe Photoshop CS6.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
