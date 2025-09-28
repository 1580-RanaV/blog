"use client";

import React from "react";

const SelfIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />

          <div className="p-6 sm:p-8">
            <p className="text-base text-center sm:text-lg text-neutral-800 dark:text-neutral-200 font-mono">
              Hi! I'm <span className="font-mono">V. Ranadheer</span>, a CS graduate student passionate about the intersection of <span className="font-medium">design</span> and <span className="font-medium">development</span>. Every line of code I write and every pixel I design reflects my commitment to creative problem‑solving. I'm on a journey to discover what it truly means to be a developer — crafting innovative solutions one step at a time, while continuously striving to think and solve problems at a higher level.
            </p>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
      </div>
    </section>
  );
};

export default SelfIntro;