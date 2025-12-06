"use client";

import React from "react";

export default function Thankyou({ delayMs = 0 }) {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="w-full font-regular text-white fade-seq"
      style={{ "--fade-delay": `${delayMs}ms` }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10 space-y-6">
        {/* Closing note */}
        <p className="leading-relaxed text-white/80">
          Thanks for reading. This space collects my work, ideas, and a bit of myself.
          Always in progress, always becoming.
        </p>

        {/* Meta + actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/70">
            All rights reserved (c) {year} | vrana.website
          </p>

          {/* Footer navigation */}
          <nav aria-label="Footer navigation" className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vrana11/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/1580-RanaV"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/byvrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white"
            >
              Instagram
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
}
