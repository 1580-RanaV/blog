"use client";

import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Education
        </h2>

        <div className="mt-8 space-y-8">
          {/* GITAM */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
                  <Image
                    src="/gitam.jpeg"
                    alt="GITAM University"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Gandhi Institute of Technology and Management (GITAM) University
                  </h3>
                </div>
              </div>

              <p className="mt-2 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                Bachelor of Technology, Computer Science and Engineering (Class of 2025)
              </p>
              <p className="mt-3 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                <strong className="font-sans">CGPA: 8.42</strong>
              </p>
            </div>
          </div>

          {/* Sri Chaitanya */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
                  <Image
                    src="/sri.jpg"
                    alt="Sri Chaitanya"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Sri Chaitanya Jr. College (Intermediate)
                  </h3>
                </div>
              </div>

              <p className="mt-2 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                MPC (Math, Physics, Chemistry), 2021
              </p>
              <p className="mt-3 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                <strong className="font-sans">Percentage: 92.7%</strong>
              </p>
            </div>
          </div>

          {/* DPS */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
                  <Image
                    src="/dps.png"
                    alt="Delhi Public School"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Delhi Public School (Xth)
                  </h3>
                </div>
              </div>

              <p className="mt-2 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                Secondary Education, 2019
              </p>
              <p className="mt-3 font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                <strong className="font-sans">Percentage: 86.66%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
